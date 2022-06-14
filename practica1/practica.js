const aplicacion = new Vue({
    //aca iniciaremos a trabajar con vue
    //'#app' es el nombre del id, todo el contenido dentro de ese id sera gestionado con vue
    el: '#app',
    data:{
       titulo: 'GYM con Vue',
       tareas:[],
       nuevaTarea:''
    },
    methods:{
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea='';
        },
        editarTarea(index){
            this.tareas[index].estado = true;
        },
        eliminarTarea(index){
            this.tareas.splice(index,1);
        }
    }
});