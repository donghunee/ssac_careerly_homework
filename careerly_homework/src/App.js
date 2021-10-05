import "./App.css";
import NavbarContainer from "./containers/common/navbar/NavbarContainer";
import HomeContainer from "./containers/home/HomeContainer";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <NavbarContainer />
      <HomeContainer />
    </>
  );
}

export default App;
