document.getElementById('add').addEventListener('submit', function(event){
    event.preventDefault();

    const userEmail = document.getElementById('userEmail').value;
    const userNama = document.getElementById('userNama').value;
    const Username = document.getElementById('Username').value;
    const userpassword = document.getElementById('userpassword').value;
    const userRole = document.getElementById('userRole').value;
    const userFoto = document.getElementById('userFoto').value;
    const token = localStorage.getItem('accessToken');
    
    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            email : userEmail,
            name : userNama,
            username : Username,
            password : userpassword,
            role : userRole,
            foto  : userFoto,
        })
    })
    .then(response => {
        if(response.ok){
            return response.json();
        }else{
            throw new Error('Something went wrong');
        }
    })
    .then(data => {
        console.log('Success: ', data);
        $('#myModal').modal('hide');
        // fetchItems();
        window.location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});