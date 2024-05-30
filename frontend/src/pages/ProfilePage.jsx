import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
