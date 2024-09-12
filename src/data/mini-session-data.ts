export interface InfoSessionProps {
  slug: string;
}
export interface SessionData {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: {
    src: string;
    alt: string;
    link: string;
  };
  time: number;
  price: number;
  priceByPhoto: number;
  priceDiscountIfMoreThan: number;
  priceByPhotoIfMoreThan: number;
}
export interface AlbumData {
  id: number;
  title: string;
  description: string;
  price: number;
  available: string[];
}
export interface CuadrosData {
  id: number;
  title: string;
  price: number;
}
export interface PropsSpecials {
  id: number;
  title: string;
  image?: {
    src: string;
    alt: string;
  };
  price: number;
  available: string[];
}
export interface ServicesAdicional {
  id: number;
  title: string;
  description: string;
  price: number;
  avaible: string[];
}
export interface ScenariosData {
  id: number;
  title: string;
  image?: {
    src: string;
    alt: string;
  };
  price: {
    id: number;
    description: string;
    price: number;
  }[];
  available: string[];
}
export interface LocationSpecials {
  id: number;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  price: number;
  available: string[];
}
export interface VestuariosData {
  id: number;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description?: string;
  price: number;
  isPriceExterior?: boolean;
  available: string[];
}

export const dataSession: SessionData[] = [
  {
    id: 1,
    title: "Mini Session",
    slug: "mini-session",
    description: `
      <p>
          Tiempo de atención 30 minutos. Si selecciona este tipo de sesión, le
          recomendamos llegar listo para fotografiarse, ya que el tiempo corre
          en cuanto usted llega a nuestra oficina (hora de su cita).
        </p>
        <ul>
        <li>Solo en estudio y disponibles de lunes a jueves.</li>
        <li>
          No puede hacerse cambio de vestuarios, ya que es una sesion rápida.
        </li>
        <li>
          En esta sesiones no se aceptan agregar escenarios personalizados o
          temáticos.
        </li>
        <li>Solo se usaran escenarios de temporada.</li>
      </ul>
        `,
    image: {
      src: "mini-session.jpg",
      alt: "Mini Session",
      link: "/book-mini-session",
    },
    time: 30,
    price: 300,
    priceByPhoto: 85,
    priceDiscountIfMoreThan: 11,
    priceByPhotoIfMoreThan: 65,
  },
  {
    id: 2,
    title: "Full Session",
    slug: "full-session",
    description:
      "En el estudio o en el parque cercano. Tiempo de atención es de 60 minutos (1 hora). Tiene la opción de hacerse una cambio de vestuario dentro de nuestro estudio, ya sea que haga dos looks, llega con uno listo para fotografiar y se cambia a otro, o llega al estudio a vestirse con un unico look (recomendado para las que usaran vestidos grandes de quinceañera rentados con nosotros)",
    image: {
      src: "full-session.jpg",
      alt: "Full Session",
      link: "/book-full-session",
    },
    time: 60,
    price: 450,
    priceByPhoto: 85,
    priceDiscountIfMoreThan: 11,
    priceByPhotoIfMoreThan: 65,
  },
  {
    id: 3,
    title: "Location Session",
    slug: "location-session",
    description:
      "En la locación que usted elija hasta 10 millas alrededor del estudio. Si excede de 10 millas se hará un cargo de $5 por milla adicional. Tiempo de atención es de 60 minutos (1 hora) Si desea hacerse cambio de vestuario en exteriores le recomendamos agregar una hora adicional se sesion.",
    image: {
      src: "location-session.jpg",
      alt: "Location Session",
      link: "/book-location-session",
    },
    time: 60,
    price: 600,
    priceByPhoto: 85,
    priceDiscountIfMoreThan: 11,
    priceByPhotoIfMoreThan: 65,
  },
];

export const albumData: AlbumData[] = [
  {
    id: 1,
    title: "Album Pasta Dura 8x6 con 16 paginas",
    description: "Requiere que tengas 15 a 20 fotos elegidas",
    price: 750,
    available: ["full-session", "location-session"],
  },
  {
    id: 2,
    title: "Album Pasta Dura 11x8 con 20 paginas",
    description: "Requiere que tengas 20 a 25 fotos elegidas",
    price: 950,
    available: ["full-session", "location-session"],
  },
  {
    id: 3,
    title: "Album Tapa Acrilica 11x8 con 20 paginas",
    description: "Requiere que tengas 20 a 25 fotos elegidas",
    price: 1400,
    available: ["full-session", "location-session"],
  },
  {
    id: 4,
    title: "Album Tapa Acrilica con Caja de lujo 10x10 con 20 paginas",
    description: "Requiere que tengas 20 a 25 fotos elegidas",
    price: 1650,
    available: ["full-session", "location-session"],
  },
];

