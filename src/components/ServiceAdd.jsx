import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changeServiceField, addService } from "../actions/actionCreators";
export default function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const [edit, setEdit] = useState();
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
 
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addService(item.name, item.price));
    
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <button type="submit">Save</button>
    </form>
  );
}
