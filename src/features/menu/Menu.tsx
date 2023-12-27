import { LoaderFunction, useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";
import { Pizza } from "../../utils/types";

const Menu = () => {
  const menu = useLoaderData() as Pizza[];
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader: LoaderFunction = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
