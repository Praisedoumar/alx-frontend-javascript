function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulating an API call with a setTimeout
        setTimeout(() => {
            const success = true; // Simulated API success
            if (success) {
                resolve("Successfully received data from API!");
            } else {
                reject(new Error("Failed to fetch data from API"));
            }
        }, 2000); // Simulating a 2-second delay
    });
}
