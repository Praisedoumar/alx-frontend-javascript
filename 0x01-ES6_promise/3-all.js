import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  // Create an array of promises
  const promises = [uploadPhoto(), createUser()];

  // Resolve all promises and log the required information
  Promise.all(promises)
    .then(([photoResponse, userResponse]) => {
      const { body: { firstName, lastName } } = userResponse;
      console.log(`${firstName} ${lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}

