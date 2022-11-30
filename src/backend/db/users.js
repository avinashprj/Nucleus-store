import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'avinash',
    lastName: 'prajapati',
    email: 'test@gmail.com',
    password: 'test',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: '7b95a593-95d7-4920-bb0f-a28837beef01',
    firstName: 'admin',
    lastName: 'admin',
    email: 'admin@gmail.com',
    password: 'admin',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
