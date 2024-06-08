import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addLanguageForm = () => {
  clearDom();

  const domString = `
    <form id="submit-language" class="mb-4">
      <div class="mb-3 form-group">
        <label for="language-tech" class="form-text">Language/Tech</label>
        <input type="text" class="form-control" id="language-tech" placeholder="Language name or Technology" value="" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit Language/Tech</button>
    </form>`;

  renderToDom('#form-container', domString);
};

export default addLanguageForm;
