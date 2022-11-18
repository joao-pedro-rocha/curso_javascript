let build_person = () => {
    let namElement = document.getElementById('name')
    let nam = namElement.value
    let ageElement = document.getElementById('age')
    let age = Number(ageElement.value)

    let person = {
        person_name: nam,
        person_age: age
    }

    return console.log(person.person_name, person.person_age)
}

export {
    build_person
}