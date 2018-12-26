import React, { Component } from 'react'
import classes from './Members.scss';
import { connect } from 'react-redux';
import UserList from '../../../components/AdminPortal/Members/UserList/UserList';
import Toolbar from '../../../components/AdminPortal/Members/Toolbar/Toolbar';
import SearchBar from '../../../components/AdminPortal/Members/SearchBar/SearchBar';
import {getUserById} from '../../../services/AdminService';
import {editUser} from '../../../services/UpdateService';
import * as Page from '../../../components/AdminPortal/Members/Toolbar/ToolbarPages';
/**
 * 
 * Containers:
 * - handle importing data from api
 * - handle any refresh calls, update/pull/delete
 * - control lifecycle of page
 * - they write/read from state
 *  - propagate data down into child components
 * 
 * @param  props 
 */
class Members extends Component {


    state={
        searchInput: "",
        activePage: null,
        activeData: [],
    }

    componentDidMount(){
        this.setState({activePage: this.props.page });
        //set the correct data for correct page
        switch(this.props.page){
            case Page.ACTIVE:
                console.log("set active user data")
                this._setActiveData(this.props.users);
                break;
            case Page.PENDING:
                this._setActiveData(this.props.requests);
                break;
            default:
                this._setActiveData(this.props.users);
                break;
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.activePage === nextState.activePage){
            return false;
        }
        return true;
    }

    _setActivePage = (page)=>{
        this.setState({activePage: page });
    }

    _setActiveData = (data)=>{
        this.setState({activeData: data});
    }

    _onSearchInput = (event) =>{
        this.setState({searchInput: event.target.value});
    }

    /*Make User Active*/
    _makeActive = (id) =>{
        console.log("Set Active");
    }

    /*Make User Inactive*/
    _makeInactive = (id) =>{
        console.log("Set Inactive");
    }

    /*Make User Alumni*/
    _makeAlumni = (id) =>{
        console.log("Set Alumni");
    }

    /*Toggle User Admin Status*/
    _toggleAdmin = (id) =>{
        console.log("toggle Admin");
    }

    /*Edit user*/
    _editUser = (id) =>{
        editUser(getUserById(id));
    }

    /*Accept User Request*/
    _acceptRequest = (id)=>{
        console.log("Accept user request");
    }

    /*Deny User Request*/
    _denyRequest = (id)=>{
        console.log("Deny User Request");
    }

    render() {

        return (

            <div className={classes.container}>
                <div className={classes.toolbarContainer}>
                    <Toolbar active={this.state.activePage} setActive={this._setActivePage}/>
                </div>

                <div className={classes.dataContainer}>
                    <div className={classes.topRowContainer}>
                         <div className={classes.dataTypeText}>{this.state.activePage}</div>
                         <SearchBar onSearch={this._onSearchInput} value={this.state.searchInput}/>
                    </div>
                    
                    <UserList 
                        page={this.state.activePage} 
                        userData={this.state.activeData} 
                        active={this._makeActive}
                        inactive={this._makeInactive}
                        alumni={this._makeAlumni}
                        admin={this._toggleAdmin}
                        edit={this._editUser}
                        accept={this._acceptRequest}
                        deny={this._denyRequest}
                        />
                        
                </div>



            </div>



        );


    }


}

const mapStateToProps = state => {
    return {
        users: state.api.users,
        requests: state.admin.requests,
    };
};

export default connect(mapStateToProps)(Members);