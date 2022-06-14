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
            this.local();
        },
        editarTarea(index){
            this.tareas[index].estado = true;
            this.local();
        },
        eliminarTarea(index){
            this.tareas.splice(index,1);
            this.local();
        },
        local(){
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosDB ===null){
            this.tareas=[];
        }else{
            this.tareas = datosDB;
        }
    }
});