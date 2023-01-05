import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import { match } from './types/type';
import { DATA } from './data';

const App = () => {
  const [currentMatch, setCurrentMatch] = useState<match>(DATA[0]);
  const [bet, setBet] = useState<string | null>(null)

  const changeCurrentMatch = (match: match): void => {
    setCurrentMatch(match)
  }
  const changeSelectBet = (newBet: string | null): void => {
    setBet(newBet)
  }
  return (
    <Routes>
      <Route path='/' element={
      <HomePage 
        bet={bet}
        changeSelectBet={changeSelectBet}
        currentMatch={currentMatch} 
        changeCurrentMatch = {changeCurrentMatch} 
      />} />
      <Route path='/details' element={
      <DetailsPage
        match={currentMatch}
        changeSelectBet={changeSelectBet}
      />} />
    </Routes>
  );
}

export default App;
