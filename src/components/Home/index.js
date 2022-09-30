import { useSelector } from 'react-redux';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import { recipesTitle } from '../../selectors/recipes';

function Home() {
  const recipes = useSelector((state) => state.recipes.list);
  const title = useSelector((state) => recipesTitle(state.recipes.list));

  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text={title}
        recipes={recipes}
      />
    </Page>
  );
};

export default Home;
