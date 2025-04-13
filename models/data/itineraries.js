import "dotenv/config.js";
import "../../config/database.js";
import Itinerary from "../Itinerary.js";


const itineraries = [
  {
    title: "Matira Beach Sunset",
    price: 120,
    description: "Enjoy a breathtaking sunset at Matira Beach with local snacks and live music.",
    photo: "https://img.freepik.com/foto-gratis/al-atardecer-playa-tropical-mar-palmera-coco_74190-1075.jpg?t=st=1744502113~exp=1744505713~hmac=5d9d0637e02092191126afe3da05966b099535751145c82183e3d9a159ea1201&w=996",
    duration: "4h",
    likes: 15,
    user: "67f80d180f8c1108ee2585de",
    city: "67e35976ff913b03739255a8",
    hashtags: ["#sunset", "#beachvibes", "#liveMusic"]
  },
  {
    title: "Mount Otemanu Hike",
    price: 90,
    description: "Guided hiking tour to explore the trails and stunning vistas of Mount Otemanu.",
    photo: "https://img.freepik.com/foto-gratis/hombre-parado-colina-contra-fondo-hermoso-paisaje-montanoso_613910-2514.jpg?t=st=1744502155~exp=1744505755~hmac=ed11f834cce924712409da1925fc38a674b9349ccad6993ae0d0bbaf5f7b3ece&w=996",
    duration: "5h",
    likes: 27,
    user: "67f80d180f8c1108ee2585df",
    city: "67e35976ff913b03739255ac",
    hashtags: ["#hiking", "#natureLovers", "#adventureTime"]
  },
  {
    title: "Adventure Time Safari",
    price: 150,
    description: "Experience wildlife sightings and thrilling safari drives in South Luangwa.",
    photo: "https://img.freepik.com/foto-gratis/mujer-hombre-fotografiando-mientras-viajaba-vehiculo_107420-9769.jpg?t=st=1744502304~exp=1744505904~hmac=df76f689c0c400317fc008fc0b3e17475cf627291a6dc7cffa380f577e3842f3&w=996",
    duration: "6h",
    likes: 32,
    user: "67f80d180f8c1108ee2585e1",
    city: "67e35976ff913b03739255aa",
    hashtags: ["#safari", "#wildlife", "#travelAfrica"]
  },
  {
    title: "Ubud Cultural Tour",
    price: 70,
    description: "Immerse yourself in Balinese culture with temple visits and traditional dance performances.",
    photo: "https://img.freepik.com/foto-gratis/celebracion-dia-nyepi-indonesia_23-2151325666.jpg?t=st=1744502344~exp=1744505944~hmac=d4bdc4330f5c4afc913e59a3e34eae8ef9537b071518e2c47726ee007dd028bb&w=996",
    duration: "3h",
    likes: 10,
    user: "67f80d180f8c1108ee2585f0",
    city: "67e35976ff913b03739255b2",
    hashtags: ["#cultureTrip", "#BaliVibes", "#templeTour"]
  },
  {
    title: "Citadel Night Lights",
    price: 55,
    description: "Explore the historic Salah El-Din Citadel at night with guided tours and light shows.",
    photo: "https://img.freepik.com/foto-gratis/edificio-puerto-liverpool-noche-reino-unido_1268-19710.jpg?t=st=1744501976~exp=1744505576~hmac=efa44f437e5a5c07878422b75ca0790ebb5d85c1940797785523f1001d9d4202&w=826",
    duration: "2h",
    likes: 8,
    user: "67f80d180f8c1108ee2585ea",
    city: "67e35976ff913b03739255ad",
    hashtags: ["#citylights", "#historyNight", "#egypt"]
  },
  {
    title: "Petra by Moonlight",
    price: 100,
    description: "Walk through the Siq to the Treasury under the moonlit sky—an unforgettable Petra experience.",
    photo: "https://img.freepik.com/foto-gratis/tiro-angulo-arboles-frente-hermosos-acantilados-rocosos_181624-18521.jpg?t=st=1744502398~exp=1744505998~hmac=99ee6fb70a57d26f68d49ca89ff933a99a5332e0b1293c06c08a97c91f88c2f0&w=996",
    duration: "4h",
    likes: 19,
    user: "67f80d180f8c1108ee2585f9",
    city: "67f503fd5c3544af64dfaae9",
    hashtags: ["#PetraByNight", "#moonlightMagic", "#ancientWonders"]
  },
  {
    title: "Mount Fuji Sunrise Trek",
    price: 80,
    description: "Climb Mount Fuji overnight to witness the mesmerizing sunrise from the summit.",
    photo: "https://img.freepik.com/foto-gratis/mujer-asiatica-kimono-tradicional-japones-montana-fuji-puesta-sol-lago-kawaguchiko-japon_335224-254.jpg?t=st=1744502430~exp=1744506030~hmac=e2722a3ee276ca81f6d07ad26928df86d43c6411ea66bc242b871cb5ef93e3ce&w=1380",
    duration: "7h",
    likes: 22,
    user: "67f80d180f8c1108ee2585ef",
    city: "67e35976ff913b03739255b1",
    hashtags: ["#FujiSunrise", "#JapanTrek", "#mountainMagic"]
  }
];


  Itinerary.insertMany(itineraries)
    .then((docs)=>{
        console.log(`${docs.length} itineraries inserted successfully.`)
        process.exit();
        
    })
    .catch((err) => {
        console.error("Error inserting itineraries:", err);
        process.exit(1);
     });