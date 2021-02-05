import React from 'react'


const SideBar = (props) => {

    const stock = props.stockInfo.profile

    return (
        <div className="sidebar-component">
                <div className="line-item">
                    <div>DEFAULT IMAGE:</div>
                    <div>{stock.defaultImage}</div>
                </div>
                <div className="line-item">
                    <div>DESCRIPTION:</div>
                    <div>{stock.description}</div>
                </div>
            </div>
    )
}

export default SideBar