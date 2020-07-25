/*****************************************************
 * Packages
 ******************************************************/
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*****************************************************
 * Locals
 ******************************************************/
import SignUpStc, { SignUpWrap } from './SignUp.stc';
import Button from '../Button';
import Input from '../Input';
import Text from '../Text';

/*****************************************************
 * Actions, Selectors
 ******************************************************/
import * as actions from '../../redux/actions';
import { getIsFetching } from '../../redux/selectors/user';
import {
    getAuthUser,
    getAuthError,
    getAuthSuccess,
} from '../../redux/selectors';
import { DorikStyle } from '../Login/Login.stc';
import Image from '../Image';
import Field from '../Field';
import Label from '../Label';

function SignUp() {
    const location = useLocation();
    const dispatch = useDispatch();
    const authUser = useSelector(getAuthUser);
    const isLoading = useSelector(getIsFetching);
    const errorMessage = useSelector(getAuthError);
    const successMessage = useSelector(getAuthSuccess);

    const [state, setState] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const invalidInputs =
        !state.email ||
        !state.password ||
        state.password.length < 6 ||
        state.password !== state.confirmPassword;

    useEffect(() => {
        return () => dispatch(actions.clearUserMessage());
    }, []);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (invalidInputs) return;
        const { search } = location;
        const searchParams = new URLSearchParams(search);
        dispatch(
            actions.createUser({ ...state, promo: searchParams.get('promo') })
        );
    };

    if (authUser) {
        return <Redirect to="/" />;
    }

    return (
        <SignUpWrap>
            <DorikStyle>
                {' '}
                <Image
                    width="94"
                    alt="Dorik.io Logo SVG"
                    src="https://assets.dorik.io/5e373b6c43a72a001f56dbf6/images/logo-beta_aie1gdv8.svg"
                />{' '}
            </DorikStyle>
            <SignUpStc>
                <h2>Create an Account</h2>
                <p className="form--title">
                    Have an Account? <Link to="/login">Login!</Link>
                </p>
                <form method="POST" onSubmit={handleSubmit}>
                    <Field>
                        <Label>Email Address</Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="mb-15"
                            value={state.email}
                            onChange={handleInput}
                            icon={['far', 'envelope']}
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
                    <Field>
                        <Label>Confirm Password</Label>
                        <Input
                            type="password"
                            name="confirmPassword"
                            className="mb-15"
                            value={state.confirmPassword}
                            onChange={handleInput}
                            icon={['far', 'lock-alt']}
                            placeholder="Confirm Password"
                        />
                    </Field>
                    <Button
                        size="3x"
                        fullWidth
                        className="mb-15"
                        onClick={handleSubmit}
                        disabled={invalidInputs || isLoading}
                    >
                        {!isLoading ? (
                            'Register'
                        ) : (
                            <>
                                Registering{' '}
                                <FontAwesomeIcon
                                    spin
                                    icon={['fal', 'spinner']}
                                />
                            </>
                        )}
                    </Button>

                    <Text type={authUser ? 'success' : 'error'}>
                        {authUser ? successMessage : errorMessage}
                    </Text>
                </form>
            </SignUpStc>
        </SignUpWrap>
    );
}

export default SignUp;
