function check_info()  {
      
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    
    
    let user1 = document.getElementById('user1').value;
    let pass1 = document.getElementById('pass1').value;
    
    if (user1 == user && pass1 == pass && user1 !== "" && pass1 !== "")  {
    
    return true;
    }
    
    
    else    {
        alert('სახელი ან პაროლი არასწორია');
        return  false;
    }
    
    }