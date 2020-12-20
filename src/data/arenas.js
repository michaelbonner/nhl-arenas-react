class Arena {
  constructor(name, logo, icon, visited, lat, lng) {
    this.name = name;
    this.logo = logo;
    this.icon = icon;
    this.visited = visited ? true : false;
    this.lat = parseFloat(lat);
    this.lng = parseFloat(lng);
  }
}

const arenas = [
  new Arena(
    "Anaheim Ducks",
    "/images/logos/anaheim-ducks.svg",
    "/images/icons/anaheim-ducks.png",
    false,
    33.8078363,
    -117.8786819
  ),
  new Arena(
    "Arizona Coyotes",
    "/images/logos/arizona-coyotes.svg",
    "/images/icons/arizona-coyotes.png",
    true,
    33.532237,
    -112.263445
  ),
  new Arena(
    "Boston Bruins",
    "/images/logos/boston-bruins.svg",
    "/images/icons/boston-bruins.png",
    false,
    42.3661881,
    -71.0643422
  ),
  new Arena(
    "Buffalo Sabres",
    "/images/logos/buffalo-sabres.svg",
    "/images/icons/buffalo-sabres.png",
    false,
    42.8749968,
    -78.8761674
  ),
  new Arena(
    "Calgary Flames",
    "/images/logos/calgary-flames.svg",
    "/images/icons/calgary-flames.png",
    false,
    51.0373732,
    -114.054265
  ),
  new Arena(
    "Carolina Hurricanes",
    "/images/logos/carolina-hurricanes.svg",
    "/images/icons/carolina-hurricanes.png",
    false,
    35.8033394,
    -78.7217946
  ),
  new Arena(
    "Chicago Blackhawks",
    "/images/logos/chicago-blackhawks.svg",
    "/images/icons/chicago-blackhawks.png",
    true,
    41.8806991,
    -87.6762708
  ),
  new Arena(
    "Colorado Avalanche",
    "/images/logos/colorado-avalanche.svg",
    "/images/icons/colorado-avalanche.png",
    true,
    39.7486565,
    -105.0097968
  ),
  new Arena(
    "Columbus Blue Jackets",
    "/images/logos/columbus-blue-jackets.svg",
    "/images/icons/columbus-blue-jackets.png",
    false,
    39.9694406,
    -83.0086341
  ),
  new Arena(
    "Dallas Stars",
    "/images/logos/dallas-stars.svg",
    "/images/icons/dallas-stars.png",
    false,
    33.0188211,
    -96.8412506
  ),
  new Arena(
    "Detroit Red Wings",
    "/images/logos/detroit-red-wings.svg",
    "/images/icons/detroit-red-wings.png",
    true,
    42.3251899,
    -83.1213998
  ),
  new Arena(
    "Edmonton Oilers",
    "/images/logos/edmonton-oilers.svg",
    "/images/icons/edmonton-oilers.png",
    false,
    53.5469485,
    -113.4982859
  ),
  new Arena(
    "Florida Panthers",
    "/images/logos/florida-panthers.svg",
    "/images/icons/florida-panthers.png",
    false,
    26.1584427,
    -80.3278089
  ),
  new Arena(
    "Los Angeles Kings",
    "/images/logos/los-angeles-kings.svg",
    "/images/icons/los-angeles-kings.png",
    true,
    34.0430175,
    -118.2694481
  ),
  new Arena(
    "Minnesota Wild",
    "/images/logos/minnesota-wild.svg",
    "/images/icons/minnesota-wild.png",
    false,
    44.944906,
    -93.103343
  ),
  new Arena(
    "Montreal Canadiens",
    "/images/logos/montreal-canadiens.svg",
    "/images/icons/montreal-canadiens.png",
    false,
    45.4955108,
    -73.5695708
  ),
  new Arena(
    "Nashville Predators",
    "/images/logos/nashville-predators.svg",
    "/images/icons/nashville-predators.png",
    false,
    36.1595351,
    -86.7810777
  ),
  new Arena(
    "New Jersey Devils",
    "/images/logos/new-jersey-devils.svg",
    "/images/icons/new-jersey-devils.png",
    false,
    40.7336167,
    -74.17115
  ),
  new Arena(
    "New York Islanders",
    "/images/logos/new-york-islanders.svg",
    "/images/icons/new-york-islanders.png",
    false,
    40.6824952,
    -73.9772236
  ),
  new Arena(
    "New York Rangers",
    "/images/logos/new-york-rangers.svg",
    "/images/icons/new-york-rangers.png",
    false,
    40.7505045,
    -73.9956327
  ),
  new Arena(
    "Ottowa Senators",
    "/images/logos/ottowa-senators.svg",
    "/images/icons/ottowa-senators.png",
    false,
    45.3348021,
    -75.9184263
  ),
  new Arena(
    "Philidelphia Flyers",
    "/images/logos/philidelphia-flyers.svg",
    "/images/icons/philidelphia-flyers.png",
    true,
    39.9011809,
    -75.1742469
  ),
  new Arena(
    "Pittsburgh Penguins",
    "/images/logos/pittsburgh-penguins.svg",
    "/images/icons/pittsburgh-penguins.png",
    true,
    40.4395148,
    -79.9915569
  ),
  new Arena(
    "San Jose Sharks",
    "/images/logos/san-jose-sharks.svg",
    "/images/icons/san-jose-sharks.png",
    true,
    37.3260746,
    -121.900262
  ),
  new Arena(
    "St Louis Blues",
    "/images/logos/st-louis-blues.svg",
    "/images/icons/st-louis-blues.png",
    true,
    38.6265853,
    -90.2051319
  ),
  new Arena(
    "Tampa Bay Lightning",
    "/images/logos/tampa-bay-lightning.svg",
    "/images/icons/tampa-bay-lightning.png",
    true,
    27.9835375,
    -82.4843154
  ),
  new Arena(
    "Toronto Maple Leafs",
    "/images/logos/toronto-maple-leafs.svg",
    "/images/icons/toronto-maple-leafs.png",
    false,
    43.6434661,
    -79.3790989
  ),
  new Arena(
    "Vancouver Canucks",
    "/images/logos/vancouver-canucks.svg",
    "/images/icons/vancouver-canucks.png",
    false,
    49.2778449,
    -123.1109512
  ),
  new Arena(
    "Vegas Golden Knights",
    "/images/logos/vegas-golden-knights.svg",
    "/images/icons/vegas-golden-knights.png",
    true,
    36.1028767,
    -115.1784324
  ),
  new Arena(
    "Washington Capitals",
    "/images/logos/washington-capitals.svg",
    "/images/icons/washington-capitals.png",
    true,
    38.8884197,
    -77.1006833
  ),
  new Arena(
    "Winnipeg Jets",
    "/images/logos/winnipeg-jets.svg",
    "/images/icons/winnipeg-jets.png",
    false,
    49.8926174,
    -97.1437393
  ),
];
export default arenas;
