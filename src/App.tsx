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
    <div className="">
      <div className="flex justify-center">
        <h2 className="text-white text-2xl font-bold underline underline-offset-4">
          User generator
        </h2>
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-1 w-2/4 mx-auto content-center">
        <div>
          <AddUser
            onSavedUser={(name: string, age: number) => createUser(name, age)}
          />
        </div>
      </div>
      <Card userList={userList} />
    </div>
  );
}
