export default function Card(props) {
  console.log(props.userList);
  return (
    <div>
      {props.userList.map((user, index) => (
        <div className="alert alert-success" key={index}>
          <span>
            {user.name} - {user.age}
          </span>
        </div>
      ))}
    </div>
  );
}
