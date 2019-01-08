import React, {Component} from 'react';
import AdminRouter from '../Routing/AdminRouting/AdminRouting';
import AdminToolbar from  '../../components/AdminPortal/Navigation/Navigation';
import classes from './AdminPortal.scss'

class AdminPortal extends Component{

    componentDidMount(){
        //get access request info
        //getAccessRequests();
        //get positions
        //getPositions();
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