export const cuadrosData: CuadrosData[] = [
  {
    id: 1,
    title: "Acrilico o Metal 16x20",
    price: 600,
  },
  {
    id: 2,
    title: "Acrilico o Metal 20x30",
    price: 700,
  },
  {
    id: 3,
    title: "Acrilico o Metal 24x36",
    price: 800,
  },
];

export const propsSpecials: PropsSpecials[] = [
  {
    id: 1,
    title: "Ballon Bouquete #15 o #16",
    image: {
      src: "/images/props/BalloonBouquete.jpg",
      alt: "Ballon Bouquete",
    },
    price: 250,
    available: ["mini-session", "full-session", "location-session"],
  },
  {
    id: 2,
    title: "Alas de Fairy",
    image: {
      src: "/images/props/AlasFairy.jpg",
      alt: "Ballon Bouquete",
    },
    price: 50,
    available: ["mini-session", "full-session", "location-session"],
  },
  {
    id: 3,
    title: "Alas de Angel de Foam",
    image: {
      src: "/images/props/AlasFoam.jpg",
      alt: "Ballon Bouquete",
    },
    price: 100,
    available: ["mini-session", "full-session", "location-session"],
  },
  {
    id: 4,
    title: "Alas de Angel de Plumas de Avestruz",
    image: {
      src: "/images/props/AlasPlumasAvestruz.jpg",
      alt: "Ballon Bouquete",
    },
    price: 150,
    available: ["mini-session", "full-session", "location-session"],
  },
  {
    id: 5,
    title: "Columpio de Flores",
    image: {
      src: "/images/props/ColumpioFloral.jpg",
      alt: "Ballon Bouquete",
    },
    price: 200,
    available: ["full-session", "location-session"],
  },
  {
    id: 6,
    title: "Comoda floral o Mueble con flores",
    image: {
      src: "/images/props/ComodaFloral.jpg",
      alt: "Ballon Bouquete",
    },
    price: 200,
    available: ["full-session", "location-session"],
  },
  {
    id: 7,
    title: "Bote Floral",
    image: {
      src: "/images/props/BoteFloralLago.jpg",
      alt: "Ballon Bouquete",
    },
    price: 400,
    available: ["full-session", "location-session "],
  },
  {
    id: 8,
    title: "Barbie Box Small",
    image: {
      src: "/images/props/BarbieBox.jpg",
      alt: "Ballon Bouquete",
    },
    price: 200,
    available: ["full-session"],
  },
  {
    id: 9,
    title: "Barbie Box Big",
    image: {
      src: "/images/props/BraztBox.jpg",
      alt: "Ballon Bouquete",
    },
    price: 400,
    available: ["full-session"],
  },
];

export const scenariosData: ScenariosData[] = [
  {
    id: 1,
    title: "Bridgerton or Marie Antoinette Style",
    image: {
      src: "/images/scenarios/EscenarioBridgerton.jpg",
      alt: "Bridgerton or Marie Antoinette Style",
    },
    price: [
      {
        id: 1,
        description: "A Scenary with flowers, candles, and furniture",
        price: 300,
      },
    ],
    available: ["full-session"],
  },
  {
    id: 2,
    title: "Beauty and the Beat Theme Studio",
    image: {
      src: "/images/scenarios/EscenarioBeautyBeast.jpg",
      alt: "Bridgerton or Marie Antoinette Style",
    },
    price: [
      {
        id: 1,
        description: "Belle Town + Interior Castle + Magic Flower Scene",
        price: 600,
      },
      {
        id: 2,
        description: "Individual Scenary",
        price: 250,
      },
    ],
    available: ["full-session"],
  },
  {
    id: 3,
    title: "Rapunzel Theme Studio",
    image: {
      src: "/images/scenarios/EscenarioRapunzel.jpg",
      alt: "Bridgerton or Marie Antoinette Style",
    },
    price: [
      {
        id: 1,
        description: "Boat Scene + Rapunzel Balcony Tower + Rapunzel Garden",
        price: 600,
      },
      {
        id: 2,
        description: "Individual Scenary",
        price: 250,
      },
    ],
    available: ["full-session"],
  },
  {
    id: 4,
    title: "The Princess and The Frog Studio",
    image: {
      src: "/images/scenarios/EscenarioPrincesaSapo.jpg",
      alt: "Bridgerton or Marie Antoinette Style",
    },
    price: [
      {
        id: 1,
        description: "Cafe Scene + Boat Scene + Swamp Scene",
        price: 600,
      },
      {
        id: 2,
        description: "Individual Scenary",
        price: 250,
      },
    ],
    available: ["full-session"],
  },
  {
    id: 5,
    title: "Enchanted Forest",
    image: {
      src: "/images/scenarios/EscenarioFairy.jpg",
      alt: "Bridgerton or Marie Antoinette Style",
    },
    price: [
      {
        id: 1,
        description: "Garden Scene + Lake Scene",
        price: 400,
      },
      {
        id: 2,
        description: "Individual Scenary",
        price: 250,
      },
    ],
    available: ["full-session"],
  },
];

