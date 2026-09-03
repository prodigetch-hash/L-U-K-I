/* =========================================================
   L U K I — SCRIPT PRINCIPAL
   Prodige TCH
========================================================= */


/* =========================================================
   OUVERTURE
========================================================= */

function showOpening() {

    const screens = [
        "openingScreen",
        "policyScreen",
        "refusalScreen",
        "accessScreen"
    ];

    screens.forEach(id => {

        const element = document.getElementById(id);

        if (element) {
            element.classList.add("hidden");
        }

    });

    const mainApp = document.getElementById("mainApp");

    if (mainApp) {
        mainApp.classList.add("hidden");
    }

    const opening = document.getElementById("openingScreen");

    if (opening) {
        opening.classList.remove("hidden");
    }

}


/* =========================================================
   POLITIQUE
========================================================= */

function showPolicy() {

    const opening = document.getElementById("openingScreen");
    const policy = document.getElementById("policyScreen");
    const refusal = document.getElementById("refusalScreen");
    const access = document.getElementById("accessScreen");

    if (opening) opening.classList.add("hidden");
    if (refusal) refusal.classList.add("hidden");
    if (access) access.classList.add("hidden");

    if (policy) policy.classList.remove("hidden");

}


function acceptPolicy() {

    const checkbox =
        document.getElementById("policyAccepted");

    if (!checkbox || !checkbox.checked) {

        alert(
            "Veuillez confirmer que vous avez lu et compris les informations."
        );

        return;
    }

    const policy =
        document.getElementById("policyScreen");

    const access =
        document.getElementById("accessScreen");

    if (policy) {
        policy.classList.add("hidden");
    }

    if (access) {
        access.classList.remove("hidden");
    }

}


function refusePolicy() {

    const policy =
        document.getElementById("policyScreen");

    const refusal =
        document.getElementById("refusalScreen");

    if (policy) {
        policy.classList.add("hidden");
    }

    if (refusal) {
        refusal.classList.remove("hidden");
    }

}


/* =========================================================
   ACCUEIL
========================================================= */

function showHome() {

    const opening =
        document.getElementById("openingScreen");

    const policy =
        document.getElementById("policyScreen");

    const refusal =
        document.getElementById("refusalScreen");

    const access =
        document.getElementById("accessScreen");

    const mainApp =
        document.getElementById("mainApp");

    const home =
        document.getElementById("homePage");

    const dynamic =
        document.getElementById("dynamicPage");

    const auth =
        document.getElementById("authPage");


    if (opening) opening.classList.add("hidden");
    if (policy) policy.classList.add("hidden");
    if (refusal) refusal.classList.add("hidden");
    if (access) access.classList.add("hidden");

    if (mainApp) {
        mainApp.classList.remove("hidden");
    }

    if (home) {
        home.classList.remove("hidden");
    }

    if (dynamic) {
        dynamic.classList.add("hidden");
    }

    if (auth) {
        auth.classList.add("hidden");
    }

    closeMenu();

}


/* =========================================================
   MENU LATÉRAL
========================================================= */

function toggleMenu() {

    const menu =
        document.getElementById("sideMenu");

    if (!menu) return;

    menu.classList.toggle("open");

}


function closeMenu() {

    const menu =
        document.getElementById("sideMenu");

    if (!menu) return;

    menu.classList.remove("open");

}


/* =========================================================
   PAGES DYNAMIQUES
========================================================= */

