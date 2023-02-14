const heroForm = document.querySelector(".hero__content-sign-up")
const heroInput = document.querySelector(".hero__content-sign-up input")
const heroError = document.querySelector(".hero__content-sign-up .error")
const ctaForm = document.querySelector(".cta__sign-up")
const ctaInput = document.querySelector(".cta__sign-up input")
const ctaError = document.querySelector(".cta__sign-up .error")

function validateEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(input).toLowerCase())
}

heroForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (!validateEmail(heroInput.value)) {
    heroInput.style.borderColor = "hsl(0, 100%, 50%)"
    heroError.style.display = "block"
  } else {
    alert("Thanks for signing up!")
  }
})

heroInput.addEventListener("keypress", () => {
  heroInput.style.borderColor = "hsl(238, 22%, 44%)"
  heroError.style.display = "none"
})

ctaForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if (!validateEmail(ctaInput.value)) {
    ctaInput.style.borderColor = "hsl(0, 100%, 50%)"
    ctaError.style.display = "block"
  } else {
    alert("Thanks for signing up!")
  }
})

ctaInput.addEventListener("keypress", () => {
  ctaInput.style.borderColor = "hsl(238, 22%, 44%)"
  ctaError.style.display = "none"
})
