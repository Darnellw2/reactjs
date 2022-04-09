import { Routes, Route } from "react-router";
import GalleryContainer from "./Components/Containers/GalleryContainer";
import "./App.css";
import DetailContainer from "./Components/Containers/DetailContainer";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<GalleryContainer />} />
        <Route path="/detail/:planetId" element={<DetailContainer />} />
        {/* Here we'll want to add a route to see the details page. Preferably, we use the 'id' of the planet in the route. */}
      </Routes>
    </div>
  );
};

export default App;
