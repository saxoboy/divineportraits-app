export const dataSession = [
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

export const albumData = [
  {
    id: 1,
    title: "Album Pasta Dura 8x6 con 16 paginas",
    price: 750,
  },
  {
    id: 2,
    title: "Album Pasta Dura 11x8 con 20 paginas",
    price: 950,
  },
  {
    id: 3,
    title: "Album Tapa Acrilica 11x8 con 20 paginas",
    price: 1400,
  },
  {
    id: 4,
    title: "Album Tapa Acrilica con Caja de lujo 10x10 con 20 paginas",
    price: 1650,
  },
  {
    id: 5,
    title: "Album Tapa Acrilica con Caja de lujo 14x11 con 30 paginas",
    price: 1900,
  },
];

export const cuadrosData = [
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
