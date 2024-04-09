
const deletepassword = (Website) => {
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrupdated = arr.filter((e) => {
        return e.Website != Website
    })
    localStorage.setItem("passwords", JSON.stringify(arrupdated))
    alert(`Successfully deleted ${Website}'s Password `)
    showpasswords();
}
const showpasswords = () => {



    let tb = document.querySelector("table")
    let data = localStorage.getItem("passwords")
    if (data == null) {
        tb.innerHTML = "No Data To Show"
    }
    else {
        tb.innerHTML = `<tr>
    <th class="content">Website</th>
    <th class="content">Username</th>
    <th class="content">Password</th>
    <th class="content">Delete</th>
</tr>`
        let arr = JSON.parse(data);
        let str = ""

        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];


            str += `<tr>

        <td>${element.Website}</td>
        <td>${element.Username}</td>
        <td>${element.Password}</td>
        <td><button class="btnsm" onclick="deletepassword ('${element.Website}')">Delete</button></td>
             </tr>`
        }


        tb.innerHTML = tb.innerHTML + str
    }
    Website.value = ""
    Username.value = ""
    Password.value = ""
}
showpasswords();

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(Website.value, Username.value, Password.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if (passwords == null) {
        let json = []
        json.push({ Website: Website.value, Username: Username.value, Password: Password.value })
        alert("Password saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({ Website: Website.value, Username: Username.value, Password: Password.value })
        alert("Password saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    showpasswords();
})