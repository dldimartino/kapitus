import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {MainInfo, JustList, SideBar, SubInfo} from './'


const SearchForm = (props) => {
    const [stock, setStock] = useState({})
    const [searchBar, setSearchBar] = useState("")

    const getData = async (symbol="AAPL") => {
        // const info = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${symbol}?apikey=4540193e127ee8af1bfdbffae6a58da3`)
        const info = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/AAPL?apikey=demo`)

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
            <MainInfo stockInfo={stock} />
            <div className="company-info">
            <SubInfo stockInfo={stock} />
            <SideBar stockInfo={stock} />
            </div>
            <JustList stockInfo={stock}/>
        </div>
        : <div>Symbol Not Found</div>}
    </div>
    )
}

export default SearchForm

// https://financialmodelingprep.com/api/v3/company/profile/AAPL?apikey=4540193e127ee8af1bfdbffae6a58da3