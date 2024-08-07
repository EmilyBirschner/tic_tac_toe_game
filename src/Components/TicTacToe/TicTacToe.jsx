import React, { useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data = ['', '', '', '', '', '', '', '', ''];
const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    const toggle = (w, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "x";
            setCount(++count);

        } else {
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = "o";
            setCount(++count);
        }
    }

    return (
        <div>
            <div className="container">
                <h1 className="title">Tic Tac Toe Game In <span>React</span></h1>
                <div className="board">
                    <div className="row1">
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                    </div>
                    <div className="row2">
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                    </div>
                    <div className="row3">
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                    </div>
                </div>
                <button className="reset">Reset</button>
            </div>
        </div>
    )
}

export default TicTacToe
