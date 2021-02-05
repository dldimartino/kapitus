import React, { useState, useEffect } from 'react'
import axios from 'axios'


const JustList = (props) => {

    const stock = props.stockInfo.profile
    const symbol = props.stockInfo.symbol
    let itemList = Object.keys(stock)
    console.log("ITEMLIST>>>>>", itemList)
    
    return (
        <div className="just-list-component">
            <div>This component will fire a get request and map through the results only showing values that have data (just to show JSX map functionality)</div>
            <div>
                {Object.keys(stock).map((item) => {
                    <div key={item} className="map-item">
                        <div>test</div>
                        <div>{`${item}: `}</div>
                        <div>{stock[item]}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default JustList