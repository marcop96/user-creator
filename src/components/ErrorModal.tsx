import ErrorCard from "./ErrorCard";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import { useState } from "react";
function ErrorModal(props) {
  console.log(props);
  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  if (!modalVisible) {
    return null; // Change this to return null instead of rendering the modal
  }

  if (modalVisible) {
    return (
      <div>
        <div className={classes.backdrop} />
        <ErrorCard className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.error}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={closeModal}>Okay</Button>
          </footer>
        </ErrorCard>
      </div>
    );
  }
}
export default ErrorModal;
