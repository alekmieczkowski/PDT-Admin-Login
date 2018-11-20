import React from 'react';
import classes from './Quicklinks.scss';
import Form from "../../../hoc/Form/Form";
import Linkbtn from './Linkbtn/Linkbtn';


const quicklinks = (props) => (
    <Form css={classes.FormCSS}>
        <div><h2 className={classes.HeaderText}>QuickLinks</h2></div>
        <Linkbtn link={'/members'} badgeNumber={6}>Member Approval</Linkbtn>
        <Linkbtn link={'/analytics'}>Analytics</Linkbtn>
    </Form>
   
);


export default quicklinks;