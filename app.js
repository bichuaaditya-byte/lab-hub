const box = document.getElementById("subjects");
const search = document.getElementById("search");

function render(q = "") {
    q = q.toLowerCase();

    box.innerHTML = SUBJECTS
        .filter(s => s.name.toLowerCase().includes(q))
        .map(s => `
            <a class="card" href="subjects/${s.id}/index.html">
                <div class="icon">${s.icon}</div>
                <h3>${s.name}</h3>
                <p>15 slots for aim, theory, code, screenshots and result.</p>
                <div class="slots">01 — 15 experiments</div>
            </a>
        `)
        .join("");
}

search.addEventListener("input", e => {
    render(e.target.value);
});

render();
