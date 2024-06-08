import renderToDom from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id ="navigation"></div>
  <div id ="main-container">
    <div id="search-and-filter-container">
      <div id="search-bar-container">
      <form id="search-form">
          <input type="text" class="form-control" id="search-bar" placeholder="Search">
        <button type="submit" class="btn btn-primary">Search</button>
      </div>
      <div id="filter-button-container">
        <button class="filter-btn" id="all-cards-btn">All Cards</button>
      </div>
    </div>
    <div id="vocab-cards-container"></div>
    <div id="form-container"></div>
  </div>
  `;

  renderToDom('#app', domString);
};

export default domBuilder;
