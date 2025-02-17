function toggleShareBubble() {
    const bubble = document.getElementById("shareBubble");
    bubble.style.display = (bubble.style.display === "flex") ? "none" : "flex";
}

function getShareUrl() {
    return encodeURIComponent(window.location.href);
}

function shareOnWhatsApp() {
    const url = `https://api.whatsapp.com/send?text=Estas son mis redes: ${getShareUrl()}`;
    window.open(url, "_blank");
}

function shareOnFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${getShareUrl()}`;
    window.open(url, "_blank");
}

function shareOnSnapchat() {
    const url = `https://www.snapchat.com/share?url=${getShareUrl()}`;
    window.open(url, "_blank");
}

function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert("Enlace copiado al portapapeles");
    });
}

// Ocultar la burbuja al hacer clic fuera de ella
document.addEventListener("click", function (event) {
    const bubble = document.getElementById("shareBubble");
    const button = document.querySelector(".share-button");
    if (bubble.style.display === "flex" && !bubble.contains(event.target) && !button.contains(event.target)) {
        bubble.style.display = "none";
    }
});