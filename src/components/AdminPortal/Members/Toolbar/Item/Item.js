import React, { Component } from 'react';
import classes from './Item.scss';

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
            <div className={[classes.container, itemStyle].join(' ')} onClick={this._setActive}>
                {this.props.children}
            </div>
        )
    }

}

export default Item;