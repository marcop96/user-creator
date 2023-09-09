import AddUser from "./components/AddUser";
import { useState } from "react";
import Card from "./components/Card";
interface User {
  name: string;
  age: number | string;
}
export default function App() {
  const [userList, setUserList] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  function errorHandler(message: string) {
    setError(message);
  }
  function createUser(name, age) {
    setUserList([...userList, { name, age }]);
  }

  return (
    <div className="flex flex-col justify-center">
      <header className="w-1/2 self-center">
        <h2 className="text-white text-2xl font-bold underline underline-offset-4 place-self-center">
          User generator
        </h2>
      </header>

      <main className="w-1/2 self-center">
        <div className="">
          <AddUser
            onError={errorHandler}
            onSavedUser={(name: string, age: number) => createUser(name, age)}
          />
          <Card userList={userList} />
        </div>
      </main>
      <p>{error}</p>
    </div>
  );
}
