class Persona {
    id;
    nombre;
    apellido;
    edad;

    constructor(id,nombre,apellido,edad)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    ToString()
    {
        return this.id + ' - ' + this.nombre + ' - ' + this.apellido + ' - ' + this.edad;
    }
}

class Heroe extends Persona {
    alterEgo;
    ciudad;
    publicado;

    constructor(id,nombre,apellido,edad,alterEgo,ciudad,publicado)
    {
        super(id,nombre,apellido,edad);
        this.alterEgo = alterEgo;
        this.ciudad = ciudad;
        this.publicado = publicado;
    }

    ToString()
    {
        return super.ToString() + this.alterEgo + ' - ' + this.ciudad + ' - ' + this.publicado;
    }
}

class Villano extends Persona {
    enemigo;
    robos;
    asesinatos;

    constructor(id,nombre,apellido,edad,enemigo,robos,asesinatos)
    {
        super(id,nombre,apellido,edad);
        this.enemigo = enemigo;
        this.robos = robos;
        this.asesinatos = asesinatos;
    }

    ToString()
    {
        return super.ToString() + this.enemigo + ' - ' + this.robos + ' - ' + this.asesinatos;
    } 
}

const cadenaConvertir = '[{"id":1, "nombre":"Clark", "apellido":"Kent", "edad":45, "alterego":"Superman", "ciudad":"Metropolis",'+
'"publicado":2002},{"id":2, "nombre":"Bruce", "apellido":"Wayne", "edad":35, "alterego":"Batman", "ciudad":"Gotica",'+
'"publicado":20012},{"id":3, "nombre":"Bart", "apellido":"Alen", "edad":30, "alterego":"Flash", "ciudad":"Central",'+
'"publicado":2017},{"id":4, "nombre":"Lex", "apellido":"Luthor", "edad":18, "enemigo":"Superman", "robos":500,'+
'"asesinatos":7},{"id":5, "nombre":"Harvey", "apellido":"Dent", "edad":20, "enemigo":"Batman", "robos":750,'+
'"asesinatos":2},{"id":666, "nombre":"Celina", "apellido":"kyle", "edad":23, "enemigo":"Batman", "robos":25,'+
'"asesinatos":1}]';

let personasFiltradas = [];
let cadenaJSON = JSON.parse(cadenaConvertir);

cadenaJSON.map((elemento) => {
    if((typeof elemento.enemigo == 'undefined' && typeof elemento.robos == 'undefined' && typeof elemento.asesinatos == 'undefined'))
    {
        personasFiltradas.push(new Heroe(elemento.id,elemento.nombre,elemento.apellido,elemento.edad,elemento.alterego,elemento.ciudad,elemento.publicado));
    }
    else if((typeof elemento.alterEgo == 'undefined' && typeof elemento.ciudad == 'undefined' && typeof elemento.publicado == 'undefined'))
    {
        personasFiltradas.push(new Villano(elemento.id,elemento.nombre,elemento.apellido,elemento.edad,elemento.enemigo,elemento.robos,elemento.asesinatos));
    }
});


function crearTabla()
{
    let tbody = document.getElementById("tbody");
    let tr = document.createElement("tr");

    limpiarTabla();

    if(!tbody.childElementCount > -1)
    {
        personasFiltradas.forEach(element => {
            cargarCampos(element);
        });

    clickearABMForm();
    }
}

var arraySeVeColumna = [];

