import { store } from './store/index.js';
import { Provider } from 'react-redux';
import DataList from './components/DataList';

const App = () => {
  return (
    <Provider store={store}>
      <DataList />
    </Provider>
  );
};

export default App;
