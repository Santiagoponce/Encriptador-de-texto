//Funciones para manipular el estilo

function showElement(objectElement)
{
    objectElement.classList.add("show")
}
function hideElement(objectElement)
{
    objectElement.classList.add("hide")
}

function showAlert()
{
    var objectWarningSection=document.querySelector(".warningSection");
    var objectInputWarning=document.querySelector(".inputWarning");

    objectWarningSection.classList.add("warningSectionEmphasize");
    objectInputWarning.className="inputWarningEmphasize";

}
function hideAlert()
{
    var objectWarningSection=document.querySelector(".warningSection");
    var objectInputWarning=document.querySelector(".inputWarningEmphasize");

    objectWarningSection.classList.remove("warningSectionEmphasize");
    objectInputWarning.className="inputWarning";



}