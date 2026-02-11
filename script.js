window.onload = () => {
    setTimeout(() => {
        document.getElementById("splash-screen").classList.add("hidden");
        document.getElementById("app").classList.remove("hidden");
    }, 1500);
};

function generate() {
    const text = document.getElementById("prompt").value;

    if (!text.trim()) {
        document.getElementById("output").innerHTML =
            "<p style='opacity:0.7'>⚠️ Prompt masih kosong!</p>";
        return;
    }

    document.getElementById("output").innerHTML =
        "<h3>Hasil:</h3><p>" + text + "</p>";
}
