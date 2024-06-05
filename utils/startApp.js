import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/buttons/logoutButton';
import { getVocabCards } from '../api/vocabData';
import { showVocabCards } from '../pages/vocab';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();

  getVocabCards(user).then((vocab) => showVocabCards(vocab));
};

export default startApp;
