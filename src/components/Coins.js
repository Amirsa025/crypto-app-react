import React from 'react'
import './Coins.css'

const Coins = ({coins}) => {
    function financial(x) {
        return Number.parseFloat(x).toFixed(2);
    }
    const numberToDate = (numberTime) => {
        const date = new Date(numberTime * 1000);
        return date.toTimeString();
    };

    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <table>
                        <tr>

                            <th>STT</th>
                            <th>Symbol</th>
                            <th>Interval</th>
                            <th>Trade ID</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Buyer ID</th>
                            <th>Seller ID</th>
                            <th>Trade time</th>
                        </tr>
                        {

                            coins.map((trade, index) => (
                                <tr key={index} className="trade">

                                    <td>{index + 1}</td>
                                    <td>{trade && trade.s}</td>
                                    <td>{trade && trade.i}</td>
                                    <td>{trade && trade.t}</td>
                                    <td>${trade && financial(trade.p)}</td>
                                    <td>{trade && trade.q}</td>
                                    <td>{trade && trade.b}</td>
                                    <td>{trade && trade.a}</td>
                                    <td>{trade && numberToDate(trade.T)}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>


            </div>
        </div>
    )
}

export default Coins
