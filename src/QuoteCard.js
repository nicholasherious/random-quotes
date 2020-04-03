import React from 'react';
import { Main } from './containers/Main'

export const QuoteCard = randomQuote => {

    return (
        <div className="card mx-auto">
      <div className="card-header">Quote</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
        {randomQuote.text}
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title"></cite>
          </footer>
        </blockquote>
      </div>
    </div>
    )
}


