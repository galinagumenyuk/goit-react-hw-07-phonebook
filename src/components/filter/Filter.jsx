import React from "react";
import { FilterTitle } from "./Filter.styled";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/actions";


const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(actions.filterContact(e.target.value));
  }

  return (
    <div>
      <FilterTitle>Find contacts by name</FilterTitle>
      <input type="text" value={value} onChange={onChange}></input>
    </div>
  );
};

export default Filter;

