export const addOrRemoveFromCookBook = (list, recipe) => {
  const existingCard = list.find((card) => card.id === recipe.id);

  if (existingCard) {
    return list.filter((card) => card.id !== recipe.id);
  }
  if (!existingCard) {
    return [...list, recipe];
  }
};
