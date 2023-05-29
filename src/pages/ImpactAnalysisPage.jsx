import React, { useState, useEffect } from "react";
import { Button, Collapse, Radio, Select } from 'antd';
import { CaretRightOutlined, DeleteTwoTone } from '@ant-design/icons';
import '../Styles/ImpactAnalysisPage.css'


import Back from "../Component/Back";
import ImpactAnalysisHeader from "../Component/ImpactAnalysisHeader";
import Divider from "../Component/Divider";


const { Panel } = Collapse;

function ImpactAnalysisPage() {
    // const envs = [
    //     {
    //         version: "v1.0.20.0",
    //     },
    // ];



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


    const [moduleFormDetails, setModuleFormDetails] = useState([{
        moduledesc: '',
        severity: '',
        assignedto: []
    }]);

    //#region Actions

    //#region Form Type
    const listTypeChanged = event => {
        const { value } = event.target;
        setFormData({ ...formData, listtype: value });
    };
    //#endregion Form Type

    //#region Environment Type
    const envronmentTypeChanged = value => {
        setFormData({ ...formData, environment: value });
    };
    //#endregion Environment Type


    //#region Impacted Version
    const impactedVersionChanged = event => {
        const { value } = event.target;
        setFormData({ ...formData, impactedVersion: value });
    }
    //#endregion Impacted Version 



    //#region moduledescChanged
    const moduledescChanged = (index,moduleindex, event) => {       

        const updatedBoList = [...impactForm];
        updatedBoList[index].moduleform[moduleindex].moduledesc = event.target.value;
        setImpactForm(updatedBoList);        
    }
    //#endregion


    //#region featureChanged
    const featureChanged = (index, event) => {   

        const updatedBoList = [...impactForm];
        updatedBoList[index].featureDesc = event.target.value;
        setImpactForm(updatedBoList);
    }
    //#endregion

    //#region solutionChanged
    const solutionChanged = (index, event) => {
        // const { value } = event.target;
        // setImpactForm({ ...impactForm, solution: value });

        const updatedBoList = [...impactForm];
        updatedBoList[index].solution = event.target.value;
        setImpactForm(updatedBoList);
    }
    //#endregion

    //#region effortChanged
    const effortChanged = (index, event) => {
        // const { value } = event.target;
        // setImpactForm({ ...impactForm, effort: value });
        // setFormData({...formData, impactDetails:impactForm});

        const updatedBoList = [...impactForm];
        updatedBoList[index].effort = event.target.value;
        setImpactForm(updatedBoList);
    }
    //#endregion




    //#region assignedtoOnChange

    const assignedtoOnChange = (index, moduleindex, value) => {
        // moduleFormDetails.assignedto = [];
        // setModuleFormDetails({ ...moduleFormDetails, assignedto: value });
        // setImpactForm({...impactForm, moduleform:moduleFormDetails});


        const updatedBoList = [...impactForm];
        updatedBoList[index].moduleform[moduleindex].assignedto = [];
        updatedBoList[index].moduleform[moduleindex].assignedto = value;
        setImpactForm(updatedBoList);


    };
    //#endregion assignedtoOnChange




    //#region Severity
    const severityChanged = (index, moduleindex, value) => {
        // setModuleFormDetails({ ...moduleFormDetails, severity: value });

        // const updatedBoList = [...moduleFormDetails];
        // updatedBoList[index].severity = value;
        // setModuleFormDetails(updatedBoList);


        const updatedBoList = [...impactForm];
        updatedBoList[index].moduleform[moduleindex].severity = value;
        setImpactForm(updatedBoList);
    };
    //#endregion Severity





    //#region Generate Clicked
    const generateClicked = () => {

        setFormData({ ...formData, impactDetails: impactForm });
        console.log(formData);
    }
    //#endregion Genrate Clicked


    //#region  cancel clicked
    const cancelClicked =()=>{
    }
    //#endregion cancel clicked




    //#endregion Actions



    const panelStyle = {
        marginBottom: '24px',
        background: 'white',
        borderRadius: '8px',
        border: '1px solid #23232320',
        borderLeft: '5px solid #F1AE00',

    };

    const env = [
        { value: 'prod', label: 'Prod' },
        { value: 'qa', label: 'QA' },
        { value: 'dev', label: 'Dev' },
    ]


    const severity = [
        { value: 'high', label: 'High' },
        { value: 'medium', label: 'Medium' },
        { value: 'low', label: 'Low' },
    ]


    const moduleoptions = [];
    for (let i = 10; i < 15; i++) {
        moduleoptions.push({
            value: i.toString(36) + i,
            label: i.toString(36) + i,
        });
    }
    const [modulelist, setModuleList] = useState(moduleoptions);

    const assignedtooptions = [];
    for (let i = 10; i < 36; i++) {
        assignedtooptions.push({
            value: i.toString(36) + i,
            label: i.toString(36) + i,
        });
    }

    const moduleOnChange = (index, value) => {

        const updatedBoList = [...impactForm];
        updatedBoList[index].impactedModules = [];
        updatedBoList[index].impactedModules = value;

        const addbo = [...moduleFormDetails]
        setImpactForm(updatedBoList);

        const length = updatedBoList[index].impactedModules.length;
        updatedBoList[index].moduleform = [];
        for (let i = 0; i < length; i++) {
            addbo[i] = {
                module: updatedBoList[index].impactedModules[i],
                moduledesc: '',
                severity: '',
                assignedto: []
            }
            updatedBoList[index].moduleform = addbo;
            setImpactForm(updatedBoList);
        };
}

    const addbuttonClicked = () => {
        // };
        setImpactForm([...impactForm, {
            id: impactForm.length + 1,
            featureDesc: '',
            impactedModules: [],
            solution: '',
            effort: '',
            moduleform: []
        }])
    };

    const deletebuttonClicked = (index) => {
        const newItems = impactForm.filter((item, i) => i + 1 !== index);
        setImpactForm(newItems);
    };



    return (
        <>
            <div className='home-parent'>
                <div className="gridview-parent">


                    <Back />

                    <ImpactAnalysisHeader />


                    <div className="section section-parent">

                        <div className="section-heading">
                            <p className="section-headeing-text">Project Details</p>
                        </div>

                        <div className="section-content">
                            <div className="type-parent">
                                <p className="content-heading-text">Type</p>
                                <div className="type-radio-parent">
                                    <Radio.Group onChange={listTypeChanged}>
                                        <Radio className="radio-text" name="listtype" checked={formData.listtype === 'impact'} value={'impact'}>Impact</Radio>
                                        <Radio className="radio-text" name="listtype" checked={formData.listtype === 'feature'} value='feature'>Feature/CR</Radio>
                                    </Radio.Group>
                                </div>
                            </div>

                            <div className="proj-details-sec2">
                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Environment</p>
                                        <div className="input-outline" style={{ width: '360px', display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                                            <Select
                                                style={{ width: '360px' }}
                                                options={env}
                                                bordered={false}
                                                onChange={envronmentTypeChanged}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: '40%' }}>
                                    <div className="content-heading-text">
                                        <p>Impacted Version</p>

                                        <div className="input-outline">
                                            <input className="input-text" type="text" name="" value={formData.impactedVersion} onChange={impactedVersionChanged} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Divider />


                    <div className="section section-parent">

                        <div className="section-heading">
                            <p className="section-headeing-text">Impact Details</p>
                        </div>


                        <div className="section-content">
                            <div>

                                <Collapse style={{ background: 'white', borderRadius: '8px' }} defaultActiveKey={['']} bordered={false} accordion expandIconPosition='end'
                                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} >
                                    {impactForm.map((item, index) => (

                                        <Panel style={panelStyle}
                                            header={
                                                <div>
                                                    {impactForm[index].featureDesc.trim() !==  '' ? (
                                                        <p className='activites-header-text' >{impactForm[index].featureDesc}</p>
                                                    ) : (
                                                        <p className='activites-header-text'>Untitled</p>
                                                    )}
                                                </div>

                                            } key={index}>

                                            <div className='activities-content-parent'>
                                                <div className='impact-content'>
                                                    <div className="feature-desc-parent" style={{ width: '100%' }}>
                                                        <p className="content-heading-text">Feature Description</p>
                                                        <div className="input-outline" style={{ width: '100%' }}>
                                                            <input className="input-text" type="text" name="" id="" value={impactForm[index].featureDesc} onChange={e => featureChanged(index, e)} />
                                                        </div>
                                                    </div>

                                                    <div className="feature-desc-parent" style={{ width: '100%', marginTop: '16px' }}>
                                                        <p className="content-heading-text">Impacted Modules</p>
                                                        <div className="input-outline" style={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: 'center', }}>
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
                                                                value={impactForm[index].impactedModules}
                                                                onChange={e => moduleOnChange(index, e)}
                                                                options={modulelist}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="feature-desc-parent" style={{ width: '100%', marginTop: '16px' }}>
                                                        <p className="content-heading-text">Solution Approach</p>
                                                        <div className="input-outline" style={{ width: '100%' }}>
                                                            <input className="input-text" type="text" name="" id="" value={impactForm[index].solution} onChange={e => solutionChanged(index, e)} />
                                                        </div>
                                                    </div>

                                                    <div className="feature-desc-parent" style={{ width: '100%', marginTop: '16px' }}>
                                                        <p className="content-heading-text">Effort Estimate</p>
                                                        <div className="input-outline" style={{ width: '40%' }}>
                                                            <input className="input-text" type="text" name="" id="" value={impactForm[index].effort} onChange={e => effortChanged(index, e)} />
                                                        </div>
                                                    </div>


                                                    <Divider />

                                                    {item.impactedModules.map((module, moduleindex) => (

                                                        <div className="feature-desc-parent" style={{ marginTop: '16px', backgroundColor: (moduleindex % 2) == 0 ? '#F9FAFE' : '#FFFFFF', padding: '20px', borderRadius: '8px' }}>
                                                            <p className="module-heading-text">{module}</p>
                                                            <div style={{ marginTop: '16px' }}>
                                                                <p className="content-heading-text">Description</p>
                                                                <div className="input-outline" style={{ width: '100%' }}>
                                                                    <input className="input-text" type="text" name="" id="" onChange={e => moduledescChanged(index, moduleindex,e)}/>
                                                                    {/* <input className="input-text" type="text" name="" id="" value={moduleFormDetails[index].moduledesc} onChange={e => moduledescChanged(index,e)}/> */}
                                                                </div>
                                                            </div>

                                                            <div style={{ display: 'flex', width: '100%' }}>
                                                                <div style={{ width: '48%', marginRight: '2%' }}>
                                                                    <p style={{ marginTop: '16px' }} className="content-heading-text">Severity</p>
                                                                    <div className="input-outline" style={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                                                                        <Select
                                                                            style={{ width: '100%' }}
                                                                            options={severity}
                                                                            bordered={false}
                                                                            onChange={e => severityChanged(index, moduleindex,e)}
                                                                        />
                                                                        {/* <Select
                                                                            style={{ width: '100%' }}
                                                                            options={severity}
                                                                            bordered={false}
                                                                            value={moduleFormDetails[index].severity}
                                                                            onChange={e => severityChanged(index,e)}

                                                                        /> */}
                                                                    </div>
                                                                </div>

                                                                <div style={{ width: '50%' }}>
                                                                    <p style={{ marginTop: '16px' }} className="content-heading-text">Assigned To</p>
                                                                    <div className="input-outline" style={{ width: '100%', display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                                                                        <Select

                                                                            mode="tags"
                                                                            bordered={false}
                                                                            style={{
                                                                                width: '100%',
                                                                                marginTop: '1',
                                                                                maxHeight: 'none'
                                                                            }}
                                                                            placeholder="Select"
                                                                            options={assignedtooptions}
                                                                            onChange={e => assignedtoOnChange(index, moduleindex,e)}
                                                                        />

                                                                        {/* <Select

                                                                            mode="tags"
                                                                            bordered={false}
                                                                            style={{
                                                                                width: '100%',
                                                                                marginTop: '1',
                                                                                maxHeight: 'none'
                                                                            }}
                                                                            placeholder="Select"
                                                                            value={moduleFormDetails[index].severity}
                                                                            onChange={e => assignedtoOnChange(index, e)}
                                                                            options={options}
                                                                        /> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    ))}
                                                </div>
                                            </div>

                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'end', marginTop: '24px' }}>
                                                <Button className="add-button-parent" type="primary" danger onClick={() => deletebuttonClicked(item.id)}>
                                                    Delete
                                                </Button>
                                            </div>


                                        </Panel>
                                    ))}
                                </Collapse>


                            </div>




                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                                <Button className="add-button-parent" onClick={addbuttonClicked}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.66699 10.0003C1.66699 6.07195 1.66699 4.10777 2.88738 2.88738C4.10777 1.66699 6.07195 1.66699 10.0003 1.66699C13.9287 1.66699 15.8929 1.66699 17.1133 2.88738C18.3337 4.10777 18.3337 6.07195 18.3337 10.0003C18.3337 13.9287 18.3337 15.8929 17.1133 17.1133C15.8929 18.3337 13.9287 18.3337 10.0003 18.3337C6.07195 18.3337 4.10777 18.3337 2.88738 17.1133C1.66699 15.8929 1.66699 13.9287 1.66699 10.0003Z" stroke="#C0C4CF" stroke-width="1.2" />
                                        <path d="M12.5 10L10 10M10 10L7.5 10M10 10L10 7.5M10 10L10 12.5" stroke="#C0C4CF" stroke-width="1.2" stroke-linecap="round" />
                                    </svg>
                                    <p className="add-btn-text">Add a feature</p>
                                </Button>
                            </div>


                        </div>

                    </div>





                    <div style={{ width: '100%', display: 'flex', justifyContent: 'end', marginBottom: '24px', marginTop: '40px',}}>
                        <Button onClick={cancelClicked } className="generate-button-parent cancel-btn">
                            <p className="cancel-btn-text">Cancel</p>
                        </Button>

                        <Button onClick={generateClicked} className="generate-button-parent cancel-btn" style={{ backgroundColor: '#386BE8' }}>
                            <p className="cancel-btn-text" style={{ color: 'white' }}>Generate</p>
                        </Button>
                    </div>



                </div>
            </div>
        </>
    )
}  

export default ImpactAnalysisPage