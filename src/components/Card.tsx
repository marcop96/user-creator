export default function Card(props) {
  return (
    <div>
      {props.userList.map((user, index) => (
        <div className="block alert alert-success mt-2 w-full" key={index}>
          <span className="block text-end ">
            {user.name} - {user.age}
          </span>
        </div>
      ))}
    </div>
  );
}
