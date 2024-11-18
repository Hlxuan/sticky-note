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

  document.body.appendChild(note)
}
