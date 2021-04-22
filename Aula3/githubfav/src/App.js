import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { collapsedMenu } from "./store/actions/commonActions";

function App() {
  const dispatch = useDispatch();
  const { collapsed } = useSelector((s) => s.common);

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(collapsedMenu(!collapsed));
        }}
      >
        Alterar
      </button>
      {collapsed}
    </div>
  );
}

export default App;
