import { showVocabCards } from '../pages/vocab';
import { createVocabCard, getVocabCards, updateVocabCard } from '../api/vocabData';
import { createLanguage, getSingleLanguage, updateLanguage } from '../api/languageData';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCAB CARD
    if (e.target.id.includes('submit-vocab-card')) {
      const payload = {
        definition: document.querySelector('#definition').value,
        language_id: document.querySelector('#language_id').value,
        time_submitted: Date.now(),
        title: document.querySelector('#vocab-word').value,
        uid: user.uid
      };
      // this patches the payload object with a firebaseKey and a language
      createVocabCard(payload).then(({ name }) => {
        getSingleLanguage(payload.language_id).then((language) => {
          const patchPayload = { firebaseKey: name, language: language.name };
          updateVocabCard(patchPayload).then(() => {
            getVocabCards(user).then(showVocabCards);
          });
        });
      });
    }

    // CLICK EVENT FOR EDITING A VOCAB CARD
    if (e.target.id.includes('update-vocab-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        definition: document.querySelector('#definition').value,
        language_id: document.querySelector('#language_id').value,
        time_submitted: Date.now(),
        title: document.querySelector('#vocab-word').value,
        firebaseKey,
      };

      // Updating the language value in case the language_id gets updated, then updating the vocab card
      getSingleLanguage(payload.language_id)
        .then((languageObject) => {
          payload.language = languageObject.name;
          updateVocabCard(payload).then(() => {
            getVocabCards(user).then(showVocabCards);
          });
        });
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A LANGUAGE
    if (e.target.id.includes('submit-language')) {
      const payload = {
        name: document.querySelector('#language-tech').value,
        time_submitted: Date.now(),
        uid: user.uid
      };
      // this patches the payload object with a firebaseKey
      createLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateLanguage(patchPayload).then(() => {
          getVocabCards(user).then(showVocabCards);
        });
      });
    }
  });
};

export default formEvents;
