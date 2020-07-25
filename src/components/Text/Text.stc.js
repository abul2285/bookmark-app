import styled, { css } from "styled-components";

function getType({ type }) {
    switch (type) {
        case "success": {
            return css`
                color: #568307;
            `;
        }
        case "error": {
            return css`
                color: #db303f;
            `;
        }
        case "info": {
            return css`
                color: #0062ff;
            `;
        }
        case "inactive": {
            return css`
                color: #757b8a;
            `;
        }
        default:
            return null;
    }
}

const TextStc = styled.p`
    ${getType}
`;

export default TextStc;
