import AddTodo from './components/add-todo.js';

export default class View {
    constructor(){
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();
        this.addTodoForm.onClick((title, description) => this.addTodo(title, description));
    }

    setModel(model){
        this.model = model;
    }

    render(){
        const todos = this.model.getTodos();
        if(todos){
            todos.forEach((todo) => {
                this.CreateRow(todo);
            });
        }
    }

    toggleCompleted(id){
        this.model.toggleCompleted(id);
    }

    addTodo(title, description){
        this.todo = this.model.addTodo(title, description);        
        this.CreateRow(this.todo);      
    };

    delTodo(id){
        this.model.delTodo(id);        
        document.getElementById(id).remove();
    }

    CreateRow(todo){
        const row = table.insertRow(); 
        row.setAttribute('id', todo.id);
        row.innerHTML = `
            <td class="text-center">${todo.id}</td>
            <td>${todo.title}</td>
            <td>${todo.description}</td>
            <td class="text-center"></td>
            <td class="text-right">
                <button class="btn btn-primary" id="edit">edit</button>
                
            </td>
        `;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);
        row.children[3].appendChild(checkbox);

        const btnDel = document.createElement('del');
        btnDel.classList.add('btn', 'btn-danger', 'ml-1');
        btnDel.innerText = `DEL`;
        btnDel.addEventListener('click', (e)=> {
            e.preventDefault(e); 
            this.delTodo(row.getAttribute('id'));            
        })
        row.children[4].appendChild(btnDel);
    }
};