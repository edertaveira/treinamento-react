import React, { useEffect, useState } from "react";
import { PageHeader } from "antd";
import axios from "axios";

const TaskLists = () => {
  const [list, setList] = useState([]);

  async function getLists() {
    const res = await axios.get("http://localhost:3004/lists");
    setList(res.data);
  }

  useEffect(() => {
    getLists();
  }, [])


  return (
    <>
      <PageHeader  title="Listas" subTitle="Minhas Lista de Tarefas" />
    
      {JSON.stringify(list)}
    </>
  );
};
export default TaskLists;
