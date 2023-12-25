import { useAppSelector } from "../../hooks";

const Username = () => {
  const username = useAppSelector((state) => state.user.username);
  if (!username) return null;
  return <p className="hidden text-sm font-semibold md:block">{username}</p>;
};

export default Username;
