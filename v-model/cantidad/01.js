const aplicacion = new Vue({
    //aca iniciaremos a trabajar con vue
    //'#app' es el nombre del id, todo el contenido dentro de ese id sera gestionado con vue
    el: '#app',
    data:{
        titulo: 'Hola mundo con Vue',
        verduras: [
            {nombre: 'Zanahoria', cantidad: 5},
            {nombre: 'Papas', cantidad: 20},
            {nombre: 'Cebolla', cantidad: 0}
        ], //creamos el array frutas
    nuevaVerdura: '',
    total: 0
    },
    methods:{
        agregarVerdura(){
            //llamamos al array de frutas para enviarle la nueva fruta
            this.verduras.push({
                nombre: this.nuevaVerdura, cantidad: 0
            });
            this.nuevaVerdura='';
        }
    },
    computed:{
        sumarVerduras(){
        this.total=0;
        for(verdura of this.verduras)
            {
                this.total = this.total + verdura.cantidad;
            }
            return this.total;
        }
        
    }

})