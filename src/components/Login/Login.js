/*****************************************************
 * Packages
 ******************************************************/
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import React, { useEffect, useMemo } from 'react';

/*****************************************************
 * Locals
 ******************************************************/
import LoginStc, { LoginWrap, DorikStyle } from './Login.stc';
import Button from '../Button';
import Input from '../Input';
import Text from '../Text';
import * as actions from '../../redux/actions';
import {
    getAuthUser,
    getLoginError,
    getLoginSuccess,
} from '../../redux/selectors';
import { getIsFetching } from '../../redux/selectors/user';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Label from '../Label/Label';
import Field from '../Field';
import Image from '../Image';

function Login(props) {
    const dispatch = useDispatch();
    const authUser = useSelector(getAuthUser);
    const isLoading = useSelector(getIsFetching);
    const errorMessage = useSelector(getLoginError);
    const successMessage = useSelector(getLoginSuccess);
    const { from } = props.location.state || { from: { pathname: '/' } };

    const [state, setState] = React.useState({
        username: '',
        password: '',
    });

    useEffect(() => {
        // window.fbAsyncInit = function () {
        //     window.FB.init({
        //         xfbml: true,
        //         cookie: true,
        //         appId: config.FB_LOGIN_APP_ID,
        //         version: config.FB_LOGIN_APP_VERSION,
        //     });

        //     window.FB.AppEvents.logPageView();
        // };

        // (function (d, s, id) {
        //     var js,
        //         fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) {
        //         return;
        //     }
        //     js = d.createElement(s);
        //     js.id = id;
        //     js.src = 'https://connect.facebook.net/en_US/sdk.js';
        //     fjs.parentNode.insertBefore(js, fjs);
        // })(document, 'script', 'facebook-jssdk');

        return () => dispatch(actions.clearUserMessage());
    }, []);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const isValidInput = useMemo(() => {
        return state.username && state.password.length >= 6;
    }, [state]);

    const handleFBLogin = () => {
        window.FB.login(
            function (response) {
                const { status, authResponse } = response;
                if (status === 'connected') {
                    dispatch(
                        actions.socialLogin({
                            provider: 'facebook',
                            userId: authResponse.userID,
                            accessToken: authResponse.accessToken,
                        })
                    );
                }
            },
            { scope: 'public_profile,email' }
        );
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!isValidInput) return;
        const query = {
            query: `query login($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    token
                    success 
                    message
                    expiresAt
                    user {
                        id 
                        roles
                        name
                        email 
                        avatar
                        country
                        membership { promo }
                    }
                }
            }`,
            variables: {
                email: state.username,
                password: state.password,
            },
        };
        dispatch(actions.requestLogin(query));
    };

    if (authUser) {
        return <Redirect to={from} />;
    }

    return (
        <LoginWrap>
            <Helmet>
                <title>Login - Dorik</title>
            </Helmet>
            <DorikStyle>
                <Image
                    width="94"
                    alt="Dorik.io Logo SVG"
                    src="https://assets.dorik.io/5e373b6c43a72a001f56dbf6/images/logo-beta_aie1gdv8.svg"
                />
            </DorikStyle>
            <LoginStc>
                <h2>Login Into Your Account</h2>
                <p className="form--title">
                    New to Dorik? <Link to="/signup">Sign Up!</Link>
                </p>
                <form method="POST" onSubmit={handleLogin}>
                    <Field>
                        <Label>Email Address</Label>
                        <Input
                            type="text"
                            name="username"
                            className="mb-15"
                            value={state.username}
                            icon={['far', 'envelope']}
                            onChange={handleInput}
                            placeholder="Email Address"
                        />
                    </Field>
                    <Field>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            name="password"
                            className="mb-15"
                            value={state.password}
                            placeholder="Password"
                            onChange={handleInput}
                            icon={['far', 'lock-alt']}
                        />
                    </Field>
                    <Button
                        size="3x"
                        fullWidth
                        htmlType="submit"
                        className="mb-15"
                        disabled={isLoading || !isValidInput}
                    >
                        {!isLoading ? (
                            'Login'
                        ) : (
                            <>
                                Logging in{' '}
                                <FontAwesomeIcon
                                    spin
                                    icon={['fal', 'spinner']}
                                />
                            </>
                        )}
                    </Button>

                    {/* <Button
                        size="2x"
                        fullWidth
                        type="primary-alt"
                        htmlType="button"
                        onClick={handleFBLogin}
                    >
                        Login with Facebook
                    </Button> */}

                    <p className="forget-password">
                        <Link to="/auth/request-password">
                            Forgot password?
                        </Link>
                    </p>

                    <Text type={authUser ? 'success' : 'error'}>
                        {authUser ? successMessage : errorMessage}
                    </Text>
                </form>
            </LoginStc>
        </LoginWrap>
    );
}

export default Login;