function cargarCampos(element)
{
    let lstTipo = document.getElementById("lstTipo");
    let tbody = document.getElementById("tbody");

    if((lstTipo.value == "Todos" || lstTipo.value == "Heroes") && element instanceof Heroe)
    {
        let newRow = tbody.insertRow();

        if(arraySeVeColumna[0])
        {
            let id = newRow.insertCell(-1);
            id.innerHTML = element.id;
        }

        if(arraySeVeColumna[1])
        {
            let nombre = newRow.insertCell(-1);
            nombre.innerHTML = element.nombre;
        }

        if(arraySeVeColumna[2])
        {
            let apellido = newRow.insertCell(-1);
            apellido.innerHTML = element.apellido;
        }

        if(arraySeVeColumna[3])
        {
            let edad = newRow.insertCell(-1);
            edad.innerHTML = element.edad;
        }

        if(arraySeVeColumna[4])
        {
            let alterEgo = newRow.insertCell(-1);
            alterEgo.innerHTML = element.alterEgo;
        }

        if(arraySeVeColumna[5])
        {
            let ciudad = newRow.insertCell(-1);
            ciudad.innerHTML = element.ciudad;
        }

        if(arraySeVeColumna[6])
        {
            let publicado = newRow.insertCell(-1);
            publicado.innerHTML = element.publicado;
        }

        if(arraySeVeColumna[7])
        {
            let enemigo = newRow.insertCell(-1);
            enemigo.innerHTML = "-- ";
        }

        if(arraySeVeColumna[8])
        {
            let robos = newRow.insertCell(-1);
            robos.innerHTML = "-- ";
        }

        if(arraySeVeColumna[9])
        {
            let asesinatos = newRow.insertCell(-1);
            asesinatos.innerHTML = "-- "; 
        }
    }
    
    if((lstTipo.value == "Todos" || lstTipo.value == "Villanos") && element instanceof Villano)
    {
        let newRow = tbody.insertRow(tbody.length);

        if(arraySeVeColumna[0])
        {
            let id = newRow.insertCell(-1);
            id.innerHTML = element.id;
        }

        if(arraySeVeColumna[1])
        {
            let nombre = newRow.insertCell(-1);
            nombre.innerHTML = element.nombre;
        }

        if(arraySeVeColumna[2])
        {
            let apellido = newRow.insertCell(-1);
            apellido.innerHTML = element.apellido;
        }

        if(arraySeVeColumna[3])
        {
            let edad = newRow.insertCell(-1);
            edad.innerHTML = element.edad;
        }

        if(arraySeVeColumna[4])
        {
            let alterEgo = newRow.insertCell(-1);
            alterEgo.innerHTML = "-- ";
        }

        if(arraySeVeColumna[5])
        {
            let ciudad = newRow.insertCell(-1);
            ciudad.innerHTML = "-- ";
        }

        if(arraySeVeColumna[6])
        {
            let publicado = newRow.insertCell(-1);
            publicado.innerHTML = "-- ";
        }

        if(arraySeVeColumna[7])
        {
            let enemigo = newRow.insertCell(-1);
            enemigo.innerHTML = element.enemigo;
        }

        if(arraySeVeColumna[8])
        {
            let robos = newRow.insertCell(-1);
            robos.innerHTML = element.robos;
        }

        if(arraySeVeColumna[9])
        {
            let asesinatos = newRow.insertCell(-1);
            asesinatos.innerHTML = element.asesinatos; 
        }
    }
}

function clickearABMForm()
{
    let table = document.getElementById("table");
    let index;

    for(let i=1 ; i<table.rows.length ; i++)
    {
        table.rows[i].ondblclick = function(){
            index = this.rowIndex;

            try{
                cargarABM(this.cells[0].innerHTML,this.cells[1].innerHTML,this.cells[2].innerHTML,
                    this.cells[3].innerHTML,this.cells[4].innerHTML,this.cells[5].innerHTML,
                    this.cells[6].innerHTML,this.cells[7].innerHTML,this.cells[8].innerHTML,this.cells[9].innerHTML);
            }
            catch{
                alert("Para seleccionar una opcion tienen que estar todas las columnas visibles");
            }
            
        }
    }
}

let btnAgregar = document.getElementById("btnAgregar");
let lstTipoABM = document.getElementById("lstTipoABM");
var lstHeroes = true;

btnAgregar.addEventListener("click",(event) => {cargarABM()});
lstTipoABM.addEventListener("change",(event) => {
    if(!lstHeroes)
    {
        CambiarlstTipoABM(lstTipoABM.value,"","","","Enemigo: ","Robos: ","Asesinatos: ");
        lstHeroes = true;
    }
    else
    {
        CambiarlstTipoABM(lstTipoABM.value,"","","","AlterEgo: ","Ciudad: ","Publicado: ");
        lstHeroes = false;
    }
});

