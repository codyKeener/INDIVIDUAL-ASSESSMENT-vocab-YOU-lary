import { getVocabCards } from '../api/vocabData';
import addLanguageForm from '../components/forms/addLanguageForm';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocabCards } from '../pages/vocab';
import { signOut } from '../utils/auth';

// NAVIGATION EVENTS
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // ALL VOCAB CARDS
  document.querySelector('#navbar-brand').addEventListener('click', () => {
    getVocabCards(user).then(showVocabCards);
  });

  // CLICK EVENT FOR SHOWING FORM FOR ADDING A VOCAB CARD
  document.querySelector('#create-entry').addEventListener('click', () => {
    addVocabForm(user);
  });

  // CLICK EVENT FOR SHOWING FORM FOR ADDING A LANGUAGE
  document.querySelector('#create-language').addEventListener('click', () => {
    addLanguageForm();
  });
};

export default navigationEvents;
