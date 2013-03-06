var data = {};

data.cities = [
   "Chandler",
   "Memphis",
   "Temecula",
   "Sherrill",
   "Plainfield",
   "Brooklyn Park",
   "Carbondale",
   "Gloucester",
   "Baytown",
   "Dubuque",
   "Mentor",
   "New Castle",
   "Moreno Valley",
   "McKeesport",
   "Madison",
   "Compton",
   "Poughkeepsie",
   "Ames",
   "Blacksburg",
   "Simi Valley",
   "San Bernardino",
   "Isle of Palms",
   "Stanton",
   "Livonia",
   "Sierra Madre",
   "Carson City",
   "Schaumburg",
   "South Bend",
   "La Mirada",
   "Belleville",
   "Nome",
   "Corinth",
   "Simi Valley",
   "Nampa",
   "El Cerrito",
   "Paterson",
   "Williamsport",
   "Clemson",
   "Warner Robins",
   "Hilo",
   "Areceibo",
   "Auburn Hills",
   "Cedar Rapids",
   "South Gate",
   "Camden",
   "Keene",
   "Covina",
   "Detroit",
   "Georgetown",
   "Dover",
   "Des Moines",
   "Lomita",
   "Natchitoches",
   "Hackensack",
   "Newport News",
   "Raleigh",
   "Sedalia",
   "Meridian",
   "Pueblo",
   "Darlington",
   "Mesa",
   "McKeesport",
   "The Dalles",
   "Vincennes",
   "Ada",
   "Monongahela",
   "Fairfax",
   "Dayton",
   "Woburn",
   "Texarkana",
   "Detroit",
   "New Iberia",
   "Dixon",
   "Littleton",
   "Grass Valley",
   "Quincy",
   "Orlando",
   "Carolina",
   "La Habra Heights",
   "Brown Deer",
   "Roswell",
   "Fargo",
   "Guayama",
   "Plymouth",
   "Nacogdoches",
   "Auburn",
   "Troy",
   "Chicago",
   "Sault Ste. Marie",
   "Clovis",
   "Phoenix",
   "Winnemucca",
   "Irving",
   "Yakima",
   "Altoona",
   "Saint Cloud",
   "Dothan",
   "Fort Worth",
   "Jersey City",
   "La Mirada",
   "Artesia",
   "Helena",
   "Morgan City",
   "Gastonia",
   "Aguadilla",
   "Nashville",
   "San Angelo",
   "Scottsdale",
   "Highland Park",
   "Greensboro",
   "Rapid City",
   "Dodge City",
   "Appleton",
   "Yukon",
   "Wausau",
   "Jordan Valley",
   "Cape Coral",
   "New Kensington",
   "Reedsport",
   "Pendleton",
   "Pittsfield",
   "Rohnert Park",
   "Houma",
   "Powell",
   "Lewiston",
   "Westlake Village",
   "Saint Albans",
   "Rialto",
   "Oneida",
   "Miami",
   "Youngstown",
   "Albuquerque",
   "Jefferson City",
   "Merizo",
   "St. George",
   "Taunton",
   "Mesquite",
   "Lancaster",
   "Laguna Niguel",
   "Tacoma",
   "Fernley",
   "Suffolk",
   "Hornell",
   "Moore",
   "Monrovia",
   "Norman",
   "Hampton",
   "Farrell",
   "Wausau",
   "Atwater",
   "Bozeman",
   "Garden Grove",
   "North Tonawanda",
   "Seattle",
   "Portsmouth",
   "Two Rivers",
   "Benton Harbor",
   "Lawrenceville",
   "Guayama",
   "Beckley",
   "Rockford",
   "West Haven",
   "Santa Cruz",
   "Missoula",
   "Port Huron",
   "Corona",
   "Augusta",
   "Derby",
   "Kemmerer",
   "Troy",
   "Albany",
   "Ponce",
   "Fond du Lac",
   "Kearney",
   "Culver City",
   "Tupelo",
   "Fountain Valley",
   "Waltham",
   "Half Moon Bay",
   "Murrieta",
   "Carrollton",
   "Dearborn",
   "Watervliet",
   "Boulder City",
   "Scarborough",
   "Chattanooga",
   "Pasadena",
   "Scottsdale",
   "West Hartford",
   "Knoxville",
   "Beaumont",
   "San Fernando",
   "San Rafael",
   "Port St. Lucie",
   "West Sacramento",
   "Peekskill",
   "Chicago",
   "Johnson City",
   "Longview",
   "Tustin"
];

