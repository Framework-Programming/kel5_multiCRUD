document.getElementById('editForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Retrieve form values
    const itemId = document.getElementById('dataId').value;
    const itemJudul = document.getElementById('dataJudul').value;
    const itemDeskripsi = document.getElementById('dataDeskripsi').value;
    const itemLink = document.getElementById('dataDeskripsi').value;

    // Check if required fields are filled
    // if (!itemName || !itemDescription) {
    //     alert('Silahkan isi semua field.');
    //     return;
    // }

    // Prepare data object for the PUT request
    const data = {
        judul: itemJudul,
        deskripsi: itemDeskripsi,
        link_video: itemLink
    };

    // Replace the token with a function to fetch it dynamically if needed
    const getToken = () => localStorage.getItem('accessToken');

    // Make a PUT request to update the item on the server
    fetch(`http://127.0.0.1:8000/api/v1/homes/${itemId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json();
        })
        .then(updateItem => {
            console.log('Item updated', updateItem);
            // Consider providing feedback to the user without a full page reload
            alert('Item updated successfully');
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors gracefully, consider showing an alert or updating UI
        });
});
