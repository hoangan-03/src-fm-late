const FacebookEmbedded = () => {
    return (
        <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCLBNCKHKhoaY&tabs=&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
            width={340}
            height={70}
            style={{ border: 'none', overflow: 'hidden', borderRadius: '15px' }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
    );
};

export default FacebookEmbedded;