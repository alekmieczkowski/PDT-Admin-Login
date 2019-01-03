import React, {Component} from 'react';
import Welcome from '../../../components/AdminPortal/Portal/Welcome/Welcome';
import classes from './Homepage.scss';
import User from '../../../components/Blog/UserBadge/UserBadge';
import { connect } from 'react-redux';
import Quicklinks from '../../../components/AdminPortal/Portal/QuickLinks/QuickLinks';

class Homepage extends Component {

    render(){



        console.log("in home");
        return(
            <div className={classes.Homepage}>
                <Welcome name={this.props.user.first_name}/>
                <div className={classes.Container}>
                    <div className={classes.RowA}>
                        <div className={classes.RowAItemA}>
                            <User data={this.props.user}/>  
                        </div>
                        <div className={classes.RowAItemB}>
                            <Quicklinks/>
                        </div>
                    </div>
                </div>
                
            </div>
        );

    }

}


const mapStateToProps = state => {
    return {
        user: state.api.user,
    };
};


export default connect(mapStateToProps)(Homepage);

