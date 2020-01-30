const btn = document.querySelector('#add');
const container = document.querySelector('#todos ul');

btn.addEventListener('click', () => {
    const inputField = document.querySelector('#todo');
    const {value} = inputField;

    const li = document.createElement('LI');
    li.innerHTML = value;

    container.appendChild(li);
    inputField.value = '';
});

container.addEventListener('click', (e) => {
    /**
     * @type {HTMLLIElement}
     */
    const target = e.target;

    target.classList.toggle('done');
});
