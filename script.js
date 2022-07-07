const btn = document.getElementById("btn");

btn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark-pink", e.target.checked);
})