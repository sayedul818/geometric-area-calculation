 function getInputFieldValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValue=parseFloat(inputField.value);
    inputField.value="";
    if(isNaN(inputFieldValue)){
        alert("please provide a valid number");
        return;
    }
    return inputFieldValue;
 }
 function getResultFieldValueById(resultFieldId,result){
    const resultField=document.getElementById(resultFieldId);
    resultField.innerText=result;
    return;
 }
 function mitreResultFieldValueById(resultFieldId){
    const resultField=document.getElementById(resultFieldId);
    const resultFieldValue=parseFloat(resultField.innerText);
    return resultFieldValue;
 }