function cargarABM(id="",nombre="",apellido="",edad="",alterEgo="",ciudad="",publicado="",enemigo="",robos="",asesinatos="")
{
    document.getElementById("formDatos").style.display = "none";
    document.getElementById("divAbm").style.display = "";
    document.getElementById("inputId").value = id;
    document.getElementById("inputNombre").value = nombre;
    document.getElementById("inputApellido").value = apellido;
    document.getElementById("inputEdad").value = edad;

    if(enemigo == "-- ")
    {
        CambiarlstTipoABM("Heroes",alterEgo,ciudad,publicado,"AlterEgo: ","Ciudad: ","Publicado: ");
    }
    else
    {
        CambiarlstTipoABM("Villanos",enemigo,robos,asesinatos,"Enemigo: ","Robos: ","Asesinatos: ");
    }
}

function CambiarlstTipoABM(tipo,c1,c2,c3,v1,v2,v3)
{
    document.getElementById("lstTipoABM").value = tipo;
    document.getElementById("inputAux1").value = c1;
    document.getElementById("labelAux1").innerHTML = v1;
    document.getElementById("inputAux2").value = c2;
    document.getElementById("labelAux2").innerHTML = v2;
    document.getElementById("inputAux3").value = c3;
    document.getElementById("labelAux3").innerHTML = v3;
}

function limpiarTabla()
{
    let table = document.getElementById("table");
    let tamanio = table.rows.length;

    for(let i=1 ; i<tamanio ; i++)
    {
        table.deleteRow(1);
    }
}



let body = document.getElementById("body");
body.addEventListener("load", init());

function init()
{
    document.getElementById("divAbm").style.display = "none";
    document.getElementById("id").checked = true;
    document.getElementById("nombre").checked = true;
    document.getElementById("apellido").checked = true;
    document.getElementById("edad").checked = true;
    document.getElementById("alterEgo").checked = true;
    document.getElementById("ciudad").checked = true;
    document.getElementById("publicado").checked = true;
    document.getElementById("enemigo").checked = true;
    document.getElementById("robos").checked = true;
    document.getElementById("asesinatos").checked = true;
    arraySeVeColumna = [true,true,true,true,true,true,true,true,true,true];
    crearTabla();
}




let cambio = document.getElementById("lstTipo");
cambio.addEventListener("change", crearTabla);

function limpiarPromedio()
{
    let inputPromedio = document.getElementById("inputEdadPromedio");
    inputPromedio.setAttribute("value", "");
}

function calcularPromedio()
{
    if(personasFiltradas != null) 
    {
        let inputPromedio = document.getElementById("inputEdadPromedio");
        let suma;
        let promedio;
        let listaFiltrada = filtrarLista(cambio.value);
        suma = listaFiltrada.reduce((a,b) => a + b.edad,0);
        promedio = suma / listaFiltrada.length;

        inputPromedio.setAttribute("value", promedio);
    }
}

function filtrarLista(filtro)
{
    let listaFiltrada = personasFiltradas;

    if(filtro == "Heroes")
    {
        listaFiltrada = listaFiltrada.filter(p => p instanceof Heroe);
    }
    else if(filtro == "Villanos")
    {
        listaFiltrada = listaFiltrada.filter(f => f instanceof Villano);
    }

    return listaFiltrada;
}

btnEdadPromedio.addEventListener("click",calcularPromedio);
cambio.addEventListener("change", limpiarPromedio);




function getColumn(col) {
    let table = document.getElementById("table");
    let rLen = table.rows.length;
    let paso = false;

    if (col < 0) {
        return null;
    }

    for (i = 0; i < rLen; i++) {
        tr = table.rows[i];
        if (tr.cells.length > col) { 
            td = tr.cells[col];

            if(td.style.display == "none")      
            {
                td.style.display = "";

                if(!paso)
                {
                    arraySeVeColumna[col] = true;
                    paso = true;
                }
            }
            else
            {
                td.style.display = "none";

                if(!paso)
                {
                    arraySeVeColumna[col] = false;
                    paso = true;
                }
            }
        } 
    }
    crearTabla(); 
}

let cId = document.getElementById("id");
let cNombre = document.getElementById("nombre");
let cApellido = document.getElementById("apellido");
let cEdad = document.getElementById("edad");
let cAlterEgo = document.getElementById("alterEgo");
let cCiudad = document.getElementById("ciudad");
let cPublicado = document.getElementById("publicado");
let cEnemigo = document.getElementById("enemigo");
let cRobos = document.getElementById("robos");
let cAsesinatos = document.getElementById("asesinatos");




