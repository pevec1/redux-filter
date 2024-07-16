import { useSelector, useDispatch } from "react-redux";
import { changeServiceField, addService, change } from "../actions/actionCreators";
import { useState } from "react";
export default function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const [edit, setEdit] = useState("");
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log(evt.target.value)
    setEdit(evt.target.value)
    dispatch(change(edit))
    dispatch(changeServiceField(name, value));
 
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addService(item.name, item.price));
    
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={String(item.name)} />
      <input name="price" onChange={handleChange} value={String(item.price)} />
      <button type="submit">Save</button>
    </form>
  );
}
