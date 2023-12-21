import { useNavigate, useRouteError } from 'react-router-dom';
import { getErrorMessage } from '../utils/helpers';

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{getErrorMessage(error)}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default Error;
