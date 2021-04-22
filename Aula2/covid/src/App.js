import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detalhe from "./pages/Detalhe";
import { Layout } from "antd";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Layout.Content style={{ padding: 40, margin: 10, background: "#fff" }}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/:pais">
              <Detalhe />
            </Route>
          </Layout.Content>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
