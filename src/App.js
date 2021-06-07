import React,{useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme,darkTheme,GlobalStyle} from './Style/Compoments/theme';
import Search from './Compoments/Search';
import ThemeToggle from './Compoments/ThemeToggle';
function App() {
  const [theme,setTheme] = useState('light');

  const themeToggle = () => {
    theme === "light" ? setTheme('dark') : setTheme('light'); 
  }
  return (
    <ThemeProvider theme={theme==='light' ? lightTheme : darkTheme}>
    <GlobalStyle />
        <Search />  
        <ThemeToggle action={themeToggle} />
    </ThemeProvider>
  );
}

export default App;
