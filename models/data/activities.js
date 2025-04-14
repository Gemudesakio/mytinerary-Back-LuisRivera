import 'dotenv/config.js';
import "../../config/database.js";
import Activity from '../Activity.js';

const activities = [
    {
      itineraryId: "67fc4f8cb403ed77e9c63ed4",
      title: "Matira Beach Sunset",
      description: "Enjoy a breathtaking sunset at Matira Beach with local snacks and live music.",
      duration: "4h",
      photo: "https://img.freepik.com/foto-gratis/magnifico-paisaje-playa-arboles-mar-puesta-sol_181624-21718.jpg?t=st=1744590700~exp=1744594300~hmac=abadaca7d429b530dbc56e8e2c448f858b14dfe022d70f9aca63bdea37e7bf24&w=900"
    },
    {
      itineraryId: "67fc4f8cb403ed77e9c63eda",
      title: "Mount Otemanu Hike",
      description: "Guided hiking tour to explore the trails and stunning vistas of Mount Otemanu.",
      duration: "5h",
      photo: "https://img.freepik.com/foto-gratis/hombre-joven-camisa-mochila-pie-montana-tomar-fotografia-cielo-nublado_181624-44076.jpg?t=st=1744590744~exp=1744594344~hmac=c4225bcbb8ec781720cf8601281736fe6f01c6528c44590a7afcf0f4078d9ed8&w=900"
    },
    {
      itineraryId: "67fc4f8cb403ed77e9c63ee0",
      title: "Adventure Time Safari",
      description: "Experience wildlife sightings and thrilling safari drives in South Luangwa.",
      duration: "6h",
      photo: "https://img.freepik.com/foto-gratis/hermosa-foto-cebras-subiendo-colina_181624-44883.jpg?t=st=1744590790~exp=1744594390~hmac=cd691dd32b4bf35e2e1aa09300e632ffcc039b1c108c0f9f2c6f10b896fdced8&w=900"
    },
    {
      itineraryId: "67fc4f8cb403ed77e9c63ee6",
      title: "Ubud Cultural Tour",
      description: "Immerse yourself in Balinese culture with temple visits and traditional dance performances.",
      duration: "3h",
      photo: "https://img.freepik.com/foto-gratis/chica-vestido-medita_169016-6479.jpg?t=st=1744590822~exp=1744594422~hmac=ac7a5dce7f2512fb58aaf8c1469f21db0de341625f9d66cf65e03078c85551cf&w=900"
    },
    {
      itineraryId: "67fc4f8cb403ed77e9c63eec",
      title: "Citadel Night Lights",
      description: "Explore the historic Salah El-Din Citadel at night with guided tours and light shows.",
      duration: "2h",
      photo: "https://img.freepik.com/foto-gratis/vista-angulo-alto-luz-campo-borrosa-sobre-montana_23-2148139763.jpg?t=st=1744590904~exp=1744594504~hmac=8bec6d092d9ebea1c964bf7e64da7117ef18cb697dce7f36864488ebe7afc3bb&w=900"
    },
    {
      itineraryId: "67fc4f8cb403ed77e9c63ef2",
      title: "Petra by Moonlight",
      description: "Walk through the Siq to the Treasury under the moonlit sky — an unforgettable Petra experience.",
      duration: "4h",
      photo: "https://img.freepik.com/foto-gratis/camellos-duermen-cielo-estrellado-desierto-sahara_661209-137.jpg?t=st=1744590931~exp=1744594531~hmac=a5b8593aaf4f5dce464f5b999fa2789a0f2e8118a979a41007c4461aa023285b&w=900"
    },
    {
      itineraryId: "67fc4f8cb403ed77e9c63ef8",
      title: "Mount Fuji Sunrise Trek",
      description: "Climb Mount Fuji overnight to witness the mesmerizing sunrise from the summit.",
      duration: "7h",
      photo: "https://img.freepik.com/foto-gratis/mano-fotografo-sosteniendo-camara-pie-punto-vista-sobre-nubes-mirador-panoramico-al-amanecer_335224-1320.jpg?t=st=1744590974~exp=1744594574~hmac=ec76b7a32863cd9491ad7ad69abf5d3f0f381be8813ef5f6530b718f5b7d1d39&w=900"
    }
];



Activity.insertMany(activities)
.then((docs) => {
    console.log(`${docs.length} activities seeded successfully.`);
    process.exit(0);
})
.catch((error) => {
    console.error("Error seeding activities:", error);
    process.exit(1);
});