cId.addEventListener("click",(event) => {getColumn(0)});
cNombre.addEventListener("click",(event) => {getColumn(1)});
cApellido.addEventListener("click",(event) => {getColumn(2)});
cEdad.addEventListener("click",(event) => {getColumn(3)});
cAlterEgo.addEventListener("click",(event) => {getColumn(4)});
cCiudad.addEventListener("click",(event) => {getColumn(5)});
cPublicado.addEventListener("click",(event) => {getColumn(6)});
cEnemigo.addEventListener("click",(event) => {getColumn(7)});
cRobos.addEventListener("click",(event) => {getColumn(8)});
cAsesinatos.addEventListener("click",(event) => {getColumn(9)});


let thId = document.getElementById("thId");
let thNombre = document.getElementById("thNombre");
let thApellido = document.getElementById("thApellido");
let thEdad = document.getElementById("thEdad");
let thAlterEgo = document.getElementById("thAlterEgo");
let thCiudad = document.getElementById("thCiudad");
let thPublicado = document.getElementById("thPublicado");
let thEnemigo = document.getElementById("thEnemigo");
let thRobos = document.getElementById("thRobos");
let thAsesinatos = document.getElementById("thAsesinatos");

thId.addEventListener("click", (event) => {ordenarLista("id")});
thNombre.addEventListener("click", (event) => {ordenarLista("nombre")});
thApellido.addEventListener("click", (event) => {ordenarLista("apellido")});
thEdad.addEventListener("click", (event) => {ordenarLista("edad")});
thAlterEgo.addEventListener("click", (event) => {ordenarLista("alterEgo")});
thCiudad.addEventListener("click", (event) => {ordenarLista("ciudad")});
thPublicado.addEventListener("click", (event) => {ordenarLista("publicado")});
thEnemigo.addEventListener("click", (event) => {ordenarLista("enemigo")});
thRobos.addEventListener("click", (event) => {ordenarLista("robos")});
thAsesinatos.addEventListener("click", (event) => {ordenarLista("asesinatos")});

var ascendente = true;
var thElegido;

function ordenarLista(element)
{
    if(thElegido == element)
    {
        thElegido = element;
    }
    else
    {
        ascendente = true;
        thElegido = element;
    }

    if(ascendente)
    {
        ordenarAscendente(element);
        ascendente = false;
    }
    else
    {
        ordenarDescendente(element);
        ascendente = true;
    }
}

function ordenarAscendente(element)
{
    personasFiltradas.sort((a,b) => {

        if(typeof a[element] == "string" || a[element] instanceof String)
        {
            a[element] = a[element].toLowerCase();
        }

        if(typeof b[element] == "string" || b[element] instanceof String)
        {
            b[element] = b[element].toLowerCase();
        }

        if(a[element] == b[element] || (a[element] == null && b[element] == null))
        {
            return 0;
        }
        else if(a[element] < b[element] || b[element] == null)
        {
            return -1;
        }
        else
        {
            return 1;
        }
    });
    crearTabla();
}

function ordenarDescendente(element)
{
    personasFiltradas.sort((a,b) => {

        if(a[element] == b[element] || (a[element] == null && b[element] == null))
        {
            return 0;
        }
        else if(a[element] > b[element] || b[element] == null)
        {
            return -1;
        }
        else
        {
            return 1;
        }
    });
    crearTabla();
}

let btnAlta = document.getElementById("btnAlta");
btnAlta.addEventListener("click",alta);

