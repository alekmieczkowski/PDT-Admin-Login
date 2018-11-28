import React, {Component} from 'react';
import Welcome from '../../components/Home/Welcome/Welcome';
import classes from './Homepage.scss';
import User from '../../components/Home/User/User';
import PlaceholderUser from '../../assets/img/Homepage/placeholder-user.png';
import Quicklinks from '../../components/Home/Quicklinks/Quicklinks';
import Recentposts from '../../components/Home/Recentposts/Recentposts';

class Homepage extends Component {


    removePostClickedHandler = () =>{
        alert("button clicked");
    }

    render(){
    
        const fakeUser = {
            fname: 'Alek',
            lname: 'Mieczkowski',
            email: 'amieczko@uncc.edu',
            position: 'Webmaster',
            phone: '1234567890',
            profile_img: PlaceholderUser

        }



        console.log("in home");
        return(
            <div className={classes.Homepage}>
                <Welcome name={fakeUser.fname}/>
                <div className={classes.Container}>
                    <div className={classes.RowA}>
                        <div className={classes.RowAItemA}>
                            <User userData={fakeUser} myUser={"alek"}/>
                            <Quicklinks/>
                            
                        </div>
                        <div className={classes.RowAItemB}>
                            <Recentposts delete={this.removePostClickedHandler}/>
                        </div>
                    </div>
                </div>
                
            </div>
        );

    }

}




export default Homepage;

