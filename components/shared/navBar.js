import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar bg-body-tertiary">
  <div class="navbar-left">
    <a class="navbar-brand" href="#">
      <img src="/images/vocab-you-lary-logo.png" width="160" height="34">
    </a>
    <a>Create Entry</a>
  </div>
  <div id="logout-button"></div>
</nav>
  `;

  renderToDom('#navigation', domString);
};

export default navBar;
