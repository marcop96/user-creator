import AddUser from "./components/AddUser";
import { useState } from "react";
import Card from "./components/Card";
import { User } from "./types/User";
import ErrorModal from "./components/ErrorModal";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const [userList, setUserList] = useState<User[]>([]);
  const [error, setError] = useState<string>("");

  function errorHandler(message: string) {
    setError(message);
    if (message) {
      setModalVisible(true);
    }
  }
  function createUser(name: string, age: number) {
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
          {!error ? (
            <>
              <Card userList={userList} />
            </>
          ) : (
            <ErrorModal error={error} />
          )}
        </div>
      </main>
    </div>
  );
}
