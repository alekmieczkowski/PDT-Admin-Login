import React, { Component } from 'react';
import classes from './UpdatePost.scss';
import UpdatePostContainer from '../../UI/Update/Posts/Posts';
import Form from '../../../hoc/Form/Form';
import InputContainer from './InputContainer/InputContainer';
import Button from '../../UI/Button/Button';


class UpdatePost extends Component {

    state={
        inputValue:"",
    }

    _updateInput =(event)=>{
        this.setState({inputValue: event.target.value});
    }

    render() {

        return (
            <UpdatePostContainer active={this.props.active}>
                <div className={classes.container}>
                    <Form css={classes.topContainer}>
                        <div className={classes.headerContainer}>
                            {this.props.title}
                        </div>
                        <div className={classes.inputContainer}>
                            <InputContainer value={this.state.inputValue} onChange={this._updateInput}/> 
                        </div>
                    </Form>
                    <div className={classes.bottomContainer}>
                        <div className={classes.imagesContainer}>
                        </div>
                        <div className={classes.submitContainer}>
                        <Button clicked={null} buttonCSS={classes.button} textCSS={classes.buttonText} iconSize={22} iconColor={'#003056'} type={"create"}>Submit</Button>
                        </div>
                    </div>

                </div>
            </UpdatePostContainer>

        )
    }
}

export default UpdatePost;