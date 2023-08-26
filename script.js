document.addEventListener("DOMContentLoaded", function () {
    const shareButton = document.getElementById("shareButton");

    shareButton.addEventListener("click", function () {
        const customShareUrl = "https://damien-codes.github.io/New_Portefolio/index.html"; // Remplacez par l'URL spécifique

        const shareTitle = document.title;

        if (navigator.share) {
            navigator.share({
                title: shareTitle,
                url: customShareUrl // Utilisation de l'URL spécifique
            })
            .then(() => console.log("Partage réussi"))
            .catch((error) => console.error("Erreur lors du partage :", error));
        } else {
            console.log("Partage non pris en charge par ce navigateur.");
            // Vous pouvez afficher un message à l'utilisateur indiquant que le partage n'est pas pris en charge.
        }
    });
});