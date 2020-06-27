// select DOM elements
const currencyElOne = document.getElementById('currency-one')
const currencyElTwo = document.getElementById('currency-two')
const amountElOne = document.getElementById('amount-one')
const amountElTwo = document.getElementById('amount-two')
const rateEl = document.getElementById('rate')
const swapBtn = document.getElementById('swap')


// Fetch exchange rate and update the DOM

async function calculate() {
  const currencyOne = currencyElOne.value
  const currencyTwo = currencyElTwo.value

  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
  const data = await response.json()
  const rate = data.rates[currencyTwo]
  rateEl.innerText = `1 ${currencyOne} is equal to ${rate} ${currencyTwo}`
  amountElTwo.value = (amountElOne.value * rate).toFixed(2)
}

function swapBtns() {
  const temp = currencyElOne.value
  currencyElOne.value = currencyElTwo.value
  currencyElTwo.value = temp
  calculate()
}

// Event listeners
currencyElOne.addEventListener('change', calculate)
amountElOne.addEventListener('input', calculate)
currencyElTwo.addEventListener('change', calculate)
amountElTwo.addEventListener('input', calculate)
swapBtn.addEventListener('click', swapBtns)


// excecute
calculate()