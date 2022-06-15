Vue.component('saludo',{
    template: //html
    `
    <div>
    <h1>{{saludo}}</h1>
    <h2>{{saludo}}</h2>
    </div>
    `,
    data(){
        return{
            saludo: 'Hola desde vue'
        }
    }
});

//instancia de vue
