import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./Style/Compoments/theme";
import Search from "./Compoments/Search";
import ThemeToggle from "./Compoments/ThemeToggle";
import { getData } from "./utils/Api";
import CoinItem from "./Compoments/Coin";
function App() {
  const [theme, setTheme] = useState("light");
  const [coins, setCoins] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const data = getData();
    data.then((data) => setCoins(data.data));
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Search action={handleChange} />
      <ThemeToggle action={themeToggle} />
      {filterCoins.map((coin) => (
        <CoinItem
          key={coin.id}
          name={coin.name}
          img={coin.image}
          pricechange={coin.price_change_percentage_24h}
          symbol={coin.symbol}
          currentprice={coin.current_price}
          market_cap={coin.market_cap}
        ></CoinItem>
      ))}
    </ThemeProvider>
  );
}

export default App;
