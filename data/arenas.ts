import { Arena } from "../interfaces/arena";

const arenas = [
  {
    name: "Anaheim Ducks",
    logo: "/images/logos/anaheim-ducks.svg",
    icon: "/images/icons/anaheim-ducks.png",
    visited: true,
    lat: 33.8078363,
    lng: -117.8786819,
  },
  {
    name: "Arizona Coyotes",
    logo: "/images/logos/arizona-coyotes.svg",
    icon: "/images/icons/arizona-coyotes.png",
    visited: true,
    lat: 33.532237,
    lng: -112.263445,
  },
  {
    name: "Boston Bruins",
    logo: "/images/logos/boston-bruins.svg",
    icon: "/images/icons/boston-bruins.png",
    visited: false,
    lat: 42.3661881,
    lng: -71.0643422,
  },
  {
    name: "Buffalo Sabres",
    logo: "/images/logos/buffalo-sabres.svg",
    icon: "/images/icons/buffalo-sabres.png",
    visited: false,
    lat: 42.8749968,
    lng: -78.8761674,
  },
  {
    name: "Calgary Flames",
    logo: "/images/logos/calgary-flames.svg",
    icon: "/images/icons/calgary-flames.png",
    visited: false,
    lat: 51.0373732,
    lng: -114.054265,
  },
  {
    name: "Carolina Hurricanes",
    logo: "/images/logos/carolina-hurricanes.svg",
    icon: "/images/icons/carolina-hurricanes.png",
    visited: false,
    lat: 35.8033394,
    lng: -78.7217946,
  },
  {
    name: "Chicago Blackhawks",
    logo: "/images/logos/chicago-blackhawks.svg",
    icon: "/images/icons/chicago-blackhawks.png",
    visited: true,
    lat: 41.8806991,
    lng: -87.6762708,
  },
  {
    name: "Colorado Avalanche",
    logo: "/images/logos/colorado-avalanche.svg",
    icon: "/images/icons/colorado-avalanche.png",
    visited: true,
    lat: 39.7486565,
    lng: -105.0097968,
  },
  {
    name: "Columbus Blue Jackets",
    logo: "/images/logos/columbus-blue-jackets.svg",
    icon: "/images/icons/columbus-blue-jackets.png",
    visited: false,
    lat: 39.9694406,
    lng: -83.0086341,
  },
  {
    name: "Dallas Stars",
    logo: "/images/logos/dallas-stars.svg",
    icon: "/images/icons/dallas-stars.png",
    visited: false,
    lat: 33.0188211,
    lng: -96.8412506,
  },
  {
    name: "Detroit Red Wings",
    logo: "/images/logos/detroit-red-wings.svg",
    icon: "/images/icons/detroit-red-wings.png",
    visited: true,
    lat: 42.3251899,
    lng: -83.1213998,
  },
  {
    name: "Edmonton Oilers",
    logo: "/images/logos/edmonton-oilers.svg",
    icon: "/images/icons/edmonton-oilers.png",
    visited: false,
    lat: 53.5469485,
    lng: -113.4982859,
  },
  {
    name: "Florida Panthers",
    logo: "/images/logos/florida-panthers.svg",
    icon: "/images/icons/florida-panthers.png",
    visited: false,
    lat: 26.1584427,
    lng: -80.3278089,
  },
  {
    name: "Los Angeles Kings",
    logo: "/images/logos/los-angeles-kings.svg",
    icon: "/images/icons/los-angeles-kings.png",
    visited: true,
    lat: 34.0430175,
    lng: -118.2694481,
  },
  {
    name: "Minnesota Wild",
    logo: "/images/logos/minnesota-wild.svg",
    icon: "/images/icons/minnesota-wild.png",
    visited: false,
    lat: 44.944906,
    lng: -93.103343,
  },
  {
    name: "Montreal Canadiens",
    logo: "/images/logos/montreal-canadiens.svg",
    icon: "/images/icons/montreal-canadiens.png",
    visited: false,
    lat: 45.4955108,
    lng: -73.5695708,
  },
  {
    name: "Nashville Predators",
    logo: "/images/logos/nashville-predators.svg",
    icon: "/images/icons/nashville-predators.png",
    visited: false,
    lat: 36.1595351,
    lng: -86.7810777,
  },
  {
    name: "New Jersey Devils",
    logo: "/images/logos/new-jersey-devils.svg",
    icon: "/images/icons/new-jersey-devils.png",
    visited: false,
    lat: 40.7336167,
    lng: -74.17115,
  },
  {
    name: "New York Islanders",
    logo: "/images/logos/new-york-islanders.svg",
    icon: "/images/icons/new-york-islanders.png",
    visited: false,
    lat: 40.6824952,
    lng: -73.9772236,
  },
  {
    name: "New York Rangers",
    logo: "/images/logos/new-york-rangers.svg",
    icon: "/images/icons/new-york-rangers.png",
    visited: false,
    lat: 40.7505045,
    lng: -73.9956327,
  },
  {
    name: "Ottowa Senators",
    logo: "/images/logos/ottowa-senators.svg",
    icon: "/images/icons/ottowa-senators.png",
    visited: false,
    lat: 45.3348021,
    lng: -75.9184263,
  },
  {
    name: "Philadelphia Flyers",
    logo: "/images/logos/philadelphia-flyers.svg",
    icon: "/images/icons/philadelphia-flyers.png",
    visited: true,
    lat: 39.9011809,
    lng: -75.1742469,
  },
  {
    name: "Pittsburgh Penguins",
    logo: "/images/logos/pittsburgh-penguins.svg",
    icon: "/images/icons/pittsburgh-penguins.png",
    visited: true,
    lat: 40.4395148,
    lng: -79.9915569,
  },
  {
    name: "San Jose Sharks",
    logo: "/images/logos/san-jose-sharks.svg",
    icon: "/images/icons/san-jose-sharks.png",
    visited: true,
    lat: 37.3260746,
    lng: -121.900262,
  },
  {
    name: "Seattle Kraken",
    logo: "/images/logos/seattle-kraken.svg",
    icon: "/images/icons/seattle-kraken.png",
    visited: false,
    lat: 47.6220713,
    lng: -122.3540714,
  },
  {
    name: "St Louis Blues",
    logo: "/images/logos/st-louis-blues.svg",
    icon: "/images/icons/st-louis-blues.png",
    visited: true,
    lat: 38.6265853,
    lng: -90.2051319,
  },
  {
    name: "Tampa Bay Lightning",
    logo: "/images/logos/tampa-bay-lightning.svg",
    icon: "/images/icons/tampa-bay-lightning.png",
    visited: true,
    lat: 27.9835375,
    lng: -82.4843154,
  },
  {
    name: "Toronto Maple Leafs",
    logo: "/images/logos/toronto-maple-leafs.svg",
    icon: "/images/icons/toronto-maple-leafs.png",
    visited: false,
    lat: 43.6434661,
    lng: -79.3790989,
  },
  {
    name: "Utah Hockey Club",
    logo: "/images/logos/utah-hockey-club.svg",
    icon: "/images/icons/utah-hockey-club.png",
    visited: false,
    lat: 40.7682681,
    lng: -111.9010874,
  },
  {
    name: "Vancouver Canucks",
    logo: "/images/logos/vancouver-canucks.svg",
    icon: "/images/icons/vancouver-canucks.png",
    visited: false,
    lat: 49.2778449,
    lng: -123.1109512,
  },
  {
    name: "Vegas Golden Knights",
    logo: "/images/logos/vegas-golden-knights.svg",
    icon: "/images/icons/vegas-golden-knights.png",
    visited: true,
    lat: 36.1028767,
    lng: -115.1784324,
  },
  {
    name: "Washington Capitals",
    logo: "/images/logos/washington-capitals.svg",
    icon: "/images/icons/washington-capitals.png",
    visited: true,
    lat: 38.8884197,
    lng: -77.1006833,
  },
  {
    name: "Winnipeg Jets",
    logo: "/images/logos/winnipeg-jets.svg",
    icon: "/images/icons/winnipeg-jets.png",
    visited: false,
    lat: 49.8926174,
    lng: -97.1437393,
  },
] as Arena[];
export default arenas;