function alta()
{
    let lstTipoABM = document.getElementById("lstTipoABM");
    let id = document.getElementById("inputId").value;
    let nombre = document.getElementById("inputNombre").value;
    let apellido = document.getElementById("inputApellido").value;
    let edad = document.getElementById("inputEdad").value;
    let aux1 = document.getElementById("inputAux1").value;
    let aux2 = document.getElementById("inputAux2").value;
    let aux3 = document.getElementById("inputAux3").value;
    let personaAux;
    let estaEnLista = false;

    personasFiltradas.map((elemento) => {
        if(elemento.id == id)
        {
            estaEnLista = true;
        }
    });

    if(!estaEnLista)
    {
        edad = parseInt(edad);
        aux2 = parseInt(aux2);        
        aux3 = parseInt(aux3);        

        if(!(nombre == "" || apellido == "" || !(Number.isInteger(edad)) || aux1 == "" || aux2 == ""))
        {
            id = personasFiltradas.reduce(function(a, b) {
                if(a < b.id)
                {
                    return b.id;
                }
                else
                {
                    return a;
                }
            }, 0);
    
            id += 1;
        
            if(lstTipoABM.value == "Heroes")
            {
                if(Number.isInteger(aux3) && aux3 > 1940)
                {
                    personaAux = new Heroe(id,nombre,apellido,edad,aux1,aux2,aux3);
                    personasFiltradas.push(personaAux);
                    crearTabla();
                    cancelar();
                }
                else
                {
                    alert("Publicado tiene que ser mayor a 1940");
                }
            }
            else
            {

                if(Number.isInteger(aux3) && Number.isInteger(aux2) && aux2 > -1 && aux3 > -1)
                {
                    personaAux = new Villano(id,nombre,apellido,edad,aux1,aux2,aux3);
                    personasFiltradas.push(personaAux);
                    crearTabla();
                    limpiarPromedio();
                    cancelar();
                }
                else
                {
                    alert("Los robos y asesinatos estan vacios o son negativos");
                }
            }
        }
        else
        {
            alert("No estan todos los campos completos")
        }
    }
    else
    {
        alert("Esta persona ya esta registrada");
    }
    limpiarPromedio();
    document.getElementById("formDatos").style.display = "";
}

let btnModificar = document.getElementById("btnModificar");
btnModificar.addEventListener("click",modificar);

function modificar()
{
    let lstTipoABM = document.getElementById("lstTipoABM");
    let id = document.getElementById("inputId").value;
    let nombre = document.getElementById("inputNombre").value;
    let apellido = document.getElementById("inputApellido").value;
    let edad = document.getElementById("inputEdad").value;
    let aux1 = document.getElementById("inputAux1").value;
    let aux2 = document.getElementById("inputAux2").value;
    let aux3 = document.getElementById("inputAux3").value;
    let personaVieja;
    let personaNueva;
    let estaEnLista = false;

    personasFiltradas.map((elemento) => {
        if(elemento.id == id)
        {
            personaVieja = elemento;
            estaEnLista = true;
        }
    });

    if(estaEnLista)
    {
        edad = parseInt(edad);  
        aux3 = parseInt(aux3);  

        if(!(nombre == "" || apellido == "" || !(Number.isInteger(edad)) || aux1 == "" || aux2 == ""))
        {
            if(lstTipoABM.value == "Heroes")
            {
                if(Number.isInteger(aux3) && aux3 > 1942)
                {
                    personaNueva = new Heroe(id,nombre,apellido,edad,aux1,aux2,aux3);
                }
                else
                {
                    alert("El publicado tiene que ser mayor a 1942");
                }
            }
            else
            {
                aux2 = parseInt(aux2);

                if(Number.isInteger(aux3) && aux2 > -1 && aux3 > -1)
                {
                    personaNueva = new Villano(parseInt(id),nombre,apellido,edad,aux1,aux2,aux3);
                }
                else
                {
                    alert("Robos y asesinatos no puede ser negativo");
                }
            }
        
            let indiceReemplazar = personasFiltradas.map(e => e.id).indexOf(personaVieja.id);
            personasFiltradas[indiceReemplazar] = personaNueva;
    
            crearTabla();
            limpiarPromedio();
            cancelar();
        }
        else
        {
            alert("Campos vacios")
        }
    }
    else
    {
        alert("Persona no encontrada");
    }
    document.getElementById("formDatos").style.display = "";
}

btnCancelar = document.getElementById("btnCancelar");
btnCancelar.addEventListener("click",cancelar);

function cancelar()
{
    document.getElementById("divAbm").style.display = "none";
    document.getElementById("formDatos").style.display = "";
}

btnEliminar = document.getElementById("btnEliminar");
btnEliminar.addEventListener("click",eliminar);

function eliminar()
{
    let id = document.getElementById("inputId").value;
    let indiceReemplazar = personasFiltradas.map(e => e.id).indexOf(parseInt(id));

    if(indiceReemplazar != -1)
    {
        personasFiltradas.splice(indiceReemplazar,1);
        crearTabla();
        limpiarPromedio();
        cancelar();
    }
    else
    {
        alert("No se pudo eliminar");
    }
    document.getElementById("formDatos").style.display = "";
}