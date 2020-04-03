import React, { useState, useEffect } from "react";
import { quotesApi } from "../api/quotesApi";
import { QuoteCard } from "../QuoteCard";

export const Main = () => {
  const [quotes, setQuotes] = useState([]);
  const [random, setRandom] = useState([]);

  useEffect(() => {
    quotesApi().then(data => setQuotes(data));
  }, []);

  function handleClick() {
    quotesApi().then(data => setQuotes(data));
  }

  return (
    <div>
      <div className="shadow p-3 mb-5 bg-white rounded">
        <div className="card mx-auto ">
          <div className="card-header">Quote</div>
          <div className="card-body ">
            <blockquote className="blockquote mb-0">
              {quotes.text}
              <footer className="blockquote-footer">
                <cite title="Source Title">{quotes.author}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="container mx-auto mt-3">
          <div class="row mx-md-n5">
            <div className="col px-md-5">
              <div className="p-3">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={handleClick}
                >
                  Generate
                </button>
              </div>
            </div>
            <div className="col px-md-5">
              <div className="p-3">
                <button type="button" className="btn btn-primary btn-lg">
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
