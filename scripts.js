const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-value").value
    const currertValueReal = document.querySelector(".current-value")
    const currertValueDolar = document.querySelector(".current-converted")


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.1
    const bitcoinToday = 13.0



    if (currencySelect.value == "dolar") {
        currertValueDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "Euro") {
        currertValueDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "Libra") {
        currertValueDolar.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "Bitcoin") {
        currertValueDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currertValueReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



}


function changeCurrency() {
    const currentDolarName = document.querySelector(".current-dolar")
    const currentImagem = document.querySelector(".current-img")

    if (currencySelect.value == "dolar") {
        currentDolarName.innerHTML = "Dólar americano"
        currentImagem.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "Euro") {
        currentDolarName.innerHTML = "Euro"
        currentImagem.src = "./assets/euro.png"
    }

    if (currencySelect.value == "Libra") {
        currentDolarName.innerHTML = "Libra"
        currentImagem.src = "./assets/libra.png"
    }

    if (currencySelect.value == "Bitcoin") {
        currentDolarName.innerHTML = "Bitcoin"
        currentImagem.src = "./assets/bitcoin.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)