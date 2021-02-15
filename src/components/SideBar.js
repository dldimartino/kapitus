import React from 'react'


const SideBar = (props) => {

    const stock = props.stockInfo.profile

    return (

        <div className="sidebar-component">
                {stock.defaultImage ? 
                <div className="line-item">
                    <div>{stock.defaultImage}</div>
                </div> : null }

                <div className="line-item"  id="logo-container">
                        <img src={stock.image} alt="Company Logo" id="company-logo"/>
                    </div>

                        <div>DESCRIPTION:</div>
                <div className="line-item">
                    <div className="description">
                        <div>{stock.description}</div>
                    </div>
                </div>

        </div>
    )
}

export default SideBar