data.maleNames = [
   "Joseph",
   "Malcolm",
   "Uriel",
   "Uriel",
   "Len",
   "Carlos",
   "Eric",
   "Sebastian",
   "Upton",
   "Emerson",
   "Len",
   "Alvin",
   "Kasimir",
   "Bruce",
   "Zeus",
   "Rigel",
   "Ferris",
   "Declan",
   "Reese",
   "Nero",
   "Barry",
   "Buckminster",
   "Ezra",
   "Tanner",
   "Colt",
   "Cruz",
   "Neil",
   "Lev",
   "Thomas",
   "Theodore",
   "Brennan",
   "Ira",
   "Abel",
   "Asher",
   "Solomon",
   "Christian",
   "Mufutau",
   "Brendan",
   "Graham",
   "Evan",
   "Alden",
   "Reece",
   "Nathan",
   "Nicholas",
   "Callum",
   "Sawyer",
   "Zeph",
   "Justin",
   "Logan",
   "Evan",
   "Brendan",
   "Dolan",
   "Charles",
   "Hoyt",
   "Carter",
   "Benedict",
   "Marsden",
   "Palmer",
   "Walter",
   "Lamar",
   "Damon",
   "Brandon",
   "Julian",
   "Hiram",
   "Jack",
   "Jordan",
   "Christopher",
   "Tobias",
   "Finn",
   "Nehru",
   "Raymond",
   "Hashim",
   "Bert",
   "Craig",
   "Mannix",
   "Alden",
   "Ray",
   "Devin",
   "Hu",
   "Hop",
   "Owen",
   "Jakeem",
   "Stuart",
   "Samuel",
   "Edan",
   "Bevis",
   "Baker",
   "Gage",
   "Darius",
   "Gage",
   "Elliott",
   "Gannon",
   "Kadeem",
   "Aristotle",
   "Baker",
   "Vance",
   "Giacomo",
   "Xander",
   "Keith",
   "Perry",
   "Brody",
   "Harrison",
   "Wallace",
   "Giacomo",
   "Duncan",
   "Kaseem",
   "Wade",
   "Mohammad",
   "Valentine",
   "Wylie",
   "Noble",
   "Kenyon",
   "Rafael",
   "Clayton",
   "Colin",
   "Zachery",
   "Brady",
   "Griffin",
   "Carson",
   "Lawrence",
   "Adam",
   "Herman",
   "Nathan",
   "Linus",
   "Charles",
   "Samuel",
   "Ulysses",
   "Kasper",
   "Vincent",
   "Roth",
   "Oleg",
   "Fletcher",
   "Uriel",
   "Oliver",
   "Myles",
   "Tad",
   "Zephania",
   "Raja",
   "Charles",
   "Hasad",
   "Abel",
   "Avram",
   "Louis",
   "Chaney",
   "Hakeem",
   "Hakeem",
   "Callum",
   "Neil",
   "Wayne",
   "Ezekiel",
   "Eagan",
   "Sylvester",
   "Ahmed",
   "Lewis",
   "Benjamin",
   "Brennan",
   "Arden",
   "Malik",
   "Dale",
   "Emery",
   "Odysseus",
   "Cadman",
   "Dolan",
   "Kennan",
   "Calvin",
   "Lewis",
   "Samuel",
   "Thomas",
   "Stuart",
   "Ignatius",
   "Colby",
   "Laith",
   "Lawrence",
   "Ulric",
   "Harrison",
   "Wade",
   "Lucas",
   "Baxter",
   "Gary",
   "Edan",
   "Andrew",
   "Brenden",
   "Graham",
   "Jack",
   "Malachi",
   "Damon",
   "Henry",
   "Justin",
   "Channing",
   "Leonard",
   "Melvin",
   "Elton",
   "Theodore",
   "Dustin",
   "Lawrence",
   "Jamal",
   "Emmanuel",
   "Jonas",
   "Jakeem",
   "Dominic"
];

data.femaleNames = [
   "Macy",
   "Marny",
   "Maryam",
   "Amy",
   "Cameron",
   "Kay",
   "Jane",
   "Kylynn",
   "Shannon",
   "Jolene",
   "Hope",
   "Maxine",
   "Bianca",
   "Roary",
   "Irma",
   "Shay",
   "Imani",
   "Autumn",
   "Alea",
   "Kirestin",
   "Neve",
   "Maile",
   "Donna",
   "Unity",
   "Alea",
   "Cora",
   "Ella",
   "Myra",
   "Vanna",
   "Mercedes",
   "Inga",
   "Karyn",
   "Shaine",
   "Scarlett",
   "Ivana",
   "Aimee",
   "Eugenia",
   "Alika",
   "Shana",
   "Clio",
   "Marcia",
   "Ramona",
   "Cora",
   "Guinevere",
   "Lani",
   "Alana",
   "Heather",
   "Hedwig",
   "Quin",
   "Azalia",
   "Jemima",
   "Patricia",
   "Aline",
   "Jayme",
   "Melyssa",
   "Rana",
   "Mona",
   "Mercedes",
   "Jessamine",
   "Martha",
   "Margaret",
   "Michelle",
   "Myra",
   "Cynthia",
   "Leigh",
   "Kelly",
   "Willow",
   "Julie",
   "Grace",
   "Eugenia",
   "Macey",
   "Tara",
   "Holly",
   "Melinda",
   "Lacota",
   "Jennifer",
   "Freya",
   "Gretchen",
   "Xyla",
   "Shaeleigh",
   "Julie",
   "Winifred",
   "Nita",
   "Nevada",
   "Brynn",
   "Virginia",
   "Bryar",
   "Shay",
   "Dacey",
   "Janna",
   "Scarlett",
   "Cathleen",
   "Dai",
   "Claire",
   "Halla",
   "Kylan",
   "Katelyn",
   "Lois",
   "Calista",
   "Leah",
   "Karleigh",
   "Quemby",
   "Maggy",
   "Orli",
   "Tasha",
   "Whoopi",
   "Zena",
   "Bo",
   "Lacy",
   "Nomlanga",
   "Ella",
   "Madeline",
   "Desirae",
   "Hannah",
   "Christen",
   "Martina",
   "Jocelyn",
   "Meghan",
   "Wyoming",
   "Madeline",
   "Jeanette",
   "Joan",
   "Leilani",
   "Sopoline",
   "Sade",
   "Teagan",
   "Hedda",
   "Wanda",
   "Sybil",
   "Donna",
   "Martena",
   "Bryar",
   "Leigh",
   "Kay",
   "Gemma",
   "Pascale",
   "Aurora",
   "Althea",
   "Willow",
   "Rhea",
   "Emerald",
   "Alma",
   "Isabelle",
   "Abigail",
   "Quinn",
   "Dahlia",
   "Pearl",
   "Denise",
   "Xandra",
   "Karyn",
   "Sylvia",
   "Michelle",
   "Petra",
   "Colleen",
   "Genevieve",
   "Keelie",
   "Cleo",
   "Doris",
   "Heidi",
   "Samantha",
   "Quin",
   "Jane",
   "Pamela",
   "Pascale",
   "Maryam",
   "Glenna",
   "Lara",
   "Alika",
   "Alana",
   "Athena",
   "Chloe",
   "Kim",
   "Martha",
   "Ava",
   "Stephanie",
   "Jael",
   "Jessica",
   "Bo",
   "Shelley",
   "Gloria",
   "Kyla",
   "Chloe",
   "Echo",
   "Whitney",
   "Alfreda",
   "Heidi",
   "Shay",
   "Kessie",
   "Tamekah",
   "Rana",
   "Dora",
   "Maisie",
   "Aurora",
   "Joelle",
   "Sonia",
   "Nola",
   "Risa",
   "Nell",
   "Maya",
   "Kiayada"
];

