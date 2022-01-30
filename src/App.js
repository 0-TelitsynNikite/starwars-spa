import PeopleList from "./components/PeopleList/PeopleList";
import MainPage from "./components/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/index.scss'

function App() {

  return (
    <div className="main">
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/characters' element={<PeopleList/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
