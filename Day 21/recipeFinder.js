"use strict";

// Recipes Data
const recipes = [
  {
    title: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
    instructions: "Cook pasta. Mix with eggs and cheese. Add bacon.",
  },
  {
    title: "Chicken Curry",
    ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
    instructions: "Cook onions, add chicken, spices, and tomatoes.",
  },
  {
    title: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheddar Cheese", "Butter"],
    instructions: "Butter bread, place cheese between slices, and grill.",
  },
  {
    title: "Veggie Stir Fry",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
    instructions: "Stir fry vegetables and add soy sauce.",
  },
];

// *** MY CODE ***

function getId(tag) {
  return document.getElementById(tag);
}

const searchEl = getId("search");
searchEl.addEventListener("keyup", (e) => {
  const str = e.target.value.toLowerCase();
  filterList(str);
  if (str === "") {
    localStorage.removeItem("searchString");
    return;
  }
  localStorage.setItem("searchString", str);
});
const listEl = getId("list");

// Reset Button functionality
const rBtn = getId("reset-btn");
rBtn.addEventListener("click", (e) => {
  searchEl.value = "";
  localStorage.removeItem("searchString");
  filterList("");
});

// Recipe template and cloning
const template = getId("template");

function listRecipes(recipes) {
  // Iterate iver recipes and add them to the list.
  recipes.forEach((r) => {
    const clone = template.content.cloneNode(true);
    const titleEl = clone.querySelector(".title");
    const ingredientsEl = clone.querySelector("#ingredients");
    const instructionsEl = clone.querySelector("#instructions");
    titleEl.textContent = r.title;
    // Ingredient list
    r.ingredients.forEach((i) => {
      const li = document.createElement("li");
      li.textContent = i;
      ingredientsEl.append(li);
    });
    instructionsEl.textContent = r.instructions;
    listEl.append(clone);
  });
  // Not found element.
  const info = document.createElement("p");
  info.setAttribute("id", "not-found");
  info.textContent = "No recipe found.";
  info.classList.add("hidden");
  listEl.append(info);
  listEl.addEventListener("click", expandRecipe);
}

function filterList(searched) {
  const recipesElems = Array.from(document.querySelectorAll(".recipe"));
  recipesElems.forEach((r) => {
    if (
      r.querySelector(".title").textContent.toLowerCase().includes(searched)
    ) {
      r.classList.remove("hidden");
    } else {
      r.classList.add("hidden");
    }
  });

  let isEmpty = recipesElems.some((e) =>
    e.querySelector(".title").textContent.toLowerCase().includes(searched)
  );
  const emptyInfo = getId("not-found");
  if (isEmpty) {
    emptyInfo.classList.add("hidden");
  } else {
    emptyInfo.classList.remove("hidden");
  }
}

function expandRecipe(e) {
  const content = e.target.parentElement.querySelector(".content");
  const otherContent = listEl.querySelectorAll(".content.show");
  if (e.target.classList.contains("title")) {
    otherContent.forEach((e) => {
      e.classList.remove("show");
    });
    content.classList.add("show");
  }
}

listRecipes(recipes);

document.addEventListener("DOMContentLoaded", () => {
  const str = localStorage.getItem("searchString");
  if (str) {
    filterList(str);
    searchEl.value = str;
  }
});
