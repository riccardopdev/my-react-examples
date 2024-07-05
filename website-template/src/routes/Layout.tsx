import { useReducer } from 'react';
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import reducer from '../reducer/DataReducer';
import { AppState } from '../state/AppState';

const Layout = () => {
  const [state, dispatch] = useReducer(reducer, AppState);

  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        <Navigation />
        <Outlet />
      </DataContext.Provider>
    </>
  );
};

export default Layout;
