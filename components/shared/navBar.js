import renderToDom from '../../utils/renderToDom';
import vocabYouLaryImage from '../../public/images/vocab-you-lary-logo.png';

const navBar = () => {
  const domString = `
  <nav class="navbar bg-body-tertiary">
  <div class="navbar-left">
    <a id="navbar-brand">
      <img id="vocab-you-lary-logo" width="160" height="34">
    </a>
    <a class="navbar-buttons" id="create-entry">Create Entry</a>
    <a class="navbar-buttons" id="create-language">Add Language/Tech</a>
  </div>
  <div id="logout-button"></div>
</nav>
  `;

  renderToDom('#navigation', domString);

  document.querySelector('#vocab-you-lary-logo').src = vocabYouLaryImage;
};

export default navBar;
