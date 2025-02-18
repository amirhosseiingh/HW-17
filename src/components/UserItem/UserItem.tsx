type User = {
    id: number;
    name: string;
    email: string;
    address: { city: string };
  };
  type Props = {
    user: User;
  };
  
  export default function UserItem({ user }: Props) {

    return (

      <li className="bg-gray-100 p-3 my-2 rounded-md shadow-md">
        <p className="text-lg font-semibold">{user.name}</p>
        <p className="text-sm text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-500">{user.address.city}</p>
      </li>
      
    );
  }
  