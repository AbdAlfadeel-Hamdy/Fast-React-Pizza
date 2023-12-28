import { ActionFunction, useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = () => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const action: ActionFunction = async ({ params }) => {
  const data = { priority: true };
  const id = params.orderId;
  if (id) await updateOrder(id, data);
  return null;
};

export default UpdateOrder;
