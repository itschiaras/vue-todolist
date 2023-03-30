const {createApp} = Vue;

createApp({
    data() {
        return {
            toDoList: [
                {
                    name: 'Stigghiola',
                    done: false
                },
                {
                    name: 'Mangia e Bevi',
                    done: false
                },
                {
                    name: 'Carne di crasto',
                    done: false
                },
                {
                    name: 'Alette di pollo',
                    done: false
                },
                {
                    name: '20 filoni di pane',
                    done: false
                },
                {
                    name: '5 casse di birra Moretti',
                    done: false
                }
            ]
        }
    },
    methods: {

    }
}).mount('#app')