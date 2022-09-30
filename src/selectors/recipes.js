/**
 *  To find the desired recipe in the list of recipes
 * @param {Array} recipes - All recipes
 * @param {string} searchedSlug - The slug of the requested recipe
 * @return {Object} - The found recipe
 */
export function findRecipe(recipes, searchedSlug) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}

export function recipesTitle(recipes = []) {
  if (recipes.length === 1) {
    return 'Découvrez notre recette.';
  }

  if (recipes.length > 1) {
    return `Découvrez nos ${recipes.length} recettes gourmandes.`;
  }

  return 'Découvrez prochainement nos recettes.';
}
