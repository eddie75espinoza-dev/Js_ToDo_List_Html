export default class Model{
    constructor(){
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos'));
        
        if (!this.todos || this.todos.lenght < 1){
            this.currentId = 1;
            this.todos = [
                {
                    id: 0,
                    title: "Python",
                    description: "Learn Python 3",
                    completed: false            
                }
            ]
        this.currentId = 1;
    } else {
        
        this.currentId = this.todos[this.todos.length - 1].id + 1; 
               
        }
    };

    setView(view){
        this.view = view;
    };

    save(){
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getTodos(){
        
        return this.todos;
    }

    findTodo(id){
        //const todo = this.todos.filter(todo => todo.id == id);
        return this.todos.findIndex((todo) => todo.id === id);
    }

    toggleCompleted(id){
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        this.save();        
    }

    addTodo(title, description){
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false
        }
        this.todos.push(todo);
        this.save();
        return {...todo};
    }
    delTodo(id){
        const index = this.findTodo(id);
        
        this.todos.splice(index[0], 1);        
        this.save();
    }
}
