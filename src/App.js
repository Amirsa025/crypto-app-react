import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import Navbar from './components/Navbar'
function App() {

  const [ws, setWs] = useState(null);
  const [trades, setTrades] = useState([]);

  const URL_WEB_SOCKET = 'wss://stream.binance.com:9443/ws';
  const request = {
    method: 'SUBSCRIBE',
    params: ['btcusdt@trade'],
    id: 1,
  };
  const addTradeToList = (trade, newTrades) => {
    if (newTrades.length >= 20) {
      newTrades.shift();
      newTrades.push(trade);
      setTrades(newTrades);
    } else {
      newTrades.push(trade);
      setTrades(newTrades);
    }
  };
  //create and mount web soocket
  useEffect(() => {
    const wsClient = new WebSocket(URL_WEB_SOCKET);
    wsClient.onopen = () => {
      setWs(wsClient);
      wsClient.send(JSON.stringify(request));
    };
    wsClient.onclose = () => console.log('ws closed');
    return () => {
      wsClient.close();
    };
  }, []);

  useEffect(() => {
    if (ws) {
      ws.onmessage = (event) => {
        const trade = JSON.parse(event.data);
        const newTrades = [...trades];
        addTradeToList(trade, newTrades);
      };
    }
  }, [ws, trades]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={trades} />} />
      </Routes>

    </>
  );
}

export default App;
