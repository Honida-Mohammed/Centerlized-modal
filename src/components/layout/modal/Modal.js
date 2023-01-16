

//  dynamic component

import React, { Fragment } from "react";
 
import CloseSVG from "../../../assests/close.svg";
import "./modal.css";
//=================================================================================
const Modal = ({ children, isOpen, closeModalHandler, modalChildPosition }) => {
  return (
    <Fragment>
      <div
        onClick={closeModalHandler}
        className={`modal-backDrop ${isOpen ? "modal-show" : "modal-hide"}`}
      ></div>
      <div
        className={`modal-container ${isOpen ? "modal-show" : "modal-hide"} `}
      >
        <div className="modal-close">
          <img
            src={CloseSVG}
            className="modal-close-img"
            alt="close-modal"
            onClick={closeModalHandler}
          />
        </div>
        <div className={`modal-content ${modalChildPosition}`}>{children}</div>
      </div>
    </Fragment>
  );
};

export default Modal;


// tradetional logic

// import { useSelector, useDispatch } from 'react-redux'; 
// import { closeModal } from '../../../store/modalSlice';

// import Login from '../../forms/Login';
// import Register from "../../forms/Register";
// import LoginRegister from "../../forms/LoginRegister";

// import CloseSVG from "../../../assests/close.svg";
// import "./modal.css";

// const Modal = () => {
//   const dispatch = useDispatch();
//   const { isOpen, componentName } = useSelector((state) => state.modal);

//   const closeModalHandler = () => dispatch(closeModal())
  

//   const componentHandler = () => {
//     if (componentName === "login") {
//       return <Login />;
//     } else if (componentName === "register") {
//       return <Register />;
//     } else if (componentName === "loginRegister") {
//       return <LoginRegister />;
//     }
//   }


//   return (
//     <Fragment>
//       <div
//         onClick={closeModalHandler}
//         className={`modal-backDrop ${isOpen ? "modal-show" : "modal-hide"}`}
//       ></div>
//       <div
//         className={`modal-container ${isOpen ? "modal-show" : "modal-hide"} `}
//       >
//         <div className="modal-close">
//           <img
//             src={CloseSVG}
//             className="modal-close-img"
//             alt="close-modal"
//             onClick={closeModalHandler}
//           />
//         </div>
//         <div className="modal-content">{componentHandler()}</div>
//       </div>
//     </Fragment>
//   );
// };

// export default Modal;