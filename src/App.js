import PeopleList from "./components/PeopleList/PeopleList";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import PlanetsList from "./components/PlanetsList/PlanetsList";
import VehiclesList from "./components/VehiclesList/VehiclesList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/index.scss';

function App() {

  return (
    <div className="main">
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/characters' element={<PeopleList/>}/>
                <Route path='/planets' element={<PlanetsList/>}/>
                <Route path='/vehicles' element={<VehiclesList/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
