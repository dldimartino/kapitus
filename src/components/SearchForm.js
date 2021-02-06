import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {MainInfo, JustList, SideBar, SubInfo} from './'


const SearchForm = () => {
    const [stock, setStock] = useState({})
    const [searchBar, setSearchBar] = useState("AAPL")

    const handleSubmit = async (event = null) => {
        console.log("SEARCHBAR ON SUBMIT>>>", searchBar)
        console.log("SYPEOF SEARCHBAR", typeof(searchBar))
        console.log("event ON SUBMIT>>>", event)
        let info
        if (event !== null) {event.preventDefault()}
        console.log("INSIDE IF STATEMENT EVENT NULL")
            info = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${searchBar}?apikey=4540193e127ee8af1bfdbffae6a58da3`)
        //second api code below just to add uses
            if (!info.data.profile) {
            info = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${searchBar}?apikey=04ee7b390f7b9b255a99384eed8f3d32`)
        }
            if (!info.data.profile) {
            info = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/AAPL?apikey=demo`)
            info.data.symbol = "Daily free API request limit reached: showing Default/Test symbol: AAPL"
        }
        console.log("INFOOOOOOO>>>>>>>>>>", info)
        setStock(info.data)
    }

    const handleChange = (event) => {
        console.log("SEARCHBAR BEFORE CHANGE>>>>", searchBar)
        setSearchBar(event.target.value)
        console.log("SEARCHBAR AFTER CHANGE>>>>", searchBar)
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