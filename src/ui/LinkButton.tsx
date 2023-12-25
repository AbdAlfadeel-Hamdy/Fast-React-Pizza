import { Link } from "react-router-dom";

type LinkButtonProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
};

const LinkButton = ({ children, to, onClick }: LinkButtonProps) => {
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (to)
    return (
      <Link to="/menu" className={className}>
        {children}
      </Link>
    );

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default LinkButton;
