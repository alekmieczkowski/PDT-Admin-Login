import React, {Component} from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import AdminRouter from '../Routing/AdminRouting/AdminRouting';
import AdminToolbar from  '../../components/AdminPortal/Navigation/Navigation';
import classes from './AdminPortal.scss'

class AdminPortal extends Component{

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