function cakes(recipe, ing) {
  return Math.min(...Object.entries(recipe).map(([k,v]) => Math.floor((ing[k] || 0) / v)));
}