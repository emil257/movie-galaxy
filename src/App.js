
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import {store, history} from './store'
import MainApp from './app/index'


function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainApp/>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
