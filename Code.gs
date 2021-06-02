/**********tutorial */
//https://www.youtube.com/watch?v=Ju2z8J_p8VQ


var ss= SpreadsheetApp.openById("1eWwOF64Z0hB1C-wRV2RHp6CQu0te4zJ0fFwPEQduO4k");
var ws= ss.getSheetByName("Sheet1")


function doGet(){
  
    
    
    
  var data=ws.getDataRange().getValues();
  var departamentos=[];

  data.forEach(row=>{
    departamentos.push(row[0]);
  });


  var template= HtmlService.createTemplateFromFile("index");
  template.departamentos=departamentos;
  var output= template.evaluate();

  return output;
}

function buscarEmpleados(departamentoSeleccionado){
  var data=ws.getDataRange().getValues();
  var listaEmpleados=[];

  data.map(row=>{
    if(row[0]== departamentoSeleccionado){
      listaEmpleados.push(row[1]);
    }
  });

  return listaEmpleados;
}

  /*

  */




