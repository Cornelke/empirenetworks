function sendEmail(){

    const Name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const phone=document.getElementById("phone").value
    const content=document.getElementById("message").value
    
    if(!Name ||!email ||!phone ||!content){
        alert("please fill out all fields")
         return
      }
    
    const bodyMessage=`Name: ${Name}<br>
                     Email: ${email}<br>
                     Phone no: ${phone}<br>
                     Body: ${content}<br>`
        
    
        Email.send({
           Host : "smtp.elasticemail.com" ,
           Username: "coneliusangwenyi@gmail.com",
           Password: "CB3537C2422F3A9053570BDA134DD908C199",
           To : "coneliusangwenyi@gmail.com",
           From: "coneliusangwenyi@gmail.com",
           Subject :subject,
           Body: bodyMessage,
        }).then(
            message =>{
                if (message=="OK"){
                    alert("Message sent succesfully")
                }
                else{ alert(message)}
            }
        )
        }


        //SUBSCRIBING TO THE NEWSLETTER//
        function newsLetter(){

            const newEmail=document.getElementById("newsemail").value

            if(!newEmail){
                alert("please fill out all fields")
                 return
              }
            

                alert("Thank you for signing up to our newsletter")

        }
    