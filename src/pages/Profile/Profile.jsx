import { useAuth } from 'Hooks/useAuth';

export const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      Profile
      <p>name</p>
      <p>{user.name}</p>
      <p>email</p>
      <p>{user.email}</p>
    </div>
  );
};
