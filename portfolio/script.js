const words = "Yousra El Majdoubi";
const spiral = 5000;

const letters = words.split("").forEach((lett, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerText = lett;
        div.classList.add("letter");
        div.style.animationDelay = `-${i * (spiral / 10) - offset}ms`;
        return div;
    }
    document.getElementById("name").append(createElement(0));
});
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var ws_data = [
        ["Name", "Email", "Message"],
        [name, email, message]
    ];
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Contact Form Data");
    XLSX.writeFile(wb, "contact_form_data.xlsx");
}