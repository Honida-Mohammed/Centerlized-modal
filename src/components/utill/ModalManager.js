import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/modalSlice";

import Login from "../forms/Login";
import Register from "../forms/Register";
import LoginRegister from "../forms/LoginRegister";
import Modal from "../layout/modal/Modal";




const ModalManager = () => {
    const dispatch = useDispatch();
    const { isOpen, componentName, modalChildPosition, childrenProps } =
      useSelector((state) => state.modal);

    const closeModalHandler = () => dispatch(closeModal());

    const componentLookUp = {
      Login,
      Register,
      LoginRegister,
    };
    let RenderComponent;
    if (componentName) {
      const SelectedComponent = componentLookUp[componentName];
      if (SelectedComponent) {
        RenderComponent = <SelectedComponent {...childrenProps} />;
      }
    }

  return (
    <Modal
      isOpen={isOpen}
      closeModalHandler={closeModalHandler}
      modalChildPosition={modalChildPosition}
    >
      {RenderComponent}
    </Modal>
  );
}

export default ModalManager
