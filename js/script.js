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
            ],
            newToDo: '',
            error: false
        }
    },
    methods: {
        removeItem(index) {
            this.toDoList.splice(index, 1);
        },
        addItem() {
            if (this.newToDo.length < 2) {
                this.error = true;
                this.newToDo = ''
                return
            }
            const newToDoItem = {
                name: this.newToDo,
                done: false
            }
            this.toDoList.push(newToDoItem);
            this.newToDo = ''
        }
    }
}).mount('#app')