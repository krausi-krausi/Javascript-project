function check_info()  {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

if (username == "admin" && password == "admin" && username !== "" && password !== "")  {

return true;
}

    else {
        alert('სახელი ან პაროლი არასწორია');
    return  false;
}

}