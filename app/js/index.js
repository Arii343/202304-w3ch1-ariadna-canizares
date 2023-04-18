import { characters } from "./Characters/Character.js";
import CharacterCard from "./components/CharacterCard/CharacterCard.js";
import List from "./components/List/List.js";
import ListItem from "./components/ListItem/ListItem.js";

const app = document.querySelector(".app");

const list = new List(app, "characters-list row list-unstyled");

characters.forEach((character) => {
  const listItem = new ListItem(list.element, "character col");
  new CharacterCard(listItem.element, character);
});
