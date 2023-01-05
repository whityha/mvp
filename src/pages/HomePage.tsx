import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DATA, DATA_LIVE } from '../data';
import MatchItem from '../components/MatchItem/MatchItem';
import './HomePage.css'
import { match } from '../types/type';

const HomePage = (
  { 
    changeCurrentMatch, currentMatch, bet, changeSelectBet
  }: {
  changeCurrentMatch: (match: match) => void,
  currentMatch: match,
  bet: string | null,
  changeSelectBet: (newBet: (string | null)) => void
}) => {
  const {player1, player2} = currentMatch

  const closeNotice = () => {
    changeSelectBet(null)
  }

  useEffect(() => {
    setTimeout(() => {
      closeNotice()
    }, 2000)
  })

  return (
    <div className="home-page">
      {bet ? <p>"Спасибо, ваша ставка <span style={{fontWeight: 'bold'}}>[{bet}]</span> на матч <span style={{fontWeight: 'bold'}}>[{player1} vs {player2}]</span> принята"</p> : null}
      <h1>ОДИН ИКС БЭТ</h1>
      <p>Вид спорта: <span>Хоккей</span></p>
      <p>Лига: <span>NHL</span></p>
      <p style={{
        color: 'red',
        fontSize: '2rem',
        fontWeight: 'bold'}}>LIVE •</p>
      <ul className='game-list'>
        {DATA_LIVE.map(item => {
          return <Link key={item.id} to='/details' onClick={() => changeCurrentMatch(item)}><MatchItem match={ item }  /></Link>
        })}
      </ul>
      <p style={{fontSize: '1.5rem'}}>Предстоящие матчи</p>
      <ul>
      {DATA.map(item => {
          return <Link key={item.id} to='/details' onClick={() => changeCurrentMatch(item)}><MatchItem match={ item } /></Link>
        })}
      </ul>
    </div>
  );
}

export default HomePage;