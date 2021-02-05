import React from 'react'

const SubInfo = (props) => {
    
    const stock = props.stockInfo.profile
    
    return (
        <div className="sub-info-component">

            <div className="sub-info">
                <div className="right-bar">

                    <div className="line-item">
                        <div>CUSIP:</div>
                        <div>{stock.cusip}</div>
                    </div>

                    <div className="line-item">
                        <div>BETA:</div>
                        <div>{stock.beta}</div>
                    </div>

                    <div className="line-item">
                        <div>ADDRESS:</div>
                        <div>{stock.address}</div>
                    </div>

                    <div className="line-item">
                        <div>CITY:</div>
                        <div>{stock.city}</div>
                    </div>

                    <div className="line-item">
                        <div>COUNTRY:</div>
                        <div>{stock.country}</div>
                    </div>

                    <div className="line-item">
                        <div>CURRENCY:</div>
                        <div>{stock.currency}</div>
                    </div>

                    <div className="line-item">
                        <div>CEO:</div>
                        <div>{stock.ceo}</div>
                    </div>

                    <div className="line-item">
                        <div>CIK:</div>
                        <div>{stock.cik}</div>
                    </div>

                    <div className="line-item">
                        <div>EXCHANGE:</div>
                        <div>{stock.exchange}</div>
                    </div>

                    <div className="line-item">
                        <div>EXCHANGE SHORT NAME:</div>
                        <div>{stock.exchangeShortName}</div>
                    </div>

                    <div className="line-item">
                        <div>FULL TIME EMPLOYEES:</div>
                        <div>{stock.fullTimeEmployees}</div>
                    </div>

                    <div className="line-item">
                        <div>INDUSTRY:</div>
                        <div>{stock.industry}</div>
                    </div>

                    <div className="line-item">
                        <div>IPO DATE:</div>
                        <div>{stock.ipoDate}</div>
                    </div>

                    <div className="line-item">
                        <div>ISIN:</div>
                        <div>{stock.isin}</div>
                    </div>

                    <div className="line-item">
                        <div>LAST DIV:</div>
                        <div>{stock.lastDiv}</div>
                    </div>

                    <div className="line-item">
                        <div>MKT CAP:</div>
                        <div>{stock.mktCap}</div>
                    </div>

                    <div className="line-item">
                        <div>PHONE:</div>
                        <div>{stock.phone}</div>
                    </div>

                    <div className="line-item">
                        <div>PRICE:</div>
                        <div>{stock.price}</div>
                    </div>

                    <div className="line-item">
                        <div>RANGE:</div>
                        <div>{stock.range}</div>
                    </div>
                    
                    <div className="line-item">
                        <div>SECTOR:</div>
                        <div>{stock.sector}</div>
                    </div>

                    <div className="line-item">
                        <div>STATE:</div>
                        <div>{stock.state}</div>
                    </div>

                    <div className="line-item">
                        <div>VOL AVG:</div>
                        <div>{stock.volAvg}</div>
                    </div>

                    <div className="line-item">
                        <div>WEBSITE:</div>
                        {stock.website ? <a href={stock.website}> {stock.website} </a> : <div>No Website Listed</div>}
                    </div>

                    <div className="line-item">
                        <div>ZIP:</div>
                        <div>{stock.zip}</div>
                    </div>

                </div>
            </div>
            
        </div>
    )   
}

export default SubInfo