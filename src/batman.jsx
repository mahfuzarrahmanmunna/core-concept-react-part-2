import { useState } from "react"

export default function BatMan() {
    const [runs, setRuns] = useState(0)
    const [six, setSix] = useState(0);
    const [four, setFour] = useState(0);
    // const sixes = () => {
    //     let updatedSixes = six + 1;
    //     setSix(updatedSixes)
    // }
    const handleSingle = () => {
        let newRuns = runs + 1;
        setRuns(newRuns)
    }
    const handleFour = () => {
        let newRuns = runs + 4;
        let newFour = four + 1;
        setRuns(newRuns);
        setFour(newFour)
    }
    const handleSix = () => {
        let updatedRuns = runs + 6;
        let updatedSixes = six + 1;
        setRuns(updatedRuns);
        setSix(updatedSixes)
    }
    return (
        <div>
            <h3>Player : Bangladeshi</h3>
            {
                runs > 50 && <p>Congratulations Your score is 50</p>
            }
            <p><small>Four : {four}</small></p>
            <p><small>sixes : {six}</small></p>
            <h1>Score : {runs} </h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}


/**
 * Api fetch
 *
 * Norman way
 */

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))

// // Async way
// const fetchData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = res.json()
//     console.log(data)
// }
// fetchData()