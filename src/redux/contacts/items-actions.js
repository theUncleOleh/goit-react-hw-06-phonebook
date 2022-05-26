import { createAction } from '@reduxjs/toolkit';

export const add = createAction('item/add');
export const remove = createAction('item/delete');
export const filter = createAction('item/filter');
