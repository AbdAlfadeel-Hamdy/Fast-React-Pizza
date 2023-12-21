import { LoaderFunction, useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';
import { getMenu } from '../../services/apiRestaurant';
import { Pizza } from '../../utils/types';

const Menu = () => {
  const menu = useLoaderData() as Pizza[];
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export const loader: LoaderFunction = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
