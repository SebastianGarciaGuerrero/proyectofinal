import { useAuth } from "../context/AuthContext";

export const ProfilePage = () => {
  const { user } = useAuth();
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
