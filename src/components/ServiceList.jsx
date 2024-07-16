import { useSelector, useDispatch } from "react-redux";
import { removeService, editService } from "../actions/actionCreators";
export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const value = useSelector((state2) => state2.serviceAdd);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleEdit = (id, name, price) => {
    console.log(id, name, price);
    dispatch(editService(name, price));

  };

const edit = items.filter((service) => service.name.includes(value.name)); 

  return (
    <ul>
      {(edit !== undefined)? edit.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id, o.name, o.price)}>
            edit
          </button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      )): items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id, o.name, o.price)}>
            edit
          </button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}
