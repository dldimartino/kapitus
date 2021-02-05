import React, { useState, useEffect } from 'react'
import axios from 'axios'


const JustList = (props) => {

    const stock = props.stockInfo.profile
    const symbol = props.stockInfo.symbol
    
    return (
        <div className="just-list-component">
            <div>This component will fire a get request and map through the results only showing values that HAVE data</div>
            <br/>
            <div> (just an example to show JSX map functionality)</div>
        <div>
            <div>
                {Object.keys(stock).map((item) => {
                    if (item === "description") {
                        console.log("INSIDE DESCRIPTION")
                        return (
                            <div key={item} className="map-item" id="map-description">
                                <div>{`${item}:`}</div>
                                <div>{stock[item]}</div>
                            </div>
                        )
                    }
                        else if (stock[item]) {
                        return (
                            <div key={item} className="map-item">
                                <div>{`${item}:`}</div>
                                <div>{stock[item]}</div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
        </div>
    )
}

export default JustList