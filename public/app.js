document.getElementById('addGrocery').addEventListener('click', event => {
    event.preventDefault()
  
    axios.post('/api/groceries', {
      name: document.getElementById('product').value,
      quantity: document.getElementById('quantity').value,
      cost: document.getElementById('cost').value,
      purchased: false
    })
      .then(({ data }) => {
        let groceryElem = document.createElement('li')
        groceryElem.className = 'list-group-item'
        groceryElem.id = data.id
        groceryElem.innerHTML = `
         <div class="d-flex w-100 justify-content-between">
           <h5 class="mb-1">${document.getElementById('product').value}</h5>
         </div>
         <p class="mb-1">Quantity: ${document.getElementById('quantity').value}</p>
         <small>Price: ${document.getElementById('cost').value}</small>
        `
        document.getElementById('notPurchased').append(groceryElem)
  
        document.getElementById('product').value = ''
        document.getElementById('quantity').value = ''
        document.getElementById('cost').value = ''
      })
      .catch(err => console.error(err))
  })