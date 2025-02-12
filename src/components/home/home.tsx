

type UserProps = {
  name: string;
  email: string;
  age: number;
};

function UserCard(props: UserProps) {
  return (
    <div className="bg-slate-500 p-2">
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <UserCard name="amir" email="amir@gmail.com" age={23} />
    </div>
  );
}
