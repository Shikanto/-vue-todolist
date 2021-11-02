Vue.config.devtools = true;

new Vue({
    el: "#main-container",
    data: {
        newTask:"",
        tasks: [
            {
                text: "Comprare i pannolini",
                checked: false,
            },
            {
                text: "Fare la spesa",
                checked: false,
            },
            {
                text: "Andare dal barbiere",
                checked: false,
            }
        ],
    },
    methods: {
        addTask() {
            if (this.newTask.trim() === "") {
                return;
            };
            this.tasks.push({
                text: this.newTask.trim(),
            })
        },
        removeTask(index){
            this.tasks.splice(index, 1);
        }
    }
})