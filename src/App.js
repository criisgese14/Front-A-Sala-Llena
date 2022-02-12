import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import LogInTheatres from "./components/LogInTheatres/LogInTheatres";
import LogInViewer from "./components/LogInViewer/LogInViewer";
import NavBarAll from "./components/NavBar/NavBarAll";
import NavBarTheater from "./components/NavBar/NavBarTheater";
import NavBarViewer from "./components/NavBar/NavBarViewer";
import Home from "./components/Home/Home";
import FormViewers from "./components/Forms/FormViewers.js";
import FormShow from "./components/Forms/FormShow";
import HomeTheater from "./components/HomeTheater/HomeTheater";
import FormTheater from "./components/Forms/FormTheater";
import EditProfileTheater from "./components/Forms/EditProfileTheater";
import HomeViewer from "./components/HomeViewer/HomeViewer";
import FormPutViewer from "./components/Forms/FormPutViewer.js"
import {UserContextProvider} from './context/UserContext.js';
import ShowDetail from "./components/Shows/ShowDetail.js"
import PrivateRoute from "./PrivateRoute";
import Seat from "./components/Seats/Seats";
import PasarelaDePago from "./components/PasarelaDePago/PasarelaDePago";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
      
      <div className="App">
        <header className="App-header">
          <Route exact path='/' component={Home}/>
          <Route exact path='/loginteatres' component={LogInTheatres}/>
          <Route exact path='/loginviewer' component={LogInViewer}/>
          <Route exact path='/formViewerRegister' component={FormViewers}/>
          <Route exact path='/theaterRegister' component={FormTheater}/>
          <Route exact path='/seat' component={Seat}/>
          <Route exact path='/pasarela' component={PasarelaDePago}/>
          <Route exact path='/editProfileTheater/:id' render = {({match}) => <EditProfileTheater props={match.params.id}/>}  />
          {/*<Route exact path='/create/:id' component={FormShow}/>*/}
          <PrivateRoute exact path='/create/:id' component={FormShow}/>
          {/*<Route exact path='/theaterHome/:id' component={HomeTheater}/>*/}
          <PrivateRoute exact path='/theaterHome/:id' component={HomeTheater}/>
          <Route exact path='/viewerHome/:id' component={HomeViewer}/>
          {/* <PrivateRoute exact path='/viewerHome/:id' component={HomeViewer}/> */}
          {/*<Route exact path='/formPutViewer/:id' component={FormPutViewer}/>*/}
          <PrivateRoute exact path='/formPutViewer/:id' component={FormPutViewer}/>
          <Route exact path='/showDetail/:id' component={ShowDetail}/>
        </header>
      </div>
      
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
