import image1 from '../assets/showcase1.jpg'
import image2 from '../assets/showcase2.jpg'
import image3 from '../assets/showcase3.jpg'
import image4 from '../assets/showcase4.jpg'
import image5 from '../assets/showcase5.jpg'
import image6 from '../assets/showcase6.jpg'
import image7 from '../assets/showcase7.jpg'
import image8 from '../assets/showcase8.jpg'
import image9 from '../assets/showcase9.jpg'
import image10 from '../assets/showcase10.jpg'



export const HotelDetail = [
  {
    id: 1,
    image: image1,
    title: 'Exquisite Luxury Retreat & Spa',
    desc: 'Embark on a journey to our opulent retreat and spa, nestled amidst awe-inspiring natural landscapes. Delight in top-tier amenities, rejuvenating spa indulgences, and extraordinary culinary experiences. Unwind in the epitome of tranquility and luxury that defines our resort.',
    button: 'Reserve Your Bliss'
  },
  {
    id: 2,
    image: image2,
    title: 'Coastal Haven Boutique Escape',
    desc: 'Uncover the allure of our boutique escape by the seaside, just moments away from pristine sandy shores. Immerse yourself in the serene coastal atmosphere and relish in stunning ocean vistas from our thoughtfully designed rooms. Revel in the epitome of coastal living.        ',
    button: 'Secure Your Seaside Retreat'
  },
  {
    id: 3,
    image: image3,
    title: 'Tranquil Mountain Getaway',
    desc: 'Relax in our inviting mountain getaway, surrounded by majestic peaks and lush forests. Embrace the wonders of nature with hiking trails, mountain biking, and winter sports adventures. Unwind by the fireside in our rustic yet refined accommodations.                             ',
    button: 'Book Your Mountain Retreat'
  },
  {
    id: 4,
    image: image4,
    title: 'Sophisticated Urban Boutique Elegance',
    desc: 'Immerse yourself in the dynamic city life at our sophisticated urban boutique haven. Situated in the heart of the bustling metropolis, our hotel presents chic rooms, contemporary amenities, and convenient access to premier shopping, dining, and entertainment.                   ',
    button: 'Secure Your Urban Oasis'
  },
  {
    id: 5,
    image: image5,
    title: 'Historical Charm and Spa Bliss',
    desc: 'Step into a bygone era at our historically rich inn and spa, where timeless grace meets contemporary comfort. Dive into the area.',
    button: 'Reserve Your Historic Getaway'
  },
  {
    id: 6,
    image: image6,
    title: 'Tropical Bliss Resort Haven',
    desc: 'Escape to our paradisiacal resort, nestled on a pristine island with ivory beaches and crystalline turquoise waters. Immerse yourself in a tropical haven adorned with palm trees, exotic fauna, and an array of water activities. Discover paradise like never before.                ',
    button: 'Secure Your Tropical Paradise'
  },
];


