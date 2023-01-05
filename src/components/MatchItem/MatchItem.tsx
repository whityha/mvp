import React from 'react';
import { match } from '../../types/type';

const MatchItem = ({match}: {match: match}) => {
  const {player1, player2} = match
  return (
    <li className="matchItem" style={{
        'padding': "1rem 0"
    }}>
      Детали матча {player1} vs {player2}
    </li>
  );
}

export default MatchItem;