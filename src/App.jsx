
import './App.css'
import Counter from './counter';

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
      <Counter></Counter>
    </>
  )
}

export default App


