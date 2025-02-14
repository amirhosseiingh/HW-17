import { useMemo } from "react";
import UserItem from "../UserItem/UserItem";

type User = {
  id: number;
  name: string;
  email: string;
  address: { city: string };
};

type Props = {
  users: User[];
  searchTerm: string;
};

export default function UserList({ users, searchTerm }: Props) {
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  return (
    <ul className="mt-4">
      {filteredUsers.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}
