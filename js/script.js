/*
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/
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
                done: true
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
        ]
      }
    }
  }).mount('#app')
