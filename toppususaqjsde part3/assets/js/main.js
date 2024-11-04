let div=document.querySelector('.main')

axios.get('https://dummyjson.com/products')
.then(res=>{
    res.data.products.forEach(item =>{
        let box=document.createElement("div")
        box.style='border:1px solid red; width:30%';
        box.innerHTML=`<img src="${item.thumbnail}"><p>${item.title}</p><p>${item.id %2==0}</p>`;
        div.appendChild(box)
        console.log(item);
})

    
})