const apiUrl = 'http://127.0.0.1:8000/api/v1/';

function fetchWithRetry(url, options) {
    return fetch(url, options)
        .then(response => response.json())
        .catch(error => {
            // Check if it's a CORS error
            if (error.name === 'TypeError' && error.message.includes('cross-origin')) {
                handleCORSFailure();
            } else {
                // Log other types of errors
                console.error('Fetch error:', error);
            }
        });
}

function fetchHomeData() {
    fetchWithRetry(apiUrl + "homes/")
        .then(homeData => {
            console.log("homeData:", homeData);
            displayHomeData(homeData);
        });


}

function displayHomeData(data) {
    const certificateList = document.getElementById("home-list");
    certificateList.innerHTML = "";

    // Loop through the data
    data.forEach(element => {
        // Create HTML elements based on the fetched data
        const htmlContent = `
        <h2>${element.judul}</h2>
        <p>${element.deskripsi}</p>
        `;

        // Append the HTML content to the certificateList container
        certificateList.innerHTML += htmlContent;
    });
}

fetchHomeData()