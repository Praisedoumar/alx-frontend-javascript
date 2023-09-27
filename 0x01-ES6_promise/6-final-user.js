import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';


function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ])
    .then((res) => {
      const array = [];
      res.forEach((index) => {
        if (index.status === 'fulfilled') {
          array.push({
            status: index.status,
            value: index.value,
          });
        } else {
          array.push({
            status: index.status,
            value: `Error: ${index.reason.message}`,
          });
        }
      });
      return array;
    });
}


export default handleProfileSignup;
