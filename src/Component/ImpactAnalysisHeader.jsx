import React from 'react'

function ImpactAnalysisHeader() {
    const icon = require("../Images/Icons/acima-icon.png");


    return (
        <div className='product-container'>
            <div>
                <p className='product-title'>Impact Analysis</p>
            </div>
            <div className="product-parent">
                <img className='product-icon' src={icon} alt="" />
            </div>
        </div>
    )
}

export default ImpactAnalysisHeader