data.surNames = [
   "Browning",
   "Foreman",
   "Wiggins",
   "Mullins",
   "Hurst",
   "Harper",
   "Manning",
   "Leblanc",
   "Cotton",
   "Combs",
   "Mcclain",
   "Hood",
   "Love",
   "Vincent",
   "Johnson",
   "Rivers",
   "Summers",
   "Skinner",
   "Frank",
   "Barnes",
   "Harrington",
   "Galloway",
   "Steele",
   "Shelton",
   "Huffman",
   "Zamora",
   "Mcgowan",
   "Reed",
   "Berger",
   "York",
   "Dyer",
   "Koch",
   "Eaton",
   "Logan",
   "Tyson",
   "Meadows",
   "Burns",
   "Dotson",
   "Williamson",
   "Martinez",
   "Orr",
   "Fletcher",
   "Washington",
   "Gibson",
   "Allison",
   "Johnston",
   "Norris",
   "Strong",
   "Frederick",
   "Booth",
   "Goff",
   "Moon",
   "Aguilar",
   "Walls",
   "Paul",
   "Bowman",
   "Colon",
   "Gibbs",
   "Contreras",
   "Shields",
   "Wilder",
   "Whitney",
   "Howard",
   "Leblanc",
   "Colon",
   "Summers",
   "Morrison",
   "Gibbs",
   "Sykes",
   "Quinn",
   "Blake",
   "Booker",
   "Richards",
   "Mendez",
   "Rasmussen",
   "Massey",
   "Hutchinson",
   "Castaneda",
   "Hickman",
   "Pace",
   "Cleveland",
   "Butler",
   "Norton",
   "Banks",
   "Carney",
   "Kelley",
   "Frye",
   "England",
   "Whitfield",
   "Nunez",
   "Woodard",
   "Curry",
   "Velasquez",
   "Ramsey",
   "Knight",
   "Savage",
   "Frost",
   "Lee",
   "Emerson",
   "Puckett",
   "Jarvis",
   "Roach",
   "Daniel",
   "Rios",
   "Chapman",
   "Odonnell",
   "Payne",
   "Calhoun",
   "Lindsey",
   "Terrell",
   "Wilson",
   "Shaw",
   "Weber",
   "Harrington",
   "Bishop",
   "Dillon",
   "Bowers",
   "Grimes",
   "Barnes",
   "Moon",
   "Swanson",
   "Hall",
   "Kennedy",
   "Potter",
   "Griffith",
   "Sellers",
   "Hammond",
   "Arnold",
   "Mcknight",
   "England",
   "Shaffer",
   "Marquez",
   "Flynn",
   "Matthews",
   "Long",
   "Dixon",
   "Montoya",
   "Crane",
   "Contreras",
   "Keller",
   "Curry",
   "Wolf",
   "Mccarthy",
   "Conway",
   "Bennett",
   "Sweeney",
   "Tran",
   "Vance",
   "Mccoy",
   "Mcneil",
   "Randolph",
   "Johns",
   "Hays",
   "Pruitt",
   "Holloway",
   "Garrison",
   "Oneal",
   "Stafford",
   "Dunn",
   "Mckay",
   "Wheeler",
   "Emerson",
   "Mccoy",
   "Wilson",
   "Rogers",
   "Yang",
   "Goodman",
   "Mcintosh",
   "Collins",
   "Stephens",
   "Buck",
   "Allen",
   "Ballard",
   "Mcconnell",
   "Ramos",
   "Mckenzie",
   "Gilbert",
   "Farmer",
   "Baker",
   "Vincent",
   "Bryant",
   "Lynn",
   "Beck",
   "Ramirez",
   "Wilcox",
   "Mcleod",
   "Black",
   "Stanton",
   "Kemp",
   "Cardenas",
   "Oneil",
   "Suarez",
   "Mclaughlin",
   "Rojas",
   "Farrell",
   "Harding",
   "Anthony",
   "Abbott",
   "Rios",
   "Estes"
];

