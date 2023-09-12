import ErrorCard from "./ErrorCard";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
function ErrorModal(props) {
  const closeModal = () => {
    props.setModalVisible(false);
  };

  if (!props.modalVisible) {
    return null; // Change this to return null instead of rendering the modal
  }
  if (props.modalVisible) {
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
