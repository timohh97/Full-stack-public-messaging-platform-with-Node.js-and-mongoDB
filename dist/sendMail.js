function checkIfUserLoggedIn()
{

    if(localStorage.getItem("userloggedin")==null)
    {
        alert("Not allowed!")
        window.open(href="./login.html","_self")
    }
}




function updateDropDownMenu()
{
    fetch("https://timoschessl-register.netlify.app/.netlify/functions/server")
    .then(result => {
        result.text().then(text => {

            var flag = false

            var jsonObject = JSON.parse(text)

            var htmlstring =  document.getElementById("dropdown").innerHTML;

            jsonObject.forEach(item => {

                if (!(typeof item.username === 'undefined')) {
                    htmlstring+="<option>"+item.username+"</option>";
                }

            })

            document.getElementById("dropdown").innerHTML= htmlstring;

        })
    })
} 



function sendMail()
{
    alert("Your message has been sent!")
}