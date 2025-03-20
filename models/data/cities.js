import 'dotenv/config.js'
import '../../config/database.js'
import City from '../City.js'

const cities = [
    {
      name: "Matira Beach",
      photo: "https://cheznonoborabora.com/en/static.cheznonoborabora.com/images/chez-nono-bora-bora-lodge-accommodations/villa/north-villa/gallery/north-villa-gazebo-bora-bora-matira-beach.jpg",
      country: "French Polynesia",
      continent: "Oceania",
      description: "Beautiful beach in Bora Bora, famous for its white sand and clear waters.",
      currency: "CFP franc",
      yearFoundation: 1769,
      likes: 33
    },
    {
      name: "Veligandu Island Beach",
      photo: "https://i.im.ge/2022/09/06/OZ78aa.veligandu-island-beach-of-the-maldives-795x360.jpg",
      country: "Maldives",
      continent: "Asia",
      description: "A small island paradise known for its luxury resorts and turquoise waters.",
      currency: "Maldivian rufiyaa",
      yearFoundation: 1984,
      likes: 28
    },
    {
      name: "Adventure Time",
      photo: "https://www.southluangwasafaris.com/wp-content/uploads/2018/04/livadv_2013-03-207.x89638.jpg",
      country: "Zambia",
      continent: "Africa",
      description: "An adventure hub in South Luangwa National Park, known for its safaris.",
      currency: "Zambian kwacha",
      yearFoundation: 1938,
      likes: 28
    },
    {
      name: "Tsunami Monument",
      photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/af/19/85/tsunami-monument.jpg?w=1200&h=-1&s=1",
      country: "Thailand",
      continent: "Asia",
      description: "A monument honoring the victims of the 2004 tsunami in Khao Lak.",
      currency: "Thai baht",
      yearFoundation: 2005,
      likes: 27
    },
    {
      name: "Mount Otemanu",
      photo: "https://images-ext-1.discordapp.net/external/ENkeAeE0mgvgdWCKzVzYC2NQh-yhcC2FnBNkEqlzMpA/https/www.gototravelguides.net/images/photos/borabora_P1000780.jpg?width=901&height=676",
      country: "French Polynesia",
      continent: "Oceania",
      description: "Iconic mountain on the island of Bora Bora, perfect for hikes and scenic views.",
      currency: "CFP franc",
      yearFoundation: 1769,
      likes: 27
    },
    {
      name: "Citadel Tour",
      photo: "https://i.im.ge/2022/08/31/OERMl1.salahCitadelCairoCity.png",
      country: "Egypt",
      continent: "Africa",
      description: "A tour through the historic Salah El-Din Citadel in Cairo.",
      currency: "Egyptian pound",
      yearFoundation: 1176,
      likes: 26
    },
    {
      name: "Traditional",
      photo: "https://gpjs3bucket.s3.amazonaws.com/wp-content/uploads/2018/08/26141032/GPJNew_Zambia_PP_Crowds-1_Web.jpg",
      country: "Zambia",
      continent: "Africa",
      description: "Traditional gatherings and festivals in Lusaka.",
      currency: "Zambian kwacha",
      yearFoundation: 1913,
      likes: 25
    },
    {
      name: "National Park Roraima",
      photo: "https://dam.ngenespanol.com/wp-content/uploads/2021/04/GettyImages-139812035.jpg",
      country: "Venezuela",
      continent: "South America",
      description: "The famous table-top mountain located in the Gran Sabana region.",
      currency: "Venezuelan bolívar",
      yearFoundation: 1931,
      likes: 24
    },
    {
      name: "Through the Fields",
      photo: "https://d18sx48tl6nre5.cloudfront.net/webp_md_28ddbaa5efa991d343efc7c1d602432d.webp",
      country: "Vietnam",
      continent: "Asia",
      description: "Endless rice fields near Sapa, offering stunning landscapes and trekking.",
      currency: "Vietnamese dong",
      yearFoundation: 1880,
      likes: 13
    },
    {
      name: "Mount Fuji",
      photo: "https://www.meteorologiaenred.com/wp-content/uploads/2020/04/Vistas-del-monte.jpg",
      country: "Japan",
      continent: "Asia",
      description: "The iconic Mount Fuji, a sacred symbol and popular climbing destination.",
      currency: "Japanese yen",
      yearFoundation: 1707,
      likes: 11
    },
    {
      name: "Ubud",
      photo: "https://gadsventure.com/wp-content/uploads/2019/12/Webp.net-resizeimage-2019-12-18T144431.703-800x600.jpg",
      country: "Indonesia",
      continent: "Asia",
      description: "Cultural hub of Bali, known for its art markets and lush surroundings.",
      currency: "Indonesian rupiah",
      yearFoundation: 1800,
      likes: 10
    },
    {
      name: "Fauna and Flora",
      photo: "https://www.enkosiafrica.com/wp-content/uploads/2018/01/enkosi-africa-safari-zambia-lower-zambezi-sausage-tree-camp-.jpg",
      country: "Zambia",
      continent: "Africa",
      description: "Rich biodiversity in Lower Zambezi National Park.",
      currency: "Zambian kwacha",
      yearFoundation: 1983,
      likes: 8
    }
  ];
  
  City.insertMany(cities)
  .then((docs)=>{
     console.log(`${docs.length} cities were inserted to database`);
     
  })
  .catch((err)=>{
    console.log("error to insert the cities in database: ", err);
    
  })