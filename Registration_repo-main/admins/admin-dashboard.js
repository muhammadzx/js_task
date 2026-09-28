const adminName = document.getElementById("adminName");
const totalUsers = document.getElementById("totalUsers");
const normalUsers = document.getElementById("normalUsers");
const adminUsers = document.getElementById("adminUsers");
const usersCount = document.getElementById("usersCount");
const usersTableBody = document.getElementById("usersTableBody");
const logoutBtn = document.getElementById("logoutBtn");
const users = JSON.parse(localStorage.getItem("users")) || [];
const admin = JSON.parse(localStorage.getItem("currentAdmin")) || [];
const admins = JSON.parse(localStorage.getItem("admins")) || [];
const allUsers = [...admins, ...users];
console.log(allUsers);

adminName.textContent = admin.name;
totalUsers.textContent = allUsers.length;
normalUsers.textContent = users.length;
adminUsers.textContent = admins.length;
usersCount.textContent = allUsers.length;

allUsers.forEach(function(user){
    const tr = document.createElement("tr");
    for(const i in user){
        const td = document.createElement("td");
        const span = document.createElement("span");

        if(i==="role"){
            
            span.textContent=user[i];
            span.classList.add("role-badge")

            if(user[i]==="User"){
            span.classList.add("user")
        }else {
            
            span.classList.add("admin")
        }
            td.appendChild(span)

            }else 
                if(i==="password"){
            span.textContent="Active"
            span.classList.add("status-badge")
            td.appendChild(span)
            }
            else{
                td.textContent=user[i];
            }
           
        tr.appendChild(td);
usersTableBody.appendChild(tr)
    }
})

logoutBtn.addEventListener("click",function(e){
    window.location.href="/login/login.html"
    localStorage.removeItem("currentAdmin")
})