import React, { useState, useEffect } from 'react'
import axios from 'axios'


const SearchForm = (props) => {
    const [stock, setStock] = useState({})
    const [searchBar, setSearchBar] = useState("")

    const getData = async (symbol="AAPL") => {
        const info = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${symbol}?apikey=4540193e127ee8af1bfdbffae6a58da3`)
        setStock(info.data)
    }

    const searchUpdater = (event) => {
        setSearchBar(event.target.value)
    }

    useEffect(() => {
        getData()
    }, [])


    console.log("RETRIEVED DATA>>>>>>", stock)
    
    return (
    <div className="search-form-component">

        <form name="searchForm" onSubmit={() => getData(searchBar)} id="input-section">
            <label htmlFor="searchForm"> Enter Symbol 
            <input type="text" id="searchForm" name="searchForm" onChange={searchUpdater}/>
            </label>
            <button type="submit" name="searchForm"> Submit </button>
        </form>

        {stock.symbol ?
        <div className="stock-info">
            
            <div className="main-info">
                <div className="main-info-item">
                    <div className="company-name">{stock.profile.companyName}</div>
                </div>
                <div className="main-info-item">
                    <div className="symbol">{stock.symbol}</div>
                </div>
                <div className="main-info-item">
                    <div>PRICE:</div>
                    {stock.profile.price ? <div>{`$ ${stock.profile.price}`}</div> : <div>Price Unavailable</div>}
                </div>
                <div className="change-section">
                    <div className="change-item">
                        <div>CHANGE:</div>
                        {stock.profile.changes > 0 ?
                        <div className="green">{`+ $${stock.profile.changes}`}</div>
                        : <div className="red">{stock.profile.changes}</div>
                        }
                    </div>
                    <div className="change-item">
                        <div>CHANGE PERCENTAGE:</div>
                        {stock.profile.changes > 0 ?
                        <div className="green">{stock.profile.changesPercentage}</div>
                        : <div className="red">{stock.profile.changesPercentage}</div>
                        }
                    </div>
                </div>
            </div>

            <div className="sub-info">
                <div className="line-item">
                    <div>CUSIP:</div>
                    <div>{stock.profile.cusip}</div>
                </div>
                <div className="line-item">
                    <div>BETA:</div>
                    <div>{stock.profile.beta}</div>
                </div>
                <div className="line-item">
                    <div>ADDRESS:</div>
                    <div>{stock.profile.address}</div>
                </div>
                <div className="line-item">
                    <div>CITY:</div>
                    <div>{stock.profile.city}</div>
                </div>
                <div className="line-item">
                    <div>COUNTRY:</div>
                    <div>{stock.profile.country}</div>
                </div>
                <div className="line-item">
                    <div>CURRENCY:</div>
                    <div>{stock.profile.currency}</div>
                </div>
                <div className="line-item">
                    <div>CEO:</div>
                    <div>{stock.profile.ceo}</div>
                </div>
                <div className="line-item">
                    <div>CIK:</div>
                    <div>{stock.profile.cik}</div>
                </div>
                <div className="line-item">
                    <div>EXCHANGE:</div>
                    <div>{stock.profile.exchange}</div>
                </div>
                <div className="line-item">
                    <div>EXCHANGE SHORT NAME:</div>
                    <div>{stock.profile.exchangeShortName}</div>
                </div>
                <div className="line-item">
                    <div>FULL TIME EMPLOYEES:</div>
                    <div>{stock.profile.fullTimeEmployees}</div>
                </div>
                <div className="line-item">
                    <div>IMAGE:</div>
                    <div>{stock.profile.image}</div>
                </div>
                <div className="line-item">
                    <div>INDUSTRY:</div>
                    <div>{stock.profile.industry}</div>
                </div>
                <div className="line-item">
                    <div>IPO DATE:</div>
                    <div>{stock.profile.ipoDate}</div>
                </div>
                <div className="line-item">
                    <div>ISIN:</div>
                    <div>{stock.profile.isin}</div>
                </div>
                <div className="line-item">
                    <div>LAST DIV:</div>
                    <div>{stock.profile.lastDiv}</div>
                </div>
                <div className="line-item">
                    <div>MKT CAP:</div>
                    <div>{stock.profile.mktCap}</div>
                </div>
                <div className="line-item">
                    <div>PHONE:</div>
                    <div>{stock.profile.phone}</div>
                </div>
                <div className="line-item">
                    <div>PRICE:</div>
                    <div>{stock.profile.price}</div>
                </div>
                <div className="line-item">
                    <div>RANGE:</div>
                    <div>{stock.profile.range}</div>
                </div>
                <div className="line-item">
                    <div>SECTOR:</div>
                    <div>{stock.profile.sector}</div>
                </div>
                <div className="line-item">
                    <div>STATE:</div>
                    <div>{stock.profile.state}</div>
                </div>
                <div className="line-item">
                    <div>VOL AVG:</div>
                    <div>{stock.profile.volAvg}</div>
                </div>
                <div className="line-item">
                    <div>WEBSITE:</div>
                    {stock.profile.website ? <a href={stock.profile.website}> {stock.profile.website} </a> : <div>No Website Listed</div>}
                </div>
                <div className="line-item">
                    <div>ZIP:</div>
                    <div>{stock.profile.zip}</div>
                </div>
            </div>

            <div className="sidebar">
                <div className="line-item">
                    <div>DEFAULT IMAGE:</div>
                    <div>{stock.profile.defaultImage}</div>
                </div>
                <div className="line-item">
                    <div>DESCRIPTION:</div>
                    <div>{stock.profile.description}</div>
                </div>
            </div>
        </div>
        : 
        // <div>Symbol Not Found</div>}

<div className="stock-info">
            
            <div className="main-info">
                <div className="main-info-item">
                    <div className="company-name">Apple</div>
                </div>
                <div className="main-info-item">
                    <div className="symbol">AAPL</div>
                </div>
                <div className="main-info-item">
                    <div>PRICE:</div>
                    {0 ? <div>0</div> : <div>Price Unavailable</div>}
                </div>
                <div className="change-section">
                    <div className="change-item">
                        <div>CHANGE:</div>
                        {0 > 0 ?
                        <div className="green">0</div>
                        : <div className="red">0</div>
                        }
                    </div>
                    <div className="change-item">
                        <div>CHANGE PERCENTAGE:</div>
                        {0 > 0 ?
                        <div className="green">0</div>
                        : <div className="red">0</div>
                        }
                    </div>
                </div>
            </div>

            <div className="sub-info">
                
                <div className="left-bar">
                    <div className="line-item">
                        <div>CUSIP:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>BETA:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>ADDRESS:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>CITY:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>COUNTRY:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>CURRENCY:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>CEO:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>CIK:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>EXCHANGE:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>EXCHANGE SHORT NAME:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>FULL TIME EMPLOYEES:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>IMAGE:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>INDUSTRY:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>IPO DATE:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>ISIN:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>LAST DIV:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>MKT CAP:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>PHONE:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>PRICE:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>RANGE:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>SECTOR:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>STATE:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>VOL AVG:</div>
                        <div>0</div>
                    </div>
                    <div className="line-item">
                        <div>WEBSITE:</div>
                        <div>No Website Listed</div>
                    </div>
                    <div className="line-item">
                        <div>ZIP:</div>
                        <div>0</div>
                    </div>
                </div>

            <div className="right-bar">
                <div className="line-item">
                    <div>DEFAULT IMAGE:</div>
                    <div>0</div>
                </div>
                <div className="line-item" id="description">
                    <div>DESCRIPTION:</div>
                    <div>0</div>
                </div>
            </div>
            </div>
            </div>}



    </div>
    )
}

export default SearchForm

// https://financialmodelingprep.com/api/v3/company/profile/AAPL?apikey=4540193e127ee8af1bfdbffae6a58da3