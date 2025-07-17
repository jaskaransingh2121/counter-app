let count = 0;

const countdisplay = document.getElementById("count")
const incrementbtn = document.getElementById("increment")
const decrementbtn = document.getElementById("decrement")
const resetbtn = document.getElementById("reset")

function updatedisplay() {
    countdisplay.innerHTML = count

    if (count > 0) {
        countdisplay.style.color = "green";
    } else if (count < 0) {
        countdisplay.style.color = "red";
    } else {
        countdisplay.style.color = "black";
    }

    decrementbtn.disabled = (count === 0)
}

incrementbtn.addEventListener("click", function () {
    count++;
    countdisplay.innerHTML = count
    updatedisplay()
})
decrementbtn.addEventListener("click", function () {
    count--;
    countdisplay.innerHTML = count
    updatedisplay()
})
resetbtn.addEventListener("click", function () {
    count = 0;
    countdisplay.innerHTML = count
    updatedisplay()
})
updatedisplay()