import logo from './logo.svg';
import react, { useState } from 'react';
import './App.css';

function App() {
  const incButtonStyle ={
    backgroundColor: '#93C572',
    color: 'white',
    fontFamily: 'Georgia',
    margin: '10px', 
    width: '150px', 
    height: '40px', 
    border: 'none'
  }
  const decButtonStyle ={
    backgroundColor: '#D2042D',
    color: 'white',
    fontFamily: 'Georgia',
    margin: '10px', 
    width: '150px', 
    height: '40px', 
    border: 'none'
  }
  const resetButtonStyle ={
    backgroundColor: '#6F8FAF',
    color: 'white',
    fontFamily: 'Georgia',
    margin: '10px', 
    width: '150px', 
    height: '40px', 
    border: 'none'
  }
  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0); 
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h3>count: {count}</h3>
      <button style={incButtonStyle} onClick = {increment}>increment</button>
      <button style={decButtonStyle} onClick = {decrement}>decrement</button>
      <button style={resetButtonStyle} onClick = {reset}>reset</button>
    </div>
  );
}

export default App;
