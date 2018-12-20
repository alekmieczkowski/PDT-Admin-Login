import React, {Component} from 'react';
import AdminRouter from '../Routing/AdminRouting/AdminRouting';
import AdminToolbar from  '../../components/AdminPortal/Navigation/Navigation';
import classes from './AdminPortal.scss'
import {getAccessRequests} from '../../services/AdminService';

class AdminPortal extends Component{

    componentDidMount(){
        //get access request info
        getAccessRequests();
    }

    render(){

        return(

                <div className={classes.container}>
                    <AdminToolbar/>
                    <AdminRouter/>
                </div>
                
        );

    }

}

export default AdminPortal;