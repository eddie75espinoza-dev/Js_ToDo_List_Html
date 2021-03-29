const msgAlert = document.getElementById('alert');
export default class AddTodo{
    constructor(){
        this.btnAdd = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');        
    }

    onClick(callback){
        this.btnAdd.onclick = (e) => {
            if (title.value === '' || description.value === ''){
                e.preventDefault();
                console.error('Add-Todo');
                msgAlert.classList.remove('d-none');
                msgAlert.innerText = 'Title and Description are required';
                return;
            } else {
                e.preventDefault();
                msgAlert.classList.add('d-none');
                callback(this.title.value, this.description.value);
            }
        }
    }
};