data.countries = [
   "Tonga",
   "Mali",
   "French Guiana",
   "Indonesia",
   "Aruba",
   "Bahamas",
   "Reunion",
   "Sao Tome and Principe",
   "Palau",
   "Cape Verde",
   "Costa Rica",
   "Nicaragua",
   "Gibraltar",
   "Mozambique",
   "Norway",
   "Algeria",
   "Saint Vincent and The Grenadines",
   "India",
   "Tonga",
   "Viet Nam",
   "Oman",
   "Ghana",
   "Saudi Arabia",
   "Swaziland",
   "Honduras",
   "Greenland",
   "Costa Rica",
   "Bulgaria",
   "Nicaragua",
   "Malawi",
   "Cyprus",
   "Solomon Islands",
   "Tunisia",
   "Pakistan",
   "Serbia and Montenegro",
   "Rwanda",
   "Hong Kong",
   "Uganda",
   "Morocco",
   "Libyan Arab Jamahiriya",
   "Monaco",
   "Puerto Rico",
   "Netherlands Antilles",
   "Belarus",
   "Moldova",
   "Marshall Islands",
   "Equatorial Guinea",
   "Antigua and Barbuda",
   "Dominica",
   "Russian Federation",
   "Kazakhstan",
   "Hong Kong",
   "Denmark",
   "Uzbekistan",
   "Mexico",
   "Guam",
   "Dominican Republic",
   "Tanzania, United Republic of",
   "French Southern Territories",
   "Macao",
   "Guam",
   "Venezuela",
   "Tajikistan",
   "United Kingdom",
   "Argentina",
   "Taiwan, Province of China",
   "Chile",
   "Namibia",
   "Portugal",
   "Iceland",
   "Finland",
   "Gibraltar",
   "Russian Federation",
   "Belgium",
   "Ethiopia",
   "Uzbekistan",
   "Australia",
   "Malawi",
   "Morocco",
   "France",
   "Kuwait",
   "Grenada",
   "Albania",
   "Burkina Faso",
   "El Salvador",
   "Angola",
   "Antigua and Barbuda",
   "Saint Lucia",
   "Moldova",
   "Trinidad and Tobago",
   "Cook Islands",
   "British Indian Ocean Territory",
   "Sierra Leone",
   "Guam",
   "Slovenia",
   "Costa Rica",
   "South Georgia and The South Sandwich Islands",
   "Faroe Islands",
   "Nauru",
   "Guatemala",
   "Pakistan",
   "Cayman Islands",
   "Guadeloupe",
   "Bulgaria",
   "Egypt",
   "Guyana",
   "Ecuador",
   "Canada",
   "Viet Nam",
   "Equatorial Guinea",
   "Panama",
   "Libyan Arab Jamahiriya",
   "Saint Pierre and Miquelon",
   "Zambia",
   "Nigeria",
   "Puerto Rico",
   "Tokelau",
   "Argentina",
   "Liberia",
   "Dominica",
   "Dominican Republic",
   "Kazakhstan",
   "Kyrgyzstan",
   "Bhutan",
   "Samoa",
   "Liechtenstein",
   "Honduras",
   "Singapore",
   "Martinique",
   "Egypt",
   "Ethiopia",
   "Norfolk Island",
   "Philippines",
   "Mauritania",
   "Mayotte",
   "Madagascar",
   "Germany",
   "Iran, Islamic Republic of",
   "Montserrat",
   "Vanuatu",
   "Saint Kitts and Nevis",
   "Cape Verde",
   "Georgia",
   "Japan",
   "Niue",
   "Yemen",
   "Iraq",
   "Burkina Faso",
   "Nicaragua",
   "Philippines",
   "Congo",
   "Jamaica",
   "Cape Verde",
   "Botswana",
   "China",
   "Kazakhstan",
   "Colombia",
   "Sudan",
   "Portugal",
   "Hungary",
   "Philippines",
   "Cayman Islands",
   "Bolivia",
   "Israel",
   "India",
   "Tanzania, United Republic of",
   "Saint Pierre and Miquelon",
   "Chile",
   "Poland",
   "Monaco",
   "Korea, Republic of",
   "Eritrea",
   "Kyrgyzstan",
   "New Zealand",
   "Estonia",
   "United States Minor Outlying Islands",
   "Ukraine",
   "Iceland",
   "Angola",
   "Iraq",
   "Gambia",
   "Romania",
   "Venezuela",
   "Czech Republic",
   "United States Minor Outlying Islands",
   "Guatemala",
   "Slovenia",
   "Botswana",
   "Libyan Arab Jamahiriya",
   "Malaysia",
   "New Zealand",
   "Maldives",
   "Bermuda",
   "Pitcairn",
   "Macao",
   "Senegal",
   "Philippines",
   "Italy",
   "Malaysia",
   "France"
];

