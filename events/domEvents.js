import { deleteVocabCard, getSingleVocabCard, getVocabCards } from '../api/vocabData';
import { showVocabCards } from '../pages/vocab';
import addVocabForm from '../components/forms/addVocabForm';

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
      getSingleVocabCard(firebaseKey).then((vocabObject) => addVocabForm(vocabObject));
      getSingleVocabCard(firebaseKey).then(addVocabForm);
    }
  });
};

export default domEvents;
