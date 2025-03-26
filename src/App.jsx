
import './App.css'
import Counter from './counter';
import BatMan from './batman';

function App() {
  function handleClick() {
    alert('I am clicked..!')
  }
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }
  return (
    <>
      <h1>Vite + React</h1>
      <BatMan></BatMan>
      <Counter></Counter>
    </>
  )
}

export default App


