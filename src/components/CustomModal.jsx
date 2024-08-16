import PropTypes from "prop-types"; // Import PropTypes
import tick from "../assets/pic/accept.png";
import info from "../assets/pic/info.png";
import close from "../assets/pic/close.png";
import Modal from "@mui/material/Modal";

const CustomModal = ({ open, isSuccess, action, onClose, errorMes }) => {
  return (
    <div className="z-[1900001]">
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={`absolute border-b-[8px] ${
            isSuccess ? "border-b-green-500" : "border-b-amber-600"
          }  left-1/2 gap-1 top-1/2 flex z-[1900001] h-[100px] w-[620px] -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center rounded-2xl bg-white`}
        >
          <div
            className={`flex flex-row gap-4 h-full w-full justify-between px-4`}
          >
            <div className="flex flex-row gap-4 h-full w-full">
              <div
                className={`h-[45px] w-[45px] p-1 self-center rounded-xl flex justify-center items-center ${
                  isSuccess ? "bg-green-500/20" : "bg-amber-600/20"
                } `}
              >
                <img
                  className="w-[30px] h-[30px]"
                  alt=""
                  src={isSuccess ? tick : info}
                ></img>
              </div>
              <div className="w-auto h-[70px] self-center flex flex-col text-start justify-center items-start">
                <h2
                  className={`  w-auto text-start items-start text-2xl  font-bold text-black`}
                >
                  {action} {isSuccess ? `thành công` : `thất bại`}
                </h2>
                <h1
                  className={`w-auto text-start items-start text-base font-semibold text-gray-700`}
                >
                  {isSuccess ? "" : errorMes}
                </h1>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-[40px] h-[40px] flex self-center rounded-full justify-center items-center p-3 hover:bg-gray-200/30"
            >
              <img
                alt=""
                className="w-full h-full object-cover"
                src={close}
              ></img>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  action: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  errorMes: PropTypes.string,
};

export default CustomModal;
