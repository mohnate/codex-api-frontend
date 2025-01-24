import React, { useState, useEffect } from "react";
import { getTokenList } from "./api";

function App() {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTokenList();
      setTokens(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Token List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {tokens.map((token, index) => (
            <li key={index}>
              <strong>{token.name}</strong> ({token.symbol})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
