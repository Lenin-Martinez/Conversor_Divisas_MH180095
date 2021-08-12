import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [Dolar, setDolar] = useState(0);
  const [Euro, setEuro] = useState(0);
  const [Bitcoin, setBitcoin] = useState(0)

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  // divisas a la fecha "10-ago- 2021"
  useEffect(() => {
    setDolar((total / tipo) * 1);
    setEuro((total / tipo) * 0.85);
    setBitcoin((total / tipo) * 0.0000218166)
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de divisas</h1>

      <p>Dolar: {Dolar}</p>
      <p>Euro: {Euro}</p>
      <p>Bitcoin: {Bitcoin}</p>

      <hr />

       <h3>Seleccione la divisa</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolar</option>
        <option value={0.85}>Euro</option>
        <option value={0.0000218166}>Bitcoin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
