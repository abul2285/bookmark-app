import styled from 'styled-components';

export const LoginWrap = styled.div`
    display: flex;
    min-height: 100vh;
    padding: 60px 15px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    background-image: linear-gradient(124deg, #9013fe, #101a8e);
`;

export const DorikStyle = styled.div`
    width: 94px;
    height: 40px;
    margin-bottom: 40px;
`;

const Login = styled.div`
    padding: 10px 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px 0 rgba(0, 20, 51, 0.2);
    background-color: #ffffff;
    h2 {
        text-align: center;
        font-size: 24px;
        color: #171a21;
        line-height: 1.33;
        padding: 0;
        margin-bottom: 12px;
    }
    p {
        text-align: center;
        font-size: 16px;
        padding: 0;
        margin: 0;
        &.form--title {
            color: #171a21;
            margin-bottom: 30px;
        }
        &.forget-password {
            font-family: 'Brisa Sans';
            margin-top: 4px;
            color: #0062ff;
        }
    }

    @media screen and (min-width: 768px) {
        width: 500px;
        max-width: 500px;
        padding: 30px 50px;
    }
`;

export default Login;
