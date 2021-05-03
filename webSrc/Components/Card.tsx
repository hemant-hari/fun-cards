import React from 'react';

import './card.css';

export enum CardType {
  Prompt,
  Response,
}

type CardProps = {
  type?: CardType,
};

const Card = ({ children, type }: React.PropsWithChildren<CardProps>) => (
  <div className={`card ${type === CardType.Prompt ? 'card-prompt' : 'card-response'}`}>
    {children}
  </div>
);

export default Card;
