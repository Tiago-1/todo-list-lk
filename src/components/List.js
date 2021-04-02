import Item from "./Item";
const List = (props) => {
  const clearList = () => {
    props.changeData([]);
  };
  const removeOne = (name) => {
    const newData = props.data.filter((item) => item !== name);
    props.changeData(newData);
  };
  const edit = (idtask, newValue) => {
    if(props.data.find(t => t === newValue)){
        alert("Ya tienes una tarea con este nombre")
      }else{
        const newData = props.data.map((item, i) => {
            if (item === idtask) {
              return (props.data[i] = newValue);
            } else {
              return props.data[i];
            }
          });
          props.changeData(newData);
      }
  };
  return (
    <div className="my-4">
      <ul className="p-0">
        {props.data.length === 0 ? (
          <li className="List bg-light p-1">
            <ion-icon name="trash-bin-outline"></ion-icon>{" "}
            <small className="ml-2"> No hay elementos que mostrar</small>
          </li>
        ) : (
          props.data.map((item) => (
            <Item key={item} item={item} removeOne={removeOne} edit={edit} />
          ))
        )}
      </ul>
      <button className="btn btn-outline-dark" onClick={clearList}>
        <b>Clear</b>
      </button>
    </div>
  );
};

export default List;
