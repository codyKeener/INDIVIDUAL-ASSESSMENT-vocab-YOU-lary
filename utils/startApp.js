import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/buttons/logoutButton';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
};

export default startApp;
