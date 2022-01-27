import React from "react";
import { FilterTitle } from "./Filter.styled";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/actions";


const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <input type="text" value={value} onChange={(e)=> dispatch(actions.filterContact(e.target.value))}></input>
    </div>
  );
};

export default Filter;

