function getToken() {
    return localStorage.getItem('token');
}

function removeToken() {
    localStorage.removeItem('token');
}

function logout() {
    const token = getToken();
    
    if(token){
        removeToken();
        console.log('Logout berhasil !');
    }else{
        console.log('User belum login !');
    }
}

document.getElementById('logoutButton').addEventListener('click', function (event) {
    event.preventDefault();
    
    logout();
});