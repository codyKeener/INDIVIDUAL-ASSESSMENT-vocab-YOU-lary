import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL LANGUAGES
const getLanguages = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json?orderBy="uid"&equalTo="${user.uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// CREATE LANGUAGE
const createLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE LANGUAGE
const getSingleLanguage = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE LANGUAGE
const updateLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getLanguages, createLanguage, getSingleLanguage, updateLanguage
};
