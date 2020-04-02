const form = document.getElementById("updateForm");
const update = document.getElementById('update');
let name = document.getElementById('name');
let newName = document.getElementById('newName');

update.addEventListener('click', (event) => {
    name.innerHTML = newName.value;
    newName.value = '';
    console.log(`Welcome ${name.innerHTML}!`);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
});