
import './App.css'
import Counter from './counter';
import BatMan from './batman';
import Users from './users';
import { Suspense } from 'react';


const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  // .then(data => console.log(data))

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

      <Suspense fallback={<h3> Loading ....</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>
    </>
  )
}

export default App


