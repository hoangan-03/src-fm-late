import FacebookEmbedded from "./FacebookEmbedded";
const Footer = () => {
  return (
    <div className=" w-screen h-[40vh] flex flex-col bg-gray-900">
      <div className=" w-screen h-[90%] flex flex-row gap-[30px] lg:gap-8 py-[20px] pl-3 md:px-[50px] lg:px-[200px]  ">
        <div className="w-1/2 h-full flex text-white flex-col gap-3">
          <h2 className="text-xl airbnb mb-2 ">Liên hệ</h2>
          <h2 className="text-base airbnb ">Ms. Lê Hoàng Thiên Ân </h2>
          <h2 className="text-base airbnb ">Chủ nhiệm</h2>
          <h2 className="text-base airbnb ">
            <span className="underline">Email:</span> lhtan.y19@ump.edu.vn
          </h2>
          <h2 className="text-base airbnb ">
            <span className="underline">Phone:</span> 076 398 7099
          </h2>
        </div>
        <div className="w-1/2 h-full flex text-white flex-col gap-2">
          <h2 className="text-xl airbnb mb-2 ">Kết nối </h2>
          <h2 className="text-white text-lg airbnb-thin">Facebook</h2>
          <FacebookEmbedded />
          <h2 className="text-white text-lg airbnb-thin">Email: <span className="underline cursor-pointer text-lg ">src.fmed.ump@gmail.com</span></h2>
        </div>
      </div>
      <div className="w-full h-auto  flex">
        <h3 className="text-white text-sm w-full text-center">
          Copyright © 2024 SRC-FM. All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
