import { useState } from "react"

export default function BatMan() {
    const [runs, setRuns] = useState(0)
    const handleSingle = () => {
        let newRuns = runs + 1;
        setRuns(newRuns)
    }
    const handleFour = () => {
        let newRuns = runs + 4;
        setRuns(newRuns)
    }
    const handleSix = () => {
        let updatedRuns = runs + 6;
        setRuns(updatedRuns)
    }
    return (
        <div>
            <h3>Player : Bangladeshi</h3>
            {
                runs > 50 && <p>Congratulations Your score is 50</p>
            }
            <h1>Score : {runs} </h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}