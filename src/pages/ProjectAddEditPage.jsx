import React, { useState, useEffect } from "react";
import { Select, Tag, Avatar, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Space, Tooltip, theme } from 'antd';
import { useRef } from 'react';

import '../Styles/ProjectAddEdit.css'


import Back from "../Component/Back";
import ProductHeader from "../Component/ProductHeader";


const { TextArea } = Input;

function ProjectAddEditPage() {

    const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};


    const { token } = theme.useToken();
    const [tags, setTags] = useState(['Unremovable', 'Tag 2', 'Tag 3']);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef(null);
    const editInputRef = useRef(null);

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);
    useEffect(() => {
        editInputRef.current?.focus();
    }, [inputValue]);
    const handleClose = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        console.log(newTags);
        setTags(newTags);
    };
    const showInput = () => {
        setInputVisible(true);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
    };
    const handleEditInputChange = (e) => {
        setEditInputValue(e.target.value);
    };
    const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setInputValue('');
    };
    const tagInputStyle = {
        width: 78,
        verticalAlign: 'top',
    };
    const tagPlusStyle = {
        background: token.colorBgContainer,
        borderStyle: 'dashed',
    };

    return (
        <>
            <div className='home-parent'>

                <div className="gridview-parent">

                    <Back />

                    <ProductHeader />

                    <div className='section' style={{ marginBottom: '24px' }}>
                        <div className='project-desc-parent'>
                            <p className='desc-title'>Project Description</p>
                            <TextArea className="project-desc-input" placeholder="Enter Project Description" autoSize />
                        </div>

                        <div className='environment-stacks-parent'>
                            <div className="environment-parent">
                            <p className='desc-title'>Environment</p>

                                
                            {tags.map((tag, index) => {
                                if (editInputIndex === index) {
                                    return (
                                        <Input
                                            ref={editInputRef}
                                            key={tag}
                                            size="small"
                                            style={tagInputStyle}
                                            value={editInputValue}
                                            onChange={handleEditInputChange}
                                            onBlur={handleEditInputConfirm}
                                            onPressEnter={handleEditInputConfirm}
                                        />
                                    );
                                }
                                const isLongTag = tag.length > 20;
                                const tagElem = (
                                    <Tag
                                        key={tag}
                                        closable={index !== 0}
                                        style={{
                                            userSelect: 'none',
                                        }}
                                        onClose={() => handleClose(tag)}
                                    >
                                        <span
                                            onDoubleClick={(e) => {
                                                if (index !== 0) {
                                                    setEditInputIndex(index);
                                                    setEditInputValue(tag);
                                                    e.preventDefault();
                                                }
                                            }}
                                        >
                                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                        </span>
                                    </Tag>
                                );
                                return isLongTag ? (
                                    <Tooltip title={tag} key={tag}>
                                        {tagElem}
                                    </Tooltip>
                                ) : (
                                    tagElem
                                );
                            })}

                            {inputVisible ? (
                                <Input
                                    ref={inputRef}
                                    type="text"
                                    size="small"
                                    style={tagInputStyle}
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onBlur={handleInputConfirm}
                                    onPressEnter={handleInputConfirm}
                                />
                            ) : (
                                <Tag style={tagPlusStyle} onClick={showInput}>
                                    <PlusOutlined /> New Tag
                                </Tag>
                            )}
                            </div>

                            <div className="stacks-parent">
                            <p className='desc-title'>Stacks</p>

                                
                            <Select
    mode="tags"
    style={{
      width: '100%',
    }}
    placeholder="Tags Mode"
    onChange={handleChange}
    options={options}
  />
                            </div>

                        </div>



                    </div>


                </div>

            </div>
        </>
    )
}

export default ProjectAddEditPage