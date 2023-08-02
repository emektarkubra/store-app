import Navbar from "./components/Navbar";
import { GlobalStyle } from "./pages/styled/GlobalStyle";
import SiteRoutes from "./SiteRoutes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div>
        <SiteRoutes />
      </div>
    </>
  );
}

export default App;