data.descriptions = [
      "Arthur Levitt Jr., the chairman of the American Stock Exchange, was also chairman of the 1980 White House Conference on Small Business. By Arthur Levitt Jr. As with most people who buy their own businesses, the odds against Robert Johnson were high. He was confronted at the start with an intimidating list of problems. He had no money, after laying",
      "IN the first few days of the Reagan Administration, business came to town - ferried to the inauguration, in part, by an air force of some 400 corporate jets. They traveled by limousine, threw lavish parties and generally made their presence felt in numbers that Washington had not seen in recent years. It seemed everyone from California",
      "I. The headquarters of the U.S. Chamber of Commerce, located across from Lafayette Park in Washington, is a limestone structure that looks almost as majestic as the Supreme Court. The similarity is no coincidence: both buildings were designed by the same architect, Cass Gilbert. Lately, however, the affinities between the court and the chamber, a",
      "ANYONE waiting for a lunchtime partner at New York's ''21'' Club can use the time to check on stock prices. The prestigious restaurant's lobby television is generally tuned to the Financial News Network, and patrons can often be found staring as an anchor gives the latest business news. Across the bottom of the screen: a slightly dizzying, nonstop",
      "IT is, of course, all in the family. Take the the father and his two sons who run a gynecological practice in Sleepy Hollow. Or the small brother-sister hair-removal empire in Manhattan and Scarsdale. Or the father-son window-washing concern in Larchmont. Or the husband-wife dental practice in Mount Kisco, not to mention the family-owned string of",
      "This article is a collaboration between The New York Times and The Chronicle of Higher Education, a daily source of news, opinion and commentary for professors, administrators and others interested in academe. David Glenn is a senior writer at The Chronicle covering teaching and curriculum. PAUL M. MASON does not give his business students the same",
      "Sidney Blumenthal is the author of ''The Permanent Campaign'' and is currently writing a book on the economic and intellectual roots of Reaganism. By Sidney Blumenthal Shortly after assuming office, Ronald Reagan ordered the portrait of Thomas Jefferson that had long graced the Cabinet Room removed; a portrait of Calvin Coolidge went up in its",
      "MANY of the country's small businesses are recounting experiences similar to that of Utility Industries of Somerdale, N.J. ''If we borrow, it's two or three percentage points above the prime rate, while big companies borrow well below the prime,'' said Wiley J. Pickett, owner of the $500,000-a-year company, which makes devices to pull cables",
      "- dozen graduate students gathered in the seminar at New York University's Graduate School of Business was this: What was the ethical obligation of the Bechtel Corporation in 1978 when faced - simultaneously - with the Arab nations' boycott of companies doing business with Israel, and the United States law forbidding compliance with that boycott?",
      "JOHN Thain has one. So do Richard Fuld, Stanley O'Neal and Vikram Pandit. For that matter, so does John Paulson, the hedge fund kingpin. Yes, all five have fat bank accounts, even now, and all have made their share of headlines. But these current and former giants of finance also are all card-carrying M.B.A.'s. The master's of business",
      "T he advertisements are alluring: special check-in facilities at the airport and sometimes the use of the airline's clublike departure lounge, more space between rows of seats and fewer seats per row, free cocktails in flight and free wine with dinner, a wider choice of entrees, complimentary headsets for the movie or stereo, eyeshades to ease",
      "IT has been more than a year since Irving S. Shapiro was chief executive of E.I. du Pont de Nemours & Company, but executive habits die hard. A lawyer who became prominent in the business world by taking an active role in public policy issues, Mr. Shapiro - now a partner in the Wilmington office of Skadden, Arps, Slate, Meagher & Flom - is taking",
      "Q. What effect will the breakup of A.T.& T. have on the telecommunications business? A. The breakup should stimulate a new burst of competition in all phases of the telecommunications business and in such closely related businesses as computers. The breakup is, after all, the settlement of a Federal suit charging A.T.& T. with monopolizing the",
      "''Look at the economy as a great stew. And look at those hostile takeover-related activities, and all this related money-making with no risk by the Jay Gould types which are increasingly predominating in the capital scene, and look at them as salt. In the old days we had a minor amount of salt in the stew; and all of a sudden, somebody's pouring a",
      "IN A MANNER OF SPEAKING, KAREN Valenstein discovered her passion for business in Filene's Basement, with all its fractious jostling and pawing. Now a 38-year-old first vice president at E. F. Hutton & Company and one of the pre-eminent women in investment banking, Mrs. Valenstein was then a rebellious college student whose family offered to",
      "WHEN President Reagan works out on his exercise treadmill at the White House, he lopes along on belting from the nation's oldest business: J. E. Rhoads & Sons Inc., of Delaware, established in 1702. When President Washington wanted a gift for the Marquis de Lafayette he chose Number Six cologne, a scent still on sale at the nation's oldest",
      "New York City Business, the one-and-a-half-year-old publication that has chronicled the ups and downs of doing business in New York, has discovered first-hand how competitive a market the city can be. Employees at City Business were shocked to learn yesterday that their publication had been sold to Crain Communications Inc., which announced that it",
      "The wallflower is becoming the belle of the ball. A decade-long debate over what is wrong with American business and how to cure it has produced a surprising model for success: the family business. As old as America itself, the family business is being rediscovered as the embodiment of the management practices and business values needed to help the",
      "The Tax Reform Act of 1986 contains many changes that will have a fundamental impact on small businesses, from the ''mom-and-pop'' grocery store to the schoolteacher who designs dresses at home at night. For many businesses, the new law is very much a mixed bag. Many small businesses that are incorporated, for example, will discover inducements to",
      "LEAD: ALMOST TWO YEARS AGO, Leonard N. Stern, the 51-year-old owner of the Hartz Group, the pet-supply giant, paid a call on a fellow billionaire. Stern was not selling birdseed. What he had to offer the prospect was a once-in-a-lifetime opportunity to put his name on New York University's undergraduate and graduate schools of business. ALMOST TWO",
      "Harvey Mackay, businessman, author and motivational speaker, is a one-man band of self-promotion. At $50,000 a pop, he gives 50 or so speeches a year, raking in $2.5 million. His speeches help sell his books and vice versa -- he's a walking, talking version of the success principles he lists in \"Swim With the Sharks Without Being Eaten Alive.\" At",
      "ABOUT 20 million people work from home. If the value of all their computers, printers, telephones and even fax paper were added up, it would probably total the annual revenues of several Fortune 500 companies. And if a thief were to steal all of it, or if a tornado were to dump it all over Kansas, the experts say, there would be enough insurance",
      "WHEN Peter M. Deane, the founder of a kitchen design firm in Stamford, died five years ago at the age of 50, his wife, Ingrid Deane, hired an outsider to run the company until their children, then in their early 20's, could develop experience and grow into the family business. \"It was a wise thing to do. In a small business you can disintegrate",
      "THE Orthodox Jewish men in the broad-brimmed black hats stopped talking business long enough to turn their heads and stare. It wasn't that the sight of women in the Diamond Dealers Club was such an oddity, but five women walking through together was somewhat unusual, particularly one in such a short skirt with such long legs. That was Nicole",
      "When George W. Bush first ran for governor of Texas five years ago, he had no record in politics, only a famous name and a business career that he described as a success ''by any objective measure.'' In one significant way, that boast may be truer today than it was in 1994. As Mr. Bush seeks to spring from the governorship to the Presidency, he",
      "VICENTE FOX QUESADA, the cowboy-boot manufacturer and former Coca-Cola executive who has become the first businessman-turned-politician to have a serious shot at the Mexican presidency, smiles as reporters fire questions at him, some of them not too friendly. Why is he obstructing an alliance among opposition parties? Has he stopped quarreling with",
      "Akio Morita, the co-founder of the Sony Corporation who personified Japan's rise from postwar rubble to industrial riches and became the unofficial ambassador of its business community to the world, died on Sunday in Tokyo. He was 78. Mr. Morita died of pneumonia, according to Sony. He had been hospitalized in Tokyo since August, after returning",
      "THREE weeks ago, Warren Buffett, Richard Santulli and a bunch of our senior management people, we visited seven cities in Europe in three days,'' Kevin Russell said yesterday afternoon, describing what for most of us would have been the Business Trip From the Black Lagoon. ''Every day we had lunches and conferences in each city,'' he continued.",
      "The sharp drop in business travel may be beginning to bottom out, a survey of travel managers indicated yesterday, but experts in the $185-billion-a-year industry warned that strong growth is unlikely to return for quite a while to airlines and hotels that cater to the corporate market. The National Business Travel Association released a survey of",
      "Americans worry that President Bush and his administration are too heavily influenced by big business, fear that Mr. Bush is hiding something about his own corporate past and judge the economy to be in its worst shape since 1994, the latest New York Times/CBS News Poll shows. The survey suggests that the unfolding revelations about corporate",
      "WHEN the Fenimore Iron Works in the industrial section here was put up for sale last year, the company's foreman, Bruce Paul Tripodi, wanted to buy the company. Mr. Tripodi then got in touch with his friend, Peter B. Reeb Sr. and asked him to draw up a business plan, which he needed before he applied for a bank loan. Mr. Reeb, a specialist in",
      "TRADITIONALLY used as the open-air boardroom of businessmen, Long Island fairways have become fair game for women, who are learning how to play golf for fun and profit. For years men have used the golf course as a place to meet with clients in a relaxed setting away from the office, to help sell their products or services. As more women move up the",
      "MOST small-business owners are too busy with the day-to-day problems that come with running a business to plan for the future, and besides, none of us like to confront our own mortality,'' Andrew N. Karlen, chairman of the Small Business Committee of the Westchester Chamber of Commerce, said. Mr. Karlen who has a law practice in White Plains,",
      "With his large hands clad in delicate white gloves, Travis B. Blackman gingerly opened the sheepskin-bound book and blew gently on the onion-skin-thin pages to separate them. He treated the aged volume with the reverence normally reserved for a first-edition Dickens or Hemingway. But all this fuss over a credit report? Or rather, over 2,580 volumes",
      "THERE is no family feud over succession at S. C. Johnson & Company, no pack of obstructionist cousins demanding larger dividend checks. The 113-year-old family business has not gone the way of Milwaukee's Schlitz Brewing Company, collapsing after the family owners lost control. No one has been inquiring about the rise and fall of the storied",
      "Akio Morita, the co-founder of the Sony Corporation who personified Japan's rise from postwar rubble to industrial riches and became the unofficial ambassador of its business community to the world, died today in Tokyo. He was 78. He died of pneumonia, the company said. He had been in failing health since a stroke in 1993. More than anyone else, it",
      "AFTER 18 years in the graphic arts business, Jim Medalia decided it was time to change his life. But how? He did research on selling books, compact discs and, finally, sporting goods online. ''And what is there more of than anything else in sporting goods?'' Mr. Medalia, 53, said the other day from his office in Kingston near Princeton. ''There are",
      "THE news barely registered on the radar of Internet industry analysts and executives: The Uniform Code Council, the nonprofit organization that created the bar code system, recently said it had chosen AppNet, an Internet consulting company, to build what it called ''the largest electronic marketplace for business-to-business transactions.'' In the",
      "WE fly higher and faster,'' said Bill Wagner, a pilot. ''We can get from Des Moines, Iowa, to Washington, D.C., in about two hours with no delays. And we've never lost a piece of luggage.'' But hold on before inquiring where to book your next business trip on this astonishing airline. Mr. Wagner flies an executive jet for the Townsend Engineering",
      "John Huey is a magazine editor known for his Southern charm and pit-bull mentality: when he has an idea between his teeth, he might be pleasant about it, but he will never let go. Two years ago, Mr. Huey, managing editor of Fortune magazine, decided that Time Inc. ought to start or purchase a magazine about Internet business. He flew to San"];

