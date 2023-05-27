const elvenShiledRecipe = {
    leatherScripts: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}

const elvenGauntletsRecipe = {
    ...elvenShiledRecipe,
    leather: 1,
    refinedMoonstone: 3
}

console.log(elvenShiledRecipe);
console.log(elvenGauntletsRecipe);