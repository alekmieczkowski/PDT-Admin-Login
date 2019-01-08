import React, { Component } from 'react'
import classes from './Members.scss';
import { connect } from 'react-redux';
import UserList from '../../../components/AdminPortal/Members/UserList/UserList';
import Toolbar from '../../../components/AdminPortal/Members/Toolbar/Toolbar';
import SearchBar from '../../../components/AdminPortal/Members/SearchBar/SearchBar';
import {getUserById, acceptUser, denyUser,getAccessRequests, getActiveUsers, getAlumniUsers} from '../../../services/AdminService';
import {editUser} from '../../../services/UpdateService';
import * as Page from '../../../components/AdminPortal/Members/Toolbar/ToolbarPages';
import {filterObjArrayByValue} from '../../../services/DataServices';
import {showLoading, hideLoading} from '../../../services/LoadingService';
/**
 * 
 * Containers:
 * - handle importing data from api
 * - handle any refresh calls, update/pull/delete
 * - control lifecycle of page
 * - they write/read from state
 * - propagate data down into child components
 * 
 * @param  props 
 */
class Members extends Component {


    state={
        activePage: null,
        activeData: [],
        loading: false,
    }

    componentDidMount(){
        this.setState({activePage: this.props.page });
        this._setActiveData();
    }

    /*
    

    dont remember why I added this.. Should do more commenting. 
    */
    shouldComponentUpdate(nextProps, nextState){

        /*
        if(this.state.activePage === nextState.activePage && this.state.loading === false){
                console.log(" should component Update true");
            return true;
        }
        */
       if(this.state.activePage === nextState.activePage){
        if(nextProps.active === this.props.active && nextProps.alumni === this.props.alumni && nextProps.requests === this.props.requests){
            console.log(" should component Update false");
            if(this.state.loading)
                return false;
        }
       }
       
        console.log(" should component Update true");
        return true;
    }
    
    
    _setActivePage = (page)=>{
        this.setState({activePage: page });
    }

    _setActiveData = async ()=>{

        //this.setState({loading: true});
        //set the correct data for correct page
        switch(this.props.page){
            case Page.ACTIVE:
                
                getActiveUsers();
                this.setState({activeData: [...this.props.active]});
                break;
            case Page.ALUMNI:
                console.log("in alumni");
                getAlumniUsers();
                this.setState({activeData:[...this.props.alumni]});
                console.log("data:" + this.props.alumni);
                break;
            case Page.PENDING:
            console.log("in access requests");
                getAccessRequests();
                this.setState({activeData:[...this.props.requests]});
                break;
            case Page.REMOVED:
                this.setState({activeData:[]});
                break;
            default:
                this.setState({activeData: [...this.props.active]});
                break;
        }
        //this.setState({loading: false});
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
        console.log("Set Removed");
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
    _acceptRequest = async (id)=>{
        this.setState({loading: true}); 
        showLoading("Accepting User Request");
        await acceptUser(id);
        hideLoading();
        this.setState({loading: false}); 
    }

    /*Deny User Request*/
    _denyRequest = async (id)=>{
        this.setState({loading: true}); 
        showLoading("Denying User Request");
        await denyUser(id);
        hideLoading();
        this.setState({loading: false});
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
                    {this.state.loading ? <div className={classes.loading}>Loading...</div> :
                
                
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
                    }
                        
                </div>



            </div>



        );


    }


}

const mapStateToProps = state => {
    return {
        active: state.api.users.active,
        alumni: state.api.users.alumni,
        requests: state.admin.requests,
    };
};

export default connect(mapStateToProps)(Members);