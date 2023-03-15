const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoElements: [
            {
                text: 'Pane',
                done: false
            },
            {
                text: 'Pasta',
                done: false
            },
            {
                text: 'Uova',
                done: false
            },
            {
                text: 'Latte',
                done: false
            },
            {
                text: 'Farina',
                done: false
            },
        ],
        newToDo: ''
      }
    },

    methods: {

        removeToDo(arrayIndex) {
            this.toDoElements.splice(arrayIndex, 1);
        },

        addToDo() {

            let newToDoEl = {
                text: this.newToDo,
                done: false
            };

            this.toDoElements.push(newToDoEl);

            this.newToDo = '';
        }

    }

  }).mount('#app')

