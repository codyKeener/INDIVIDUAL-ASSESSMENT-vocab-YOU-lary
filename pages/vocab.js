import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyVocabCards = () => {
  const domString = 'No Vocab cards';
  renderToDom('#vocab-card-container', domString);
};

const showVocabCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-text bold"><strong>${item.language}</strong></p>
        <p class="card-text">${item.definition}</p>
      </div>
    </div>
    `;
  });
  renderToDom('#vocab-cards-container', domString);
};

export { emptyVocabCards, showVocabCards };
