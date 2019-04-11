
			function addParrafo()
			{
                let divRespuesta = document.getElementById("respuesta");
                let parrafo = document.getElementsByTagName("p");
                let newParrafo = document.createElement("p"); 
                let textoParrafo=document.createTextNode("parrafo "+(parrafo.length+1));
                newParrafo.appendChild(textoParrafo);
                let buscaBoton = document.getElementById("añadir");
                divRespuesta.insertBefore(newParrafo, buscaBoton); 
                newParrafo.addEventListener("click",eliminar);
			}
			
			function eliminar()
			{
                let divRespuesta = document.getElementById("respuesta");
                let h1Exist = document.getElementsByTagName("h1")[0];
                let buscaBoton = document.getElementById("añadir");
                divRespuesta.removeChild(this);
                if((divRespuesta.children.length)==2){
                    divRespuesta.removeChild(h1Exist);
                    divRespuesta.removeChild(buscaBoton);
                }
                
			}
			
			function lanzar()
			{
                let divRespuesta = document.getElementById("respuesta");
                let titulo = document.getElementsByName("titulo")[0].value;
                let parrafo = document.getElementsByName("numero")[0].value;
                console.log(titulo);
                console.log(parrafo);
                parrafo = +parrafo;
                // let titulo = miFormulario.titulo.value;
                // let parrafo = miFormulario.parrafo.value;
                let h1=document.createElement("h1");
                let textoH1=document.createTextNode(titulo);
                h1.appendChild(textoH1);
                divRespuesta.appendChild(h1);
                
                for(let i = 1; i<=parrafo;i++){
                    let parrafos=document.createElement("p");
                    let textoParrafo=document.createTextNode("parrafo "+i);
                    parrafos.appendChild(textoParrafo);
                    divRespuesta.appendChild(parrafos);
                    parrafos.addEventListener("click",eliminar);
                }

                let boton = document.createElement("input");
                boton.setAttribute("type","button");
                boton.value="añadir";
                boton.id="añadir";
                boton.addEventListener("click",addParrafo);
                divRespuesta.appendChild(boton);
			}


			function validar()
			{
                
                let titulo=miFormulario.titulo.value;
                let numero=miFormulario.numero.value;
                if(/\s+$/.test(numero) || numero=="" || numero.length==0){
                    
                    miFormulario.numero.style.backgroundColor = "red";
                    return false;
                }

                if(!/^[A-Z]{5,20}$/.test(titulo)){
                    miFormulario.titulo.style.backgroundColor = "red";
                    alert("El título debe ser letra A a Z y de 5 a 20 caracteres");
                    
                    
                    return false;
                }

                if(!/^([1-9]|10)$/.test(numero)){
                    miFormulario.numero.style.backgroundColor = "red";
                    alert("El numero debe estar entre 1 y 10");
                    
                    
                    return false;
                }

                miFormulario.btn_lanzar.style.display="block";
                miFormulario.btn_lanzar.onclick=lanzar;
                miFormulario.numero.style.backgroundColor="White";
                miFormulario.title.style.backgroundColor="White";
				miFormulario.titulo.disabled=true;
                miFormulario.numero.disabled=true;
				
			}
			
			
            window.onload = function() {
                // miFormulario.btn_lanzar.style.display="block";
                // miFormulario.btn_lanzar.onclick=lanzar;
                let titulo=miFormulario.titulo;
                let numero=miFormulario.numero;
                titulo.onblur=validar;
                numero.onblur=validar;
				
			};