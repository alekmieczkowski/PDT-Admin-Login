import React, { Component } from 'react'
import classes from './Members.scss';
import { connect } from 'react-redux';
import UserList from '../../../components/AdminPortal/Members/UserList/UserList';
import Toolbar from '../../../components/AdminPortal/Members/Toolbar/Toolbar';
import SearchBar from '../../../components/AdminPortal/Members/SearchBar/SearchBar';
import {getUserById, acceptUser, denyUser,getAccessRequests, getActiveUsers, getAlumniUsers, toggleUserAdmin, updateUserStatus} from '../../../services/AdminService';
import {editUser} from '../../../services/UpdateService';
import * as Page from '../../../components/AdminPortal/Members/Toolbar/ToolbarPages';
import {filterObjArrayByValue} from '../../../services/DataServices';
import {showLoading, hideLoading} from '../../../services/LoadingService';
import {STATUS_ALUMNI, STATUS_REMOVE, STATUS_ACTIVE} from '../../../store/actions/admin';
import { showError } from '../../../services/ErrorService';
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
       if(this.state.activePage === nextState.activePage){
        if(nextProps.active === this.props.active && nextProps.alumni === this.props.alumni && nextProps.requests === this.props.requests){
            if(this.state.loading)
                return false;
        }
       }
        return true;
    }
   
    
    _setActivePage = (page)=>{
        this.setState({activePage: page });
    }

    _setActiveData = async ()=>{

        //set the correct data for correct page
        switch(this.props.page){
            case Page.ACTIVE:
                this.setState({activeData: [...this.props.active]});
                await getActiveUsers();
                this.setState({activeData: [...this.props.active]});
                break;
            case Page.ALUMNI:
                this.setState({activeData:[...this.props.alumni]});
                getAlumniUsers();
                await this.setState({activeData:[...this.props.alumni]});
                break;
            case Page.PENDING:
                this.setState({activeData:[...this.props.requests]});
                await getAccessRequests();
                this.setState({activeData:[...this.props.requests]});
                break;
            case Page.REMOVED:
                this.setState({activeData:[...this.props.removed]});
                break;
            default:
                this.setState({activeData: []});
                break;
        }


    }

    _onSearchInput = (searchText) =>{

        //check if search is empty, reset data to default
        if(searchText.length === 0){
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
        updateUserStatus(id, STATUS_ACTIVE);
    }

    /*Make User Inactive*/
    _makeRemoved = (id) =>{
        if(this.props.user.user_id === id){
            showError("You cannot remove yourself");
        }
        else{
            updateUserStatus(id, STATUS_REMOVE);
        }
        
    }

    /*Make User Alumni*/
    _makeAlumni = (id) =>{
        if(this.props.user.user_id === id){
            showError("You cannot make yourself Alumni");
        }
        else{
            updateUserStatus(id, STATUS_ALUMNI);
        }
        
    }

    /*Toggle User Admin Status*/
    _toggleAdmin = async (id, isAdmin) =>{
        console.log("current ID: " + this.props.user.user_id + "  users ID: " + id);
        if(this.props.user.user_id === id){
            showError("You cannot remove your own admin status");
        }
        else{
            await toggleUserAdmin(id, isAdmin);
        }  
    }

    /*Edit user*/
    _editUser = async (id) =>{
        await editUser(getUserById(id));

    }

    /*Accept User Request*/
    _acceptRequest = async (id)=>{
        this.setState({loading: true}); 
        await acceptUser(id);
        this.setState({loading: false}); 
    }

    /*Deny User Request*/
    _denyRequest = async (id)=>{
        this.setState({loading: true}); 
        await denyUser(id);
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
                        removed={this._makeRemoved}
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
        removed: state.api.users.removed,
        requests: state.admin.requests,
        user: state.api.user
        
    };
};

export default connect(mapStateToProps)(Members);