/* =========================================
   L U K I — SCRIPT V1
   Prodige TCH
========================================= */

const openingScreen = document.getElementById("openingScreen");
const policyScreen = document.getElementById("policyScreen");
const accessScreen = document.getElementById("accessScreen");
const homeScreen = document.getElementById("homeScreen");

const homeContent = document.getElementById("homeContent");
const dynamicPage = document.getElementById("dynamicPage");
const pageContent = document.getElementById("pageContent");

const sideMenu = document.getElementById("sideMenu");


/* =========================================
   ÉCRAN D'OUVERTURE
========================================= */

function showPolicy() {

    openingScreen.classList.add("hidden");
    policyScreen.classList.remove("hidden");

}


/* =========================================
   ACCEPTER LA POLITIQUE
========================================= */

function acceptPolicy() {

    const checkbox = document.getElementById("acceptPolicy");

    if (!checkbox.checked) {

        alert(
            "Veuillez confirmer que vous avez lu et compris les informations."
        );

        return;
    }

    policyScreen.classList.add("hidden");

    accessScreen.classList.remove("hidden");

}


/* =========================================
   REFUSER
========================================= */

function refusePolicy() {

    alert(
        "L'accès à certaines fonctionnalités de L U K I nécessite l'acceptation des conditions applicables."
    );

}


/* =========================================
   ACCÉDER À L U K I
========================================= */

function showHome() {

    openingScreen.classList.add("hidden");
    policyScreen.classList.add("hidden");
    accessScreen.classList.add("hidden");

    homeScreen.classList.remove("hidden");

    homeContent.classList.remove("hidden");
    dynamicPage.classList.add("hidden");

    sideMenu.classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   MENU
========================================= */

function toggleMenu() {

    sideMenu.classList.toggle("open");

}


/* =========================================
   FERMER LE MENU APRÈS NAVIGATION
========================================= */

function closeMenu() {

    sideMenu.classList.remove("open");

}


/* =========================================
   PAGES DE L U K I
========================================= */

function showPage(page) {

    homeContent.classList.add("hidden");
    dynamicPage.classList.remove("hidden");

    closeMenu();

    let title = "";
    let description = "";
    let icon = "";

    switch (page) {

        case "films":

            icon = "🎬";

            title = "FILMS";

            description =
                "Découvrez des films, séries, nouveautés, classiques, productions africaines et bien plus.";

            break;


        case "music":

            icon = "🎵";

            title = "MUSIQUE";

            description =
                "Explorez les sons du moment, les artistes, les playlists, les charts et les musiques du monde.";

            break;


        case "entertainment":

            icon = "🎉";

            title = "DIVERTISSEMENT";

            description =
                "Humour, quiz, défis, traditions, contenus numériques et activités pour vous divertir.";

            break;


        case "games":

            icon = "🎮";

            title = "JEUX";

            description =
                "Jouez à des mini-jeux, relevez des défis et amusez-vous seul ou avec vos amis.";

            break;


        case "search":

            icon = "🔎";

            title = "RECHERCHE";

            description =
                "Recherchez vos films, séries, artistes, chansons, jeux et contenus préférés.";

            break;


        case "friends":

            icon = "👥";

            title = "AMIS";

            description =
                "Retrouvez vos amis, créez des groupes et partagez des moments de divertissement.";

            break;


        case "profile":

            icon = "👤";

            title = "PROFIL";

            description =
                "Gérez votre profil, vos préférences, vos favoris et votre activité sur L U K I.";

            break;


        default:

            icon = "✨";

            title = "L U K I";

            description =
                "Bienvenue dans votre univers de divertissement.";

    }


    pageContent.innerHTML = `

        <div class="hero">

            <div class="hero-bird">
                ${icon}
            </div>

            <h1 class="redirect-title">
                ${icon} ${title}
            </h1>

            <p class="redirect-description">
                ${description}
            </p>

        </div>

        <section class="dynamic-frame">

            <div class="frame-title">

                <span>
                    ${icon} À DÉCOUVRIR
                </span>

                <span>
                    →
                </span>

            </div>

            <div class="cards">

                <div class="content-card">

                    <span>${icon}</span>

                    <h3>
                        Contenu bientôt disponible
                    </h3>

                    <p>
                        Explorer
                    </p>

                </div>


                <div class="content-card">

                    <span>🔥</span>

                    <h3>
                        Tendances
                    </h3>

                    <p>
                        Découvrir
                    </p>

                </div>


                <div class="content-card">

                    <span>✨</span>

                    <h3>
                        Pour vous
                    </h3>

                    <p>
                        Explorer
                    </p>

                </div>

            </div>

        </section>

    `;

}


/* =========================================
   CONNEXION
========================================= */

function showLogin() {

    alert(
        "La connexion L U K I sera activée dans la prochaine version."
    );

}


/* =========================================
   INSCRIPTION
========================================= */

function showRegister() {

    alert(
        "La création de compte L U K I sera activée dans la prochaine version."
    );

}


/* =========================================
   SERVICE WORKER
========================================= */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("sw.js")
            .then(() => {

                console.log(
                    "L U K I : Service Worker actif."
                );

            })
            .catch(error => {

                console.log(
                    "Erreur Service Worker :",
                    error
                );

            });

    });

}
