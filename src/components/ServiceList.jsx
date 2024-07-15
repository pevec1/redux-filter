import { useSelector, useDispatch } from "react-redux";
import { removeService, editService } from "../actions/actionCreators";
export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleEdit = (id, name, price) => {
    console.log(id, name, price);
    dispatch(editService(name, price));

  };
  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id, o.name, o.price)}>edit</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}
