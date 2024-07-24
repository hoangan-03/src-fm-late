const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const MAX_SIZE = 250000;

export async function resizeImage(img, type = 'jpeg') {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  ctx.drawImage(img, 0, 0);

  let width = img.width;
  let height = img.height;
  let start = 0;
  let end = 1;
  let last, accepted, blob;

  if (width > height) {
    if (width > MAX_WIDTH) {
      height *= MAX_WIDTH / width;
      width = MAX_WIDTH;
    }
  } else {
    if (height > MAX_HEIGHT) {
      width *= MAX_HEIGHT / height;
      height = MAX_HEIGHT;
    }
  }
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);

  accepted = blob = await new Promise(rs => canvas.toBlob(rs, 'image/' + type, 1));

  if (blob.size < MAX_SIZE)
    return blob;
  let condition = true;
  while (condition) {
    const mid = Math.round(((start + end) / 2) * 100) / 100;
    if (mid === last) break;
    last = mid;
    blob = await new Promise(rs => canvas.toBlob(rs, 'image/' + type, mid));
    if (blob.size > MAX_SIZE) { end = mid; }
    if (blob.size < MAX_SIZE) { start = mid; accepted = blob; }
  }
  return accepted;
}