const aplicacion = new Vue({
    el: '#app',
    data: {
        saludo: 'soy el ciclo de vida de vue'
    },
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        //se ejecuta al crear los metodos, observadores y eventos, pero aun no accede al DOM
        //aun no se puede acceder a 'el'
        console.log('created');
    },
    beforeMount(){
        //Se ejecuta antes de insertar el DOM
        console.log('beforeMount');
    },
    mounted(){
        //se ejecuta al insertar el DOM
        console.log('mounted');
    },
    beforeUpdate(){
        //se ejecuta al detectar un cambio
        console.log('beforeUpdate');
    },
    updated(){
        //se ejecuta al realizar los cambios
        console.log('updated');
    },
    beforeDestroy(){
        //antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed(){
        //se destruye toda la instancia
        console.log('destroyed');
    },
    methods:{
        destruir(){
            this.$destroy();
        }
    }
});