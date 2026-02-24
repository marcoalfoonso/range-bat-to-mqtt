
document.addEventListener("DOMContentLoaded", () => {
    const range = document.getElementById("values");

    range.oninput = () => {
        console.log(range.value)
    }

});
