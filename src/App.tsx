import { GlobalContext } from './signalState/context/GlobalContext';
import stateContext from './signalState';
import Layout from './components/Layout';

const App = () => (
  <GlobalContext.Provider value={stateContext}>
    <Layout />
  </GlobalContext.Provider>
);

export default App;