data.titles = [
      "In Praise Of Small Business",
      "The New Face Of Business Leadership",
      "Supreme Court Inc.",
      "Why Television's Business Programs Haven't Turned A Profit",
      "Working Relationships",
      "The B-school Blahs",
      "Whose Side Is Business On, Anyway?",
      "How The Banks Are Squeezing Small Business",
      "Business Ethics' New Appeal",
      "Is It Time To Retrain B-schools?",
      "Practical Traveler; Is 'business Class' For You?",
      "Irving S. Shapiro, Attorney At Law",
      "Users, Providers Face Adjustments",
      "The Age Of 'me-first' Management",
      "Against The Odds",
      "Revolutionary Ventures: Surviving And Profiting Through The Centuries",
      "Crain's Folds Its Competitor",
      "Renewing Traditional Values",
      "Mixed Bag For Small Business",
      "What's In A Name?",
      "Leaping To The Lectern",
      "Earning It;for Insurance, Home Offices Can Be Out In The Cold",
      "Putting The Focus On The Family Business",
      "Struggling To Bring Back The Glitter; Today, The Diamond District Is More Crass Than Class. Can It Survive? Solomon Gad's Offspring May Hold A Clue.",
      "George Bush The Son Finds That Oil And Blood Do Mix",
      "From Moving Mexico's Cola To Shaking Its Politics",
      "Akio Morita, Co-founder Of Sony And Japanese Business Leader, Dies At 78",
      "Business Travel; The Corporate Jet Business Is Booming, Even As The Airlines Complain About A Softening Economy.",
      "Survey Indicates Business Travel May Pick Up",
      "Poll Finds Concerns That Bush Is Overly Influenced By Business",
      "New Owners Expand Ironworks Business",
      "Women Are Learning The Business Value Of A Good Game Of Golf",
      "Easing The Passing Of The Torch In Companies",
      "A Good Credit History, Indeed; Opening The Books On American Business, 1841-1891",
      "At Johnson Wax, A Family Passes On Its Heirloom; Father Divides A Business To Keep The Children United",
      "Akio Morita, Key To Japan's Rise As Co-founder Of Sony, Dies At 78",
      "Finding Themselves, And Their Niche, In The Marketplace",
      "E-commerce Report; A Mad Dash To Create Electronic Marketplaces For Business-to-business Transactions.",
      "Business Travel; Companies Increasingly Turn To Corporate Jets, Thanks To The Economy And Airline Hassles.",
      "A Magazine Giant Weighs In On Internet Business"];

