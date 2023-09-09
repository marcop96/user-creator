import Button from "./button";
import { useState } from "react";

export default function AddUser(props) {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | string>(0);
  const [error, setError] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(props);

    let errorMessage = "";

    if (name.trim().length === 0 && +age <= 0) {
      errorMessage = "Name must not be empty, and Age must be greater than 0";
    } else if (name.trim().length === 0) {
      errorMessage = "Name must not be empty";
    } else if (+age <= 0) {
      errorMessage = "Age must be greater than 0";
    }

    if (errorMessage) {
      setError(errorMessage);
      return;
    } else {
      props.onSavedUser(name, age);
    }

    setName("");
    setAge("");
    setError("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          First name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          id="last_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
        />
        <label className="mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Age
        </label>
        <input
          onChange={(e) => setAge(e.target.value)}
          type="text"
          value={age}
          id="last_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="27"
          required
        />
        <Button buttonType="submit" buttonText={"Add User"} />
      </form>
    </div>
  );
}
