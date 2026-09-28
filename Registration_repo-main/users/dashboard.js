const userName = document.getElementById("userName");
const displayName = document.getElementById("displayName");
const displayEmail = document.getElementById("displayEmail");
const user = JSON.parse(localStorage.getItem("currentUser"));
userName.textContent=user.name;
displayName.textContent=user.name;
displayEmail.textContent=user.email;
logoutBtn.addEventListener("click",function(e){
    window.location.href="/login/login.html"
    localStorage.removeItem("currentUser")
})