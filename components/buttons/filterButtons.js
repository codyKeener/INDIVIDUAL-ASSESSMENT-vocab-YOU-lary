import { getLanguages } from '../../api/languageData';
import renderToDom from '../../utils/renderToDom';

const filterButtons = (user) => {
  let domString = `
  <button class="filter-btn" id="all-cards-btn">All Cards</button>
  `;
  getLanguages(user).then((languageArray) => {
    languageArray.forEach((language) => {
      domString += `
      <button class="filter-btn" id="filter-btn--${language.firebaseKey}">${language.name}</button>
      `;
    });
    renderToDom('#filter-button-container', domString);
  });
};

export default filterButtons;
