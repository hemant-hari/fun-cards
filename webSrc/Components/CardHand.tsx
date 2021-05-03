import React from 'react';
import Card, { CardType } from './Card';

import './cardHand.css';

type CardHandProps = {
  cardContents: string[],
  cardType: CardType,
};

const CardHand = ({ cardContents, cardType }: CardHandProps) => (
  <div className="card-hand">
    {
      cardContents.map((s) => <Card type={cardType}>{s}</Card>)
    }
  </div>
);

export default CardHand;
