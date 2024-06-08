import { getLanguages } from '../../api/languageData';
import renderToDom from '../../utils/renderToDom';

const selectLanguage = (user, vocabObj) => {
  let domString = `<label for="language">Select a Language</label>
    <select class="form-control" id="language_id" required>
    <option value="">Select a Language</option>`;

  getLanguages(user).then((languagesArray) => {
    languagesArray.forEach((language) => {
      domString += `
        <option
          value="${language.firebaseKey}"
          ${vocabObj.language_id === language.firebaseKey ? 'selected' : ''}>
            ${language.name}
        </option>`;
    });
    domString += '</select>';
    renderToDom('#select-language', domString);
  });
};

export default selectLanguage;
