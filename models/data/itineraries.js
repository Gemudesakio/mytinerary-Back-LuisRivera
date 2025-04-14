import "dotenv/config.js";
import "../../config/database.js";
import Itinerary from "../Itinerary.js";


const itineraries = [
  {
    title: "Matira Beach Sunset",
    price: 120,
    description:
      "Enjoy a breathtaking sunset at Matira Beach with local snacks and live music.",
    photo:
      "https://img.freepik.com/foto-gratis/al-atardecer-playa-tropical-mar-palmera-coco_74190-1075.jpg?t=st=1744502113~exp=1744505713~hmac=5d9d0637e02092191126afe3da05966b099535751145c82183e3d9a159ea1201&w=996",
    duration: "4h",
    likes: 15,
    user: "67f80d180f8c1108ee2585de",
    city: "67e35976ff913b03739255a8",
    hashtags: ["#sunset", "#beachvibes", "#liveMusic"],
    coments: [
      // Juan Pérez (67f80d180f8c1108ee2585de)
      {
        user: "67f80d180f8c1108ee2585de",
        comment: "An unforgettable beach experience!"
      },
      // María Gómez (67f80d180f8c1108ee2585df)
      {
        user: "67f80d180f8c1108ee2585df",
        comment: "The atmosphere was perfect for relaxation."
      },
      // Ana Torres (67f80d180f8c1108ee2585e1)
      {
        user: "67f80d180f8c1108ee2585e1",
        comment: "I would definitely do it again."
      },
      // Carlos López (67f80d180f8c1108ee2585e0)
      {
        user: "67f80d180f8c1108ee2585e0",
        comment: "¡Increíble evento para relajarse al lado del mar!"
      },
      // Diego Ramírez (67f80d180f8c1108ee2585e2)
      {
        user: "67f80d180f8c1108ee2585e2",
        comment: "Una experiencia memorable en cada detalle."
      }
    ]
  },
  {
    title: "Mount Otemanu Hike",
    price: 90,
    description:
      "Guided hiking tour to explore the trails and stunning vistas of Mount Otemanu.",
    photo:
      "https://img.freepik.com/foto-gratis/hombre-parado-colina-contra-fondo-hermoso-paisaje-montanoso_613910-2514.jpg?t=st=1744502155~exp=1744505755~hmac=ed11f834cce924712409da1925fc38a674b9349ccad6993ae0d0bbaf5f7b3ece&w=996",
    duration: "5h",
    likes: 27,
    user: "67f80d180f8c1108ee2585df",
    city: "67e35976ff913b03739255ac",
    hashtags: ["#hiking", "#natureLovers", "#adventureTime"],
    coments: [
      // María Gómez (67f80d180f8c1108ee2585df)
      {
        user: "67f80d180f8c1108ee2585df",
        comment: "The best hike I've ever done, with amazing views."
      },
      // Fernando Morales (67f80d180f8c1108ee2585f0) → Nota: en la data original, este comentario es de Fernando Morales
      {
        user: "67f80d180f8c1108ee2585f0",
        comment: "The guide was very knowledgeable and attentive."
      },
      // Felipe Ortega (67f80d180f8c1108ee2585ea) → Se usa para este comentario
      {
        user: "67f80d180f8c1108ee2585ea",
        comment: "I highly recommend this tour for nature lovers."
      },
      // Carlos López (67f80d180f8c1108ee2585e0)
      {
        user: "67f80d180f8c1108ee2585e0",
        comment: "Una experiencia que superó todas mis expectativas."
      },
      // Laura Fernández (67f80d180f8c1108ee2585e3)
      {
        user: "67f80d180f8c1108ee2585e3",
        comment: "Cada paso en la montaña fue una aventura."
      }
    ]
  },
  {
    title: "Adventure Time Safari",
    price: 150,
    description:
      "Experience wildlife sightings and thrilling safari drives in South Luangwa.",
    photo:
      "https://img.freepik.com/foto-gratis/mujer-hombre-fotografiando-mientras-viajaba-vehiculo_107420-9769.jpg?t=st=1744502304~exp=1744505904~hmac=df76f689c0c400317fc008fc0b3e17475cf627291a6dc7cffa380f577e3842f3&w=996",
    duration: "6h",
    likes: 32,
    user: "67f80d180f8c1108ee2585e1",
    city: "67e35976ff913b03739255aa",
    hashtags: ["#safari", "#wildlife", "#travelAfrica"],
    coments: [
      // Ana Torres (67f80d180f8c1108ee2585e1)
      {
        user: "67f80d180f8c1108ee2585e1",
        comment: "A wild adventure, truly an impressive journey!"
      },
      // Valentina Reyes (67f80d180f8c1108ee2585ef)
      {
        user: "67f80d180f8c1108ee2585ef",
        comment: "The views and wildlife encounters were exceptional."
      },
      // Juan Pérez (67f80d180f8c1108ee2585de)
      {
        user: "67f80d180f8c1108ee2585de",
        comment: "I would love to go on this safari again."
      },
      // Diego Ramírez (67f80d180f8c1108ee2585e2)
      {
        user: "67f80d180f8c1108ee2585e2",
        comment: "Los animales y paisajes te quitan el aliento."
      },
      // Lucía Herrera (67f80d180f8c1108ee2585e5)
      {
        user: "67f80d180f8c1108ee2585e5",
        comment: "Una experiencia única en medio de la naturaleza."
      }
    ]
  },
  {
    title: "Ubud Cultural Tour",
    price: 70,
    description:
      "Immerse yourself in Balinese culture with temple visits and traditional dance performances.",
    photo:
      "https://img.freepik.com/foto-gratis/celebracion-dia-nyepi-indonesia_23-2151325666.jpg?t=st=1744502344~exp=1744505944~hmac=d4bdc4330f5c4afc913e59a3e34eae8ef9537b071518e2c47726ee007dd028bb&w=996",
    duration: "3h",
    likes: 10,
    user: "67f80d180f8c1108ee2585f0",
    city: "67e35976ff913b03739255b2",
    hashtags: ["#cultureTrip", "#BaliVibes", "#templeTour"],
    coments: [
      // Fernando Morales (67f80d180f8c1108ee2585f0)
      {
        user: "67f80d180f8c1108ee2585f0",
        comment: "The cultural tour opened my eyes to a new way of experiencing Bali."
      },
      // Felipe Ortega (67f80d180f8c1108ee2585ea)
      {
        user: "67f80d180f8c1108ee2585ea",
        comment: "The traditional dances were the highlight of the tour."
      },
      // Julieta León (67f80d180f8c1108ee2585f9)
      {
        user: "67f80d180f8c1108ee2585f9",
        comment: "The guide explained the history of each temple very well."
      },
      // Isabella Fuentes (67f80d180f8c1108ee2585ed)
      {
        user: "67f80d180f8c1108ee2585ed",
        comment: "Cada templo tiene una historia fascinante que contar."
      },
      // Hugo Díaz (67f80d180f8c1108ee2585ee)
      {
        user: "67f80d180f8c1108ee2585ee",
        comment: "Un recorrido cultural que mezcla tradición y belleza."
      }
    ]
  },
  {
    title: "Citadel Night Lights",
    price: 55,
    description:
      "Explore the historic Salah El-Din Citadel at night with guided tours and light shows.",
    photo:
      "https://img.freepik.com/foto-gratis/edificio-puerto-liverpool-noche-reino-unido_1268-19710.jpg?t=st=1744501976~exp=1744505576~hmac=efa44f437e5a5c07878422b75ca0790ebb5d85c1940797785523f1001d9d4202&w=826",
    duration: "2h",
    likes: 8,
    user: "67f80d180f8c1108ee2585ea",
    city: "67e35976ff913b03739255ad",
    hashtags: ["#citylights", "#historyNight", "#egypt"],
    coments: [
      // Felipe Ortega (67f80d180f8c1108ee2585ea)
      {
        user: "67f80d180f8c1108ee2585ea",
        comment: "The combination of history and lighting makes this experience unique."
      },
      // Julieta León (67f80d180f8c1108ee2585f9)
      {
        user: "67f80d180f8c1108ee2585f9",
        comment: "A perfect blend of the past and the modern."
      },
      // Valentina Reyes (67f80d180f8c1108ee2585ef)
      {
        user: "67f80d180f8c1108ee2585ef",
        comment: "The nighttime ambiance adds a special touch to the tour."
      },
      // Fernando Morales (67f80d180f8c1108ee2585f0)
      {
        user: "67f80d180f8c1108ee2585f0",
        comment: "La ciudad se transforma en un paisaje lleno de magia nocturna."
      },
      // Daniela Paredes (67f80d180f8c1108ee2585f1)
      {
        user: "67f80d180f8c1108ee2585f1",
        comment: "Una experiencia que te conecta con la historia bajo las luces."
      }
    ]
  },
  {
    title: "Petra by Moonlight",
    price: 100,
    description:
      "Walk through the Siq to the Treasury under the moonlit sky—an unforgettable Petra experience.",
    photo:
      "https://img.freepik.com/foto-gratis/tiro-angulo-arboles-frente-hermosos-acantilados-rocosos_181624-18521.jpg?t=st=1744502398~exp=1744505998~hmac=99ee6fb70a57d26f68d49ca89ff933a99a5332e0b1293c06c08a97c91f88c2f0&w=996",
    duration: "4h",
    likes: 19,
    user: "67f80d180f8c1108ee2585f9",
    city: "67f503fd5c3544af64dfaae9",
    hashtags: ["#PetraByNight", "#moonlightMagic", "#ancientWonders"],
    coments: [
      // Julieta León (67f80d180f8c1108ee2585f9)
      {
        user: "67f80d180f8c1108ee2585f9",
        comment: "Petra looks magical under the moonlight."
      },
      // Valentina Reyes (67f80d180f8c1108ee2585ef)
      {
        user: "67f80d180f8c1108ee2585ef",
        comment: "The atmosphere is mysterious and enchanting."
      },
      // Juan Pérez (67f80d180f8c1108ee2585de)
      {
        user: "67f80d180f8c1108ee2585de",
        comment: "An unforgettable tour filled with history."
      },
      // José Estrada (67f80d180f8c1108ee2585f2)
      {
        user: "67f80d180f8c1108ee2585f2",
        comment: "La luz de la luna realza la majestuosidad de Petra."
      },
      // Martina Soto (67f80d180f8c1108ee2585f3)
      {
        user: "67f80d180f8c1108ee2585f3",
        comment: "Una experiencia mística que te transporta en el tiempo."
      }
    ]
  },
  {
    title: "Mount Fuji Sunrise Trek",
    price: 80,
    description:
      "Climb Mount Fuji overnight to witness the mesmerizing sunrise from the summit.",
    photo:
      "https://img.freepik.com/foto-gratis/mujer-asiatica-kimono-tradicional-japones-montana-fuji-puesta-sol-lago-kawaguchiko-japon_335224-254.jpg?t=st=1744502430~exp=1744506030~hmac=e2722a3ee276ca81f6d07ad26928df86d43c6411ea66bc242b871cb5ef93e3ce&w=1380",
    duration: "7h",
    likes: 22,
    user: "67f80d180f8c1108ee2585ef",
    city: "67e35976ff913b03739255b1",
    hashtags: ["#FujiSunrise", "#JapanTrek", "#mountainMagic"],
    coments: [
      // Valentina Reyes (67f80d180f8c1108ee2585ef)
      {
        user: "67f80d180f8c1108ee2585ef",
        comment: "The sunrise at Fuji was a life-changing experience."
      },
      // María Gómez (67f80d180f8c1108ee2585df)
      {
        user: "67f80d180f8c1108ee2585df",
        comment: "The trek was challenging, but the view was worth every step."
      },
      // Ana Torres (67f80d180f8c1108ee2585e1)
      {
        user: "67f80d180f8c1108ee2585e1",
        comment: "An absolute must for nature lovers."
      },
      // Rodrigo Guzmán (67f80d180f8c1108ee2585f4)
      {
        user: "67f80d180f8c1108ee2585f4",
        comment: "El amanecer desde la cima es simplemente espectacular."
      },
      // Renata Salazar (67f80d180f8c1108ee2585f5)
      {
        user: "67f80d180f8c1108ee2585f5",
        comment: "Cada momento del ascenso está lleno de emoción."
      }
    ]
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