// On attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function() {
    // On découpe l'adresse pour qu'un robot ne puisse pas lire le mot complet
    const user = "billy.halle.bh";
    const domain = "gmail.com";
    const maVraieAdresse = user + "@" + domain;

    const emailLink = document.querySelector('a.email');

    if (emailLink) {
        // 3. On remplace le texte "enable JavaScript..." par ton adresse
        emailLink.textContent = maVraieAdresse;

        // 4. On règle le lien pour qu'il ouvre un nouveau message vers ton Gmail
        emailLink.setAttribute('href', 'mailto:' + maVraieAdresse);
    }

    // Interrupteur mode sombre / clair
    function lightSwitch(e) {
        var darkClass = "dark";
        if (e.target.checked) {
            document.body.classList.add(darkClass);
        } else {
            document.body.classList.remove(darkClass);
        }
    }

    let lightSwitchElem = document.getElementById('darkmode');
    if (lightSwitchElem) {
        lightSwitchElem.addEventListener('click', lightSwitch);
        lightSwitch({ target: lightSwitchElem });
    }
});
