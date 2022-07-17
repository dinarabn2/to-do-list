const todoList = new Todolist('work');
const dom = new DOM;

function add(){
    const input = document.getElementsByTagName('input')[0];
    if (input.value) {
        todoList.add(input.value);
        dom.addItem(todoList.tasks);
        input.value = '';
    }
}

function remove(task){
    return () => {
        todoList.remove(task.id);
        dom.remove(task);
    }
}