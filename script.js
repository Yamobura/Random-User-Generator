
function getData() {
  showSpinner();
  fetch('https://randomuser.me/api')
.then((response) => response.json())
.then((data) => {
  hideSpinner();
  displayInfo(data.results[0]);
  
});
}

function displayInfo (user) {
  console.log(user);
    user.gender === 'female' ? document.body.style.backgroundColor = "purple" : document.body.style.backgroundColor = "lightblue";
    document.getElementById('user').innerHTML = 
    ` <row style="display:flex">
    <col><div> <img src="${user.picture.large}"> </div>  </col>
      <col> <div style = "margin-left: 30px;"> 
      <b>Name: </b> ${user.name.first + ' ' + user.name.last} <br>
      <b>Email: </b> ${user.email} <br>
      <b>Phone: </b> ${user.phone} <br>
      <b>Location: </b> ${user.location.city + ' ' + user.location.country} <br>
      <b>Age: </b> ${user.dob.age}
    </div>  </col> 
    </row>
   `
}

function showSpinner () {
  document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner () {
  document.querySelector('.spinner').style.display = 'none';
}

document.getElementById('generate').addEventListener('click', getData);
document.addEventListener('DOMContentLoaded', getData);

