export const ROUTES = [
  {
    id: 1,
    startingPoint: 'Vilnius', //Not show for driver
    endPoint: 'Paris',
    stopPoints: ['Warsaw, Berlin'],
    cargoType: 'Freezer',
    yearOfExperience: 2, //Not show for driver
    certificatesRequired: true, //Not show for driver
    startingDate: '27/05/2022',
    duration: 60,
    trustedCompany: false,
    price: 1500,
    truck: {
      model: 'Mercedes-Benz 1845',
      year: '2019',
      euStandard: 'Euro 6',
      image:
        'https://www.classtrucks.com/wp-content/uploads/2021/08/50faed266ec8054f910a424f131ecad4.jpg',
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
    cargoType: 'Livestock and Animals',
    yearOfExperience: 4, //Not show for driver
    certificatesRequired: true, //Not show for driver
    startingDate: '01/06/2022',
    duration: 40,
    trustedCompany: true,
    price: 800,
    truck: {
      model: 'DAF XF 480 SC MIN',
      year: '2019',
      euStandard: 'Euro 6',
      image: null,
    },
  },
  {
    id: 3,
    startingPoint: 'Vilnius', //Not show for driver
    endPoint: 'Warsaw',
    stopPoints: ['Warsaw, Berlin'],
    cargoType: 'Dry Bulk',
    yearOfExperience: 2, //Not show for driver
    certificatesRequired: true, //Not show for driver
    startingDate: '29/05/2022',
    duration: 8,
    trustedCompany: false,
    price: 400,
    truck: {
      model: 'Renault T',
      year: '2019',
      euStandard: 'Euro 6',
      image:
        'https://www.classtrucks.com/wp-content/uploads/2022/03/a0d18cf1729d224024f50ab7ca4e5dda.jpg',
    },
  },
  {
    id: 4,
    startingPoint: 'Klaipeda', //Not show for driver
    endPoint: 'Vilnius',
    stopPoints: ['Warsaw, Berlin'],
    cargoType: 'Cars',
    yearOfExperience: 2, //Not show for driver
    certificatesRequired: true, //Not show for driver
    startingDate: '30/05/2022',
    duration: 4,
    compatrustedCompanyny: false,
    price: 100,
    truck: {
      model: 'Volvo FH460',
      year: '2021',
      euStandard: 'Euro 6',
      image:
        'https://d2e5b8shawuel2.cloudfront.net/vehicle/274650/hlv/original.jpg',
    },
  },
  {
    id: 5,
    startingPoint: 'Warsaw', //Not show for driver
    endPoint: 'London',
    stopPoints: ['Warsaw, Berlin'],
    cargoType: 'Dry Bulk',
    yearOfExperience: 2, //Not show for driver
    certificatesRequired: true, //Not show for driver
    startingDate: '29/05/2022',
    duration: 54,
    trustedCompany: true,
    price: 1500,
    truck: {
      model: 'DAF XF 480 SC MIN',
      year: '2019',
      euStandard: 'Euro 6',
      image:
        'https://st.mascus.com/imagetilewm/product/classtrucks/daf-xf-480-sc-min,223609_2.jpg',
    },
  },
  {
    id: 6,
    startingPoint: 'Kaunas', //Not show for driver
    endPoint: 'Riga',
    stopPoints: ['Warsaw, Berlin'],
    cargoType: 'Livestock and Animals',
    yearOfExperience: 2, //Not show for driver
    certificatesRequired: true, //Not show for driver
    startingDate: '27/05/2022',
    duration: 4,
    trustedCompany: false,
    price: 200,
    truck: {
      model: 'DAF Xf 480',
      year: '2022',
      euStandard: 'Euro 6',
      image: 'https://www.truck1.lt/img/auto/XXL/2149/2149_3455044274023.jpg',
    },
  },
];
