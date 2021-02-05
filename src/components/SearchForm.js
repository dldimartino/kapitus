import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {MainInfo, JustList, SideBar, SubInfo} from './'


const SearchForm = () => {
    const [stock, setStock] = useState({})
    const [searchBar, setSearchBar] = useState("AAPL")

    const handleSubmit = async (event=null) => {
        if (event !== null) {event.preventDefault()}
        console.log("SEARCHBAR", searchBar)
        let info = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${searchBar}?apikey=4540193e127ee8af1bfdbffae6a58da3`)
        // if (!info.data.profile) {
        //     console.log("INFO BEFORE", info)
        //     info = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/AAPL?apikey=demo`)
        //     console.log("INFO AFTER", info)
        // }
        // info.data.symbol = "Request limit reached: showing DEFAULT symbol: AAPL"
        setStock(info.data)
    }

    const handleChange = (event) => {
        console.log("SEARCHBEFORE", searchBar)
        setSearchBar(event.target.value)
        console.log("SEARCHAFTER", searchBar)
    }

    useEffect(() => {
        handleSubmit()
    }, [])
    
    return (
    <div className="search-form-component">

        <form name="searchForm" onSubmit={handleSubmit} id="input-section">
            <label htmlFor="searchForm"> Enter Symbol 
            <input type="text" id="searchForm" name="searchForm" onChange={handleChange}/>
            </label>
            <button type="submit" name="searchForm"> Submit </button>
        </form>

        {stock.symbol ?
        <div className="stock-info">
            
            <MainInfo stockInfo={stock} />

            <div className="company-info">
                <SideBar stockInfo={stock} />
                <SubInfo stockInfo={stock} />
            </div>

            <JustList stockInfo={stock}/>

        </div>
        : <div>Symbol Not Found</div>}
    </div>
    )
}

export default SearchForm