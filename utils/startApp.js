import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/buttons/logoutButton';
import { getVocabCards } from '../api/vocabData';
import { showVocabCards } from '../pages/vocab';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  navBar();
  logoutButton();

  getVocabCards(user).then((vocab) => showVocabCards(vocab));
};

export default startApp;
