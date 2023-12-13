// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const { createApp } = Vue;

createApp({
    data() {
        return {

            email: [],
        }
    },
    methods: {

    },
    mounted() {
        console.log('pagina caricata!!');

        for (i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risposta) => {
                    
                    this.email.push(risposta.data.response); 
                })

        }

        console.log(this.email);
    }
}).mount('#app');