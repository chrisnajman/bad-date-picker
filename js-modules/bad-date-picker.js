export default function badDatePicker() {
  const form = document.getElementById("date-picker")
  const day = document.getElementById("select-day")
  const month = document.getElementById("select-month")
  const year = document.getElementById("select-year")
  const display = document.getElementById("display-date")
  const clearBtn = document.getElementById("clear-form")

  console.log

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    display.textContent = `${day.value} ${year.value} ${month.value}`
    clearBtn.classList.toggle("hide", false)
    display.classList.add("display-date")
  })

  clearBtn.addEventListener("click", () => {
    form.reset()
    display.textContent = ""
    clearBtn.classList.toggle("hide", true)
    display.classList.remove("display-date")
  })
}
