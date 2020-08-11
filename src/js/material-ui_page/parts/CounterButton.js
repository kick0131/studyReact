import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

export default (props) => {
    console.log("=== CounterButton ===");

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("[effect]count: " + count);
        document.title = `You clicked ${count} times`;
        return function cleanUp (){
            console.log("[cleanup]count: " + count);
        };
    });

    const handleCounter = () =>{
        console.log("[handle]count: " + count);
        setCount(count + 1);
        document.title = `You clicked ${count} times`;
    }

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleCounter}>Click me</Button>
        </>
    );
}