/* Joxia Games — traduction française de 3d.city (à l'affichage).
 * Le jeu construit son interface en anglais ; ce script remplace les textes au moment
 * où ils apparaissent dans la page (MutationObserver), sans modifier le code du jeu :
 * les mêmes mots servant parfois de clés internes (« Fire », « Budget »…), traduire
 * le code lui-même risquerait de casser la logique. Le code du jeu ne relit jamais ces textes.
 */
(function () {
    'use strict';
    var D = {
        // accueil / chargement
        'City Builder': 'Bâtisseur de ville', 'Loading…': 'Chargement…', 'Generating map…': 'Génération de la carte…',
        'Loading 3d models ...': 'Chargement des modèles 3D…', 'Loading texture ...': 'Chargement des textures…',
        'Loading images ...': 'Chargement des images…', 'Loading envmap ...': 'Chargement de l’environnement…',
        'Loading Lut ...': 'Chargement des couleurs…',
        'New Game': 'Nouvelle partie', 'Continue...': 'Continuer…', 'Load Map': 'Charger une carte', 'About': 'À propos',
        'DIFFICULTY': 'DIFFICULTÉ', 'EASY': 'FACILE', 'MEDIUM': 'MOYEN', 'HARD': 'DIFFICILE',
        'MAP SIZE': 'TAILLE DE LA CARTE', 'SMALL': 'PETITE', 'LARGE': 'GRANDE', 'GENERATE': 'GÉNÉRER', 'PLAY': 'JOUER',
        '✔ Auto-saved': '✔ Sauvegarde automatique',
        // barre du haut
        'class': 'rang', 'Date': 'Date', 'Population': 'Population', 'money': 'argent', 'Score': 'Score', 'happiness': 'bonheur',
        'Village': 'Village', 'Town': 'Bourg', 'City': 'Ville', 'Capital': 'Capitale', 'Metropolis': 'Métropole',
        'Metropolos': 'Métropole', 'Megalopolis': 'Mégalopole',
        'VILLAGE': 'VILLAGE', 'TOWN': 'BOURG', 'CITY': 'VILLE', 'CAPITAL': 'CAPITALE', 'METROPOLIS': 'MÉTROPOLE', 'MEGALOPOLIS': 'MÉGALOPOLE',
        // fenêtres
        'Budget': 'Budget', 'Eval': 'Évaluation', 'Disaster': 'Catastrophes', 'Save Load': 'Sauvegarde', 'Awards': 'Succès',
        'History': 'Historique', 'Overlays': 'Calques', 'Ordinances': 'Arrêtés', 'Economy': 'Économie',
        'Close (Esc)': 'Fermer (Échap)', 'BUILD': 'CONSTRUIRE', 'SERVICE': 'SERVICES',
        'Drag view': 'Déplacer la vue', 'Get info': 'Infos', 'Rotate view': 'Pivoter la vue',
        // budget
        'Residential Tax': 'Taxe résidentielle', 'Commercial Tax': 'Taxe commerciale', 'Industrial Tax': 'Taxe industrielle',
        'Tax': 'Impôt', 'Roads': 'Routes', 'Fire': 'Incendie', 'Police': 'Police', 'Water': 'Eau', 'Education': 'Éducation',
        'Tax Rates': 'Taux d’imposition', 'Services': 'Services', 'Municipal Bonds': 'Emprunts municipaux',
        'Annual receipts:': 'Recettes annuelles :', 'Outstanding debt:': 'Dette restante :', 'Taxes collected:': 'Impôts perçus :',
        // catastrophes & calques
        'None': 'Aucun', 'Monster': 'Monstre', 'Flood': 'Inondation', 'Crash': 'Crash d’avion', 'Meltdown': 'Fusion nucléaire',
        'Tornado': 'Tornade', 'Earthquake': 'Séisme',
        'Density': 'Densité', 'Growth': 'Croissance', 'Land value': 'Valeur foncière', 'Crime Rate': 'Criminalité',
        'Pollution': 'Pollution', 'Traffic': 'Trafic', 'Power Grid': 'Réseau électrique',
        // sauvegarde
        'NEW MAP': 'NOUVELLE CARTE', 'SAVE': 'SAUVEGARDER', 'LOAD': 'CHARGER', 'LOCAL SAVE': 'SAUVEGARDE LOCALE',
        'Save current city to localStorage': 'Sauvegarder la ville dans le navigateur',
        'Save current city to a JSON file': 'Sauvegarder la ville dans un fichier JSON',
        'Load a previously saved city': 'Charger une ville sauvegardée',
        'Create a new city on a freshly generated map': 'Créer une ville sur une nouvelle carte',
        // évaluation
        'WORST PROBLEMS': 'PIRES PROBLÈMES', 'CITY STATISTICS': 'STATISTIQUES DE LA VILLE', 'CITY WELL-BEING': 'BIEN-ÊTRE DE LA VILLE',
        'COVERAGE & AMENITIES': 'COUVERTURE & ÉQUIPEMENTS', 'ECONOMY FOCUS': 'ORIENTATION ÉCONOMIQUE',
        'Public Opinion': 'Opinion publique', 'Is the mayor doing a good job?': 'Le maire fait-il du bon travail ?',
        'Crime:': 'Criminalité :', 'Pollution:': 'Pollution :', 'Traffic:': 'Trafic :', 'Season:': 'Saison :',
        'Education:': 'Éducation :', 'Health:': 'Santé :', 'Unemployment:': 'Chômage :', 'Happiness:': 'Bonheur :',
        'Police:': 'Police :', 'Fire:': 'Pompiers :', 'Water:': 'Eau :', 'Hospitals:': 'Hôpitaux :', 'Schools:': 'Écoles :',
        'Edu. Fund:': 'Budget éducation :', 'Parks:': 'Parcs :',
        'Poor': 'Faible', 'Basic': 'Basique', 'Good': 'Bon', 'Excellent': 'Excellent', 'Critical': 'Critique', 'Fair': 'Correct',
        'Miserable': 'Misérable', 'Unhappy': 'Mécontent', 'Content': 'Satisfait', 'Happy': 'Heureux', 'Thriving': 'Épanoui',
        'Crime': 'Criminalité', 'Housing': 'Logement', 'Taxes': 'Impôts', 'Unemployment': 'Chômage',
        'Easy': 'Facile', 'Medium': 'Moyen', 'Hard': 'Difficile',
        // infos (outil ?)
        'Low': 'Faible', 'High': 'Élevée', 'Very High': 'Très élevée', 'Slum': 'Bidonville', 'Lower Class': 'Populaire',
        'Middle Class': 'Classe moyenne', 'Safe': 'Sûr', 'Light': 'Léger', 'Moderate': 'Modéré', 'Dangerous': 'Dangereux',
        'Heavy': 'Forte', 'Very Heavy': 'Très forte', 'Declining': 'En déclin', 'Stable': 'Stable',
        'Slow Growth': 'Croissance lente', 'Fast Growth': 'Croissance rapide',
        'Clear': 'Terrain vide', 'Trees': 'Arbres', 'Rubble': 'Gravats', 'Radioactive Waste': 'Déchets radioactifs',
        'Road': 'Route', 'Power': 'Électricité', 'Rail': 'Voie ferrée', 'Residential': 'Résidentiel', 'Commercial': 'Commercial',
        'Industrial': 'Industriel', 'Seaport': 'Port', 'Airport': 'Aéroport', 'Coal Power': 'Centrale à charbon',
        'Fire Department': 'Caserne de pompiers', 'Police Department': 'Commissariat', 'Stadium': 'Stade',
        'Nuclear Power': 'Centrale nucléaire', 'Draw Bridge': 'Pont-levis', 'Radar Dish': 'Radar', 'Fountain': 'Fontaine',
        // outils (le nom est suivi d'une espace insécable puis du prix)
        'Residential ': 'Zone résidentielle ', 'Commercial ': 'Zone commerciale ', 'Industrial ': 'Zone industrielle ',
        'Police ': 'Commissariat ', 'Park ': 'Parc ', 'Fire ': 'Caserne de pompiers ', 'Road ': 'Route ',
        'Bulldozer ': 'Bulldozer ', 'Rail ': 'Voie ferrée ', 'Coal ': 'Centrale à charbon ',
        'Wire ': 'Ligne électrique ', 'Nuclear ': 'Centrale nucléaire ', 'Hospital ': 'Hôpital ',
        'Turbine ': 'Éolienne ', 'School ': 'École ', 'Port ': 'Port ', 'Stadium ': 'Stade ',
        'Airport ': 'Aéroport ',
        // saisons, mois, historique
        'Spring': 'Printemps', 'Summer': 'Été', 'Autumn': 'Automne', 'Winter': 'Hiver',
        'No events recorded yet': 'Aucun événement pour l’instant',
        // économie & arrêtés
        'Choose your city\'s economic focus. Specializations affect tax yields, pollution, and city growth.':
            'Choisis l’orientation économique de ta ville. Elle influence les recettes fiscales, la pollution et la croissance.',
        'Mixed Economy': 'Économie mixte', 'Balanced development across all sectors. No bonuses or penalties.':
            'Développement équilibré dans tous les secteurs. Ni bonus ni malus.',
        'Tech Hub': 'Pôle technologique', 'High-skilled jobs, clean industry. Higher commercial/industrial tax, lower pollution, but expensive infrastructure.':
            'Emplois qualifiés, industrie propre. Impôts commerciaux/industriels plus élevés, moins de pollution, mais infrastructures coûteuses.',
        'Manufacturing': 'Industrie lourde', 'Heavy industry drives strong tax revenue but creates significant pollution.':
            'L’industrie lourde rapporte beaucoup d’impôts mais pollue énormément.',
        'Tourism': 'Tourisme', 'Service-economy city. Strong commercial tax base, parks are highly valued; low crime required.':
            'Ville de services. Forte base fiscale commerciale, parcs très appréciés ; criminalité faible exigée.',
        'Farming & Agriculture': 'Agriculture', 'Rural-focused economy. Low pollution and stable employment, but modest tax yields.':
            'Économie rurale. Peu de pollution et emploi stable, mais recettes fiscales modestes.',
        'No annual cost': 'Aucun coût annuel',
        'Free Clinics': 'Cliniques gratuites', 'Fund public health clinics. Improves city health rating.':
            'Finance des cliniques publiques. Améliore la santé de la ville.',
        'Recycling Program': 'Programme de recyclage', 'Mandatory recycling reduces city-wide pollution.':
            'Le tri obligatoire réduit la pollution de toute la ville.',
        'Education Subsidies': 'Aides à l’éducation', 'Subsidise schools and libraries. Improves education and attracts residents.':
            'Subventionne écoles et bibliothèques. Améliore l’éducation et attire des habitants.',
        'Noise Ordinance': 'Arrêté anti-bruit', 'Restrict noise-generating activities. Small happiness boost at no cost.':
            'Limite les activités bruyantes. Petit gain de bonheur, gratuit.',
        'Small Business Incentive': 'Aide aux petits commerces', 'Tax breaks encourage commercial growth, but reduce commercial tax yield by 10%.':
            'Des allègements fiscaux stimulent le commerce, mais réduisent de 10 % les impôts commerciaux.',
        'Public Transit Subsidy': 'Transports en commun', 'Fund public buses and trams to reduce road congestion.':
            'Finance bus et tramways pour réduire les embouteillages.',
        'Green Building Code': 'Normes écologiques', 'Require energy-efficient construction. Reduces city-wide pollution and improves health at modest cost.':
            'Impose des bâtiments économes en énergie. Réduit la pollution et améliore la santé pour un coût modeste.',
        'Speed Camera Network': 'Radars routiers', 'Automated enforcement reduces accidents and deters crime in residential areas.':
            'Les contrôles automatiques réduisent les accidents et la criminalité dans les quartiers résidentiels.',
        // succès
        'Founder': 'Fondateur', 'Place your first zone': 'Place ta première zone', 'Small Settlement': 'Petit hameau',
        'Growing Town': 'Bourg en plein essor', 'City Founder': 'Fondateur de ville', 'Capital Builder': 'Bâtisseur de capitale',
        'Metropolis Master': 'Maître de la métropole', 'Prosperous': 'Prospère', 'Tycoon': 'Magnat',
        'Safe Streets': 'Rues sûres', 'Keep crime average below 10': 'Garder une criminalité moyenne sous 10',
        'Green City': 'Ville verte', 'Keep pollution average below 15': 'Garder une pollution moyenne sous 15',
        'Beloved Mayor': 'Maire adoré', 'Get 90%+ approval rating': 'Obtenir plus de 90 % d’approbation',
        'Perfect City': 'Ville parfaite', 'Achieve city score of 900+': 'Atteindre un score de 900+',
        'Nuclear Age': 'Ère nucléaire', 'Build a nuclear power plant': 'Construire une centrale nucléaire',
        'Harbor Master': 'Capitaine de port', 'Build a seaport': 'Construire un port', 'Sports Fan': 'Fan de sport',
        'Build a stadium': 'Construire un stade', 'Doctor Mayor': 'Maire médecin', 'Build a hospital': 'Construire un hôpital',
        'Educator': 'Éducateur', 'Build a school or community center': 'Construire une école ou un centre culturel',
        'Full Coverage': 'Couverture totale', 'Have police, fire, and hospital': 'Avoir police, pompiers et hôpital',
        'Resilient': 'Résilient', 'Survive a disaster': 'Survivre à une catastrophe', 'Millennium': 'Millénaire',
        'Reach the year 2000': 'Atteindre l’an 2000', 'Educated City': 'Ville instruite', 'Reach education level 150+': 'Atteindre un niveau d’éducation de 150+',
        'Healthy City': 'Ville en bonne santé', 'Reach health level 150+': 'Atteindre un niveau de santé de 150+',
        'Utopia': 'Utopie', 'Reach happiness level 85+': 'Atteindre un niveau de bonheur de 85+',
        'Debt Free': 'Sans dette', 'Pay off all municipal bond debt': 'Rembourser tous les emprunts municipaux',
        'Fireproof': 'Ignifugé', 'Keep fire severity at zero for a full evaluation cycle': 'Aucun incendie pendant tout un cycle d’évaluation',
        'Park Builder': 'Paysagiste', 'Place 20 or more park tiles': 'Placer au moins 20 cases de parc',
        // à propos
        'KEYBOARD SHORTCUTS': 'RACCOURCIS CLAVIER', 'Save/Load': 'Sauvegarde', 'This panel': 'Cette fenêtre',
        'Esc Close window': 'Échap Fermer la fenêtre', 'Close window': 'Fermer la fenêtre',
        'Simulation inspired by MicropolisJS': 'Simulation inspirée de MicropolisJS', 'Source Code on GitHub ↗': 'Code source sur GitHub ↗',
        // messages de la simulation
        'Insufficient funds to build that': 'Fonds insuffisants pour construire ceci', 'Area must be bulldozed first': 'Il faut d’abord raser la zone',
        'Fire departments need funding': 'Les pompiers manquent de budget', 'Commerce requires an Airport': 'Le commerce a besoin d’un aéroport',
        'Citizens demand a Fire Department': 'Les habitants réclament une caserne de pompiers',
        'Citizens demand a Hospital': 'Les habitants réclament un hôpital', 'Build a Power Plant': 'Construis une centrale électrique',
        'More industrial zones needed': 'Il faut plus de zones industrielles', 'More commercial zones needed': 'Il faut plus de zones commerciales',
        'More residential zones needed': 'Il faut plus de zones résidentielles', 'Inadequate rail system': 'Réseau ferré insuffisant',
        'More roads required': 'Il faut plus de routes', 'Citizens demand a Police Department': 'Les habitants réclament un commissariat',
        'Industry requires a Sea Port': 'L’industrie a besoin d’un port', 'Residents demand a Stadium': 'Les habitants réclament un stade',
        'Roads deteriorating, due to lack of funds': 'Les routes se dégradent faute de budget',
        'Police departments need funding': 'La police manque de budget', 'Welcome to 3D City': 'Bienvenue dans 3D City',
        'A new season has arrived': 'Une nouvelle saison commence', 'Citizens demand more schools': 'Les habitants réclament plus d’écoles',
        'Annual bond interest payment deducted': 'Intérêts annuels des emprunts prélevés', 'Municipal bond issued': 'Emprunt municipal émis',
        'Brownouts, build another Power Plant': 'Baisses de tension : construis une autre centrale',
        'A helicopter crashed': 'Un hélicoptère s’est écrasé', 'Major earthquake reported !!': 'Violent séisme signalé !!',
        'Explosion detected': 'Explosion détectée', 'Flooding reported !': 'Inondation signalée !', 'Fire reported': 'Incendie signalé',
        'Heavy Traffic reported': 'Trafic dense signalé', 'Crime very high': 'Criminalité très élevée',
        'Pollution very high': 'Pollution très élevée', 'A Monster has been sighted !': 'Un monstre a été aperçu !',
        'YOUR CITY HAS GONE BROKE': 'TA VILLE EST EN FAILLITE',
        'Blackouts reported. insufficient power capacity': 'Coupures de courant : capacité électrique insuffisante',
        'A Nuclear Meltdown has occurred !!': 'Fusion du réacteur nucléaire !!', 'A plane has crashed': 'Un avion s’est écrasé',
        'Shipwreck reported': 'Naufrage signalé', 'Citizens upset. The tax rate is too high': 'Habitants mécontents : les impôts sont trop élevés',
        'Tornado reported !': 'Tornade signalée !', 'Frequent traffic jams reported': 'Embouteillages fréquents signalés',
        'A train crashed': 'Un train a déraillé', 'Heat wave! Increased fire risk': 'Canicule ! Risque d’incendie accru',
        'Blizzard! Roads deteriorating faster': 'Blizzard ! Les routes se dégradent plus vite',
        'Education levels critically low': 'Niveau d’éducation critique', 'Warning: high municipal debt burden': 'Attention : dette municipale élevée',
        'Achievement Unlocked!': 'Succès débloqué !'
    };
    var MONTHS = { Jan: 'janv.', Feb: 'févr.', Mar: 'mars', Apr: 'avr.', May: 'mai', Jun: 'juin', Jul: 'juil.', Aug: 'août', Sep: 'sept.', Oct: 'oct.', Nov: 'nov.', Dec: 'déc.' };
    var t = function (s) { return D[s] || s; };
    // textes avec des nombres
    var R = [
        [/^(Residential Tax|Commercial Tax|Industrial Tax|Tax) (\d+)%$/, function (m, a, b) { return t(a) + ' ' + b + ' %'; }],
        [/^(Roads|Fire|Police|Water|Education) (\d+)% of (-?[\d.]+)\$ = (-?[\d.]+)\$$/, function (m, a, b, c, d) { return t(a) + ' ' + b + ' % de ' + c + ' $ = ' + d + ' $'; }],
        [/^YES: (\d+)%$/, 'OUI : $1 %'], [/^NO: (\d+)%$/, 'NON : $1 %'],
        [/^Issue \$([\d,]+) bond \(7% interest\/yr\)$/, 'Emprunter $1 $ (intérêts 7 %/an)'],
        [/^Annual ordinance cost: (.*)$/, 'Coût annuel des arrêtés : $1'],
        [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b(.*)$/, function (m, a, b) { return MONTHS[a] + b; }],
        [/^Reach ([\d,]+) population$/, 'Atteindre $1 habitants'],
        [/^Accumulate \$([\d,]+)$/, 'Accumuler $1 $'],
        [/^Population has reached ([\d,]+)$/, 'La population a atteint $1 habitants'],
        [/^City reached population (.*)$/, 'La ville a atteint $1 habitants'],
        [/^(.+) struck the city!$/, function (m, a) { return t(a) + ' a frappé la ville !'; }],
        [/^Issued municipal bond of \$(.*)$/, 'Emprunt municipal de $1 $ émis'],
        [/^City industry focus changed to (.*)$/, function (m, a) { return 'Orientation économique : ' + t(a); }],
        [/^(Density|Value|Crime): (.*)$/, function (m, a, b) { return { Density: 'Densité', Value: 'Valeur', Crime: 'Criminalité' }[a] + ' : ' + t(b); }]
    ];
    function tr(v) {
        if (!v || !/[A-Za-z]/.test(v)) return v;
        if (D[v]) return D[v];
        // préfixe non alphabétique (émoji, espace insécable…) et fin d'espaces conservés
        var m = /^([^A-Za-z]*)([\s\S]*?)([\s ]*)$/.exec(v);
        var pre = m[1], core = m[2], post = m[3];
        if (D[core + post]) return pre + D[core + post];
        if (D[core]) return pre + D[core] + post;
        for (var i = 0; i < R.length; i++) {
            if (R[i][0].test(core)) return pre + core.replace(R[i][0], R[i][1]) + post;
        }
        return v;
    }
    function walk(n) {
        if (n.nodeType === 3) {
            var v = tr(n.nodeValue);
            if (v !== n.nodeValue) n.nodeValue = v;
        } else if (n.nodeType === 1 && !/^(SCRIPT|STYLE|TEXTAREA|INPUT)$/.test(n.tagName)) {
            if (n.title) { var tt = tr(n.title); if (tt !== n.title) n.title = tt; }
            for (var c = n.firstChild; c; c = c.nextSibling) walk(c);
        }
    }
    function start() {
        walk(document.body);
        new MutationObserver(function (ms) {
            ms.forEach(function (m) {
                if (m.type === 'characterData') walk(m.target);
                else if (m.type === 'attributes') walk(m.target);
                else m.addedNodes.forEach(walk);
            });
        }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['title'] });
    }
    if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
