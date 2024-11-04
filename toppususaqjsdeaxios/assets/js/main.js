// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res => res.json())
// .then(data =>{
//     data.filter(item =>{
//         console.log(item.id,item.userId);
//     })
// })


// axios.get('https://jsonplaceholder.typicode.com/todos')
// .then(res =>{
//     res.data.filter(item=>{
//         console.log(item.id,item.title);
//     })
// })

// axios.get('https://jsonplaceholder.typicode.com/todos')
// .then(res =>{
//     res.data.filter(item =>{
//         console.log(item.id,item.userId);
//     })
// })

// let div = document.querySelector('.main')

// axios.get('https://jsonplaceholder.typicode.com/todos')
// .then(res => {
//     res.data.forEach(item => {
//         let box = document.createElement('div')
//         box.style ='border: 1px solid red'
//         box.innerHTML= `<p>${item.userId}</p><p>${item.title}</p>`
//         div.appendChild(box)
//     })
// })


let div=document.querySelector('.main')

axios.get('https://dummyjson.com/products')
.then(res =>{
    res.data.products.forEach(item => {
        let thumbnail =document.createElement('div')
        thumbnail.innerHTML=`<img src ="${item.image}"</img><p>${item.title}</p><p>${item.price}$</p> `
        div.appendChild(thumbnail)
    })
})