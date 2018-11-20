import React from 'react';
import Form from '../../hoc/Form/Form';
import Logo from '../Logo/Logo';
import GoogleButton from './GoogleButton/GoogleButton';
import classes from './Login.scss';
import {GoogleLogin} from 'react-google-login';
import {clientId} from '../../constants/secrets';

export default class Login extends React.Component {

        
        render() {

                const responseGoogle = (response) => {
                        console.log(response);
                    }

                    
                return (
                        <Form css={classes.FormCSS}>
                                <div className={classes.FormContents}>
                                        <Logo height="140px" color="#003054" />
                                        <h2 className={classes.AdminText}>Admin Portal</h2>
                                        <hr className={classes.Divider} />
                                        <GoogleLogin
                                                clientId= {clientId}
                                                buttonText= "Sign in With google"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                render={renderProps =>(
                                                        <GoogleButton onClick={renderProps.onClick}/>
                                                )}
                                        />
                                        {/**/}
                                </div>
                        </Form>
                );
        }


}
