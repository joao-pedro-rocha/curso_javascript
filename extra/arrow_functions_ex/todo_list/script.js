let itemElement = document.getElementById('item-input')
let listItemsElement = document.getElementById('list-items')

function addItem() {
    let item = itemElement.value
    // Cria elementos.
    let li = document.createElement('li')
    let checkbox = document.createElement('input')
    let checkboxLabel = document.createElement('label')
    let deleteButton = document.createElement('input')

    // Verifica se algo foi digitado no input.
    if (itemElement.value.length <= 0) {
        window.alert('Você precisa digitar alguma coisa.')     
    } else {
        // Define atributos do li e o insere na lista.
        li.setAttribute('id', `${item}`)
        listItemsElement.appendChild(li)
        // Define atributos do checkbox e o insere na lista.
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('name', `${item}`)
        checkbox.setAttribute('value', `${item}`)
        checkbox.setAttribute('id', `${item}`)
        li.appendChild(checkbox)
        // Define atributos do label do checkbox e o insere na lista.
        checkboxLabel.setAttribute('for', `${item}`)
        checkboxLabel.innerText += `${item}`
        li.appendChild(checkboxLabel)
        // Define atributos do botão e o insere na lista.
        deleteButton.setAttribute('type', 'button')
        deleteButton.setAttribute('value', 'Apagar')
        deleteButton.setAttribute('class', 'item-delete-button')
        li.appendChild(deleteButton)

        // Deleta itens.
        let deleteItem
        deleteButton.addEventListener('click', deleteItem = () => {
            deleteButton.remove()
            li.remove()
        })

        // Risca itens.
        let verifyCheckbox
        checkbox.addEventListener('click', verifyCheckbox = () => {
            if (checkbox.checked == true) {
                return li.style.textDecoration = 'line-through'
            } else {
                return li.style.textDecoration = 'none'
            }
        })
    }
    
    itemElement.value = ''
    itemElement.focus()
}

