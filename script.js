const addBtn = document.getElementById("add")

addBtn.addEventListener("click", function () {
  addNewNote()
})

function addNewNote(text = "") {
  const note = document.createElement("div")
  note.classList.add("note")

  note.innerHTML = `
    <div class="note">
        <div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <fas class="fas fa-trash-alt"></fas>
            </button>
        </div>

        <div class="main hidden"></div>
        <textarea></textarea>
    </div>
  `
}
