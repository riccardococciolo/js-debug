// const input = document.querySelector('input');
// const array = null;

// input.addEventListener('keypress', function(event) {

//     if (event.code != 'Enter')    return;
//     if (input.value.length == '') return;

//     array.add(input.value);

//     const li = document.createElement('li');
//     li.classList.add('list-group-item');
//     li.text = input.value;
//     document.querySelector('ul').push(li);

//     let counter = '';
//     let item    = array[0];
//     const max   = 1;
//     const elems = [];

//     for (let i = 0; i < array; i++) {
//         let val = array[i];

//         if (!elems[val]) {
//             elems[val] = 1;
//         } else {
//             elems[val]++;
//         }

//         for (let j = i; j < array.length; i++) {
//             if (array[i] == array[j]) {
//                 counter++;
//                 if (max < counter)
//                 max  = counter;
//                 item = array[i];
//             }
//         }

//         counter = 0;
//     }

//     const alert = document.getElementsByClassName('alert');

//     alert.classList.remove('d-none');
//     alert.classList.add('d-flex');

//     alert.querySelector('span:first-child').innerText = item;
//     alert.querySelector('span:last-child').innerText = max;

//     console.log('${item} trovato ${max} volte');
// });

const input = document.querySelector('input');
const array = []; // non si puo mettere null con l'array

input.addEventListener('keypress', function(event) {
    if (event.code !== 'Enter') return;
    if (input.value.length === 0) return;

    array.push(input.value); // per pushare nell'array non si usa add

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = input.value;  // si usa textcontent per inserire testo
    document.querySelector('ul').append(li);  // si usa append per inserire un elemento in html

    let counter = 0;
    let item = array[0];
    let max = 1;
    const elems = {};

    for (let i = 0; i < array.length; i++) {  // mancava length
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        if (elems[val] > counter) {  // non serve fare 2 cicli for
            counter = elems[val];
            item = val;
        }
    }

    const alert = document.querySelector('.alert');  // si usa querySelector per selezionare una classe

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = counter;

    console.log(`${item} trovato ${counter} volte`);
});