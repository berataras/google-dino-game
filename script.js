const character = document.getElementById("character");
const block = document.getElementById("block");

function jump(){
    character.classList.add("character-jump")
    setTimeout(() => {
        character.classList.remove("character-jump")
    }, 500)
}

function resetGame(){
    block.style.animation = "block 1s infinite linear"
    block.style.display = "block"
}

const checkDead = setInterval(() => {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >=130){
        block.style.animation = "none"
        block.style.display = "none"

        swal({
            title: "YOU ARE LOSE",
            text: "Do you want to try again?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((res) => {
            if (res) {
                resetGame()
            } else {
                swal("okay loser!");
            }
        });
    }
}, 10)
