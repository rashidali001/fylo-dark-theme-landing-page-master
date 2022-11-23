function back()
{
    let empty = document.getElementsByClassName("empty")[0];
    let success = document.getElementsByClassName("success")[0];
    let error = document.getElementsByClassName("error")[0];

    empty.style.display = "none";
    success.style.display = "none";
    error.style.display = "none";
}

function ValidateEmail(inputEmail)
{

    /*var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;*/
    if ((inputEmail.value).length == 0)
    {
        let empty = document.getElementsByClassName("empty")[0];
        empty.style.display = "block";
        const sleep = setTimeout(back, 2000);
        return;
    }

    let x = inputEmail.value;
    let atposition=x.indexOf("@");  
    let dotposition=x.lastIndexOf(".");  

    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        let error = document.getElementsByClassName("error")[0];
        error.style.display = "block";
        const sleep = setTimeout(back, 2000);
        return;
    }
    else{
        let success = document.getElementsByClassName("success")[0];
        success.style.display = "block";
        const sleep = setTimeout(back, 2000);
        return;
    }
}