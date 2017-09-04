jQuery(function ($) {
    $("#user_phone").mask("+7 (999) 999 99 99");

    var autos = {
        "AC": ["Ace", "Aceca", "Cobra", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Acura": ["CL", "CSX", "EL", "Integra", "MDX", "NSX", "RDX", "RL", "RSX", "SLX", "TL", "TLX", "TSX", "ZDX", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Alfa Romeo": ["145", "146", "147", "155", "156", "159", "164", "166", "33", "4C", "75", "90", "Arna", "Brera", "Giulietta", "GT", "GTV", "MiTo", "RZ", "Spider", "SZ", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Alpina": ["B10", "B11", "B12", "B3", "B5", "B6", "B7", "B8", "B9", "C1", "C2", "D10", "D3", "D5", "XD3", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Aro": ["10", "24", "Spartana", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Aston Martin": ["Cygnet", "DB7", "DB9", "DBS", "Lagonda", "One-77", "Rapide", "Rapide S", "V12 Vantage", "V12 Vantage S", "V8 Vantage", "V8 Vantage S", "Vanquish", "Virage", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Audi": ["100", "200", "80", "90", "A1", "A2", "A3", "A4", "A4 Allroad Quattro", "A5", "A6", "A6 Allroad Quattro", "A7", "A8", "Cabriolet", "Coupe", "Q3", "Q5", "Q7", "Quattro", "R8", "RS2", "RS3", "RS4", "RS5", "RS6", "RS7", "RS Q3", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "SQ5", "TT", "TT RS", "TTS", "V8", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "BAW": ["Fenix", "Tonik", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Bentley": ["Arnage", "Azure", "Bentayga", "Brooklands", "Continental", "Continental Flying Spur", "Continental GT", "Continental GTC", "Continental Supersports", "Mulsanne", "Turbo R", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "BMW": ["1M", "1 \u0441\u0435\u0440\u0438\u044f", "2 \u0441\u0435\u0440\u0438\u044f", "3 \u0441\u0435\u0440\u0438\u044f", "3 \u0441\u0435\u0440\u0438\u044f GT", "4 \u0441\u0435\u0440\u0438\u044f", "5 \u0441\u0435\u0440\u0438\u044f", "5 \u0441\u0435\u0440\u0438\u044f GT", "6 \u0441\u0435\u0440\u0438\u044f", "7 \u0441\u0435\u0440\u0438\u044f", "8 \u0441\u0435\u0440\u0438\u044f", "i3", "i8", "M3", "M4", "M5", "M6", "X1", "X3", "X4", "X5", "X5 M", "X6", "X6 M", "Z1", "Z3", "Z3 M", "Z4", "Z4 M", "Z8", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Brilliance": ["FRV (BS2)", "H230", "H530", "M1 (BS6)", "M2 (BS4)", "M3 (BC3)", "V5", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Bugatti": ["EB", "Veyron", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Buick": ["Allure", "Century", "Electra", "Enclave", "Excelle", "GL8", "LaCrosse", "LeSabre", "Lucerne", "Park Avenue", "Rainer", "Reatta", "Regal", "Rendezvous", "Riviera", "Roadmaster", "Royaum", "Sedan", "Skylark", "Terraza", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "BYD": ["ET", "F0", "F2", "F3", "F6", "Flyer", "S8", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Cadillac": ["Allante", "ATS", "BLS", "Brougham", "Catera", "CTS", "CTS-V", "DE Ville", "DTS", "Eldorado", "Escalade", "Fleetwood", "LSE", "Seville", "SRX", "STS", "Victoria", "XLR", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Changan": ["CS35", "Eado", "Raeton", "CM-8", "Z-Chine", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Chery": ["A5", "Amulet (A15)", "Arizzo 3", "Arizzo 7", "Bonus (A13)", "Bonus 3 (E3)", "CrossEastar (B14)", "Fora (A21)", "IndiS (S18D)", "Kimo (A1)", "M11 (A3)", "Oriental Son (B11)", "Sweet (QQ)", "QQ6 (S21)", "Tiggo (T11)", "Tiggo 5", "Very", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Chevrolet": ["Alero", "Astra", "Astro", "Avalanche", "Aveo", "Bel Air", "Beretta", "Blazer", "C10", "Camaro", "Caprice", "Captiva", "Cavalier", "Celebrity", "Celta", "Chevette", "Classic", "Cobalt", "Colorado", "Corsa", "Corsica", "Corvette", "Cruze", "Epica", "Equinox", "Evanda", "Express", "Geo Storm", "HHR", "Impala", "Lacetti", "Lanos", "Lumina", "LUV D-MAX", "Malibu", "Metro", "Monte Carlo", "Monza", "MW", "Niva", "Nubira", "Omega", "Orlando", "Prizm", "Rezzo", "S10", "Sail", "Silverado", "Sonic", "Spark", "SSR", "Starcraft", "Suburban", "Tahoe", "Tavera", "Tracker", "TrailBlazer", "Trans Sport", "Traverse", "Uplander", "Van", "Vectra", "Venture", "Viva", "Volt", "Zafira", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Chrysler": ["200", "300C", "300M", "Aspen", "Cirrus", "Concorde", "Crossfire", "Daytona Shelby", "Dynasty", "Fifth Avenue", "Grand Voyager", "Imperial", "Intrepid", "LeBaron", "LHS", "Nassau", "Neon", "New Yorker", "Pacifica", "Prowler", "PT Cruiser", "Saratoga", "Sebring", "Stratus", "Town & Country", "Viper", "Vision", "Voyager", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Citroen": ["2 CV", "Acadiane", "Ami", "AX", "Berlingo", "BX", "C1", "C15", "C2", "C25", "C3", "C35", "C3 Picasso", "C4", "C4 Aircross", "C4 Picasso", "C5", "C6", "C8", "C-Crosser", "C-Elysee", "CX", "C-Zero", "DS3", "DS4", "DS5", "Dyane", "Evasion", "Express", "FAF", "Grand C4 Picasso", "GS", "GSA", "Jumper", "Jumpy", "LN", "LNA", "Mehari", "Nemo", "Saxo", "Synergie", "Visa", "Xantia", "XM", "Xsara", "Xsara Picasso", "ZX", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Dacia": ["1304", "1310", "1325", "1410", "Dokker", "Duster", "Lodgy", "Logan", "Nova", "Sandero", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Dadi": ["City Leading", "Shuttle", "Smoothing", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Daewoo": ["Arcadia", "Brougham", "Charman", "Damas", "Espero", "Evanda", "G2X", "Gentra", "Istana", "Kalos", "Korando", "Labo", "Lacetti", "Lanos", "Leganza", "LeMans", "Magnus", "Matiz", "Musso", "Nexia", "Nubira", "Prince", "Racer", "Rezzo", "Sens", "Statesman", "Super Salon", "Tacuma", "Tico", "Tosca", "Winstorm", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Daihatsu": ["Altis", "Applause", "Atrai", "Be-go", "Boon", "Ceria", "Charade", "Charmant", "Coo", "Copen", "Cuore", "Delta", "Esse", "Feroza", "Hijet", "Leeza", "Materia", "MAX", "Mira", "Move", "Naked", "Opti", "Perodua Viva", "Pyzar", "Rocky", "Sirion", "Sonica", "Storia", "Taft", "Tanto", "Terios", "Trevis", "Wildcat", "Xenia", "YRV", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Daimler": ["Coupe", "Landaulette", "Limousine", "Super Eight", "XJ", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Datsun": ["mi-DO", "on-DO", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Derways": ["Antelope", "Aurora", "Cowboy", "Land Crown", "Plutus", "Saladin", "Shuttle", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Dodge": ["Avenger", "Caliber", "Caravan", "Challenger", "Charger", "Dakota", "Daytona", "Durango", "Dynasty", "Grand Caravan", "Intrepid", "Journey", "Magnum", "Monaco", "Neon", "Nitro", "Ram", "Shadow", "Spirit", "Stealth", "Stratus", "Viper", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Doninvest": ["Assol", "Kondor", "Orion", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Eagle": ["Premier", "SS", "Summit", "Talon", "Vision", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "FAW": ["Admiral", "Besturn", "Besturn B50", "Besturn B70", "Besturn X80", "Bora", "City Golf", "Jetta", "Jinn", "Landmark", "Oley", "V2", "V5", "Vela", "Vita", "Vizi", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Ferrari": ["208", "308", "328", "348", "360", "412", "456", "458 Italia", "458 Spider", "550", "575M Maranello", "599 GTB Fiorano", "612 Scaglietti", "California", "Dino", "Enzo", "F12berlinetta", "F355", "F40", "F430", "F50", "FF", "Mondial", "Testarossa", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "FIAT": ["124", "126", "127", "131", "500", "600", "Albea", "Barchetta", "Brava", "Bravo", "Cinquecento", "Coupe", "Croma", "Doblo", "Ducato", "Duna", "Fiorino", "Freemont", "Idea", "Linea", "Marea", "Multipla", "New 500", "Palio", "Panda", "Punto", "Regata", "Ritmo", "Scudo", "Sedici", "Seicento", "Siena", "Stilo", "Strada", "Tempra", "Tipo", "Ulysse", "Uno", "X1\/9", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Ford": ["Aerostar", "Aspire", "Bronco", "Capri", "C-MAX", "Consul", "Contour", "Cougar", "Courier", "Crown Victoria", "Econoline", "Econovan", "EcoSport", "Edge", "Escape", "Escort", "Everest", "Excursion", "Expedition", "Explorer", "F-150", "F-250", "F-350", "Festiva", "Fiesta", "Fiesta ST", "Five Hundred", "Flex", "Focus", "Focus RS", "Focus ST", "Freestar", "Freestyle", "Fusion", "Galaxy", "Granada", "Grand C-MAX", "GT", "Ka", "Kuga", "Laser", "Maverick", "Mondeo", "Mondeo ST", "Mustang", "Orion", "Probe", "Puma", "Ranger", "Scorpio", "Shelby", "Sierra", "S-MAX", "Taunus", "Taurus", "Tempo", "Thunderbird", "Tourneo", "Tourneo Connect", "Tourneo Custom", "Transit", "Windstar", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Geely": ["CK (Otaka)", "Emgrand EC7", "Emgrand X7", "GC6", "LC (Panda)", "LC (Panda) Cross", "Merrie", "MK", "MK Cross", "FC (Vision)", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "GMC": ["Acadia", "Aventra", "Berlina", "Calais", "Canyon", "Caprice", "Commodore", "Cruze", "Envoy", "Jimmy", "Safari", "Savana", "Sierra", "Statesman", "Suburban", "Typhoon", "Vandura", "Yukon", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Gonow": ["WAY M1", "WAY M2", "WAY V1"],
        "Great Wall": ["Coolbear", "Cowry", "Deer", "Florid", "Hover", "Pegasus", "Peri", "Safe", "Sailor", "Sokol", "Wingle", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Hafei": ["Brio", "Princip", "Saibao", "Sigma", "Simbo", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Haima": ["2", "3", "7", "M3", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Haval": ["H1", "H2", "H6", "H7", "H8", "H9", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Hawtai": ["Boliger", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Honda": ["Accord", "Airwave", "Ascot", "Avancier", "Beat", "Capa", "City", "Civic", "Concerto", "Crossroad", "Crosstour", "CR-V", "CR-X", "CR-Z", "Domani", "Edix", "Element", "Elysion", "Fit", "Fit Aria", "FR-V", "HR-V", "Insight", "Inspire", "Integra", "Jazz", "Lagreat", "Legend", "Life", "Logo", "MDX", "Mobilio", "NSX", "Odyssey", "Orthia", "Partner", "Passport", "Pilot", "Prelude", "Quintet", "Rafaga", "Ridgeline", "S2000", "Saber", "Shuttle", "SM-X", "Stepwgn", "Stream", "That S", "Today", "Torneo", "Vamos", "Vigor", "Z", "Zest", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Huanghai": ["Antelope", "Landscape", "Major", "Plutus", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Hummer": ["H1", "H2", "H3", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Hyundai": ["Accent", "Atos", "Avante", "Centennial", "Coupe", "Dynasty", "Elantra", "Equus", "Excel", "Galloper", "Genesis", "Getz", "Grandeur", "H-100", "H-1 (Grand Starex)", "i10", "i20", "i30", "i40", "ix20", "ix35", "ix55", "Lantra", "Lavita", "Marcia", "Matrix", "NF", "Pony", "Porter", "Santa Fe", "Santamo", "S-Coupe", "Solaris", "Sonata", "Starex", "Stellar", "Terracan", "Tiburon", "Trajet", "Tucson", "Tuscani", "Veloster", "Veracruz", "Verna", "XG", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Infiniti": ["EX25", "EX35", "EX37", "FX30", "FX35", "FX37", "FX45", "FX50", "FX56", "G20", "G25", "G35", "G37", "I30", "I35", "J30", "JX", "M25", "M30", "M35", "M37", "M45", "M56", "Q45", "Q50", "Q60", "Q70", "QX4", "QX50", "QX56", "QX60", "QX70", "QX80", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Iran Khodro": ["Pars", "Samand", "Soren", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Isuzu": ["Amigo", "Ascender", "Aska", "Axiom", "Bighorn", "Campo", "D-Max", "Faster", "Filly", "Gemini", "I-Mark", "Impulse", "MU", "Piazza", "Rodeo", "Trooper", "VehiCross", "Wizard", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Iveco": ["Daily", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "JAC": ["J2", "J5", "Refine", "Rein", "S5", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Jaguar": ["E-type", "F-Pace", "F-type", "S-type", "XE", "XF", "XFR", "XJ", "XJ220", "XJR", "XJS", "XK", "XKR", "XKR-S", "X-type", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Jeep": ["Cherokee", "Commander", "Compass", "Grand Cherokee", "Liberty", "Patriot", "Renegade", "Wrangler", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "JMC": ["Baodian", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "KIA": ["Avella", "Besta", "Cadenza", "Capital", "Carens", "Carnival", "cee'd", "cee'd GT", "Cerato", "Clarus", "Concord", "Enterprise", "Joice", "K", "Magentis", "Mohave", "Opirus", "Optima", "Picanto", "Potentia", "Pregio", "Pride", "Quoris", "Ray", "Retona", "Rio", "Sedona", "Sephia", "Shuma", "Sorento", "Soul", "Spectra", "Sportage", "Venga", "Visto", "X-Trek", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Lamborghini": ["Aventador", "Countach", "Diablo", "Espada", "Gallardo", "Huracan", "Jalpa", "LM002", "Murcielago", "Reventon", "Veneno", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Lancia": ["Dedra", "Delta", "Fulvia", "Kappa", "Lybra", "Musa", "Phedra", "Prisma", "Thema", "Thesis", "Trevi", "Ypsilon", "Zeta", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Land Rover": ["Defender", "Discovery", "Discovery Sport", "Freelander", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Series III", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "LDV": ["Maxus", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Lexus": ["CT", "ES", "GS", "GX", "HS", "IS", "IS F", "LFA", "LS", "LX", "NX", "RC", "RX", "SC", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "LIFAN": ["Breez (520)", "Cebrium (720)", "Celliya (530)", "Smily (320)", "Solano (620)", "X50", "X60", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Lincoln": ["Aviator", "Blackwood", "Continental", "LS", "Mark", "Mark LT", "MKX", "MKZ", "Navigator", "Town Car", "Zephyr", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Lotus": ["Eclat", "Elan", "Elise", "Elise S", "Elite", "Esprit", "Europa", "Evora", "Evora S", "Excel", "Exige", "Exige S", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Luxgen": ["5 Sedan", "7 MPV", "7 SUV", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Maserati": ["228", "3200 GT", "4300 GT Coupe", "Barchetta Stradale", "Biturbo", "Bora", "Chubasco", "Coupe", "Ghibli", "GranCabrio", "GranSport", "GranTurismo", "Indy", "Karif", "Khamsin", "Kyalami", "MC12", "Merak", "Mexico", "Quattroporte", "Royale", "Shamal", "Spyder", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Maybach": ["57", "57S", "62", "62S", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Mazda": ["1000", "121", "1300", "2", "3", "323", "3 MPS", "5", "6", "616", "626", "6 MPS", "818", "929", "Atenza", "Axela", "AZ-Wagon", "Biante", "Bongo", "B-Series", "BT-50", "Capella", "Carol", "Clef", "Cronos", "CX-3", "CX-5", "CX-7", "CX-9", "Demio", "Efini", "Eunos", "Eunos Cosmo", "Familia", "Lantis", "Laputa", "Levante", "Luce", "Millenia", "MPV", "MX-3", "MX-5", "MX-6", "Navajo", "Premacy", "Proceed", "Protege", "Revue", "Roadster", "Rustler", "RX-7", "RX-8", "Scrum", "Sentia", "Spiano", "Tribute", "Vantrend", "Verisa", "Xedos 6", "Xedos 9", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Mercedes-Benz": ["190 (W201)", "AMG GT", "A-класс", "A-класс AMG", "B-класс", "Citan", "CLA-класс", "CLA-класс AMG", "CLC-класс", "CLK-класс", "CLK-класс AMG", "CLS-класс", "CLS-класс AMG", "CL-класс", "CL-класс AMG", "C-класс", "C-класс AMG", "E-класс", "E-класс AMG", "GLA-класс", "GLA-класс AMG", "GLC-класс", "GLE-класс", "GLE-класс AMG", "GLK-класс", "GLS-класс", "GLS-класс AMG", "GL-класс", "GL-класс AMG", "G-класс", "G-класс AMG", "Maybach S-класс", "M-класс", "M-класс AMG", "Pullman", "R-класс", "R-класс AMG", "SLK-класс", "SLK-класс AMG", "SLR McLaren", "SLS-класс", "SLS-класс AMG", "SL-класс", "SL-класс AMG", "Sprinter", "Sprinter Classic", "S-класс", "S-класс AMG", "Vaneo", "Vario", "Viano", "Vito", "V-класс", "W123", "W124", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Mercury": ["Capri", "Cougar", "Grand Marquis", "Marauder", "Mariner", "Marquis", "Milan", "Montego", "Monterey", "Mountaineer", "Mystique", "Sable", "Topaz", "Tracer", "Villager", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Metrocab": ["Taxi", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "MG": ["F", "TF", "XPower SV", "ZR", "ZS", "ZT", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "MINI": ["Cooper", "Cooper Clubman", "Cooper Clubvan", "Cooper Countryman", "Cooper Paceman", "Cooper S", "Cooper S Clubman", "Cooper S Countryman", "Cooper S Paceman", "John Cooper Works", "John Cooper Works Clubman", "John Cooper Works Countryman", "John Cooper Works Paceman", "One", "One Clubman", "One Clubvan", "One Countryman", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Mitsubishi": ["3000 GT", "Airtrek", "Aspire", "ASX", "Carisma", "Celeste", "Challenger", "Chariot", "Colt", "Cordia", "Debonair", "Delica", "Diamante", "Dingo", "Dion", "Eclipse", "EK Wagon", "Emeraude", "Endeavor", "Eterna", "Expo LRV", "FTO", "Galant", "Grandis", "GTO", "i", "i-MiEV", "Jeep", "L200", "Lancer", "Lancer Evolution", "Legnum", "Libero", "Minica", "Minicab", "Mirage", "Montero", "Montero Sport", "Outlander", "Pajero", "Pajero Junior", "Pajero Mini", "Pajero Pinin", "Pajero Sport", "Pistachio", "Proudia", "Raider", "RVR", "Santamo", "Sapporo", "Sigma", "Space Gear", "Space Runner", "Space Star", "Space Wagon", "Starion", "Toppo", "Town BOX", "Tredia", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Morgan": ["Aero", "Plus 4", "Plus 8", "V6", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Morris": ["Marina", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Nissan": ["100NX", "180SX", "200SX", "240SX", "280ZX", "300ZX", "350Z", "370Z", "AD", "Almera", "Almera Classic", "Altima", "Armada", "Avenir", "Bassara", "Bluebird", "Cedric", "Cefiro", "Cherry", "Cima", "Clipper", "Crew", "Cube", "Datsun", "Elgrand", "Expert", "Fairlady", "Figaro", "Frontier", "Fuga", "Gloria", "GT-R", "Juke", "King Cab", "Kix", "Lafesta", "Langley", "Largo", "Laurel", "Leaf", "Leopard", "Liberty", "Lucino", "March", "Maxima", "Micra", "Mistral", "Moco", "Murano", "Navara", "Note", "NP300", "NX Coupe", "Otti", "Pathfinder", "Patrol", "Pick UP", "Prairie", "Presage", "Presea", "President", "Primera", "Pulsar", "Qashqai", "Qashqai+2", "Quest", "Rasheen", "R Nessa", "Rogue", "Safari", "Sentra", "Serena", "Silvia", "Skyline", "Stagea", "Stanza", "Sunny", "Teana", "Terrano", "Tiida", "Tino", "Titan", "Vanette", "Versa", "Wingroad", "X-Terra", "X-Trail", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Oldsmobile": ["Achieva", "Alero", "Aurora", "Bravada", "Cutlass", "Eighty-Eight", "Intrigue", "Ninety-Eight", "Silhouette", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Opel": ["Admiral", "Agila", "Antara", "Ascona", "Astra", "Astra GTC", "Astra OPC", "Calibra", "Campo", "Combo", "Commodore", "Corsa", "Corsa OPC", "Diplomat", "Frontera", "GT", "Insignia", "Insignia OPC", "Kadett", "Manta", "Meriva", "Mokka", "Monterey", "Monza", "Movano", "Omega", "Rekord", "Senator", "Signum", "Sintra", "Speedster", "Tigra", "Vectra", "Vita", "Vivaro", "Zafira", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Peugeot": ["1007", "104", "106", "107", "2008", "204", "205", "206", "207", "208", "3008", "301", "304", "305", "306", "307", "308", "309", "4007", "4008", "405", "406", "407", "408", "5008", "504", "505", "508", "604", "605", "607", "806", "807", "Bipper", "Boxer", "Expert", "Partner", "RCZ", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Plymouth": ["Acclaim", "Breeze", "Caravelle", "Grand Voyager", "Laser", "Neon", "Prowler", "Sundance", "Voyager", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Pontiac": ["6000", "Aztec", "Bonneville", "Fiero", "Firebird", "G4", "G5", "G6", "G8", "Grand AM", "Grand Prix", "GTO", "LeMans", "Montana", "Parisienne", "Phoenix", "Solstice", "Sunbird", "Sunfire", "Tempest", "Torrent", "Trans Sport", "Vibe", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Porsche": ["356", "911 Carrera", "911 Carrera 4", "911 Carrera 4S", "911 Carrera S", "911 GT2", "911 GT2 RS", "911 GT3", "911 GT3 RS", "911 GT3 RS 4.0", "911 Targa 4", "911 Targa 4S", "911 Turbo", "911 Turbo S", "914", "918 Spyder", "924", "928", "944", "959", "968", "Boxster", "Boxster S", "Boxster Spyder", "Carrera GT", "Cayenne", "Cayenne GTS", "Cayenne S", "Cayenne Turbo", "Cayenne Turbo S", "Cayman", "Cayman S", "Macan S", "Macan Turbo", "Panamera", "Panamera 4", "Panamera 4S", "Panamera GTS", "Panamera S", "Panamera Turbo", "Panamera Turbo S", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Proton": ["Juara", "Perdana", "Persona", "Saga", "Saloon", "Waja", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Renault": ["11", "12", "14", "15", "16", "17", "18", "19", "20", "21", "25", "30", "4", "5", "6", "9", "Avantime", "Clio", "Clio RS", "Duster", "Espace", "Estafette", "Fluence", "Fuego", "Grand Scenic", "Kangoo", "Koleos", "Laguna", "Latitude", "Logan", "Master", "Medallion", "Megane", "Megane RS", "Modus", "Rapid", "Rodeo", "Safrane", "Sandero", "Sandero Stepway", "Scenic", "Sport Spider", "Super 5", "Symbol", "Trafic", "Twingo", "Twizy", "Vel Satis", "Wind", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Rolls-Royce": ["Corniche Cabrio", "Ghost", "Park Ward", "Phantom", "Silver Seraph", "Silver Spur", "Wraith", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Rover": ["100", "200", "25", "400", "45", "600", "75", "800", "Maestro", "MGF", "Mini MK", "Montego", "Streetwise", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Saab": ["90", "900", "9000", "9-2X", "9-3", "9-4X", "95", "9-5", "96", "9-7X", "99", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Saturn": ["Astra", "Aura", "ION", "LS", "LW", "Outlook", "Relay", "SC", "Sky", "SL", "SW", "VUE", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Scion": ["tC", "xA", "xB", "xD", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "SEAT": ["Alhambra", "Altea", "Altea Freetrack", "Altea XL", "Arosa", "Cordoba", "Exeo", "Fura", "Ibiza", "Ibiza FR", "Leon", "Leon FR", "Malaga", "Marbella", "Mii", "Ronda", "Terra", "Toledo", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Skoda": ["Citigo", "Fabia", "Fabia RS", "Fabia Scout", "Favorit", "Felicia", "Octavia", "Octavia RS", "Octavia Scout", "Praktik", "Rapid", "Roomster", "Roomster Scout", "Superb", "Yeti", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Smart": ["Crossblade", "Forfour", "Fortwo", "Roadster", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "SsangYong": ["Actyon", "Actyon Sports", "Chairman", "Korando Family", "Istana", "Kallista", "Korando", "Korando Sports", "Kyron", "Musso", "Rexton", "Rodius", "Stavic", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Subaru": ["Alcyone", "Baja", "Bistro", "BRZ", "Dex", "Dias", "Domingo", "Exiga", "Forester", "Impreza", "Justy", "Legacy", "Leone", "Libero", "Lucra", "Outback", "Pleo", "R1", "R2", "Sambar", "Stella", "SVX", "Traviq", "Trezia", "Tribeca", "Vivio", "WRX", "WRX STI", "XT", "XV", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Suzuki": ["Aerio", "Alto", "Baleno", "Cappuccino", "Cervo", "Cultus Wagon", "Escudo", "Every", "Every Landy", "Forenza", "Grand Escudo", "Grand Vitara", "Ignis", "Jimny", "Kei", "Kizashi", "Liana", "MR Wagon", "Reno", "Samurai", "Sidekick", "Splash", "Swift", "SX4", "Verona", "Vitara", "Wagon R", "X-90", "XL7", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Tesla": ["Model S", "Roadster", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Tianye": ["Admiral", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Toyota": ["4Runner", "Allex", "Allion", "Alphard", "Altezza", "Aristo", "Aurion", "Auris", "Avalon", "Avensis", "Aygo", "bB", "Belta", "Blade", "Blizzard", "Brevis", "Caldina", "Cami", "Camry", "Carina", "Cavalier", "Celica", "Celsior", "Century", "Chaser", "Corolla", "Corona", "Corsa", "Cressida", "Cresta", "Crown", "Curren", "Cynos", "Duet", "Echo", "Estima", "FJ Cruiser", "Fortuner", "Funcargo", "Gaia", "Grand Hiace", "Granvia", "GT 86", "Harrier", "Hiace", "Highlander", "Hilux", "Innova", "Ipsum", "iQ", "Isis", "Ist", "Kluger", "Land Cruiser", "Land Cruiser Prado", "Lite Ace", "Mark II", "Mark X", "Mark X ZiO", "MasterAce", "Matrix", "Mega Cruiser", "MR2", "MR-S", "Nadia", "Noah", "Opa", "Origin", "Paseo", "Passo", "Passo Sette", "Picnic", "Platz", "Porte", "Premio", "Previa", "Prius", "Probox", "Progres", "Pronard", "Ractis", "Raum", "RAV4", "Regius", "Rush", "SAI", "Scepter", "Sequoia", "Sera", "Sienna", "Sienta", "Soarer", "Solara", "Soluna", "Sparky", "Sprinter", "Sprinter Carib", "Starlet", "Succeed", "Supra", "Tacoma", "Tercel", "Town Ace", "Tundra", "Urban Cruiser", "Vellfire", "Venza", "Verossa", "Verso", "Vios", "Vista", "Vitz", "Voltz", "Voxy", "WiLL", "Windom", "Wish", "Yaris", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Trabant": ["1.1", "P601", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Volkswagen": ["Amarok", "Beetle", "Bora", "Caddy", "California", "Caravelle", "Corrado", "Crafter", "CrossPolo", "Derby", "Eos", "Fox", "Golf", "Golf Country", "Golf GTI", "Golf Plus", "Golf R", "Iltis", "Jetta", "Kaefer", "Lupo", "Multivan", "New Beetle", "Passat", "Passat CC", "Phaeton", "Pointer", "Polo", "Routan", "Santana", "Scirocco", "Sharan", "Taro", "Tiguan", "Touareg", "Touran", "Transporter", "Up", "Vento", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Volvo": ["140", "164", "240", "260", "340", "360", "440", "460", "480", "66", "740", "760", "780", "850", "940", "960", "C30", "C70", "Laplander", "S40", "S60", "S70", "S80", "S90", "V40", "V40 Cross Country", "V50", "V60", "V70", "V90", "XC60", "XC70", "XC90", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Vortex": ["Corda", "Estina", "Tingo", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Wiesmann": ["GT", "Roadster", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "Xin Kai": ["Pickup X3", "SR-V X3", "SUV X3", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "ZOTYE": ["T600", "Z300"],
        "ZX": ["Admiral", "GrandTiger", "Landmark", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "\u0412\u0410\u0417 (LADA)": ["1111 \u041e\u043a\u0430", "2101", "2102", "2103", "2104", "2105", "2106", "2107", "2108", "2109", "21099", "2110", "2111", "2112", "2113 Samara", "2114 Samara", "2115 Samara", "2120 \u041d\u0430\u0434\u0435\u0436\u0434\u0430", "2123", "2129", "2328", "2329", "4x4 (\u041d\u0438\u0432\u0430)", "Granta", "Kalina", "Largus", "Priora", "Vesta", "XRAY", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "\u0412\u0418\u0421": ["1705", "1706", "2345", "2346", "2347", "2349", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "\u0413\u0410\u0417": ["12 \u0417\u0418\u041c", "13 \u0427\u0430\u0439\u043a\u0430", "14 \u0427\u0430\u0439\u043a\u0430", "\u041c-20 \u041f\u043e\u0431\u0435\u0434\u0430", "21 \u0412\u043e\u043b\u0433\u0430", "22 \u0412\u043e\u043b\u0433\u0430", "24 \u0412\u043e\u043b\u0433\u0430", "310221 \u0412\u043e\u043b\u0433\u0430", "31029 \u0412\u043e\u043b\u0433\u0430", "3102 \u0412\u043e\u043b\u0433\u0430", "31105 \u0412\u043e\u043b\u0433\u0430", "3110 \u0412\u043e\u043b\u0433\u0430", "3111 \u0412\u043e\u043b\u0433\u0430", "69", "M-1", "Volga Siber", "\u0413\u0410\u0417\u0435\u043b\u044c", "\u0413\u0410\u0417\u0435\u043b\u044c 2705", "\u0413\u0410\u0417\u0435\u043b\u044c 3221", "\u0413\u0410\u0417\u0435\u043b\u044c 3302", "\u0413\u0410\u0417\u0435\u043b\u044c 33023", "\u0413\u0410\u0417\u0435\u043b\u044c Next", "\u0421\u043e\u0431\u043e\u043b\u044c", "\u0421\u043e\u0431\u043e\u043b\u044c 2217", "\u0421\u043e\u0431\u043e\u043b\u044c 2310", "\u0421\u043e\u0431\u043e\u043b\u044c 2752", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "\u0417\u0410\u0417": ["1102 \u0422\u0430\u0432\u0440\u0438\u044f", "1103 \u0421\u043b\u0430\u0432\u0443\u0442\u0430", "1105 \u0414\u0430\u043d\u0430", "965 \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u0435\u0446", "966 \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u0435\u0446", "968 \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u0435\u0446", "Chance", "Forza", "Sens", "Vida", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "\u0417\u0418\u041b": ["110", "111", "114", "117", "4104", "4105", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "\u0418\u0416": ["2125", "2126", "2715", "2717", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "\u041b\u0443\u0410\u0417": ["967", "969", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "\u041c\u043e\u0441\u043a\u0432\u0438\u0447": ["2136", "2137", "2138", "2140", "2141", "2335", "2733", "2734", "400", "401", "402", "403", "407", "408", "410", "411", "412", "420", "422", "423", "424", "426", "427", "430", "432", "433", "434", "\u0414\u0443\u044d\u0442", "\u0418\u0432\u0430\u043d \u041a\u0430\u043b\u0438\u0442\u0430", "\u041a\u043d\u044f\u0437\u044c \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440", "\u0421\u0432\u044f\u0442\u043e\u0433\u043e\u0440", "\u042e\u0440\u0438\u0439 \u0414\u043e\u043b\u0433\u043e\u0440\u0443\u043a\u0438\u0439", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "\u0420\u0410\u0424": ["2203", "977", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "\u0422\u0430\u0433\u0410\u0417": ["Aquila", "C10", "C190", "Hyundai Accent", "Hyundai Santa Fe Classic", "Hyundai Sonata", "Road Partner", "Tager", "Vega", "Vortex Corda", "Vortex Estina", "Vortex Tingo", "\u042130", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "\u0423\u0410\u0417": ["2206", "3151", "31512", "31514", "31519", "3153", "3159", "3160", "452 \u0411\u0443\u0445\u0430\u043d\u043a\u0430", "469", "Hunter", "Patriot", "Pickup", "\u041a\u0430\u0440\u0433\u043e", "\u0421\u0438\u043c\u0431\u0438\u0440", "\u0414\u0440\u0443\u0433\u0430\u044f"],
        "\u0414\u0440\u0443\u0433\u0430\u044f": []
    };

    for (var brand in autos) {
        var html = '<option>' + brand + '</option>';
        $("#brands").append(html);
    }

    $("#brands").change(function () {
        var brand = $("#brands option:selected").text();
        $("#models").html('<option selected="" disabled="">Выберите модель своего автомобиля</option>');
        for (var model in autos[brand]) {
            if (autos[brand].hasOwnProperty(model)) {
                var html = '<option>' + autos[brand][model] + '</option>';
                $("#models").append(html);
            }
        }
    });

    function showError() {
        alert('Произошла ошибка. Пожалуйста, повторите попытку позже.');
    }

    $("#form-online form").submit(function (e) {
        e.preventDefault();

        if (!$('#user_phone').val()) {
            var html = '<h2 class="swal2-title" id="swal2-title"></h2>'
                + '<div id="swal2-content" class="swal2-content" style="display: block;">Введите пожалуйста телефон чтобы мы с вами связались и предложили ссуму выкупа</div>'
                + '<input class="swal2-input cc_user_phone_confirm" placeholder="+7 (___) ___ __ __" type="text">';
            swal({
                showCancelButton: true,
                html: html,
                onOpen: function () {
                    $('.cc_user_phone_confirm').mask("+7 (999) 999 99 99");
                    $('.cc_user_phone_confirm').focus();
                },
                cancelButtonText: 'Отменить',
                confirmButtonText: 'Отправить',
                preConfirm: function () {
                    return new Promise(function (resolve, reject) {
                        var phone = $('.cc_user_phone_confirm').val();
                        if (phone) {
                            resolve();
                        } else {
                            reject('Введите пожалуйста телефон!');
                        }
                    })
                }
            }).then(function () {
                var phone = $('.cc_user_phone_confirm').val();
                if (phone) {
                    $('#user_phone').val(phone);
                    createOrder($("#form-online form"));
                }
            }).catch(swal.noop);
            return;
        }

        createOrder($(this));

        return false;
    });

    function createOrder(form) {
        var redirecting = false;
        var values = form.serialize();
        $("body").css("cursor", "progress");
        $("input, button, select", form).prop('disabled', true);
        $.post(wndSelPluginPath + '/ajax.php', values, function (res) {
            if (res) {
                if (res.status == 'success') {
                    //alert('Заказ успешно создан');
                    window.location.href = "/авто/";
                    redirecting = true;
                    //$("#form-online form").get(0).reset();
                } else if (res.status == 'error') {
                    alert(res.msg);
                } else {
                    showError();
                }
            } else {
                showError();
            }
        }).fail(function () {
            showError();
        }).always(function () {
            if (!redirecting) {
                $("body").css("cursor", "default");
                $("input, button, select", form).prop('disabled', false);
            }
        });
    }
});