document.addEventListener('DOMContentLoaded', function(){
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const btnAdd = document.getElementById('add');
    const msgAlert = document.getElementById('alert');
    const btnEdit = document.getElementById('edit');
    const btnSearch = document.getElementById('search');
    let id = 0;

    function delTodo(id) {
       document.getElementById(id).remove(); 
    };
    
    function addTodo() {
        if (title.value === '' || description.value === ''){
             
            msgAlert.classList.remove('d-none');
            msgAlert.innerText = 'Title and Description are required';
            return;
        };
        msgAlert.classList.add('d-none');
        const row = table.insertRow();
        row.setAttribute('id', id++);
        row.innerHTML = `
            <td class="text-center">${id}</td>
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary" id="edit">edit</button>
                
            </td>
        `;
        const btnDel = document.createElement('del');
        btnDel.classList.add('btn', 'btn-danger', 'ml-1')
        btnDel.innerText = `DEL`;
        btnDel.addEventListener('click', (e)=> {
            e.preventDefault(e); 
            delTodo(row.getAttribute('id'));
        
        })
        row.children[4].appendChild(btnDel);
        
    };
    btnAdd.addEventListener('click', (e)=>{
        e.preventDefault();
        addTodo();
    }); 
    // btnEdit.addEventListener('click', (e)=> {
    //     e.preventDefault(); 
    //     console.log('click Edit');
    
    // });
    // btnSearch.addEventListener('click', (e)=> {
    //     e.preventDefault(e); 
    //     console.log('click Search');
    //     msgAlert.classList.add('d-none');
    // }); 
});





