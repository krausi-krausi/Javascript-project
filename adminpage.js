function check_info()  {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

if (username == "admin" && password == "admin" && username !== "" && password !== "")  {

return true;
}

    else {
        alert('სახელი ან პაროლი არასწორია');
    return  false;
}

}