let div=document.querySelector('.main')

axios.get('https://fakestoreapi.com/products')

.then(res =>{
    res.data.forEach(item =>{
        let box=document.createElement('div')
        box.classList=("div")
        box.style='border: 1px solid black;width:30%'
        box.innerHTML=`<img src ="${item.image}"</img><p>${item.title}$</p><p>${item.price}$</p><p>${item.description}`
        div.appendChild(box)
    })
})