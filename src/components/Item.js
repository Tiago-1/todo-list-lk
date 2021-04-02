import { useState } from "react";

const List = (props) => {
  const [state, setState] = useState(false);
  const [task, setTask] = useState(props.item);
  const onEdit = () => {
    setState(!state);
  };
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = (event) => {
    if(task=== ""){
      alert("Entrada vacia, necesitas al menos un caracter")
    }else{
      props.edit(props.item, task);
      setState(false);
    }
    event.preventDefault();
  };
  const remove = () => {
    props.removeOne(props.item);
  };
  return (
    <li key={props.item} className="List bg-light rounded ">
      {!state ? (
        <label className="d-flex bd-highlight align-items-center">
          <ion-icon name="pricetag"></ion-icon>
          <span className="ml-2 flex-grow-1 bd-highlight">{props.item}</span>
          <button className="btn btn-info btn-sm ml-1" onClick={onEdit}>
            <ion-icon name="create-outline"></ion-icon>
          </button>
          <button className="btn btn-danger btn-sm ml-1" onClick={remove}>
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        </label>
      ) : (
        <label className="d-flex bd-highlight align-items-center">
          <input
            className="ml-2 flex-grow-1 bd-highlight"
            onChange={handleChange}
            value={task}
          />
          <button className="btn btn-info btn-sm ml-1" onClick={handleSubmit}>
            Guardar
          </button>
        </label>
      )}
    </li>
  );
};

export default List;
