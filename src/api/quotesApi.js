import React, { useState, useEffect } from "react";
import axios from "axios";

const quotesUrl = "https://type.fit/api/quotes";

export const quotesApi = async () => {
  const result = await axios.get(quotesUrl).then(({data}) => data);
  const quoteNum = Math.floor(Math.random() * result.length)
  const singleQuote = result[quoteNum]
  console.log(result[quoteNum], 'quotesApi')

  return singleQuote;
};