data.tags = [
    "Eget Nisi Dictum",
    "Libero Donec",
    "Elit",
    "Integer",
    "Bibendum Fermentum Metus",
    "Cras Interdum",
    "Per Conubia",
    "Nec",
    "Tellus Id",
    "Tellus Lorem Eu",
    "Aliquam Erat",
    "Augue Porttitor Interdum",
    "Mi",
    "Nam Porttitor",
    "Cursus Et",
    "Malesuada Augue Ut",
    "Mattis",
    "Euismod",
    "Nec",
    "Curabitur",
    "Est Arcu Ac",
    "Tristique Ac Eleifend",
    "At Egestas A",
    "Blandit Mattis Cras",
    "Proin Ultrices Duis",
    "Molestie Sed",
    "Tempor Diam Dictum",
    "Lacus Cras Interdum",
    "Blandit Enim Consequat",
    "Luctus",
    "Libero Est Congue",
    "Commodo At Libero",
    "Nunc Ac",
    "Sit",
    "Gravida",
    "Dolor Nulla Semper",
    "Sed",
    "Dui",
    "Fusce Dolor Quam",
    "Dolor Fusce",
    "Lacus Cras Interdum",
    "Magnis Dis Parturient",
    "Est",
    "Amet Consectetuer",
    "Vestibulum Accumsan",
    "Nullam Feugiat",
    "Mauris",
    "Ac",
    "Placerat",
    "Montes Nascetur",
    "Augue Porttitor Interdum",
    "Donec",
    "Dui",
    "Fringilla Purus Mauris",
    "Mauris",
    "At",
    "Ac",
    "Amet Ornare Lectus",
    "Nulla Aliquet",
    "Eu",
    "Risus",
    "Nam Porttitor",
    "Eleifend",
    "Eu",
    "Ligula",
    "Massa Vestibulum Accumsan",
    "Ante",
    "Quisque Ac",
    "Nulla",
    "Neque",
    "Quis Accumsan",
    "Quisque Libero",
    "Urna Vivamus",
    "Quam",
    "Aenean Egestas Hendrerit",
    "Nisi",
    "Sed",
    "Enim Nec",
    "Ligula Eu",
    "Mollis Dui In",
    "Fringilla Purus",
    "Consectetuer Cursus Et",
    "Ultricies Dignissim Lacus",
    "Risus A Ultricies",
    "Aliquet Magna A",
    "Mauris",
    "Senectus Et",
    "Dapibus",
    "Enim",
    "Elit",
    "Ligula Consectetuer Rhoncus",
    "Mollis",
    "Quisque",
    "Eu Neque Pellentesque",
    "Parturient",
    "Tortor Nibh",
    "Dictum Phasellus",
    "In",
    "Dolor Fusce",
    "Per",
    "Est",
    "Consectetuer Cursus",
    "Nunc",
    "Ante Lectus",
    "Id Nunc",
    "Diam Sed",
    "Cum",
    "Eu Ligula",
    "Quisque",
    "Quis Turpis Vitae",
    "Quisque Varius Nam",
    "Ipsum Sodales",
    "Massa Lobortis",
    "Cras Pellentesque Sed",
    "Fermentum Risus At",
    "Curae; Donec",
    "Ut",
    "Tempor",
    "Pharetra Sed Hendrerit",
    "Nulla Dignissim Maecenas",
    "Metus Vivamus Euismod",
    "Porta Elit A",
    "Consectetuer Rhoncus Nullam",
    "Accumsan",
    "Cras Interdum",
    "Elit",
    "In",
    "Laoreet",
    "Fringilla Mi",
    "Aliquet",
    "Egestas Ligula",
    "Fermentum Risus At",
    "Dolor Donec",
    "Ligula",
    "Enim",
    "At Fringilla Purus",
    "Mi Lorem",
    "Dignissim Maecenas",
    "Penatibus Et Magnis",
    "Hendrerit",
    "A Felis",
    "Commodo",
    "Aenean",
    "Cras Eu Tellus",
    "Habitant",
    "At Pretium",
    "Cum",
    "At Iaculis",
    "Sociis Natoque",
    "Sed",
    "A Magna Lorem",
    "Consectetuer Rhoncus",
    "Euismod",
    "Amet Ante Vivamus",
    "Arcu Imperdiet",
    "Donec Egestas",
    "Donec At",
    "Massa",
    "Orci Phasellus Dapibus",
    "Sollicitudin Commodo Ipsum",
    "Ut Lacus Nulla",
    "Sagittis Semper",
    "In Dolor Fusce",
    "Congue A Aliquet",
    "Pellentesque Tellus",
    "Ac Mattis Semper",
    "Sed Sapien",
    "Aliquam Fringilla Cursus",
    "Nec",
    "Magna A Tortor",
    "Magna Ut",
    "Maecenas Mi Felis",
    "Eu",
    "Luctus Ut",
    "Egestas",
    "A",
    "Consequat Auctor",
    "Diam",
    "Nunc Pulvinar Arcu",
    "Turpis Nulla",
    "Fusce Mollis Duis",
    "Justo Faucibus Lectus",
    "In",
    "Quisque",
    "Nisl",
    "Metus In Lorem",
    "Pede Suspendisse Dui",
    "Sem Vitae Aliquam",
    "Vivamus",
    "Urna Vivamus",
    "Enim Etiam",
    "Tortor Integer",
    "Sem Mollis",
    "Nullam Ut",
    "Sit Amet Luctus",
    "Sit Amet",
    "Metus",
    "Cras",
    "Odio",
    "Dui Semper Et"];

