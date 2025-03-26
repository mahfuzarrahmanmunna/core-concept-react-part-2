
import './App.css'
import Counter from './counter';
import BatMan from './batman';
import Users from './users';
import { Suspense } from 'react';
import Friends from './friends';
import Posts from './posts';


const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
// .then(data => console.log(data))

// Async way
const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = res.json();
  return data
}

const fetchPostData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = res.json();
  return data;
}

function App() {

  const friendPsomise = fetchFriends();
  const postPromise = fetchPostData()

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
      <Suspense fallback={<h3>Loading posts...!</h3>}>
        <Posts postPromise={postPromise}> </Posts>
      </Suspense>


      <BatMan></BatMan>
      <Counter></Counter>

      <Suspense fallback={<h3> Loading ....</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends Loading....!</h3>}>
        <Friends friendPsomise={friendPsomise}></Friends>
      </Suspense>


    </>
  )
}

export default App


