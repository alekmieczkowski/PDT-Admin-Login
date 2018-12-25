import React, { Component } from 'react';
import classes from './Item.scss';
import { NavLink } from 'react-router-dom';

class Item extends Component {

    _setActive = ()=>{
        this.props.setActive(this.props.id);
    }

    render() {

        //set active styling
        let itemStyle = classes.inactive;
        if (this.props.id === this.props.activeId) {
            itemStyle = classes.active;
        }

        return (
            <NavLink 
            to={this.props.link}
            exact={this.props.exact}
            >
            <div className={[classes.container, itemStyle].join(' ')} onClick={this._setActive}>
                {this.props.children}
            </div>
            </NavLink>
        )
    }

}

export default Item;