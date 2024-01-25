document.getElementById('update').addEventListener('submit', function(event){
    event.preventDefault();

    const userEmail = document.getElementById('userEmail').value;
    const userNama = document.getElementById('userNama').value;
    const Username = document.getElementById('Username').value;
    const userpassword = document.getElementById('userpassword').value;
    const userRole = document.getElementById('userRole').value;
    const userFoto = document.getElementById('userFoto').value;
    
    if(!nameItem || !descriptionItem){
        alert('Field cannot be empty!');
        return;
    }

    const data = {
        email : userEmail,
        name : userNama,
        username : Username,
        password : userpassword,
        role : userRole,
        foto  : userFoto,
    };

    const token = localStorage.getItem('accessToken');

    fetch(''+idUser+"/", {
        method: 'PUT', // dapat 'POST' tergantung API
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Network response error');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success: ', data);
        $('#myModal').modal('hide');
        // fetchItems();
        window.location.reload();
    })
    .then(updateduser => {
        console.log('User updated: ', updateduser);
        $('#updateModal').modal('hide');
        window.location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan sistem');
    });
});