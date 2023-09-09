import AddUser from "./components/AddUser";
import { useState } from "react";
import Card from "./components/Card";
interface User {
  name: string;
  age: number | string;
}
export default function App() {
  const [userList, setUserList] = useState<User[]>([]);
  function createUser(name, age) {
    setUserList([...userList, { name, age }]);
  }

  console.log(userList);
  return (
    <div className="flex flex-col justify-center">
      <header className="w-1/2 self-center">
        <h2 className="text-white text-2xl font-bold underline underline-offset-4">
          User generator
        </h2>
      </header>

      <main className="w-1/2 self-center">
        <div className="">
          <AddUser
            onSavedUser={(name: string, age: number) => createUser(name, age)}
          />
          <Card userList={userList} />
        </div>
      </main>
    </div>
  );
}
