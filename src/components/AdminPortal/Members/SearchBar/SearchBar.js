import React, {Component} from 'react';
import classes from './SearchBar.scss';
import { MdSearch } from 'react-icons/lib/md';
import Textarea from 'react-textarea-autosize';

class SearchBar extends Component{

        state={
            input: ""
        }

        _changeInput =(event)=>{
            this.setState({input: event.target.value});
            this.props.onSearch(event.target.value);
        }

        //ignore enter key on input
        _ignoreEnter = (e) =>{
            if(e.keyCode === 13) {
                e.preventDefault();
            }
        }

        render(){
            return (
            
                <div className={classes.container}>
                    <div className={classes.searchIcon}>
                        <MdSearch size={26} color={'#ffffff'} />
                    </div>
                    <div className={classes.searchBar}>
                        <Textarea
                            className={classes.textInput}
                            placeholder={"Search Name, Bond, Email, Phone Number, ..."}
                            maxRows={1}
                            width={'200px'}
                            maxLength={51}
                            value={this.state.input}
                            onChange={this._changeInput}
                            onKeyDown={this._ignoreEnter}
                            />
                    </div>
                </div>
    
            );
        }
       



}

export default SearchBar;