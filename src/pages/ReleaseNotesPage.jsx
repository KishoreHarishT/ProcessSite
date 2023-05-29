import React, { useState, useEffect } from "react";
import { Collapse, Tag, Avatar } from 'antd';
import { Button, Radio, Select } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import Back from "../Component/Back";
import Divider from "../Component/Divider";

import '../Styles/ReleaseNotesPage.css'

const { Panel } = Collapse;

function ReleaseNotesPage() {

    const panelStyle = {
        marginBottom: '24px',
        background: 'white',
        borderRadius: '8px',
        border: '1px solid #23232320',
        borderLeft: '5px solid #F1AE00',

    };

    const [formData, setFormData] = useState([{
        listtype: '',
        environment: '',
        impactedVersion: '',
        impactDetails: []
    }]);


    const [impactForm, setImpactForm] = useState([{
        id: 1,
        featureDesc: '',
        impactedModules: [],
        solution: '',
        effort: '',
        moduleform: []
    }]);


    const moduleoptions = [
        { value: 'android', label: 'Android' },
        { value: 'ios', label: 'Ios' },
        { value: 'web', label: 'Web' },
    ];

    const [modulelist, setModuleList] = useState(moduleoptions);



    const responsiblepersonslist = [
        { value: 'person 1', label: 'Person 1' },
        { value: 'person 2', label: 'Person 2' },
        { value: 'person 3', label: 'Person 3' },
    ];

    const [responsiblepersonlist, setResponsiblePerson] = useState(responsiblepersonslist);


    const env = [
        { value: 'prod', label: 'Prod' },
        { value: 'qa', label: 'QA' },
        { value: 'dev', label: 'Dev' },
    ]

    //#region Form Type
    const listTypeChanged = event => {
        const { value } = event.target;
        setFormData({ ...formData, listtype: value });
    };
    //#endregion Form Type


    const icon = require("../Images/Icons/acima-icon.png");
    return (
        <>
            <div className='home-parent'>
                <div className="gridview-parent">
                    <Back />

                    {/* HEADER */}
                    <div className='product-container'>
                        <div>
                            <p className='product-title'>Release Notes</p>
                        </div>
                        <div className="product-parent">
                            <img className='product-icon' src={icon} alt="" />
                        </div>
                    </div>
                    {/* HEADER */}

                    <div className="section section-parent">                        <div className="section-heading">
                        <p className="section-headeing-text">Release Details</p>
                    </div>

                        <div className="section-content">
                            <div className="proj-details-sec2" style={{ marginTop: '0px' }}>

                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Build Name</p>
                                        <div className="releasenotes-input-outline">
                                            <input className="input-text" type="text" name="" value={formData.impactedVersion} />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Build Type</p>
                                        <div className="releasenotes-input-outline">
                                            <Select
                                                style={{ width: '100%' }}
                                                options={moduleoptions}
                                                bordered={false}
                                            // onChange={envronmentTypeChanged}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="proj-details-sec2">

                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Build Version</p>
                                        <div className="releasenotes-input-outline">
                                            <input className="input-text" type="text" name="" value={formData.impactedVersion} />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Environment</p>
                                        <div className="releasenotes-input-outline">
                                            <Select
                                                style={{ width: '100%' }}
                                                options={env}
                                                bordered={false}
                                            // onChange={envronmentTypeChanged}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="proj-details-sec2">
                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Browser/Devices need to be tested</p>
                                        <div className="releasenotes-input-outline">
                                            <Select
                                                mode="tags"
                                                bordered={false}
                                                style={{
                                                    width: '100%',
                                                    marginTop: '1',
                                                    maxHeight: 'none',
                                                }}
                                                size="large"
                                                placeholder="Select"
                                                // value={impactForm[index].impactedModules}
                                                // onChange={e => moduleOnChange(index, e)}
                                                options={modulelist} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <Divider />


                    <div className="section section-parent">                        <div className="section-heading">
                        <p className="section-headeing-text">Known / Pending Issues</p>
                    </div>

                        <div className="section-content">
                            <Collapse style={{ background: 'white', borderRadius: '8px' }} defaultActiveKey={['']} bordered={false} accordion expandIconPosition='end'
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} >
                                {impactForm.map((item, index) => (

                                    <Panel style={panelStyle}
                                        header={
                                            <div>
                                                {impactForm[index].featureDesc.trim() !== '' ? (
                                                    <p className='activites-header-text' >{impactForm[index].featureDesc}</p>
                                                ) : (
                                                    <p className='activites-header-text'>Untitled</p>
                                                )}
                                            </div>

                                        } key={index}>

                                        <div className='activities-content-parent'>
                                            <div className="collapse-row-parent">
                                                <div className="feature-desc-parent" style={{ width: '100%', marginTop: '16px' }}>
                                                    <p className="content-heading-text">Description</p>
                                                    <div className="releasenotes-input-outline">
                                                        <input className="input-text" type="text" name="" id="" />
                                                    </div>
                                                </div>

                                                <div className="feature-desc-parent" style={{ width: '100%', marginTop: '16px' }}>
                                                    <p className="content-heading-text">Status</p>
                                                    <div className="releasenotes-input-outline">
                                                        <Select
                                                            style={{ width: '100%' }}
                                                            options={env}
                                                            bordered={false}
                                                        // onChange={envronmentTypeChanged}
                                                        />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="collapse-row-parent">

                                                <div className="feature-desc-parent" style={{ width: '100%', marginTop: '16px' }}>
                                                    <p className="content-heading-text">Severity</p>
                                                    <div className="releasenotes-input-outline">
                                                        <Select
                                                            style={{ width: '100%' }}
                                                            options={env}
                                                            bordered={false}
                                                        // onChange={envronmentTypeChanged}
                                                        />
                                                    </div>
                                                </div>


                                                <div className="feature-desc-parent" style={{ width: '100%', marginTop: '16px' }}>
                                                    <p className="content-heading-text">Responsible Person</p>
                                                    <div className="releasenotes-input-outline">
                                                        <Select
                                                            mode="tags"
                                                            bordered={false}
                                                            style={{
                                                                width: '100%',
                                                                marginTop: '1',
                                                                maxHeight: 'none',
                                                            }}
                                                            size="large"
                                                            placeholder="Select"
                                                            // value={impactForm[index].impactedModules}
                                                            // onChange={e => moduleOnChange(index, e)}
                                                            options={responsiblepersonlist} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ width: '100%', display: 'flex', justifyContent: 'end', marginTop: '24px' }}>
                                            <Button className="add-button-parent" type="primary" danger
                                            // onClick={() => deletebuttonClicked(item.id)}
                                            >
                                                Delete
                                            </Button>
                                        </div>


                                    </Panel>
                                ))}

                            </Collapse>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                                <Button className="add-button-parent" >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.66699 10.0003C1.66699 6.07195 1.66699 4.10777 2.88738 2.88738C4.10777 1.66699 6.07195 1.66699 10.0003 1.66699C13.9287 1.66699 15.8929 1.66699 17.1133 2.88738C18.3337 4.10777 18.3337 6.07195 18.3337 10.0003C18.3337 13.9287 18.3337 15.8929 17.1133 17.1133C15.8929 18.3337 13.9287 18.3337 10.0003 18.3337C6.07195 18.3337 4.10777 18.3337 2.88738 17.1133C1.66699 15.8929 1.66699 13.9287 1.66699 10.0003Z" stroke="#C0C4CF" stroke-width="1.2" />
                                        <path d="M12.5 10L10 10M10 10L7.5 10M10 10L10 7.5M10 10L10 12.5" stroke="#C0C4CF" stroke-width="1.2" stroke-linecap="round" />
                                    </svg>
                                    <p className="add-btn-text">Add a Issue</p>
                                </Button>
                            </div>
                        </div>
                    </div>


                    <Divider />


                    <div className="section section-parent">                        <div className="section-heading">
                        <p className="section-headeing-text">Credentials</p>
                    </div>

                        <div className="section-content">
                            <div className="proj-details-sec2" style={{ marginTop: '0px' }}>

                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Android App Invite</p>
                                        <div className="releasenotes-input-outline">
                                            <input className="input-text" type="text" name="" />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Ios App Invite</p>
                                        <div className="releasenotes-input-outline">
                                            <input className="input-text" type="text" name="" />
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className="proj-details-sec2">

                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Login Credentials</p>
                                        <div className="releasenotes-input-outline">
                                            <input className="input-text" type="text" name="" />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>FRD LInk</p>
                                        <div className="releasenotes-input-outline">
                                            <input className="input-text" type="text" name="" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="proj-details-sec2">
                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Unit Test Case Report Link</p>
                                        <div className="releasenotes-input-outline">
                                            <input className="input-text" type="text" name="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div style={{ width: '100%', display: 'flex', justifyContent: 'end', marginBottom: '24px', }}>
                        <Button className="generate-button-parent cancel-btn">
                            <p className="cancel-btn-text">Cancel</p>
                        </Button>

                        <Button className="generate-button-parent cancel-btn" style={{ backgroundColor: '#017576' }}>
                            <p className="cancel-btn-text" style={{ color: 'white' }}>Generate</p>
                        </Button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ReleaseNotesPage