import { Route, Switch, BrowserRouter } from "react-router-dom";
// component
import Routes from "./components/user/routes/Routes";

function App() {
  return (
    <BrowserRouter>
      {
        <Route
          render={() => (
            <>
              <Routes />
            </>
          )}
        />
      }
    </BrowserRouter>
  );
}

export default App;
