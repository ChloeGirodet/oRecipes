import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import Error from 'src/components/Error';
import Fav from '../Fav';
import Home from 'src/components/Home';
import Loading from './Loading';
import Menu from 'src/components/Menu';
import Recipe from 'src/components/Recipe';

import './style.scss';
import { fetchRecipes } from '../../actions/recipes';
import { setUser } from '../../actions/user';

function App() {
  const location = useLocation();

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.recipes.loading);
  const logged = useSelector((state) => state.user.logged);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
      dispatch(setUser(loggedUser.pseudo, loggedUser.token));
    }
    dispatch(fetchRecipes());
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 5000,
          style: {
            padding: '20px',
          },
          success: {
            style: {
              background: '#b6f8c4',
            },
          },
          error: {
            style: {
              background: '#fcd34d',
            },
          },
        }}
      />

      <div className="app">
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:slug" element={<Recipe />} />
          {logged && <Route path="/favorites" element={<Fav />} />}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
