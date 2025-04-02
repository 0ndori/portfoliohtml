document.addEventListener("DOMContentLoaded", function () {
    // Gestion des boutons pour afficher/masquer les contenus des semaines
    const buttons = document.querySelectorAll(".week-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const content = document.getElementById(targetId);
            const images = document.getElementById(targetId + "-images");

            // Fermer tous les autres contenus et images
            document.querySelectorAll(".week-content, .week-images").forEach(el => {
                if (el !== content && el !== images) {
                    el.style.display = "none";
                }
            });

            // Afficher ou masquer le contenu et les images associés
            if (content.style.display === "block") {
                content.style.display = "none";
                images.style.display = "none";
            } else {
                content.style.display = "block";
                images.style.display = "block";
            }
        });
    });

    // Filtrage par catégorie
    const filterSelect = document.getElementById("category-filter");
    const weeks = document.querySelectorAll(".week");

    filterSelect.addEventListener("change", function () {
        const selectedCategory = this.value;

        weeks.forEach(week => {
            // Vérifier si la catégorie correspond ou si "all" est sélectionné
            if (selectedCategory === "all" || week.classList.contains(selectedCategory)) {
                week.style.display = "block"; // Afficher la semaine
            } else {
                week.style.display = "none"; // Cacher la semaine
            }
        });

        // Optionnellement, réinitialiser l'affichage des contenus lorsque le filtre change
        document.querySelectorAll(".week-content, .week-images").forEach(el => {
            el.style.display = "none";
        });
    });
});
