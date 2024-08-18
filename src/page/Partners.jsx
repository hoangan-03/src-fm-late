/* eslint-disable react/prop-types */
import AccountCircle from "@mui/icons-material/AccountCircle";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import ReactQuill from "react-quill";
import Footer from "../components/Footer";
import a1 from "../assets/pic/1.jpg";
import spon1 from "../assets/pic/sponsor1.png";
// import spon3 from "../assets/pic/spon3.jpg";
// import spon4 from "../assets/pic/spon4.jpg";
// import spon5 from "../assets/pic/spon5.jpg";
// import spon6 from "../assets/pic/spon6.jpg";
// import spon7 from "../assets/pic/spon7.jpg";
// import spon8 from "../assets/pic/spon8.jpg";
// import spon9 from "../assets/pic/spon9.jpg";
// import spon10 from "../assets/pic/spon10.jpg";
// import spon11 from "../assets/pic/spon11.jpg";
// import spon12 from "../assets/pic/spon12.jpg";
// import spon13 from "../assets/pic/spon13.jpg";
const Partners = () => {
  const CustomInputField = ({ label, startIcon, uniqueId, fontSizee = "19px" }) => (
    <div className="w-1/2 h-auto flex items-end">
      <FormControl variant="standard">
        <InputLabel
          htmlFor={`input-with-icon-adornment-${uniqueId}`}
          style={{
            color: "black",
            fontSize: {fontSizee},
            fontWeight: "600",
            transform: "translateY(-15px)",
          }}
        >
          {label}
        </InputLabel>
        <Input
          style={{ color: "black", fontWeight: "600" }}
          id={`input-with-icon-adornment-${uniqueId}`}
          startAdornment={
            <InputAdornment position="start">{startIcon}</InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
  return (
    <section className="w-screen h-auto overflow-hidden ">
      <section
        id="partners"
        className="w-screen h-screen p-8 lg:p-[200px] justify-center items-center  flex flex-col gap-10"
      >
        <div className="w-[70%] lg:w-full h-auto flex flex-row gap-10 justify-center items-center">
          <img
            className="w-auto  object-cover hover:scale-150 transition-all duration-300"
            src={spon1}
            alt=""
          ></img>
          {/* <img
            className="w-auto h-[80px] object-cover hover:scale-150 transition-all duration-300"
            src={spon5}
            alt=""
          ></img>
          <img
            className="w-auto h-[80px] object-cover hover:scale-150 transition-all duration-300"
            src={spon3}
            alt=""
          ></img>
          <img
            className="w-auto h-[80px] object-cover hover:scale-150 transition-all duration-300"
            src={spon4}
            alt=""
          ></img> */}
        </div>
        {/* <div className="w-full h-auto flex flex-row gap-10 mt-[100px] justify-center items-center">
          <img
            className="w-auto h-[80px] object-cover hover:scale-150 transition-all duration-300"
            src={spon6}
            alt=""
          ></img>
          <img
            className="w-auto h-[80px] object-cover hover:scale-150 transition-all duration-300"
            src={spon7}
            alt=""
          ></img>
          <img
            className="w-auto h-[80px] object-cover hover:scale-150 transition-all duration-300"
            src={spon8}
            alt=""
          ></img>
          <img
            className="w-auto h-[80px] object-cover hover:scale-150 transition-all duration-300"
            src={spon9}
            alt=""
          ></img>
        </div>
        <div className="w-full h-auto flex flex-row gap-10 mt-[100px] justify-center items-center">
          <img
            className="w-auto h-[80px] object-cover hover:scale-150 transition-all duration-300"
            src={spon10}
            alt=""
          ></img>
          <img
            className="w-auto h-[80px] object-cover hover:scale-150 transition-all duration-300"
            src={spon11}
            alt=""
          ></img>
          <img
            className="w-auto h-[80px] object-cover hover:scale-150 transition-all duration-300"
            src={spon12}
            alt=""
          ></img>
          <img
            className="w-auto h-[80px] object-cover hover:scale-150 transition-all duration-300"
            src={spon13}
            alt=""
          ></img>
        </div> */}
      </section>
      <section
        id="coop"
        className="w-screen flex px-4 pt-2 lg:px-[100px] lg:pt-[120px] flex-row h-screen  bg-blue-200"
      >
        <div className="w-[40%] h-full lg:flex flex-col  hidden pt-[80px] gap-8  ">
          <div className="w-full h-[300px] ">
            <img src={a1} className="w-full h-full object-cover" alt=""></img>
          </div>
          {/* <div className="w-full h-auto pr-[20px]">
            <h4 className="text-base text-black airbnb">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.{" "}
            </h4>
          </div> */}
        </div>
        <div className="w-full lg:w-[60%] h-full flex  p-8 gap-10 flex-col bg-white  mr-0 lg:mr-[100px]">
          <div className="h-auto w-full ">
            <h2 className="text-4xl text-black airbnb">
              Liên hệ với chúng tôi
            </h2>
          </div>
          <div className="w-full h-auto flex flex-row gap-2">
            <CustomInputField
              label="Tên của bạn"
              startIcon={<AccountCircle />}
              uniqueId="nameField"
            />
            <CustomInputField
              label="Tổ chức của bạn"
              startIcon={<CorporateFareIcon />}
              uniqueId="organizationField"
            />
          </div>
          <div className="w-full h-auto flex flex-row gap-2">
            <CustomInputField
              label="Email"
              startIcon={<EmailIcon />}
              uniqueId="emailField"
            />
            <CustomInputField
              label="Số điện thoại"
              startIcon={<ContactPhoneIcon />}
              uniqueId="phoneField"
            />
          </div>

          <ReactQuill
            theme="snow"
            placeholder="Viết góp ý của bạn ở đây. Ý kiến của bạn sẽ giúp chúng tôi phát triển."
            modules={{
              toolbar: false, 
              "emoji-toolbar": false,
              "emoji-textarea": false,
              "emoji-shortname": true,
            }}
          />
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Partners;
