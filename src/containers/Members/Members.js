import React, {Component} from 'react'
import Member from '../../components/Members/Members';

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


    render(){
        let text = <p>Hello</p>;
        if(true){
            text= <p>Goodbye</p>
        }
        return(
            <Member>{text}</Member>
            
        );
    }
}

export default Members;