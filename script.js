const addBtn = document.getElementById("add")

addBtn.addEventListener("click", function () {
  addNewNote()
})

function addNewNote(text = "") {
  const note = document.createElement("div")
  note.classList.add("note")

  note.innerHTML = `
    <div class="tools">
        <button class="edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
            <fas class="fas fa-trash-alt"></fas>
        </button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `

  const editBtn = note.querySelector(".edit")
  const deleteBtn = note.querySelector(".delete")
  const main = note.querySelector(".main")
  const textArea = note.querySelector("textarea")

  deleteBtn.addEventListener("click", function () {
    note.remove()
  })

  editBtn.addEventListener("click", function () {
    main.classList.toggle("hidden")
    textArea.classList.toggle("hidden")
  })

  document.body.appendChild(note)
}
