import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
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
import FormPutViewer from "./components/Forms/FormPutViewer.js";
import { UserContextProvider } from "./context/UserContext.js";
import ShowDetail from "./components/Shows/ShowDetail.js";
import PrivateRouteHomeV from "./PrivateRoutes/PrivateRouteHomeV.js";
import PrivateRouteHomeT from "./PrivateRoutes/PrivateRouteHomeT";
import PrivateRouteCreateShow from "./PrivateRoutes/PrivateRouteCreateShow.js";
import PrivateRouteProfileT from "./PrivateRoutes/PrivateRouteProfileT.js";
import PrivateRoutePutV from "./PrivateRoutes/PrivateRoutePutV";
import Newsletter from "./components/Newsletter/Newsletter";
import SalesHistory from "./components/SalesHistory/SalesHistory";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Route exact path="/" component={Home} />
            <Route exact path="/loginteatres" component={LogInTheatres} />
            <Route exact path="/loginviewer" component={LogInViewer} />
            <Route exact path="/formViewerRegister" component={FormViewers} />
            <Route exact path="/theaterRegister" component={FormTheater} />
            <PrivateRouteProfileT
              exact
              path="/editProfileTheater/:id"
              render={({ match }) => (
                <EditProfileTheater props={match.params.id} />
              )}
            />
            <PrivateRouteCreateShow
              exact
              path="/create/:id"
              component={FormShow}
            />
            {/* <Route
              exact
              path="/create/:id"
              component={FormShow}
            /> */}
            <PrivateRouteHomeT
              exact
              path="/theaterHome/:id"
              component={HomeTheater}
            />
            {/* <Route
              exact
              path="/theaterHome/:id"
              component={HomeTheater}
            /> */}
            <PrivateRouteHomeV
              exact
              path="/viewerHome/:id"
              component={HomeViewer}
            />
            <PrivateRoutePutV
              exact
              path="/formPutViewer/:id"
              component={FormPutViewer}
            />
            <Route exact path="/showDetail/:id" component={ShowDetail} />
            <Route
              exact
              path="/formPutViewer/newsletter/:id"
              component={Newsletter}
            />
            <Route exact path='/saleshistory/:id' component={SalesHistory}/>
          </header>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