export const servicesAdicional: ServicesAdicional[] = [
  {
    id: 1,
    title: "Maquillaje y Peinado dentro de Estudio",
    description:
      "El estudio se cierra por dos horas para su preparación. El maquillaje sera SoftGlam y el peinado sera de Rizos Suaves (Debe traer el cabello limpio y seco, con extensiones puestas si las desea usar)",
    price: 500,
    avaible: ["full-session", "location-session"],
  },
  {
    id: 2,
    title: "BEHIND THE SCENES OR THEMATIC VIDEO",
    description:
      "With a duration of 60 seconds or more (depending on the material captured)",
    price: 1200,
    avaible: ["location-session"],
  },
];

export const locationSpecials: LocationSpecials[] = [
  {
    id: 1,
    title: "Kips Castle Park",
    image: {
      src: "/images/locations/LocacionKipsCastle.jpg",
      alt: "Kips Castle Park",
    },
    price: 350,
    available: ["location-session"],
  },
  {
    id: 2,
    title: "Skyland Manor & NJ Botanical Garden",
    image: {
      src: "/images/locations/LocacionSkylandManor.jpg",
      alt: "Kips Castle Park",
    },
    price: 650,
    available: ["location-session"],
  },
  {
    id: 3,
    title: "Rapunzel Tower",
    image: {
      src: "/images/locations/LocacionTorreRapunzel.jpg",
      alt: "Kips Castle Park",
    },
    price: 350,
    available: ["location-session"],
  },
  {
    id: 4,
    title: "The Princess and The Frog",
    image: {
      src: "/images/locations/prop-test.jpg",
      alt: "Kips Castle Park",
    },
    price: 350,
    available: ["location-session"],
  },
  {
    id: 5,
    title: "Farm and Lake (Included Horse Rental)",
    image: {
      src: "/images/locations/LocacionFarmLakeHorse.jpg",
      alt: "Kips Castle Park",
    },
    price: 750,
    available: ["location-session"],
  },
  {
    id: 6,
    title: "Hamilton Garden",
    image: {
      src: "/images/locations/LocacionHamiltonGarden.jpg",
      alt: "Kips Castle Park",
    },
    price: 350,
    available: ["location-session"],
  },
];

export const vestuariosData: VestuariosData[] = [
  {
    id: 1,
    title: "Vestidos de Quinceañera",
    image: {
      src: "/images/vestuarios/prop-test.jpg",
      alt: "Vestidos de Quinceañera",
    },
    description: "Incluye, crinolina, corona y joyeria. Si la renta es exteriores se cobra un cargo adicional de $150",
    price: 500,
    available: ["full-session", "location-session"],
  },
  {
    id: 2,
    title: "Disfraces Varios, Fairies, Princesas Sencillos",
    image: {
      src: "/images/vestuarios/prop-test.jpg",
      alt: "Disfraces Varios, Fairies, Princesas Sencillos",
    },
    price: 100,
    available: ["full-session", "location-session"],
  },
  {
    id: 3,
    title: "Disfraces Grandes Princesas",
    image: {
      src: "/images/vestuarios/prop-test.jpg",
      alt: "Disfraces Grandes Princesas",
    },
    price: 350,
    available: ["full-session", "location-session"],
  },
  {
    id: 4,
    title: "Disfraz de la Bestia o Principes",
    image: {
      src: "/images/vestuarios/prop-test.jpg",
      alt: "Disfraz de la Bestia o Principes",
    },
    price: 150,
    available: ["full-session", "location-session"],
  },
  {
    id: 5,
    title: "Flying Dresses",
    image: {
      src: "/images/vestuarios/prop-test.jpg",
      alt: "Flying Dresses",
    },
    price: 120,
    available: ["full-session", "location-session"],
  },
];
