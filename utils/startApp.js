import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/buttons/logoutButton';
import { getVocabCards } from '../api/vocabData';
import { showVocabCards } from '../pages/vocab';
import domEvents from '../events/domEvents';
import filterButtons from '../components/buttons/filterButtons';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  filterButtons(user);
  navigationEvents(user);
  domEvents(user);
  formEvents(user);

  getVocabCards(user).then((vocab) => showVocabCards(vocab));
};

export default startApp;
