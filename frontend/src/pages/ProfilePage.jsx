import { useAuth } from "../context/AuthContext"

export const ProfilePage = () => {

  const {user} = useAuth()
  return (
    <div>
      {JSON.stringify(user, null, 2)}
    </div>
  )
}
