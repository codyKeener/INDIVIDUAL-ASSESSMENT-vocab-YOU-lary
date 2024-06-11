import {
  deleteVocabCard, filterVocabCardsByLanguage, getSingleVocabCard, getVocabCards
} from '../api/vocabData';
import { showVocabCards } from '../pages/vocab';
import addVocabForm from '../components/forms/addVocabForm';
import search from '../components/forms/search';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A VOCAB CARD
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocabCard(firebaseKey).then(() => {
          getVocabCards(user).then(showVocabCards);
        });
      }
    }

    // CLICK EVENT FOR EDITING/UPDATING A VOCAB CARD
    if (e.target.id.includes('edit-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocabCard(firebaseKey).then((vocabObject) => addVocabForm(user, vocabObject));
      getSingleVocabCard(firebaseKey).then(addVocabForm(user));
    }

    // CLICK EVENT FOR FILTERING VOCAB CARDS
    if (e.target.id.includes('filter-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      filterVocabCardsByLanguage(firebaseKey).then((filterVocab) => showVocabCards(filterVocab));
    }

    // CLICK EVENT FOR SHOWING ALL CARDS
    if (e.target.id.includes('all-cards-btn')) {
      getVocabCards(user).then((vocab) => showVocabCards(vocab));
    }
  });

  // TYPE (KEYUP) EVENT FOR TYPING IN THE SEARCH BAR
  document.querySelector('#search-bar-container').addEventListener('keyup', (e) => {
    search(e, user);
  });
};

export default domEvents;