export const HotelRoomDetail = [
  {
      id: 1,
      name: "single economy",
      slug: "single-economy",
      type: "Single",
      price: 1000,
      images: image1,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo. Pabst pug tumblr gochujan   .",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
  },
  {
      id: 2,
      name: "Deluxe Suite",
      slug: "deluxe-suite",
      type: "Double",
      price: 2000,
      capacity: 2,
      pets: false,
      breakfast: true,
      featured: true,
      images: image2,
      description:
        "Indulge in luxury with our Deluxe Suite. This spacious and elegantly designed suite offers a comfortable and relaxing environment. Featuring a king-size bed, a separate living area, and a private balcony with stunning views, the Deluxe Suite is the perfect choice for a memorable stay.",
      extras: [
        "King-size bed with premium bedding",
        "Private balcony with panoramic views",
        "Spacious living area with comfortable seating",
        "Luxurious bathroom with soaking tub and rainfall shower",
        "Complimentary breakfast included",
        "Mini bar with a selection of beverages and snacks",
        "Free high-speed Wi-Fi",
      ],
  },
  {
      id: 3,
      name: "Family Suite",
      slug: "family-suite",
      type: "Family",
      price: 3000,
      capacity: 4,
      pets: true,
      breakfast: true,
      featured: false,
      images: image3,
      description:
        "Our Family Suite is the perfect accommodation for a family getaway. With ample space and thoughtful amenities, this suite offers a comfortable and enjoyable stay for the whole family. It features multiple bedrooms, a spacious living area, and a fully equipped kitchenette  .",
      extras: [
        "Multiple bedrooms with comfortable bedding",
        "Separate living area with a cozy seating arrangement",
        "Fully equipped kitchenette with modern appliances",
        "Dining area for family meals",
        "Complimentary breakfast included",
        "Pet-friendly accommodation",
        "Free Wi-Fi throughout the suite",
      ],
  },
  {
      id: 4,
      name: "Executive Suite",
      slug: "executive-suite",
      type: "Double",
      price: 2500,
      capacity: 2,
      pets: false,
      breakfast: true,
      featured: true,
      images: image4,
      description:
        "Experience the ultimate luxury with our Executive Suite. This opulent suite offers a sophisticated and lavish ambiance with a spacious bedroom, a separate living area, and a private terrace overlooking the stunning city skyline.                                                ",
      extras: [
        "Luxurious king-size bed with premium linens",
        "Spacious living area with elegant furniture",
        "Private terrace with panoramic city views",
        "En-suite bathroom with marble accents and a spa bathtub",
        "Complimentary breakfast included",
        "24-hour room service",
        "Access to exclusive executive lounge",
      ],
  },
  {
      id: 5,
      name: "Standard Room",
      slug: "standard-room",
      type: "Single",
      price: 1500,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      images: image5,
      description:
        "Our Standard Room offers a comfortable and cozy space for a relaxing stay. Featuring a comfortable single bed and essential amenities, it is perfect for solo travelers or those on a budget.",
      extras: [
        "Comfortable single bed with fresh linens",
        "En-suite bathroom with a shower",
        "Basic toiletries provided",
        "Workspace with a desk and chair",
        "Free Wi-Fi access",
        "Television with cable channels",
        "Room cleaning service",
      ],
  },
  {
      id: 6,
      name: "Luxury Villa",
      slug: "luxury-villa",
      type: "Family",
      price: 5000,
      capacity: 6,
      pets: false,
      breakfast: true,
      featured: true,
      images: image6,
      description:
        "Experience the epitome of luxury with our stunning Luxury Villa. This spacious and exquisite villa features multiple bedrooms, a private pool, and breathtaking ocean views. It offers an unparalleled level of comfort and elegance for an unforgettable vacation.",
      extras: [
        "Multiple luxurious bedrooms with en-suite bathrooms",
        "Expansive living area with elegant furnishings",
        "Fully equipped gourmet kitchen",
        "Private pool with sun loungers and a dining area",
        "Panoramic ocean views from the terrace",
        "Complimentary breakfast included",
        "24-hour personalized concierge service",
      ],
  },
  {
      id: 7,
      name: "Honeymoon Suite",
      slug: "honeymoon-suite",
      type: "Double",
      price: 3500,
      capacity: 2,
      pets: false,
      breakfast: true,
      featured: true,
      images: image7,
      description:
        "Indulge in a romantic escape with our exquisite Honeymoon Suite. Designed for couples seeking privacy and luxury, this suite offers a beautifully decorated bedroom, a private balcony, and stunning ocean views. Experience an unforgettable honeymoon or a special anniversary in this enchanting retreat.",
      extras: [
        "Romantic king-size bed with premium bedding",
        "Spacious en-suite bathroom with a luxurious bathtub",
        "Intimate seating area for cozy moments",
        "Private balcony with breathtaking ocean views",
        "Complimentary champagne and chocolates",
        "In-room dining service",
        "Access to exclusive spa facilities",
      ],
  },
  {
      id: 8,
      name: "Penthouse Suite",
      slug: "penthouse-suite",
      type: "Presidential",
      price: 10000,
      capacity: 4,
      pets: false,
      breakfast: true,
      featured: true,
      images: image8,
      description:
        "Experience the height of luxury with our exclusive Penthouse Suite. This expansive and opulent suite is located on the top floor, offering breathtaking city views. With multiple bedrooms, a private rooftop terrace, and lavish amenities, it is the epitome of sophistication and indulgence.",
      extras: [
        "Luxurious bedrooms with en-suite bathrooms",
        "Spacious living and dining area for entertaining",
        "Fully equipped kitchen with high-end appliances",
        "Private rooftop terrace with panoramic city views",
        "Personalized butler service",
        "Complimentary breakfast served in-suite",
        "Access to exclusive executive lounge",
      ],
  },
  {
      id: 9,
      name: "Family Suite",
      slug: "family-suite",
      type: "Family",
      price: 3000,
      capacity: 4,
      pets: true,
      breakfast: true,
      featured: true,
      images: image9,
      description:
        "Our spacious Family Suite is the perfect choice for families looking for comfort and convenience. With separate bedrooms, a cozy living area, and child-friendly amenities, it offers a home away from home experience. Create lasting memories with your loved ones in this welcoming suite.",
      extras: [
        "Master bedroom with a king-size bed",
        "Additional bedroom with twin beds for the kids",
        "Separate living area with a sofa and TV",
        "Kitchenette with a microwave and refrigerator",
        "Family-friendly amenities and toys",
        "Complimentary breakfast for the whole family",
        "Pet-friendly accommodations",
      ],
  },
  {
      id: 10,
      name: "Business Suite",
      slug: "business-suite",
      type: "Double",
      price: 4000,
      capacity: 2,
      pets: false,
      breakfast: true,
      featured: false,
      images: image10,
      description:
        "Designed for business travelers, our sophisticated Business Suite offers a seamless blend of comfort and productivity. With a dedicated workspace, high-speed internet, and modern amenities, it provides the perfect environment for work and relaxation. Experience a seamless stay while attending to your professional needs.",
      extras: [
        "Spacious bedroom with a comfortable workspace",
        "Executive-style desk and ergonomic chair",
        "High-speed internet and Wi-Fi access",
        "Business center services and support",
        "Access to meeting rooms and conference facilities",
        "Complimentary breakfast and in-room dining options",
        "Convenient location near business districts",
      ],
  }
]