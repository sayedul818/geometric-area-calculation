document.getElementById("triangle-btn").addEventListener("click",function(){
    const triangleBInputFieldValue=getInputFieldValueById("triangle-b-field");
    const triangleHInputFieldValue=getInputFieldValueById("triangle-h-field");
    const area=parseFloat(0.5*triangleBInputFieldValue*triangleHInputFieldValue)+"cm²";
    getResultFieldValueById("tr-result",area);
})
document.getElementById("rectangle-btn").addEventListener("click",function(){
    const triangleBInputFieldValue=getInputFieldValueById("rectangle-w-field");
    const triangleHInputFieldValue=getInputFieldValueById("rectangle-l-field");
    const area=triangleBInputFieldValue*triangleHInputFieldValue +"cm²";
    getResultFieldValueById("rec-result",area);
})
document.getElementById("parallelogram-btn").addEventListener("click",function(){
    const triangleBInputFieldValue=getInputFieldValueById("parallelogram-b-field");
    const triangleHInputFieldValue=getInputFieldValueById("parallelogram-h-field");
    const area=triangleBInputFieldValue*triangleHInputFieldValue +"cm²";
    getResultFieldValueById("paral-result",area);
})
document.getElementById("rhombus-btn").addEventListener("click",function(){
    const triangleBInputFieldValue=getInputFieldValueById("rhombus-d1-field");
    const triangleHInputFieldValue=getInputFieldValueById("rhombus-d2-field");
    const area=0.5*triangleBInputFieldValue*triangleHInputFieldValue +"cm²";
    getResultFieldValueById("rhom-result",area);
})
document.getElementById("Pentagon-btn").addEventListener("click",function(){
    const triangleBInputFieldValue=getInputFieldValueById("pentagon-p-field");
    const triangleHInputFieldValue=getInputFieldValueById("pentagon-h-field");
    const area=0.5*triangleBInputFieldValue*triangleHInputFieldValue +"cm²";
    getResultFieldValueById("pen-result",area);
})
document.getElementById("oval-btn").addEventListener("click",function(){
    const triangleBInputFieldValue=getInputFieldValueById("oval-a field");
    const triangleHInputFieldValue=getInputFieldValueById("oval-b field");
    const area=(3.1416*triangleBInputFieldValue*triangleHInputFieldValue).toFixed(4) +"cm²";
    getResultFieldValueById("oval-result",area);
})
document.getElementById("convert-btn1").addEventListener("click",function(){
    const MitreResultValue = mitreResultFieldValueById("tr-result")
    if(isNaN(MitreResultValue)){
        alert("click")
        return;
    }
    const result = (MitreResultValue*0.0001).toFixed(3)+"m²";
    getResultFieldValueById("tr-result",result);
})
document.getElementById("convert-btn2").addEventListener("click",function(){
    const MitreResultValue = mitreResultFieldValueById("rec-result")
    if(isNaN(MitreResultValue)){
        alert("click")
        return;
    }
    const result = (MitreResultValue*0.0001).toFixed(3)+"m²";
    getResultFieldValueById("rec-result",result);
})
document.getElementById("convert-btn3").addEventListener("click",function(){
    const MitreResultValue = mitreResultFieldValueById("paral-result")
    if(isNaN(MitreResultValue)){
        alert("click")
        return;
    }
    const result =(MitreResultValue*0.0001).toFixed(3)+"m²";
    getResultFieldValueById("paral-result",result);
})
document.getElementById("convert-btn4").addEventListener("click",function(){
    const MitreResultValue = mitreResultFieldValueById("rhom-result")
    if(isNaN(MitreResultValue)){
        alert("click")
        return;
    }
    const result = (MitreResultValue*0.0001).toFixed(3)+"m²";
    getResultFieldValueById("rhom-result",result);
})
document.getElementById("convert-btn5").addEventListener("click",function(){
    const MitreResultValue = mitreResultFieldValueById("pen-result")
    if(isNaN(MitreResultValue)){
        alert("click")
        return;
    }
    const result =(MitreResultValue*0.0001).toFixed(3)+"m²";
    getResultFieldValueById("pen-result",result);
})
document.getElementById("convert-btn6").addEventListener("click",function(){
    const MitreResultValue = mitreResultFieldValueById("oval-result")
    if(isNaN(MitreResultValue)){
        alert("click")
        return;
    }
    const result = (MitreResultValue*0.0001).toFixed(3)+"m²";
    getResultFieldValueById("oval-result",result);
})