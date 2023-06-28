import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  filters } from 'redux/contactsFilter';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(filters(e.currentTarget.value));
  };
  return <input value={filter} onChange={changeFilter}></input>;
};
