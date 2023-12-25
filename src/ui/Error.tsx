import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
import { getErrorMessage } from "../utils/helpers";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{getErrorMessage(error)}</p>
      <LinkButton onClick={() => navigate(-1)}>&larr; Go back</LinkButton>
    </div>
  );
};

export default Error;
