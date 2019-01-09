import React, {Component} from 'react';
import AdminRouter from '../Routing/AdminRouting/AdminRouting';
import AdminToolbar from  '../../components/AdminPortal/Navigation/Navigation';
import classes from './AdminPortal.scss'
import {connect} from 'react-redux';

class AdminPortal extends Component{

    componentDidMount(){
        //check if user is admin
        if(this.props.admin !== true){
            this.props.history.push('/');
        }
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

const mapStateToProps = state => {
    return {
        admin: state.auth.admin,
    };
};

export default connect(mapStateToProps)(AdminPortal);