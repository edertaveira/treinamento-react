import { useEffect, useState } from "react";
import { FaRegCheckSquare, FaRegSquare } from "react-icons/fa";
import { useParams } from "react-router-dom";


const Tasks = () => {

  const params = useParams();
  const [list, setList] = useState([]);
  const [listFilter, setListFilter] = useState([]);
  const [isOnlyPending, setIsOnlyPending] = useState(false);
  const [isEditing, setIsEditing] = useState("");

  useEffect(() => {
    console.log(params);
  }, [params])

  function onSubmit(e) {
    e.preventDefault();
    const task = {
      id: new Date(),
      name: e.target.task.value,
      status: "pendente",
    };
    setList([...list, task]);
    setListFilter([...list, task]);
    document.getElementById("task").value = "";
  }

  function toggle(item) {
    const statusToUpdate = item.status === "pendente" ? "feito" : "pendente";
    const newList = list.map((t) => {
      if (t.id === item.id) t.status = statusToUpdate;
      return t;
    });
    setList(newList);
  }

  function filter() {
    const listToFilter = listFilter.filter((item) => {
      return !isOnlyPending ? item.status === "pendente" : true;
    });
    setList(listToFilter);
    setIsOnlyPending(!isOnlyPending);
  }

  function save(newName, item) {
    const newList = list.map((t) => {
      if (t.id === item.id) t.name = newName;
      return t;
    });
    setList(newList);
    setIsEditing("");
  }

  function onKeyDown(e, item) {
    if (e.charCode === 13 || e.keyCode === 13) save(e.target.value, item);
  }

  function onBlur(e, item) {
    save(e.target.value, item);
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input name="task" id="task" />
        <button type="submit">Adicionar</button>
      </form>

      <div>
        <a href="#" onClick={filter}>
          {isOnlyPending ? "Todos" : "Pendentes"}
        </a>
      </div>

      <ul>
        {list.map((item, index) => {
          return (
            <li style={item.status === "feito" ? { textDecoration: "line-through" } : {}} key={index}>
              <span>
                {isEditing === item.id ? (
                  <input defaultValue={item.name} onBlur={(e) => onBlur(e, item)} onKeyDown={(e) => onKeyDown(e, item)} />
                ) : (
                  <b onClick={() => setIsEditing(item.id)}>{item.name}</b>
                )}
              </span>
              <button onClick={() => toggle(item)}>{item.status === "feito" ? <FaRegCheckSquare /> : <FaRegSquare />}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
