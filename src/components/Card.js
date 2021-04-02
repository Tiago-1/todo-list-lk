import "../assets/css/component.css";
import { useState } from "react";
import List from "./List";

const Card = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
      if(data.find(t => t === state)){
        alert("Ya tienes una tarea con este nombre")
      }else{
        if(state ===''){
          alert("Entrada vacia, necesitas la menos un caracter")
        }else{
          setData([...data, state]);
          setState("");
        }
        
      }
    event.preventDefault();
  };

  const updateList = (list) =>{
    setData(list);
  }

  return (
    <div className="Card card card-body m-5 p-4 shadow">
      <h2>To Do List</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
              <div className="col-sm-9">
              <input
              className="form-control"
              type="text"
              name="task"
              value={state}
              placeholder="Escribe una tarea"
              onChange={handleChange}
            />
              </div>
          <div className="col-sm-3 p-0 m-0">
          <input className="btn btn-primary" type="submit" value="Agregar" />
          </div>
          </div>           
        </form>
      <List data={data} changeData={updateList}/>
      <small className="text-muted">by <b>Jose Alberto Santiago Rios</b></small>
    </div>
  );
};

export default Card;
