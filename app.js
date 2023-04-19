let main = document.getElementById("main")
let btn1 = document.getElementById("btn1")
let note = document.getElementsByClassName("note")
const savenote = ()=>{
    let notes = document.querySelectorAll(".note textarea")
    const data = []
    notes.forEach((note) =>{
        data.push(note.value)
    })
    if(data.length === 0)
    {
        localStorage.removeItem("notes")
    }
    else
    localStorage.setItem("notes" , JSON.stringify(data))
}
const addNote = (text = "") =>
{
    let note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `<div class="tool">
                        <i class="del fa-solid fa-trash"></i>
                        <i class="save fa-solid fa-floppy-disk"></i>
                        </div>
                        <textarea>${text}</textarea>`;
    
    let del = note.querySelector(".del")
    del.addEventListener("click" , function(){
        note.remove();
        savenote()
    })
    
    let save = note.querySelector(".save")
    save.addEventListener("click" , function(){savenote()});

    note.querySelector("textarea").addEventListener(
        "focusout" , function(){savenote()}
    )

    main.appendChild(note)
    savenote()
}

btn1.addEventListener("click" , function(){
    addNote()
});

(
    function(){
        const notes = JSON.parse(localStorage.getItem("notes"))
        // console.log(notes)
        if(notes === null)
        {
            addNote();
        }
        else
        {
            notes.forEach((note)=>{
            console.log(note )
            addNote(note)
            })
        }
        
    }
)()