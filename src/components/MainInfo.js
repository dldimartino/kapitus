import React from 'react'

const MainInfo = (props) => {

    const stock = props.stockInfo.profile
    const symbol = props.stockInfo.symbol

    return (
        <div className="main-info-component">

            <div className="main-info-item">
                <div className="company-name">{stock.companyName}</div>
            </div>
            
            <div className="main-info-item">
                <div className="symbol">{symbol}</div>
            </div>

            <div className="main-info-item">
                <div>PRICE:</div>
                {<div>{`$${stock.price}`}</div> || <div>Price Unavailable</div>}
            </div>

            <div className="change-section">

                <div className="change-item">
                    <div>CHANGE</div>
                    {stock.changes > 0 ?
                    <div className="green">{`+ $ ${stock.changes}`}</div>
                    : <div className="red">{`$ ${stock.changes}`}</div>
                    }
                </div>

                <div className="change-item">
                    <div>CHANGE %</div>
                    {stock.changes > 0 ?
                    <div className="green">{stock.changesPercentage}</div>
                    : <div className="red">{stock.changesPercentage}</div>
                    }
                </div>

            </div>

        </div>
    )   
}

export default MainInfo