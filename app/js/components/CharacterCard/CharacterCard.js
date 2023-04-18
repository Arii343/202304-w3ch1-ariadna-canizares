import Component from "../Component/Component.js";
import Fighter from "../../Characters/Fighter/Fighter.js";
import Advisor from "../../Characters/Advisor/Advisor.js";
import King from "../../Characters/King/King.js";
import Squire from "../../Characters/Squire/Squire.js";

class CharacterCard extends Component {
  character;

  constructor(parentElement, character) {
    super(parentElement, "div", "card character__card");

    this.character = character;
    this.renderHTML();
  }

  renderHTML() {
    console.log(this.character);
    this.element.innerHTML = `
     <img src="${this.character.characterData.imageSource}" alt="${
      this.character.characterData.name
    } ${
      this.character.characterData.family
    }" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${
              this.character.characterData.name
            } & ${this.character.characterData.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: ${this.character.characterData.age} yrs</li>
                <li>
                  State:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
              ${
                this.character?.yearsOfReign
                  ? `<li>Years of Reign:${this.character.yearsOfReign}</li>`
                  : ""
              }
                 ${
                   this.character?.weapon
                     ? `<li>Weapon:${this.character.weapon}</li>`
                     : ""
                 }
                  ${
                    this.character?.dexterity
                      ? `<li>Dexterity:${this.character.dexterity}</li>`
                      : ""
                  } 
                   ${
                     this.character?.kissAssLevel
                       ? `<li>Kiss Ass Level:${this.character.kissAssLevel}</li>`
                       : ""
                   } 
                   ${
                     this.character?.advises
                       ? `<li>Advises to:${this.character.advises.characterData.name}</li>`
                       : ""
                   } 
                   ${
                     this.character?.serves
                       ? `<li>Serves to:${this.character.serves.characterData.name}</li>`
                       : ""
                   } 
              </ul>
              <div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
              </div>
            </div>
          </div>
          <i class="emoji">
            ${this.character instanceof Fighter ? "🗡" : ""}
            ${this.character instanceof King ? "👑" : ""}
            ${this.character instanceof Advisor ? "🎓" : ""}
            ${this.character instanceof Squire ? "🛡" : ""}
          </i>`;
  }
}

export default CharacterCard;
