import React from 'react';
import classes from './SearchBar.scss';
import { MdSearch } from 'react-icons/lib/md';
import Textarea from 'react-textarea-autosize';

const searchbar = (props) =>{


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
                        value={props.value}
                        onChange={props.onSearch}
                        />
                </div>
            </div>

        );



}

export default searchbar;