data.companyNames = [  'Systheon','Teknoplexon','Pacwest','SysVenamerica','RoboAerlogix','Venconix','Steganoconiche','Interliant','Aluco','Dynarama','Videobanc','Transtouch','Textiqua','Nanobanc','Vencom','Titanirola','Techtron','Unologic','Navivacs','Teraserv','eEyetanic','Orthosoft','Jamrola','SysUSA','Technogra','Superscope','Titanigraf','Allphysiche','Rapigrafix','Ameritron','Westtomik','Cryptotegrity','Multitiqua','US Omnigraphik','Keytheon','Generola','Compuamerica','Orthomedia','Cryptosource','Teratopia','Fibrotouch','Skydata','eSteganoergy','Inridium','Xeicon','OpKeycomm','Mescaridic','Netseco','Safetrust','Entcast','Hypervaco','Enlogia','Syssoft','Openserve','Truetomic','Airdyne','Allnet','Jamconik','InfoAirway','iSkyvaco','Pericenta','Netsystems','Robosource','Westmedia','iOptystix','Thermotomic','Conrama','iQualcar','Raylog','iEnland','Turbomart','Mescatron','Infragraph','Robotomic','Westgate','Gigaura','Sontopia','Conotomics','Qualserve','US Infratouch','Infraique','Fibrotopia','Unconix','Anagraph','iMedconik','Ventanium','Aprama','Robocomm','Anaframe','Truegate','Tekcar','Indisco','Idmax','Genland','Polytheon','Quintegrity','Celgra','Fibroserve','Safeagra', 'Proline'];

data.domainZones = [
  ".ca",
  ".mx",
  ".tv",
  ".ws",
  ".ag",
  ".com.ag",
  ".net.ag",
  ".org.ag",
  ".am",
  ".asia",
  ".at",
  ".be",
  ".com.br",
  ".net.br",
  ".bz",
  ".com.bz",
  ".net.bz",
  ".cc",
  ".com.co",
  ".net.co",
  ".nom.co",
  ".de",
  ".es",
  ".com.es",
  ".nom.es",
  ".org.es",
  ".eu",
  ".fm",
  ".fr",
  ".gs",
  ".in",
  ".co.in",
  ".firm.in",
  ".gen.in",
  ".ind.in",
  ".net.in",
  ".org.in",
  ".it",
  ".jobs",
  ".jp",
  ".ms",
  ".com.mx",
  ".nl",
  ".nu",
  ".co.nz",
  ".net.nz",
  ".org.nz",
  ".se",
  ".tc",
  ".tk",
  ".tw",
  ".com.tw",
  ".idv.tw",
  ".co.uk",
  ".me.uk",
  ".org.uk",
  ".vg"]; 