import React from 'react';
import _ from 'lodash';

import { CardType } from './Card';
import CardHand from './CardHand';

import './body.css';

const Body = () => (
  <div className="body">
    <CardHand
      cardContents={_.range(2).map((x) => `testing ${x}`)}
      cardType={CardType.Prompt}
    />
    <CardHand
      cardContents={_.range(7).map((x) => `testing ${x}`)}
      cardType={CardType.Response}
    />
  </div>
);

export default Body;
