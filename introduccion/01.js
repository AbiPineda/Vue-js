const aplicacion = new Vue({
    //aca iniciaremos a trabajar con vue
    //'#app' es el nombre del id, todo el contenido dentro de ese id sera gestionado con vue
    el: '#app',
    data:{
        titulo: 'Hola mundo con Vue',
        frutas: ['Manzana', 'Pera', 'Platano'], //creamos el array frutas
        verduras: [
            {nombre: 'Zanahoria', cantidad: 5},
            {nombre: 'Papas', cantidad: 20},
            {nombre: 'Cebolla', cantidad: 0}
        ]//con objetos
    }

})