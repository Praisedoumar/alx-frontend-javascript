import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([
    uploadPhoto(),
    createUser(),
  ]).then((values) => {
    const [uploadPhoto, createUser] = values;
    console.log(`${uploadPhoto.body} ${createUser.firstName} ${createUser.lastName}`);
  }).catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
