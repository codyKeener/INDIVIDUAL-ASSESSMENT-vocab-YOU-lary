import renderToDom from '../../utils/renderToDom';
import vocabYouLaryImage from '../../public/images/vocab-you-lary-logo.png';

const navBar = () => {
  const domString = `
  <nav class="navbar bg-body-tertiary">
  <div class="navbar-left">
    <a id="navbar-brand">
      <img id="vocab-you-lary-logo" width="160" height="34">
    </a>
    <a id="create-entry">Create Entry</a>
  </div>
  <div id="logout-button"></div>
</nav>
  `;

  renderToDom('#navigation', domString);

  document.querySelector('#vocab-you-lary-logo').src = vocabYouLaryImage;
};

export default navBar;
