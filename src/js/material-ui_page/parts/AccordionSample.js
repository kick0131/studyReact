import React, { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default (props) => {

    const [mystate, setMystate] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        console.log('arg(panel)      : ' + panel);
        console.log('arg(event) -----');
        console.dir(event);
        console.log('arg(isExpanded) : ' + isExpanded);
        setMystate(isExpanded ? panel : false);
    };

    const dummy = (e) => {
        console.log('sample : ' + e);

    }

    return (
        <>
            <Accordion expanded={mystate === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Button variant="contained" color="primary" onClick={dummy} >Primary</Button>
                </AccordionSummary>
                <AccordionDetails>
                    <Button variant="contained" color="secondary" onClick={dummy}>Primary</Button>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
