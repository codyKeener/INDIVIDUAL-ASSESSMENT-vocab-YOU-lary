import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addVocabForm = (obj = []) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-vocab-card'}" class="mb-4">
  <div class="mb-3 form-group">
    <label for="vocabWord" class="form-label">Vocab Word</label>
    <input type="text" class="form-control" id="vocabWord">
  </div>
  <div class="mb-3 form-group">
    <label for="definition" class="form-label">Definition</label>
    <input type="text" class="form-control" id="definition">
  </div>
  </form>
  `;
  renderToDom('#form-container', domString);
};

export default addVocabForm;
