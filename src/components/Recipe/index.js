import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findRecipe } from 'src/selectors/recipes';

import AppHeader from 'src/components/AppHeader';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Page from 'src/components/Page';

import './style.scss';

function Recipe() {
  const { slug } = useParams();
  const recipe = useSelector((state) => findRecipe(state.recipes.list, slug));

  if (!recipe) {
    return <Navigate to="/error" replace={true} />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients
          list={recipe.ingredients}
        />
        <Instructions
          steps={recipe.instructions}
        />
      </div>
    </Page>
  );
}

export default Recipe;
