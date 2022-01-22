import React, { useState } from "react";
import { TextField, Button, Card } from '@mui/material';
import { toRoman, fromRoman } from "../../Utilities/RomanConversion/RomanNumerals";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RomanConversion = () => {
    const [inputVal, setInputVal] = useState('');
    const [currentType, setCurrentType] = useState('Integers');
    const [desiredType, setDesiredType] = useState('Roman');
    const [desiredVal, setDesiredVal] = useState('')
    toast.configure()

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.currentTarget.value;
        setInputVal(val);
    }

    const toggleInput = (e: any) => {
        let newCurrentType = desiredType;
        let newInputVal = desiredVal;
        setDesiredType(currentType);
        setDesiredVal(inputVal);
        setCurrentType(newCurrentType);
        setInputVal(newInputVal);
    }

    const convertType = (e: any) => {
        if(!inputVal) {
            toast.error('Please enter a valid number', {autoClose:3000})
        }
        if(currentType === 'Integers'){
            setDesiredVal(toRoman(parseInt(inputVal)));
        } else {
            let intVal = fromRoman(inputVal).toString()
            setDesiredVal(intVal);
        }
    }

    return (
        <div className="main-view">
                <h1>{currentType} to  <br/>{desiredType} Numerals</h1>
                <div>
                    <TextField 
                        fullWidth 
                        id="outlined-basic" 
                        value={inputVal} 
                        label="Please enter a number" 
                        onChange={onChangeInput} 
                        variant="outlined" 
                        type='text' 
                        onKeyDown={(e) => {
                            if (e.code === "Enter") {
                                document.getElementById('btn-convert')?.click()
                            }
                          }}
                    />
                </div>
                <div>
                    <Button id="btn-convert" fullWidth variant="contained"  style={{backgroundColor:'#76c142'}} onClick={convertType}>Convert</Button>
                </div>
                <div>
                    <Button id="btn-toggle" fullWidth variant="contained" onClick={toggleInput}>Toggle</Button>
                </div>
                <div>
                    <span> {desiredVal === '' ? '' : <strong>{desiredType} Numerals: {desiredVal}</strong>}</span>
                </div>
            </div>
    )
}

export default RomanConversion;