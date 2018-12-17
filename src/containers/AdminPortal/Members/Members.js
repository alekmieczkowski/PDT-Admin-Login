import React, {Component} from 'react'
import classes from './Members.scss';
import userViewStyle from '../../../components/AdminPortal/Members/UserList/UserView/UserView.scss';
import UserList from '../../../components/AdminPortal/Members/UserList/UserList';
//import PlaceholderUser from '../../assets/img/Homepage/placeholder-user.png';
import users from '../../../users';

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
class Members extends Component{


    render() {


        const fakeUser = {
            fname: 'Alek',
            lname: 'Mieczkowski',
            email: 'amieczko@uncc.edu',
            position: 'Webmaster',
            phone: '1234567890',
            //profile_img: PlaceholderUser

        }


        return (
                


                <div className={classes.Members}>
                    
                    <UserList userData={users} />


                </div>
              
           

        );


    }


}

export default Members;