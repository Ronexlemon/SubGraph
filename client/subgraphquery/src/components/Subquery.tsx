import React, { useState, useEffect } from "react";
import { createClient, dedupExchange, fetchExchange } from "urql";

const APIURL = "https://api.studio.thegraph.com/query/44880/getit/v2.1";
const query = `
  query {
    bals(first: 5, orderBy: id) {
      id
      balance
      sender
      blockNumber
    }
  }
`;

const client = createClient({
  url: APIURL,
  exchanges: [dedupExchange, fetchExchange], // Include dedupExchange for query deduplication
});

export default function SubQuerry() {
  const [data, setData] = useState<Array<{balance:number,sender:string,blockNumber:number}>>([]);

  const fetchData = async () => {
    try {
      const response = await client.query(query, {}).toPromise();
      setData(response.data?.bals || []); // Use optional chaining to handle potential null response.data
      console.log("responses", response.data);
    } catch (error) {
      console.log("cannot fetch", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      {data.map((result, index) => (
        <li key={index}>
          <h1>{result.balance}</h1>
          <h1>{result.sender}</h1>
          <h1>{result.blockNumber}</h1>
        </li>
      ))}
      <h1>yollow</h1>
    </div>
  );
}
