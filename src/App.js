import React, { useState } from 'react';
import { crossSvg, zeroSvg } from './theme/icons/icons';
import './App.css';

const winnerLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [move, setMove] = useState(1);

  const cross = { name: 'cross', svg: crossSvg() };
  const zero = { name: 'zero', svg: zeroSvg() };

  const checkWinner = (name, moves) => {
    let winner = '';

    for (let i = 0; i < 8; i++) {
      let line = winnerLines[i];

      if (
        moves[line[0]]?.name === name &&
        moves[line[1]]?.name === name &&
        moves[line[2]]?.name === name
      ) {
        alert(`${name} win`);
        winner = name;
      }
    }
    if (move === 9 && winner === '') {
      alert('Ничья!');
    }
  };

  const clickHandler = item => {
    if (!squares[item]) {
      const player = move % 2 ? cross : zero;
      const moves = new Array(...squares);
      moves[item] = player;
      setSquares(moves);
      setMove(move + 1);
      checkWinner(player.name, moves);
    }
  };

  const squaresList = squares.map((square, item) => {
    return (
      <li
        key={item}
        className='fieldPlay__item'
        onClick={() => clickHandler(item)}
      >
        {square?.svg}
      </li>
    );
  });

  return (
    <div className='App'>
      <h1 className='App__title'>Tic Tac Toe React</h1>
      <div className='App__container'>
        <div className='fieldPlay'>
          <ul className='fieldPlay__list'>{squaresList}</ul>
        </div>
      </div>
    </div>
  );
};

export default App;
