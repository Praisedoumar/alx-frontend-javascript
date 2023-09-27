const getResponseFromAPI = () => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      const responseData = { message: 'API response data' };
      resolve(responseData);
    }, 1000); // Simulate a delay of 1 second
  });
};

export default getResponseFromAPI;

