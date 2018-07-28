import React, {Component} from 'react';
import Welcome from '../../components/Home/Welcome/Welcome';
import classes from './Homepage.css';
import User from '../../components/Home/User/User';
import PlaceholderUser from '../../assets/img/Homepage/placeholder-user.png';
import Quicklinks from '../../components/Home/Quicklinks/Quicklinks';
class Homepage extends Component {

    componentDidUpdate(){
        console.log("Home did update");
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
                            <User userData={fakeUser}/>
                            <Quicklinks/>
                        </div>
                        <div className={classes.RowAItemB}>
                        </div>
                    </div>
                </div>
                
            </div>
        );

    }

}




export default Homepage;

