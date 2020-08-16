import React, { useState, useRef, useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

export default (props) => {

    const [mystate, setMystate] = React.useState("sample");

    const handleClick = () => {
        console.info('You clicked the Chip.');
        if((mystate === "sample") || (mystate === "Delete")){
            setMystate("Taro");
        }else{
            setMystate("sample");
        }
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
        setMystate("Delete");
    };

    return (
        <>
            <Chip
                label={mystate}
                clickable
                color="primary"
                onClick={handleClick}
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
            />
        </>
    );
}
