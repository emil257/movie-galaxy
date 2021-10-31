
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import {store, history} from './store'
import MainApp from './app/index'


function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={MainApp}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