function showPage(page) {

    const home =
        document.getElementById("homePage");

    const dynamic =
        document.getElementById("dynamicPage");

    const auth =
        document.getElementById("authPage");

    const container =
        document.getElementById("dynamicPageContainer");


    if (!dynamic || !container) {
        return;
    }


    if (home) {
        home.classList.add("hidden");
    }

    dynamic.classList.remove("hidden");

    if (auth) {
        auth.classList.add("hidden");
    }


    let title = "L U K I";
    let icon = "✨";
    let description =
        "Découvre ton prochain univers.";

    let category = "";


    /* =====================================================
       FILMS
    ===================================================== */

    switch (page) {

        case "films":

            title = "Films";
            icon = "🎬";
            category = "UNIVERS FILMS";

            description =
                "Découvre les films, séries, nouveautés, classiques et recommandations de L U K I.";

            break;


        case "films-moment":

            title = "Vos films du moment";
            icon = "🔥";
            category = "FILMS";

            description =
                "Les films qui attirent actuellement tous les regards.";

            break;


        case "cinema-discovery":

            title = "Ciné découverte";
            icon = "🔎";
            category = "FILMS";

            description =
                "Explore des films que tu n'aurais peut-être jamais pensé à chercher.";

            break;


        case "action":

            title = "Action à volonté";
            icon = "💥";
            category = "FILMS";

            description =
                "Adrénaline, missions, aventures et grandes histoires.";

            break;


        case "romance":

            title = "Romance";
            icon = "❤️";
            category = "FILMS";

            description =
                "Des histoires fortes, tendres et passionnées.";

            break;


        case "series":

            title = "Séries du moment";
            icon = "📺";
            category = "FILMS";

            description =
                "Trouve ta prochaine série à dévorer.";

            break;


        case "surprise-film":

            title = "Surprends-moi";
            icon = "🎲";
            category = "FILMS";

            description =
                "Laisse L U K I choisir ton prochain visionnage.";

            break;


        /* =================================================
           MUSIQUE
        ================================================= */

        case "music":

            title = "Musique";
            icon = "🎵";
            category = "UNIVERS MUSIQUE";

            description =
                "Découvre les tendances, artistes, sons, playlists et univers musicaux.";

            break;


        case "global-top":

            title = "Top mondial";
            icon = "🌎";
            category = "MUSIQUE";

            description =
                "Les morceaux qui font vibrer le monde entier.";

            break;


        case "sons-moment":

            title = "Sons du moment";
            icon = "🔥";
            category = "MUSIQUE";

            description =
                "Découvre les titres qui montent actuellement.";

            break;


        case "cameroon-music":

            title = "Les sons du Cameroun";
            icon = "🇨🇲";
            category = "MUSIQUE";

            description =
                "Artistes, talents et vibrations camerounaises.";

            break;


        case "afrobeats":

            title = "Afrobeats";
            icon = "🌍";
            category = "MUSIQUE";

            description =
                "Les rythmes africains qui voyagent partout.";

            break;


        case "music-mood":

            title = "Ta musique, ton mood";
            icon = "🎧";
            category = "MUSIQUE";

            description =
                "Love, chill, énergie, concentration et bien plus.";

            break;


        case "old-school":

            title = "Machine à remonter le temps";
            icon = "🕰️";
            category = "MUSIQUE";

            description =
                "Retourne dans les années qui ont marqué la musique.";

            break;


        /* =================================================
           DIVERTISSEMENT
        ================================================= */

        case "entertainment":

            title = "Divertissement";
            icon = "🎉";
            category = "UNIVERS DIVERTISSEMENT";

            description =
                "Humour, vidéos, podcasts, quiz, cultures, défis et activités.";

            break;


        case "short-videos":

            title = "À regarder maintenant";
            icon = "😂";
            category = "DIVERTISSEMENT";

            description =
                "Humour, vidéos courtes, moments insolites et créativité.";

            break;


        case "quiz":

            title = "Teste-toi";
            icon = "🧠";
            category = "DIVERTISSEMENT";

            description =
                "Questions, énigmes, défis et jeux de connaissances.";

            break;


        case "traditions":

            title = "Traditions du monde";
            icon = "🌍";
            category = "DIVERTISSEMENT";

            description =
                "Découvre les histoires, cultures et traditions du monde.";

            break;


        case "friends-entertainment":

            title = "Avec tes amis";
            icon = "👥";
            category = "DIVERTISSEMENT";

            description =
                "Crée des moments ensemble, invite et défie tes proches.";

            break;


        case "surprise":

            title = "Je veux me divertir";
            icon = "🎲";
            category = "DIVERTISSEMENT";

            description =
                "Laisse L U K I choisir une activité adaptée à ton moment.";

            break;


        case "podcasts":

            title = "Podcasts & discussions";
            icon = "🎙️";
            category = "DIVERTISSEMENT";

            description =
                "Écoute, découvre et partage des conversations passionnantes.";

            break;


        /* =================================================
           JEUX
        ================================================= */

        case "games":

            title = "Jeux";
            icon = "🎮";
            category = "UNIVERS JEUX";

            description =
                "Jeux rapides, réflexion, défis, parties entre amis et découvertes.";

            break;


        case "games-now":

            title = "Jeux du moment";
            icon = "🔥";
            category = "JEUX";

            description =
                "Découvre les jeux les plus populaires du moment.";

            break;


        case "quick-games":

            title = "Parties rapides";
            icon = "⚡";
            category = "JEUX";

            description =
                "Lance une partie en quelques secondes.";

            break;


        case "brain-games":

            title = "Teste ton cerveau";
            icon = "🧠";
            category = "JEUX";

            description =
                "Logique, mémoire, calcul et stratégie.";

            break;


        case "friends-games":

            title = "Joue avec tes amis";
            icon = "👥";
            category = "JEUX";

            description =
                "Défie quelqu'un et lance une partie.";

            break;


        case "play-now":

            title = "Jouer maintenant";
            icon = "⚡";
            category = "JEUX";

            description =
                "Laisse L U K I choisir un jeu pour toi.";

            break;


        case "world-games":

            title = "Jeux du monde";
            icon = "🌍";
            category = "JEUX";

            description =
                "Découvre des jeux venus de différentes cultures.";

            break;


        /* =================================================
           RECHERCHE
        ================================================= */

        case "search":

            title = "Recherche";
            icon = "🔎";
            category = "L U K I";

            description =
                "Recherche des films, artistes, musiques, jeux, divertissements et personnes.";

            break;


        /* =================================================
           AMIS
        ================================================= */

        case "friends":

            title = "Amis";
            icon = "👥";
            category = "SOCIAL";

            description =
                "Retrouve tes amis, invite-les et partage des activités.";

            break;


        /* =================================================
           PROFIL
        ================================================= */

        case "profile":

            title = "Profil";
            icon = "👤";
            category = "MON ESPACE";

            description =
                "Gère ton profil, tes préférences et ton activité.";

            break;


        /* =================================================
           PAR DÉFAUT
        ================================================= */

        default:

            title = "L U K I";
            icon = "✨";
            category = "BIENTÔT";

            description =
                "Cette fonctionnalité arrive bientôt dans L U K I.";

            break;
    }


    /* =====================================================
       AFFICHAGE DE LA PAGE
    ===================================================== */

    container.innerHTML = `

        <div class="dynamic-page-card">

            <div class="dynamic-page-icon">
                ${icon}
            </div>

            ${
                category
                    ? `<span class="panel-label">${category}</span>`
                    : ""
            }

            <h1>
                ${title}
            </h1>

            <p>
                ${description}
            </p>


            <div class="dynamic-page-actions">

                <button
                    class="primary-button"
                    onclick="showHome()"
                >
                    RETOUR À L'ACCUEIL
                </button>

            </div>

        </div>

    `;


    closeMenu();

}


