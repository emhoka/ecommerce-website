import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const AddTocartPopup = ({ setShowModal, cartPopUpMsg }) => {
  const navigate = useNavigate();
  const continueShopping = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-8 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg animate__animated animate__rotateInDownLeft">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 text-3xl font-extrabold"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <p className="text-md  text-green-500">{cartPopUpMsg}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-5 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-full bg-orange-300 px-3 py-2 text-md font-semibold text-gray-700 hover:text-white shadow-sm hover:bg-gray-800 sm:ml-3 sm:w-auto"
              >
                View Cart
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-full bg-gray-200 px-3 py-2 text-md font-semibold text-gray-700 shadow-sm  hover:bg-gray-300 sm:mt-0 sm:w-auto"
                onClick={() => continueShopping()}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTocartPopup;
