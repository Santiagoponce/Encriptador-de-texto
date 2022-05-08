function validateString(string)
{
    var c;

    for(var i=0; i<string.length ;   i++)
    {
        c=string.charCodeAt(i);
        if(c>122||(c<97 && c!=32))
            return false;
    }
return true;

}
function encrypt(messageString)
{
    var encryptionKeys=['ai','enter','imes','ober','ufat'];
    var newString='';

    for(var i=0;    i<messageString.length  ;i++)
        switch(messageString[i])
        {
            case 'a':
            newString+=encryptionKeys[0];
            break;

            case 'e':
                newString+=encryptionKeys[1];
                break;
            case 'i':
                newString+=encryptionKeys[2];
                break;
            case 'o':
                newString+=encryptionKeys[3];
                break;
            case 'u':
                newString+=encryptionKeys[4];
                break;
            
            default:
                newString+=messageString[i];
                break;
            
        }
    

    return newString;
    

    
}

function decrypt(messageString)
{
    messageString=messageString.replaceAll('enter','e');
    messageString=messageString.replaceAll('imes','i');
    messageString=messageString.replaceAll('ober','o');
    messageString=messageString.replaceAll('ai','a');
    messageString=messageString.replaceAll('ufat','u');
  
    return messageString;

    
}



function wrapperEncrypt()
{
    var objectStandbyScreen=document.querySelector(".standbyScreen");
    var objectActiveScreenText=document.querySelector(".activeScreenText");
    var objectActiveScreen=document.querySelector(".activeScreen");



    var objectInput=document.querySelector(".inputBox");

        
    if(validateString(objectInput.value)==true)
    {
        objectActiveScreenText.textContent=encrypt(objectInput.value);
         hideElement(objectStandbyScreen);
         showElement(objectActiveScreen);
    }
    else 
        {
            showAlert();
            objectInput.onclick=hideAlert;
        }
            
}

function wrapperDecrypt()
{
    
    var objectStandbyScreen=document.querySelector(".standbyScreen");
    var objectActiveScreenText=document.querySelector(".activeScreenText");
    var objectActiveScreen=document.querySelector(".activeScreen");
    


    var objectInput=document.querySelector(".inputBox");

        
    if(validateString(objectInput.value)==true)
    {
        objectActiveScreenText.textContent=decrypt(objectInput.value);
         hideElement(objectStandbyScreen);
         showElement(objectActiveScreen);
    }
    else 
        {
            showAlert();
            objectInput.onclick=hideAlert;
        }
}

function textCopy()
{
    var string=document.querySelector(".activeScreenText");

    navigator.clipboard.writeText(string.textContent);
}
function initProgram()
{
    var objectButtonDecrypt;
    var objectButtonEncrypt;
    var objectcopyButton;

    objectButtonEncrypt=document.querySelector("#encryptButton");
    objectButtonDecrypt=document.querySelector("#decryptButtton");
    objectcopyButton=document.querySelector(".copyButton");




    objectButtonEncrypt.onclick=wrapperEncrypt;
    objectButtonDecrypt.onclick=wrapperDecrypt;
    objectcopyButton.onclick=textCopy;
}


initProgram();
