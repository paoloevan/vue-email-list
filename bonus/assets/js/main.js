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