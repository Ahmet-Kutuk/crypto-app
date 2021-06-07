import styled from 'styled-components';

export const Label = styled.label`
    position:absolute;
    top:10px;
    right:10px;
    border:2px solid gray;
    border-radius:30px;
    padding:10px;
    cursor:pointer;
`;

export const Toggle = styled.input`
    display:none;

    &:checked ~ ${Label} > .fa-sun{
        opacity:0;
        transform:translateX(0px);
    }

    &:checked ~ ${Label} > .fa-moon{
        opacity:1;
        transform:translateX(-25px);
    }

`;



export const IconItem = styled.i`
    color:${props => props.color};
    font-size:25px;
    text-shadow:0px 0px 20px ${props => props.color};
    transform:translateX(${props => props.transform});
    opacity:${props => props.opacity};
    transition:.3s;
`;