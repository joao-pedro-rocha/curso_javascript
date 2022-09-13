let itemElement = document.getElementById('item-input')
let listItemsElement = document.getElementById('list-items')

function addItem() {
    let item = itemElement.value
    let li = document.createElement('li')
    let checkbox = document.createElement('input')
    let checkboxLabel = document.createElement('label')
    let deleteButton = document.createElement('input')
    
    if (itemElement.value.length <= 0) {
        window.alert('Você precisa digitar alguma coisa.')     
    } else {
        li.setAttribute('id', `${item}`)
        listItemsElement.appendChild(li)
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('name', `${item}`)
        checkbox.setAttribute('value', `${item}`)
        checkbox.setAttribute('id', `${item}`)
        li.appendChild(checkbox)
        checkboxLabel.setAttribute('for', `${item}`)
        checkboxLabel.innerText += `${item}`
        li.appendChild(checkboxLabel)
        li.appendChild(deleteButton)
        deleteButton.setAttribute('type', 'button')
        deleteButton.setAttribute('value', 'Apagar')
        deleteButton.setAttribute('class', 'item-delete-button')



        let deleteItem
        deleteButton.addEventListener('click', deleteItem = () => {
            deleteButton.remove()
            li.remove()
        })

        if (checkbox.checked) {
            console.log('checked!')
        }
    }
    
    itemElement.value = ''
    itemElement.focus()
}

