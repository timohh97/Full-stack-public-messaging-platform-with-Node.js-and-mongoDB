function checkIfUsernameExists() {

    var username = document.getElementById("username").value;

    fetch("https://tsuser.netlify.app/.netlify/functions/server")
        .then(result => {
            result.text().then(text => {

                var flag = false

                var jsonObject = JSON.parse(text)

                jsonObject.forEach(item => {

                    if (!(typeof item.username === 'undefined')) {
                        if (item.username == username) {

                            flag = true
                            alert("This username already exists!")
                            
                        }
                    }

                })

            postData(flag)

            })
        })

}



function postData(flag) {

    if(flag)
    {
        return false
    }

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var repeatedPassword = document.getElementById("repeat").value;

        if (username.length >= 4) {

            if (password.length >= 6) {


                if (password == repeatedPassword) {
                    fetch("https://tsuser.netlify.app/.netlify/functions/server", {
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({

                            username: username,
                            password: password
                        })

                    })
                        .then(result => {
                            console.log(result)
                            result.text().then(text => { document.getElementById("showData").value = text })
                        })
                    alert("Created new account successfully!")
                }
                else {
                    alert("The passwords are not the same!")
                }

            }
            else {
                alert("Please enter at least 6 characters for the password!")
            }

        }
        else {
            alert("Please enter at least 4 characters for your username!")
        }
 
}



