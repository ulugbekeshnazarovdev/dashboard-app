import { Route, Routes } from "react-router-dom";
import { Add, Edit, Header, Main, SiteBar } from "./components/index";
const App = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <SiteBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:productId" element={<Edit />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
