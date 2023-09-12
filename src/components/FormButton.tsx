function FormButton(props: {
  buttonText: string;
  buttonType: "submit" | "reset" | "button" | undefined;
}) {
  return (
    <button
      type={props.buttonType}
      className="mt-4 text-green-400 hover:text-white border border-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-300 dark:text-green-300 dark:hover:text-white dark:hover:bg-green-400 dark:focus:ring-green-900 w-1/2 self-end"
    >
      {props.buttonText}
    </button>
  );
}

export default FormButton;
