import React from 'react'
import './Coins.css'
const CoinItem = ({coins}) => {
    function financial(x) {
        return Number.parseFloat(x).toFixed(2);
    }
    const numberToDate = (numberTime) => {
        const date = new Date(numberTime * 1000);
        return date.toTimeString();
    };

    if (!coins || !coins.length || !coins[0]) return 'Loading...';
    return (
        <div className='coin-row'>
            {

                coins.map((trade, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{trade && trade.t}</td>
                        <td>${trade && financial(trade.p)}</td>
                        <td>{trade && trade.q}</td>
                        <td>{trade && trade.b}</td>
                        <td>{trade && trade.a}</td>
                        <td>{trade && numberToDate(trade.T)}</td>
                    </tr>
                ))
            }
        </div>
    )
}

export default CoinItem
