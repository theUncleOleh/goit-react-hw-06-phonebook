import { createAction } from '@reduxjs/toolkit';

export const addItem = createAction('item/add');
export const deleteItem = createAction('item/delete');
export const filterItem = createAction('item/filter');
