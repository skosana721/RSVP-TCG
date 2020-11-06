import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import RegisterForm from "./RegisterForm"

const FormModal = (props) => {
  const {  className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Interested
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Registration Form
        </ModalHeader>
        <ModalBody>
          <RegisterForm/>
        </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default FormModal;
