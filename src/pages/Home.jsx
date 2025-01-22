import { Button } from "@/components/ui/button";
import { database, DATABASE_ID, getUniqueID, USERS_COLLECTION_ID } from "@/Db";
import { userServices } from "@/services/userServices";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    userServices.getAll().then((res) => setUsers(res.documents));
    console.log(users);
  }, []);
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.$id}>{user.userName}</li>
        ))}
      </ul>
      <Button>Create Random users</Button>
    </>
  );
}
