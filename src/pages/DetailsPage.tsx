import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { match } from '../types/type';
import './DetailsPage.css'

const DetailsPage = ({match, changeSelectBet}: {match: match, changeSelectBet: (newBet: string | null) => void}) => {
  const {player1, player2, winner1, winner2, draw, date, live} = match
  const [isSelected, changeSelect] = useState<string>('')
  return (
    <div className="details-page">
      <h2>Детали матча</h2>
      <p>Дата матча: {date.toLocaleString()} <span style={{
        color: 'red',
        fontSize: '2rem',
        marginLeft: '20px'
      }}>{live ? 'LIVE •' : null}</span></p>
      <div className='bet-area'>
        <p className='player'>{player1}</p>
        <div className='coefficients'>
          <div className='coefficient-item'>
            <span>П1</span>
            <label className='coeff-label'>
              <input type='radio' name='coefficient' onChange={() => changeSelect('Победа хозяев')} />
              <span className='coeff-number'>{winner1}</span>
            </label>
          </div>
          <div className='coefficient-item'>
            <span>Ничья</span>
            <label className='coeff-label'>
              <input type='radio' name='coefficient' onChange={() => changeSelect('Ничья')} />
              <span className='coeff-number'>{draw}</span>
            </label>
          </div>
          <div className='coefficient-item'>
            <span>П2</span>
            <label className='coeff-label'>
              <input type='radio' name='coefficient' onChange={() => changeSelect('Победа гостей')} />
              <span className='coeff-number'>{winner2}</span>
            </label>
          </div>
        </div>
        <p className='player'>{player2}</p>
      </div>
      {
        isSelected ? 
        <Link to='/'><button style={{marginTop:"20px"}} onClick={() => {changeSelectBet(isSelected)}}>Сделать ставку</button></Link> : 
        <Link to='/'><button style={{marginTop:"20px"}} onClick={() => {changeSelectBet(isSelected)}} disabled>Сделать ставку</button></Link>     
      }
      
    </div>
  );
}

export default DetailsPage;