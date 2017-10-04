 	var arreglo= Object();
 	var arregloPersona=Object();
 	arreglo={sem1:150,sem2:250, sem3:35,sem4:78,sem5:80}

 	arregloPersona={ "personas":[{"nombre": 'Juan',"apellidos": 'Sin Miedo',"edad": 30,
	                "profesion": 'Ingeniero de sistemas',"ciudad": 'Monteria ',
	                "nota1": 3.5,"nota2": 2.5,},
	            {"nombre": 'Juana',"apellidos": 'Con Miedo',"edad": 20,"profesion": 'Ingeniero Quimico',
	                "ciudad": 'Barranquilla ',"nota1": 4.5,"nota2": 3.5,},
	            {"nombre": 'Maria Fernanda',"apellidos": 'Jimenez',"edad": 22,"profesion": 'Ingeniero Quimico',
	                "ciudad": 'Cienega de Oro ',"nota1": 4.5,"nota2": 3.0,},
	            {"nombre": 'Camila',"apellidos": 'Negrete',"edad": 19,"profesion": 'LI',
	                "ciudad": 'San Pelayo ',"nota1": 3.5,"nota2": 3.7,},
	            {"nombre":'Gustavo',"apellidos": 'Martinez',"edad": 20,"profesion": 'LI',"ciudad": 'Barranquilla ',"nota1": 4.5,"nota2": 3.5,},
	            {"nombre": 'Carlos',"apellidos": 'Lara',"edad": 19,"profesion": 'Estudiante',
	                "ciudad": 'Barranquilla ',"nota1": 2.5,"nota2": 1.5,},
	            {"nombre": 'Luis',"apellidos": 'Montiel',"edad": 24,"profesion": 'Ingeniero Ambiental',
	                "ciudad": 'Monteria ',"nota1": 4.5,"nota2": 5.0,},],
	        
		    "definitiva": function(a, b){return (a + b) / 2;},
		    "notamayor":function(a,b){
		    	if(a>b){
		    		return a;
		    	}
		    	else{
		    		return b;
		    	}
		    }
		    
 	}

    function listPersona(nombre,apellidos,edad,profesion,ciudad,nota1,nota2){

	  var alumno=  Object();
       alumno.nombre=nombre;
       alumno.apellidos=apellidos;
       alumno.edad=edad;
       alumno.profesion=profesion;
       alumno.ciudad=ciudad
       alumno.nota1=nota1;
       alumno.nota2=nota2;

	 
	    arregloPersona.personas.push(alumno);
	    document.write("<table border=5><tr><td>NOMBRES</td><td>APELLIDOS</td>"+
            "<td>EDAD</td>"+
            "<td>PROFESION</td>"+
            "<td>CIUDAD</td>"+
            "<td>NOTA 1</td><td>NOTA 2</td><td>NOTA FINAL</td></tr>");
    	for(est in arregloPersona.personas){
    		document.write("<tr><td>"+arregloPersona.personas[est].nombre+"</td>"+
            "<td>"+arregloPersona.personas[est].apellidos+"</td>"+
            "<td>"+arregloPersona.personas[est].edad+"</td>"+
            "<td>"+arregloPersona.personas[est].profesion+"</td>"+
            "<td>"+arregloPersona.personas[est].ciudad+"</td>"+
            "<td>"+arregloPersona.personas[est].nota1+"</td>"+
            "<td>"+arregloPersona.personas[est].nota2+"</td>"+
            "<td>"+arregloPersona.definitiva(arregloPersona.personas[est].nota1,arregloPersona.personas[est].nota2)+"</td></tr>");
    	}
    	document.write("</table><br><br>");
    }

    function ordBurbuja(ordArray,campo){
        var intercambio;
    	cant=ordArray.length-1;
    	for(var i=0; i<= cant-1;i++ ){
    	  for(var j=0;j<= cant-1; j++){
             switch(campo)
             {
                case 0:intercambio=(ordArray[j].nombre>ordArray[j+1].nombre);break;
                case 1:intercambio=ordArray[j].apellidos>ordArray[j+1].apellidos;break;
                case 2:intercambio=ordArray[j].edad>ordArray[j+1].edad;break;
                case 3:intercambio=ordArray[j].profesion>ordArray[j+1].profesion;break;
                case 7:var n1=arregloPersona.definitiva(ordArray[j].nota1,ordArray[j].nota2);
                       var n2=arregloPersona.definitiva(ordArray[j+1].nota1,ordArray[j+1].nota2);
                       intercambio=n1>n2;break;
                }
            if(intercambio){
                aux=ordArray[j];
                ordArray[j]=ordArray[j+1];
                ordArray[j+1]=aux;
            }
    	  }
    	}
    	return ordArray;
     }

     function ordBurbujaM1(ordArray,campo){
        var intercambio;
        cant=ordArray.length-1;
        for(var i=0; i<= cant-1;i++ ){
          for(var j=0;j<= (cant-1)-i; j++){
             switch(campo)
             {
                case 0:intercambio=ordArray[j].nombre>ordArray[j+1].nombre;break;
                case 1:intercambio=ordArray[j].apellidos>ordArray[j+1].apellidos;break;
                case 2:intercambio=ordArray[j].edad>ordArray[j+1].edad;break;
                case 3:intercambio=ordArray[j].profesion>ordArray[j+1].profesion;break;
                case 7:var n1=arregloPersona.definitiva(ordArray[j].nota1,ordArray[j].nota2);
                       var n2=arregloPersona.definitiva(ordArray[j+1].nota1,ordArray[j+1].nota2);
                       intercambio=n1>n2;break;
                }
            if(intercambio){
                aux=ordArray[j];
                ordArray[j]=ordArray[j+1];
                ordArray[j+1]=aux;
            }
          }
        }
        return ordArray;
     }

      function ordBurbujaM2(ordArray, campo){

       var intercambio;
        cant = ordArray.length - 1;
         var band = false;
          for (var i = 0; i <= cant - 1 && band == false; i++) {
            band = true;
                for(var j = 0; j <= cant - 1; j++){
                    switch(campo){
                        case 0:intercambio = ordArray[j].nombre > ordArray[j+1].nombre; break;
                        case 1:intercambio = ordArray[j].apellido > ordArray[j+1].apellido; break;
                        case 2:intercambio = ordArray[j].edad > ordArray[j+1].edad; break;
                        case 3:intercambio = ordArray[j].profesion > ordArray[j+1].profesion; break;
                        case 4:intercambio = ordArray[j].ciudad > ordArray[j+1].ciudad; break;
                        case 5:intercambio = ordArray[j].nota1 > ordArray[j+1].nota1; break;
                        case 6:intercambio = ordArray[j].nota2 > ordArray[j+1].nota2; break;
                        case 7:var n1 = arregloPersona.definitiva(ordArray[j].nota1,ordArray[j].nota2);
                               var n2 = arregloPersona.definitiva(ordArray[j+1].nota1,ordArray[j+1].nota2);
                               intercambio = n1 > n2; break;
                    }
    
                if (intercambio){
                    band = false;
                    aux = ordArray[j];
                    ordArray[j] = ordArray[j+1];
                    ordArray[j+1] = aux;
                }
              } 
          } 
            return ordArray; 
    }



    function ordSeleccion(ordArray, campo) {
        var intercambio;
        cant = ordArray.length;
    
            for (var i = 0; i < cant - 1; i++) {
                    var tmp = i;
                        for (var j = i + 1; j < cant; j++){
                           
                            switch(campo){
                                case 0:intercambio = ordArray[i].nombre > ordArray[j].nombre; break;
                                case 1:intercambio = ordArray[i].apellido > ordArray[j].apellido; break;
                                case 2:intercambio = ordArray[i].edad > ordArray[j].edad; break;
                                case 3:intercambio = ordArray[i].profesion > ordArray[j].profesion; break;
                                case 4:intercambio = ordArray[i].ciudad > ordArray[j].ciudad; break;
                                case 5:intercambio = ordArray[i].nota1 > ordArray[j].nota1; break;
                                case 6:intercambio = ordArray[i].nota2 > ordArray[j].nota2; break;
                                case 7:var n1 = arregloPersona.definitiva(ordArray[i].nota1,ordArray[i].nota2);
                                       var n2 = arregloPersona.definitiva(ordArray[i+1].nota1,ordArray[i+1].nota2);
                                        intercambio = n1 > n2; break;
                        } 
                        
                        if (intercambio){
                            tmp = j;
                            aux = ordArray[tmp];
                            ordArray[tmp] = ordArray[i];
                            ordArray[i] = aux;
                        }
                    }
            }
            return ordArray;
        }


    function ordInsercion(ordArray, campo){
        
        var intercambio;
        cant = ordArray.length - 1;

            for (var i = 0; i <= cant - 1 ; i++) {
                aux = ordArray[i];
                j = i - 1;                 

                    for(var j = 0; j <= cant - 1; j++){
                        switch(campo){
                            case 0:intercambio = ordArray[j].nombre > ordArray[j+1].nombre; break;
                            case 1:intercambio = ordArray[j].apellido > ordArray[j+1].apellido; break;
                            case 2:intercambio = ordArray[j].edad > ordArray[j+1].edad; break;
                            case 3:intercambio = ordArray[j].profesion > ordArray[j+1].profesion; break;
                            case 4:intercambio = ordArray[j].ciudad > ordArray[j+1].ciudad; break;
                            case 7:var n1 = arregloPersona.definitiva(ordArray[j].nota1,ordArray[j].nota2);
                                   var n2 = arregloPersona.definitiva(ordArray[j+1].nota1,ordArray[j+1].nota2);
                        }            intercambio = n1 > n2; break;
    
                        if(intercambio){
                        aux = ordArray[j];
                        ordArray[j] = ordArray[j+1];
                        ordArray[j+1] = aux;           
                        } 
                    } 
            }
            return ordArray;
    }  

     function ordInserBinaria(ordArray,campo){
      var i;
      var aux;
      var cantidad;
      
      cantidad=ordArray.length-1;
      for ( var i=1; i<=cantidad; i++) {
        aux=ordArray[i];
        izq=0;
        der= i-1;
          while(izq<=der){
            m=Math.trunc((izq+der)/2);
            switch(campo){
               case 0:intercambio= aux.nombre<ordArray[m].nombre; break;
               case 1:intercambio= aux.apellidos<ordArray[m].apellidos; break;
               case 2:intercambio= aux.edad<ordArray[m].edad; break;
               case 3:intercambio= aux.profesion<ordArray[m].profesion; break;
               case 4:intercambio= aux.ciudad<ordArray[m].ciudad; break;
               case 5:intercambio= aux.nota1<ordArray[m].nota1; break;
               case 6:intercambio= aux.nota2<ordArray[m].nota2; break;
               case 7: var n1 = arregloPersona.definitiva(aux.nota1,aux.nota2);
                       var n2 = arregloPersona.definitiva(ordArray[m].nota1,ordArray[m].nota2);
                       intercambio = n1 < n2; break;
                                
            }
            if (intercambio) {
              der=m-1; 
          }
           else {
              izq=m+1;
            }
        }
        for (j=i-1;j>=izq;j--){
        ordArray[j+1]=ordArray[j];
        }
        ordArray[izq]=aux;        
    }
    return ordArray;
  }

  function ordShell(ordArray,campo) {
    switch (campo){
      case 0: campo = "nombre"; break;
      case 1: campo = "apellidos"; break;
      case 2: campo = "edad"; break;
      case 3: campo = "profesion"; break;
      case 4: campo = "ciudad"; break;
      case 5: campo = "nota1"; break;
      case 6: campo = "nota2"; break;
    }
    var salto = [5,3,1];
        for (var g = 0; g < salto.length; g++) {

            for (var i = salto[g]; i < ordArray.length; i++) {

                var temp = ordArray[i][campo];
                var j = i;
                for (; j >= salto[g] && ordArray[j-salto[g]][campo] > temp; j-=salto[g]) {
                    ordArray[j][campo] = ordArray[j- salto[g]][campo];
                }
                ordArray[j][campo] = temp;
            }

        }
        return ordArray;
  }


    function mostrarArrayOrdenado(ordArray,metodo,campo){
        switch(parseInt(metodo)){
            case 0:tit='Burbuja';break;
            case 1:tit='Burbuja Mejorada 1';break;
            case 2:tit='Burbuja Mejorada 2';break;
            case 3:tit='Selección';break;
            case 4:tit='Inserción';break;
            case 5:tit='Inserción Binaria';break;
            case 6:tit='Shell';break;
        }
        switch(parseInt(campo)){
            case 0:camp='NOMBRES';break;
            case 1:camp='APELLIDOS';break;
            case 2:camp='EDAD';break;
            case 3:camp='PROFESION';break;
            case 4:camp='CIUDAD';break;
            case 5:camp='NOTA 1';break;
            case 6:camp='NOTA 2';break;
            case 7:camp='NOTA FINAL';break;
        }
        document.write('<center>');
    	document.write('<center><h1>ARREGLO ORDENADO METODO'+' '+tit+'</h1></center>');
        document.write('<center><h1>POR EL CAMPO:' +camp+'</h1></center>');
    	document.write("<table border=5><tr><td>NOMBRES</td><td>APELLIDOS</td>"+
            "<td>EDAD</td>"+
            "<td>PROFESION</td>"+
            "<td>CIUDAD</td>"+
            "<td>NOTA 1</td><td>NOTA 2</td><td>NOTA FINAL</td></tr>")
    	for(est in ordArray){
    		document.write("<tr><td>"+arregloPersona.personas[est].nombre+"</td>"+
            "<td>"+arregloPersona.personas[est].apellidos+"</td>"+
            "<td>"+arregloPersona.personas[est].edad+"</td>"+
            "<td>"+arregloPersona.personas[est].profesion+"</td>"+
            "<td>"+arregloPersona.personas[est].ciudad+"</td>"+
            "<td>"+arregloPersona.personas[est].nota1+"</td>"+
            "<td>"+arregloPersona.personas[est].nota2+"</td>"+
            "<td>"+arregloPersona.definitiva(arregloPersona.personas[est].nota1,arregloPersona.personas[est].nota2)+"</td></tr>");
    	}
    	document.write("</table>");
        document.write('</center>');
    }


 	function totalEst(){
 		var sum=0;
 		for(key in arreglo){
 		  sum+=arreglo[key];
 		}
 		return sum;
 	}

    

    function seleccionar(){
       var met = document.getElementById('met').value;
       var camp = document.getElementById('campo').value;
       met=parseInt(met);
       camp=parseInt(camp);
       switch(met){
         case 0:var ordenado=ordBurbuja(arregloPersona.personas,camp);break;
         case 1:var ordenado=ordBurbujaM1(arregloPersona.personas,camp);break;
         case 2:var ordenado=ordBurbujaM2(arregloPersona.personas,camp);break;
         case 3:var ordenado=ordSeleccion(arregloPersona.personas,camp);break;
         case 4:var ordenado=ordInsercion(arregloPersona.personas,camp);break;
         case 5:var ordenado=ordInserBinaria(arregloPersona.personas,camp);break;
         case 6:var ordenado=ordShell(arregloPersona.personas,camp);break;
       }
       mostrarArrayOrdenado(ordenado,met,camp);
    }
 	document.write('<center><h1>MANEJO DE ARREGLOS ASOCIATIVOS</h1></center');
 	document.write('<center><h2>');

 	listPersona('Nelidad','Salcedo',18,'LI','Monteria',3.8,4.3);
 	
    document.write("Seleccione Metodo Ordenamiento: <select name=met id='met'>"+
        "<option value=0>Burbuja</option>"+
        "<option value=1>Burbuja Mejorada 1</option>"+
        "<option value=2>Burbuja Mejorada 2</option>"+
        "<option value=3>Seleccion</option>"+
        "<option value=4>Insercion</option>"+
        "<option value=5>Insercion Binaria</option>"+
        "<option value=6>Shell</option>"+
        "</select>"+
        "<br><br>");
    document.write("Seleccione Campo a Ordenar: <select name=campo id='campo'>"+
        "<option value=0>Nombre</option>"+
        "<option value=1>Apellidos</option>"+
        "<option value=2>Edad</option>"+
        "<option value=3>Profesion</option>"+
        "<option value=4>Ciudad</option>"+
        "<option value=5>Nota 1</option>"+
        "<option value=6>Nota 2</option>"+
        "<option value=7>Nota Final</option>"+
        "</select>"+
        "<input type='submit' name='ordenar' value='Ordenar' onclick='seleccionar()' >"+
        "<br><br>");
 	document.write('</h2></center');
