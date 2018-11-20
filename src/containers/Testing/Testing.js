import React, { Component } from 'react';
import classes from './Testing.css';
import Form from '../../hoc/Form/Form';
import Category from '../../components/Users/Category/Category';
import Admin from '../../components/Users/Admin/Admin';
import PlaceholderUser from '../../assets/img/Homepage/placeholder-user.png';
import users from '../../users';


class Testing extends Component {


    render() {


        const fakeUser = {
            fname: 'Alek',
            lname: 'Mieczkowski',
            email: 'amieczko@uncc.edu',
            position: 'Webmaster',
            phone: '1234567890',
            profile_img: PlaceholderUser

        }


        return (

                <div className={classes.Testing}>
                    <Category></Category>
                    <Admin userData={users} />


                </div>
           

        );


    }


}

export default Testing;
