import { Route } from "react-router-dom";
import NavbarComponents from "./components/common/NavbarComponents";
import UploadContainer from "./containers/upload/UploadContainer";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

function App() {
  return (
    <>
      <NavbarComponents />
      {/* exact = {true} 여기에 접근했을 때만 떠라 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/upload" component={Upload} />
    </>
  );
}

export default App;
