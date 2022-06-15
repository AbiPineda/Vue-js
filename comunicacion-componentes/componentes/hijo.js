Vue.component('hijo',{
template: //html
`
<div class="py-5 bg-success">
<h4>Componente hijo: {{numero}}</h4>
<h4>Nombre: {{nombreHijo}}</h4>
</div>
`,
props:['numero'],
    data(){
        return{
            nombreHijo: 'Uziel'
        }
    },
    //enviamos el componente del hijo al padre
    mounted(){
        this.$emit('nombreHijo', this.nombreHijo);
    }
})