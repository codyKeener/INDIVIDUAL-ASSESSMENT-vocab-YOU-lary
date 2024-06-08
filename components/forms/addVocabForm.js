import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
import selectLanguage from './selectLanguage';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (user, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab-card--${obj.firebaseKey}` : 'submit-vocab-card'}" class="mb-4">
      <div class="mb-3 form-group">
        <label for="vocab-word" class="form-label">Vocab Word</label>
        <input type="text" class="form-control" id="vocab-word" value="${obj.title || ''}" required>
      </div>
      <div class="mb-3 form-group">
        <label for="definition" class="form-label">Definition</label>
        <textarea class="form-control" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocab Word</button>
    </form>`;

  renderToDom('#form-container', domString);
  selectLanguage(user, `${obj || ''}`);
};

export default addVocabForm;
