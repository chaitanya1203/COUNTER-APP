import {useEffect, useState} from "react"
import "./index.css"

const Counter = () => {
    const[count,setCount] = useState(0)

    useEffect(() => {
        document.title = "Score"
    })
    const onClickIncrease = () => {
        setCount(prevCount => prevCount+1)
    }
    
    const onClickDecrease = () => {
        setCount(prevCount => prevCount-1)
    }

    const onClickReset = () => {
        setCount(prevCount => prevCount=0)
    }
    return(
        <>
        <div className="mainContainer">
        <h1 className="heading">Counter</h1>
        <p className="paragraph">{count}</p>
        <div className="buttonContiner">
        <button onClick={onClickIncrease} type="button" className="button">Increase</button>
        <button onClick={onClickReset} type="button" className="button">Reset</button>
        <button onClick={onClickDecrease} type="button" className="button">Decrease</button>
        </div>
        </div>
        </>
    )
}

export default Counter