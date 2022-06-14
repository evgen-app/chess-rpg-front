import React from 'react';
import { Board } from './components/board';
import {changeFigurePosition, FigurePositionIE} from "./app/boardSlice"
import { useDispatch } from 'react-redux';

function App() {
  let dispath = useDispatch()
  let position = {row:6, col:4} as FigurePositionIE
  return (
    <div className="App">
      <Board></Board>
      <button onClick={()=>dispath(changeFigurePosition({id:1, pos: position}))}>CLICK</button>
    </div>
  );
}

export default App;
