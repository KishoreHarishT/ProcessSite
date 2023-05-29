import React, { useState, useEffect } from "react";


function ProductHeader() {

    const icon = require("../Images/Icons/acima-icon.png");

    return (
        <div className='product-container'>

            <div className="product-parent">
                <img className='product-icon' src={icon} alt="" />
                <p className='product-title'>Acima</p>
            </div>

            <div className='edit-btn'>

                <div style={{ height: "18px" }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_70_2558)">
                            <path d="M16.5 7.875V9C16.5 12.5355 16.5 14.3033 15.4017 15.4017C14.3033 16.5 12.5355 16.5 9 16.5C5.46447 16.5 3.6967 16.5 2.59835 15.4017C1.5 14.3033 1.5 12.5355 1.5 9C1.5 5.46447 1.5 3.6967 2.59835 2.59835C3.6967 1.5 5.46447 1.5 9 1.5H10.125" stroke="#67696E" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M12.489 2.5913L12.9756 2.10468C13.7819 1.29844 15.0891 1.29844 15.8953 2.10468C16.7016 2.91093 16.7016 4.21811 15.8953 5.02435L15.4087 5.51097M12.489 2.5913C12.489 2.5913 12.5499 3.62535 13.4623 4.53774C14.3747 5.45014 15.4087 5.51097 15.4087 5.51097M12.489 2.5913L8.01538 7.06495C7.71237 7.36796 7.56087 7.51946 7.43057 7.68651C7.27687 7.88357 7.1451 8.09679 7.03758 8.32239C6.94644 8.51363 6.87868 8.7169 6.74317 9.12343L6.30931 10.425M15.4087 5.51097L10.9351 9.98462C10.632 10.2876 10.4805 10.4391 10.3135 10.5694C10.1164 10.7231 9.90321 10.8549 9.67761 10.9624C9.48637 11.0536 9.2831 11.1213 8.87657 11.2568L7.575 11.6907M7.575 11.6907L6.73282 11.9714C6.53276 12.0381 6.3122 11.986 6.16308 11.8369C6.01397 11.6878 5.9619 11.4672 6.02859 11.2672L6.30931 10.425M7.575 11.6907L6.30931 10.425" stroke="#67696E" stroke-width="1.5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_70_2558">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div style={{ height: "18px" }}>
                    <p className='edit-text'>Edit</p>
                </div>

            </div>

        </div>
    )
}

export default ProductHeader