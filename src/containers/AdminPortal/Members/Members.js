import React, { Component } from 'react'
import classes from './Members.scss';
import { connect } from 'react-redux';
import UserList from '../../../components/AdminPortal/Members/UserList/UserList';
import Toolbar from '../../../components/AdminPortal/Members/Toolbar/Toolbar';
import SearchBar from '../../../components/AdminPortal/Members/SearchBar/SearchBar';
import {getUserById} from '../../../services/AdminService';
import {editUser} from '../../../services/UpdateService';
import * as Page from '../../../components/AdminPortal/Members/Toolbar/ToolbarPages';
import {filterObjArrayByValue} from '../../../services/DataServices';
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
        activePage: null,
        activeData: [],
    }

    componentDidMount(){
        this.setState({activePage: this.props.page });
        this._setActiveData();
    }

    /*

    dont remember why I added this.. Should do more commenting. 

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.activePage === nextState.activePage){
            return false;
        }
        return true;
    }
    */

    _setActivePage = (page)=>{
        this.setState({activePage: page });
    }

    _setActiveData = ()=>{
        //set the correct data for correct page
        switch(this.props.page){
            case Page.ACTIVE:
                this.setState({activeData: [...this.props.users]});
                break;
            case Page.PENDING:
                this.setState({activeData:[...this.props.requests]});
                break;
            default:
                this.setState({activeData: [...this.props.users]});
                break;
        }
    }

    _onSearchInput = (searchText) =>{

        //check if search is empty, reset data to default
        if(searchText.length === 0){
            console.log("Refresh data");
            this._setActiveData();
        }
        else{
            //set active Data to search query
            let newData = filterObjArrayByValue(this.state.activeData, searchText);
            this.setState({activeData: newData}); 
        }
        
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
                         <SearchBar onSearch={this._onSearchInput}/>
                    </div>
                    
                    <UserList 
                        //active page 
                        page={this.state.activePage}
                        //data to display
                        userData={this.state.activeData}
                        //make user active toggle
                        active={this._makeActive}
                        //make user inactive toggle
                        inactive={this._makeInactive}
                        //make user alumni toggle
                        alumni={this._makeAlumni}
                        //make user admin toggle
                        admin={this._toggleAdmin}
                        //edit user toggle
                        edit={this._editUser}
                        //accept request toggle
                        accept={this._acceptRequest}
                        //deny request toggle
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