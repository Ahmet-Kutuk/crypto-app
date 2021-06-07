import {createGlobalStyle} from 'styled-components';


export const lightTheme = {
    body:"#EAEAEB",
    fontColor:"#000",
    searchInput:"#1d1f27",
    searchColor:"#fff"
}

export const darkTheme ={
    body:"#1d1f27",
    fontColor:"fff",
    searchInput:"#fff",
    searchColor:"#000"
}

export const GlobalStyle = createGlobalStyle`
    body{
        background-color:${props => props.theme.body};
        height:100%;
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    
`;