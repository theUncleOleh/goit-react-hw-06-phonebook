import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterItem } from '../../redux/contacts/itemSlice';

export default function Filter() {
  const value = useSelector(state => state.contacts.value);
  console.log(value);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(filterItem(e.target.value));
    console.log(e.currentTarget.value);
  };
  return (
    <label className={s.label}>
      Filter
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={s.input}
      />
    </label>
  );
}