/* =========================================================
   AUTHENTIFICATION
========================================================= */

function showLogin() {

    const home =
        document.getElementById("homePage");

    const dynamic =
        document.getElementById("dynamicPage");

    const auth =
        document.getElementById("authPage");

    const loginTab =
        document.getElementById("loginTab");

    const registerTab =
        document.getElementById("registerTab");


    if (home) {
        home.classList.add("hidden");
    }

    if (dynamic) {
        dynamic.classList.add("hidden");
    }

    if (auth) {
        auth.classList.remove("hidden");
    }


    if (loginTab) {
        loginTab.classList.add("active");
    }

    if (registerTab) {
        registerTab.classList.remove("active");
    }


    closeMenu();

}


function showRegister() {

    const home =
        document.getElementById("homePage");

    const dynamic =
        document.getElementById("dynamicPage");

    const auth =
        document.getElementById("authPage");

    const loginTab =
        document.getElementById("loginTab");

    const registerTab =
        document.getElementById("registerTab");


    if (home) {
        home.classList.add("hidden");
    }

    if (dynamic) {
        dynamic.classList.add("hidden");
    }

    if (auth) {
        auth.classList.remove("hidden");
    }


    if (loginTab) {
        loginTab.classList.remove("active");
    }

    if (registerTab) {
        registerTab.classList.add("active");
    }


    closeMenu();

}


/* =========================================================
   AUTH — VERSION INTERFACE
========================================================= */

function submitAuth(method) {

    let message = "";


    switch (method) {

        case "Google":

            message =
                "La connexion Google sera disponible avec l'intégration du système d'authentification.";

            break;


        case "Apple":

            message =
                "La connexion Apple sera disponible avec l'intégration du système d'authentification.";

            break;


        case "Facebook":

            message =
                "La connexion Facebook sera disponible avec l'intégration du système d'authentification.";

            break;


        case "SMS":

            message =
                "La connexion par SMS sera disponible avec l'intégration d'un service d'authentification.";

            break;


        case "autre":

            message =
                "Les autres méthodes de connexion seront ajoutées prochainement.";

            break;


        case "connexion":

            message =
                "Le système de connexion sécurisé sera activé lors de la mise en place du serveur d'authentification.";

            break;


        default:

            message =
                "Cette méthode de connexion sera bientôt disponible.";

            break;
    }


    alert(message);

}


/* =========================================================
   FERMETURE DU MENU EN CLIQUANT À L'EXTÉRIEUR
========================================================= */

document.addEventListener("click", function(event) {

    const menu =
        document.getElementById("sideMenu");

    const menuButton =
        document.querySelector(".menu-button");


    if (!menu || !menu.classList.contains("open")) {
        return;
    }


    if (
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        closeMenu();

    }

});


/* =========================================================
   SERVICE WORKER
========================================================= */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./sw.js")
            .then(() => {

                console.log(
                    "L U K I — Service Worker actif"
                );

            })
            .catch(error => {

                console.log(
                    "L U K I — Erreur Service Worker :",
                    error
                );

            });

    });

}
