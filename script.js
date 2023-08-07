const $ = (selector) => document.getElementById(selector); //Este es un selector universal para buscar ID's sin necesidad de hacer todo el choclo de getelementById

const shoppingList = [];

const addItem = () => {    // CON ESTA FUNCION VOY A IR A BUSCAR LA INFORMACION AL HTML

    let newItem = $('newItemInput').value.toUpperCase(); //CREO UNA VARIABLE CON EL VALOR QUE SE VA AGREGANDO EN LA LISTA Y EN MAYUSCULA
    shoppingList.push(newItem);

    let liContent = document.createTextNode(`${newItem}`); // PARA CREAR TEXTO EN LA ETIQUETA li SE DEBE HACER UN NODO DE TEXTO
    let liItem = document.createElement('li'); //SE CREA UNA LISTA

    liItem.classList.add('list-item') // con esto le agrego la clase de CSS 'list-item' para cambiar el formato/color/etc
    
    liItem.appendChild(liContent); // CON ESTO AGREGO EL CONTENIDO DE li Y SE HACE VISIBLE EN LA PAGINA
    $('list').appendChild(liItem); // con esto lo busco en el html
    console.log(shoppingList);
};
 
$('addButton').addEventListener('click', addItem); // CUANDO HAGO CLICK SE PONE EN MARCHA LA FUNCION AddItem
