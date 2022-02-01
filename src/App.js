import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import List from "./components/List/List";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/index.scss';
import {API_VEHICLES, API_PLANETS, API_PEOPLE, SWAPI_PEOPLE, URL_IMG_PERSON, SWAPI_PLANETS, URL_IMG_PLANETS, URL_IMG_VEHICLES, SWAPI_VEHICLES} from "./constants/constants";

function App() {

  return (
    <div className="main">
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/characters' element={<List key={1} category={SWAPI_PEOPLE} api={API_PEOPLE} img={URL_IMG_PERSON}/>}/>
                <Route path='/planets' element={<List key={2} category={SWAPI_PLANETS} api={API_PLANETS} img={URL_IMG_PLANETS}/>}/>
                <Route path='/vehicles' element={<List key={3} category={SWAPI_VEHICLES} api={API_VEHICLES} img={URL_IMG_VEHICLES}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
