import { useEffect, useState } from 'react';
import './App.css';

const styles = {
  buttons: {
    margin: 5
  }
}

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  useEffect(() => {
    if (count < 0) {
      alert("Ops! Tá Negativo!");
    }
  }, [count])
  
  return (
    <div className="App">

        <div className="display">{count}</div>

        <button onClick={increment} style={styles.buttons}>+</button>
        <button onClick={decrement} style={styles.buttons}>-</button>


    </div>
  );
}

export default App;
