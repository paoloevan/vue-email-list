/**
 * generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
 * 
 * Far comparire gli indirizzi email solamente quando sono stati tutti generati.

 */

const {createApp} = Vue

createApp({
    data(){
        return{
           myEmail: []
        }
    },
    mounted(){
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response.data.response);
                this.myEmail.push(response.data.response)
            })
        }
    }
}).mount('#app')