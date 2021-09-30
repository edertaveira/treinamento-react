import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { List, Tabs } from "antd";
import ItemCard from "./components/ItemCard";
import Repositorios from "./components/Repositorios";
import Usuarios from "./components/Usuarios";

const { TabPane } = Tabs;

function App() {
  const { favoritos } = useSelector((s) => s.common);

  return (
    <div className="App">
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Usuários" key="1">
          <Usuarios />
        </TabPane>
        <TabPane tab="Repositórios" key="2">
          <Repositorios />
        </TabPane>
        <TabPane tab={`Favoritos (${favoritos.length})`} key="3">
          <List
            grid={{ gutter: 16, column: 6 }}
            dataSource={favoritos}
            renderItem={(item) => (
              <List.Item>
                <ItemCard item={item} />
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
