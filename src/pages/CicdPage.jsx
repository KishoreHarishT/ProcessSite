import React, { useState } from 'react'
import { Radio, Button, Select, Input, Checkbox  } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';


import Back from "../Component/Back";
import Divider from "../Component/Divider";

const { TextArea } = Input;

const CicdPage = () => {


    const icon = require("../Images/Icons/acima-icon.png");

    const plainOptions = ['Android', 'iOS'];

    const [platform, setPlatform] = useState([])

    const [platformlist, setplatformlist] = useState([{
        platformName: '',
        appName: '',
        distributionGroup: '',
        ownerName: '',
        applicationPath: '',
    }]);

    function platformChanged(checkedValues) {

        console.log(checkedValues)
        let test = [];
        for (let index = 0; index < checkedValues.length; index++) {
            test.push({
                platformName: checkedValues[index],
                appName: '',
                distributionGroup: '',  
                ownerName: '',
                applicationPath: '',
            })
        }
        setplatformlist(test)  
    }

    const submitClicked = () => {
        debugger
        console.log(platformlist)
    }

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
      };



    return (
        <>
            <div className='home-parent'>
                <div className="gridview-parent"
                >
                    <Back />

                    {/* HEADER */}
                    <div className='product-container'>
                        <div>
                            <p className='product-title'>CI/CD Pipieline</p>
                        </div>
                        <div className="product-parent">
                            <img className='product-icon' src={icon} alt="" />
                        </div>
                    </div>
                    {/* HEADER */}

                    <div className="section section-parent">
                        <div className="section-heading">
                            <p className="section-headeing-text">Release Details</p>
                        </div>

                        <div className="section-content">
                            <div className="proj-details-sec2" style={{ marginTop: '0px' }}>

                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Build Name</p>
                                        <div className="releasenotes-input-outline">
                                            <input className="input-text" type="text" name="" />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Release For</p>
                                        <div className="releasenotes-input-outline">
                                            

                                            <Select
                                                style={{ width: '100%' }}
                                                // options={moduleoptions}
                                                bordered={false}
                                            // onChange={buildtypeChanged}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="proj-details-sec2">

                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Version</p>
                                        <div className="releasenotes-input-outline">
                                            <input className="input-text" type="text" name="" />
                                        </div>
                                    </div>
                                </div>        
                            </div>
                        </div>
                    </div>



                    <Divider />

                    <div className="section section-parent">
                        <div className="section-heading">
                            <p className="section-headeing-text">Release Details</p>
                        </div>

                        <div className="section-content">
                            <div className="proj-details-sec2" style={{ marginTop: '0px' }}>
                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Platform</p>
                                        <div style={{marginTop: '12px'}}>
                                            <Checkbox.Group options={plainOptions} onChange={platformChanged}/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            
                            {platformlist.map((item, index) => (
                            <div key={index}>
                            <p style={{color:'#304165',marginTop: '20px'}}>{item.platformName}</p>
                            <div className="proj-details-sec2" style={{marginTop: '0px'}}>
                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>App Name</p>
                                        <div className="releasenotes-input-outline">
                                            <input className="input-text" type="text" name="" />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: '40%' }}>                                    
                                    <div className="content-heading-text">
                                        <p>Distribution Groups</p>
                                        <div className="releasenotes-input-outline">
                                            <input className="input-text" type="text" name="" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="proj-details-sec2" style={{marginTop: '20px'}}>
                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Owner Name</p>
                                        <div className="releasenotes-input-outline">
                                            <input className="input-text" type="text" name="" />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: '40%' }}>                                    
                                    <div className="content-heading-text">
                                        <p>Application Path</p>
                                        <div className="releasenotes-input-outline">
                                            <input className="input-text" type="text" name="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            ))}
                        </div>
                    </div>

                    {/* BUTTON */}

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'end', marginBottom: '24px', marginTop: '24px', }}>
                                <Button className="generate-button-parent cancel-btn" onClick={submitClicked}>
                                    <p className="cancel-btn-text">Cancel</p>
                                </Button>

                                <Button className="generate-button-parent cancel-btn" style={{ backgroundColor: '#017576' }}>
                                    <p className="cancel-btn-text" style={{ color: 'white' }}>Generate</p>
                                </Button>
                    </div>

                    {/* BUTTON */}


                </div>
            </div>

        </>
    )
}

export default CicdPage