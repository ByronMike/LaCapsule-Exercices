function getSecretCode() {
    const code = fetch('https://secret-webservice.vercel.app/code')
        .then(response => response.json())
        .then(data => {
     console.log(data.realSecretCode);
     return code;
});
}

console.log(getSecretCode());


const getUserInfo = fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => {
    console.log(json[4].body);
    return json
  } 
  );
  
  
  function displayUserInfo(userId) {
    return fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json())
        .then(data => {
document.querySelector('#name').textContent = data.name;
document.querySelector('#e-mail').textContent = data.email;
document.querySelector('#phoneNumber').textContent = data.phone;
            return data;
        });
}

displayUserInfo(5);



