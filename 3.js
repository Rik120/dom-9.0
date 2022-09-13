for (let i = 0; i <= 9; i++) {
    let body = document.querySelector(".ccc1")
    let div = document.createElement("div")
    let divOne = document.createElement("div")
    let divTwo = document.createElement("div")
    let divThree = document.createElement("div")
    let divFour = document.createElement("div")
    let img = document.createElement("img")
    let h5 = document.createElement("h5")
    let h3 = document.createElement("h3")
    let h6 = document.createElement("h6")
    let h5_0 = document.createElement("h5")

    div.classList.add("item")
    divOne.classList.add("one")
    divTwo.classList.add("two")
    divThree.classList.add("three")
    divFour.classList.add("four")

    h5.innerHTML = "Программа"
    h3.innerHTML = "«Разработка мобильных приложений»"
    h6.innerHTML = "Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах."
    h5_0.innerHTML = "24 месяца"

    img.src = "./img/Group 815.svg"

    div.append(divOne, divTwo, divThree, divFour)
    divOne.append(h5)
    divTwo.append(img, h3)
    divThree.append(h6)
    divFour.append(h5_0)
    body.prepend(div)
}