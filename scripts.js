const colors = ["#FD0000", "#0018FD" , "#DBFD00" , "#00FD0B" , "#CF00FD" , "#FD008A", "#000000"]
let btn = document.getElementById(".btn")

function colorize(){
    const radomColor = Math.floor(Math.random() * colors.length)
    document.body.style.background = colors[radomColor]
    document.querySelector(".name-color").innerHTML = colors[radomColor]
}

