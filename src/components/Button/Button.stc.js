import styled, { css } from 'styled-components';

function getSize({ size = '1x' }) {
    if (size === '1x') {
        return css`
            height: 40px;
            font-size: 16px;
            padding: 5px 20px;
        `;
    } else if (size === '3x') {
        return css`
            height: 60px;
            font-size: 18px;
            padding: 5px 25px;
        `;
    } else if (size === '2x') {
        return css`
            height: 50px;
            font-size: 16px;
            padding: 5px 20px;
        `;
    }
}

function getType({ btnType: type = 'primary' }) {
    if (type === 'primary') {
        return css`
            color: #fff;
            background: #0062ff;
            border-color: #0062ff;
            &:hover:not([disabled]) {
                background: #065be2;
                border-color: #065be2;
            }
        `;
    } else if (type === 'primary-alt') {
        return css`
            color: #0062ff;
            background: #fff;
            border-color: #0062ff;
            &:hover:not([disabled]) {
                color: #fff;
                background: #0062ff;
                border-color: #0062ff;
            }
        `;
    } else if (type === 'danger') {
        return css`
            color: #fff;
            background: #db303f;
            border-color: #db303f;
            &:hover {
                background: #cc2534;
                border-color: #cc2534;
            }
        `;
    } else if (type === 'danger-alt') {
        return css`
            color: #db303f;
            background: #fff;
            border-color: #db303f;
            &:hover {
                color: #fff;
                background: #db303f;
                border-color: #db303f;
            }
        `;
    } else if (type === 'link') {
        return css`
            border: 0;
            color: #464a53;
        `;
    }
}

const ButtonStc = styled.button`
    cursor: pointer;
    font-weight: 500;
    border: 1px solid;
    border-radius: 5px;
    transition: all 0.3s;
    background: transparent;
    width: ${({ fullWidth }) => fullWidth && '100%'};

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    ${getSize}
    ${getType}
`;

export default ButtonStc;
