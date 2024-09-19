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
// import a1 from "../assets/pic/1.jpg";
import spon1 from "../assets/pic/sponsor1.png";
import emailjs from 'emailjs-com';
import { useState } from "react";
import contactus from "../assets/pic/contactus.jpg";
const Partners = () => {
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const from_name = `${fullName}-${organization}-${email}-${phone}`;
    const emailContent = `
      ${message.replace(/<\/?[^>]+(>|$)/g, "")}
    `;
    const formData = {
      from_name: from_name,
      to_name: 'SRC-FM',
      message: emailContent,
    };
    emailjs.send('service_d1ls3nh', 'template_a9nn92l', formData, 'wQanaDDWtJ8ZtCqLU')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Gửi email thành công!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Gửi email thất bại. Vui lòng thử lại sau.');
      });
  };
  return (
    <section className="w-screen h-auto overflow-hidden ">
      <section
        id="partners"
        className="w-screen h-screen p-8 lg:p-[200px] justify-center items-center  flex flex-col gap-10"
      >
        <div className="w-[70%] lg:w-full h-auto flex flex-row gap-10 justify-center items-center">
          <img
            className="w-auto 
             object-cover hover:scale-150 transition-all duration-300"
            src={spon1}
            alt=""
          ></img>
        </div>
      </section>
      <section
        id="coop"
        className="w-screen flex px-4 pt-2 lg:px-[100px] lg:pt-[120px] flex-row h-auto  bg-blue-200"
      >
        <div className="w-[40%] h-full lg:flex flex-col  hidden pt-[80px] gap-8  ">
          <div className="w-full h-[300px] ">
            <img src={contactus} className="w-full h-full object-cover" alt="contactus"></img>
          </div>
        </div>
        <div className="w-full lg:w-[60%] h-full flex  p-8 gap-10 flex-col bg-white  mr-0 lg:mr-[100px]">
          <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-10">
            <div className="h-auto w-full ">
              <h2 className="text-4xl text-black airbnb">
                Liên hệ với chúng tôi
              </h2>
            </div>
            <div className="w-full h-auto flex flex-row gap-2">
              <div className="w-1/2 h-auto flex items-end">
                <FormControl variant="standard">
                  <InputLabel
                    htmlFor="nameField"
                    style={{
                      color: "black",
                      fontSize: "19px",
                      fontWeight: "600",
                      transform: "translateY(-15px)",
                    }}
                  >
                    Tên của bạn
                  </InputLabel>
                  <Input
                    style={{ color: "black", fontWeight: "600" }}
                    id="nameField"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start"><AccountCircle /></InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div className="w-1/2 h-auto flex items-end">
                <FormControl variant="standard">
                  <InputLabel
                    htmlFor="organizationField"
                    style={{
                      color: "black",
                      fontSize: "19px",
                      fontWeight: "600",
                      transform: "translateY(-15px)",
                    }}
                  >
                    Tổ chức của bạn
                  </InputLabel>
                  <Input
                    style={{ color: "black", fontWeight: "600" }}
                    id="organizationField"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start"><CorporateFareIcon /></InputAdornment>
                    }
                  />
                </FormControl>
              </div>
            </div>
            <div className="w-full h-auto flex flex-row gap-2">
              <div className="w-1/2 h-auto flex items-end">
                <FormControl variant="standard">
                  <InputLabel
                    htmlFor="emailField"
                    style={{
                      color: "black",
                      fontSize: "19px",
                      fontWeight: "600",
                      transform: "translateY(-15px)",
                    }}
                  >
                    Email
                  </InputLabel>
                  <Input
                    style={{ color: "black", fontWeight: "600" }}
                    id="emailField"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start"><EmailIcon /></InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div className="w-1/2 h-auto flex items-end">
                <FormControl variant="standard">
                  <InputLabel
                    htmlFor="phoneField"
                    style={{
                      color: "black",
                      fontSize: "19px",
                      fontWeight: "600",
                      transform: "translateY(-15px)",
                    }}
                  >
                    Số điện thoại
                  </InputLabel>
                  <Input
                    style={{ color: "black", fontWeight: "600" }}
                    id="phoneField"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start"><ContactPhoneIcon /></InputAdornment>
                    }
                  />
                </FormControl>
              </div>
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
              value={message}
              onChange={setMessage}
            />
            <button type="submit" className="bg-sky-700 hover:bg-sky-600 font-bold text-xl text-white py-3 rounded-3xl">
              Gửi email cho chúng tôi
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Partners;