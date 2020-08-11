import React, { useState, useRef, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default (props) => {
    console.log("=== TextBox ===");

    const inputEl = useRef(null);
    const [text, setText] = useState('');

    const handleText = (e) => {
        inputEl.current = e.target.value;
        console.log("[text]text field: " + inputEl.current);
    }
    const handleButton = () => {
        console.log("[execute]text field: " + text);
        console.log("[execute]text field: " + inputEl.current);
        setText(inputEl.current);
    }

    useEffect(() => {
        console.log("[effect]text field: " + text);
    }, [text]
    );

    return (
        <>
            <TextField
                id="filled-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
                variant="filled"
                onChange={handleText}
            />
            <Button variant="contained" color="primary" onClick={handleButton}>Execute</Button>
        </>
    );
}