import { User } from "../types/User";
export default function Card(props: { userList: User[] }) {
  return (
    <div>
      {props.userList.map((user, index) => (
        <div className="block alert alert-success mt-2 w-full" key={index}>
          <span className="block text-end ">
            Name: {user.name} | Age: {parseInt(user.age)}
          </span>
        </div>
      ))}
    </div>
  );
}
