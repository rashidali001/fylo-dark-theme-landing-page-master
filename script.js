function ValidateEmail(inputEmail)
{

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ((inputEmail.value).length == 0)
    {
        let empty = document.getElementsByClassName("empty")[0];
        empty.style.display = "block";
    }
    if(inputText.value.match(mailformat))
    {
        let success = document.getElementsByClassName("success")[0];
        success.style.display = "block";
        return true;
    }
    else
    {
        let error = document.getElementsByClassName("error")[0];
        error.style.display = "block";
        return false;
    }
}