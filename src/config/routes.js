export const ROUTES = [
  {
    id: 1,
    startingPoint: 'Vilnius', //Not show for driver
    endPoint: 'Paris',
    stopPoints: ['Warsaw, Berlin'],
    cargoType: 'freezer',
    yearOfExperience: 2, //Not show for driver
    certificatesRequired: true, //Not show for driver
    startingDate: '29/05/2022 06:00',
    duration: 60,
    badge: '2x Money',
    price: 1500,
    truck: {
      model: 'Mercedes-Benz 1845',
      year: '2019',
      euStandard: 'Euro 6',
      image:
        'https://www.classtrucks.com/wp-content/uploads/2021/08/50faed266ec8054f910a424f131ecad4.jpg',
      benefits: ['Leather Seating, 2 x Beds, TV, Freezer'],
      // Leather seating
      // Excluding design
      // coffee
      // food prep
      // Beds
      // Blind spots / SMART
      // Bed size
      // Exlusice support
      // Freezer
      // TV
      // Connection
    },
  },
  {
    id: 2,
    startingPoint: 'Paris', //Not show for driver
    endPoint: 'Berlin',
    stopPoints: [],
    cargoType: 'livestock',
    yearOfExperience: 4, //Not show for driver
    certificatesRequired: true, //Not show for driver
    startingDate: '01/06/2022 04:00',
    duration: 40,
    badge: 'New Route',
    price: 800,
    truck: {
      model: 'DAF XF 480 SC MIN',
      year: '2019',
      euStandard: 'Euro 6',
      image: null,
      benefits: ['Exclusive Design, Leather Seating, TV, Freezer'],
    },
  },
  {
    id: 3,
    startingPoint: 'Vilnius', //Not show for driver
    endPoint: 'Warsaw',
    stopPoints: ['Warsaw, Berlin'],
    cargoType: 'dry bulk',
    yearOfExperience: 2, //Not show for driver
    certificatesRequired: true, //Not show for driver
    startingDate: '29/05/2022 13:00',
    duration: 8,
    badge: null,
    price: 400,
    truck: {
      model: 'Renault T',
      year: '2019',
      euStandard: 'Euro 6',
      image:
        'https://www.classtrucks.com/wp-content/uploads/2022/03/a0d18cf1729d224024f50ab7ca4e5dda.jpg',
      benefits: ['Coffee machine, TV, Freezer'],
    },
  },
  {
    id: 4,
    startingPoint: 'Klaipeda', //Not show for driver
    endPoint: 'Vilnius',
    stopPoints: ['Warsaw, Berlin'],
    cargoType: 'cars',
    yearOfExperience: 2, //Not show for driver
    certificatesRequired: true, //Not show for driver
    startingDate: '30/05/2022 18:00',
    duration: 4,
    badge: null,
    price: 100,
    truck: {
      model: 'Volvo FH460',
      year: '2021',
      euStandard: 'Euro 6',
      image:
        'https://d2e5b8shawuel2.cloudfront.net/vehicle/274650/hlv/original.jpg',
      benefits: ['2 x Beds, Premium Support, Freezer'],
    },
  },
  {
    id: 5,
    startingPoint: 'Warsaw', //Not show for driver
    endPoint: 'London',
    stopPoints: ['Warsaw, Berlin'],
    cargoType: 'radioactive',
    yearOfExperience: 2, //Not show for driver
    certificatesRequired: true, //Not show for driver
    startingDate: '29/05/2022 12:00',
    duration: 54,
    badge: 'New Truck',
    price: 1500,
    truck: {
      model: 'DAF XF 480 SC MIN',
      year: '2019',
      euStandard: 'Euro 6',
      image:
        'https://st.mascus.com/imagetilewm/product/classtrucks/daf-xf-480-sc-min,223609_2.jpg',
      benefits: ['2 x Beds, Premium Support, Freezer'],
    },
  },
  {
    id: 6,
    startingPoint: 'Kaunas', //Not show for driver
    endPoint: 'Riga',
    stopPoints: ['Warsaw, Berlin'],
    cargoType: 'livestock',
    yearOfExperience: 2, //Not show for driver
    certificatesRequired: true, //Not show for driver
    startingDate: '27/05/2022 18:00',
    duration: 4,
    badge: '2x Money',
    price: 200,
    truck: {
      model: 'DAF Xf 480',
      year: '2022',
      euStandard: 'Euro 6',
      image: 'https://www.truck1.lt/img/auto/XXL/2149/2149_3455044274023.jpg',
      benefits: ['Exclusive Design, Leather Seating, TV, Freezer'],
    },
  },
];
