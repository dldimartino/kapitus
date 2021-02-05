import React from 'react'


const SideBar = (props) => {

    const stock = props.stockInfo.profile

    return (

        <div className="sidebar-component">

                <div className="line-item">
                    <div>{stock.defaultImage}</div>
                </div>

                <div className="line-item">
                        <img src={stock.image} alt="Company Logo"/>
                    </div>

                <div className="line-item">
                    <div className="description">
                        <div>DESCRIPTION:</div>
                        <div>{stock.description}</div>
                    </div>
                </div>

        </div>
    )
}

export default SideBar