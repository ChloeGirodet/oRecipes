import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import AppHeader from '../AppHeader';
import Content from 'src/components/Content';
import Page from 'src/components/Page';

function Fav() {
  const token = useSelector((state) => state.user.token);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common.Authorization = `bearer ${token}`;
    axios.get('http://localhost:3001/favorites')
      .then((res) => {
        setRecipes(res.data.favorites);
      });
  }, []);

  return (
    <Page>
      <AppHeader />
      <Content
        title="Vos recettes préférées"
        text="Retrouvez ici vos recettes favorites."
        recipes={recipes}
      />
    </Page>
  );
}

export default Fav;
