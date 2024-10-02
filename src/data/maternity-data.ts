import { SessionData } from "@/interfaces/sessionInterface";

export const dataSession: SessionData[] = [
  {
    id: 1,
    title: "Mini Session Materity",
    slug: "mini-session",
    description: `<p>Tiempo de atención 30 minutos. Si selecciona este tipo de sesión, le recomendamos llegar listo para fotografiarse, ya que el tiempo corre en cuanto usted llega a nuestra oficina (hora de su cita).</p>
    <p>Se garantiza unicamente un solo look, ya sea con vestido o semidesnudo/desnudo. Puede agregar unicamente un vestido de nuestro stock.</p>
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
      alt: "Mini Session Maternity",
      link: "/maternity/mini-session",
    },
    time: 30,
    price: 300,
    priceByPhoto: 85,
    priceDiscountIfMoreThan: 11,
    priceByPhotoIfMoreThan: 65,
  },
  {
    id: 2,
    title: "Full Session Maternity",
    slug: "full-session",
    description: `
    <p>En el estudio o en el parque cercano. Tiempo de atención es de 60 minutos (1 hora). Tiene la opción de dos looks garantizados, ya sean dos vestidos si los agrega a su paquete, o hacer semidesnudos con telas o desnudos con accesorios</p>    
    `,
    image: {
      src: "full-session.jpg",
      alt: "Full Session Maternity",
      link: "/maternity/full-session",
    },
    time: 60,
    price: 450,
    priceByPhoto: 85,
    priceDiscountIfMoreThan: 11,
    priceByPhotoIfMoreThan: 65,
  },
  {
    id: 3,
    title: "Location Session Maternity",
    slug: "location-session",
    description: `
    <p>En la locación que usted elija hasta 10 millas alrededor del estudio. Si excede de 10 millas se hará un cargo de $5 por milla adicional. Tiempo de atención es de 60 minutos (1 hora) Puede agregar un solo vestido de nuestro stock. Las sesiones en exteriores se hacen 2 horas antes del atardecer.</p>    
    `,
    image: {
      src: "location-session.jpg",
      alt: "Location Session Maternity",
      link: "/maternity/deluxe-session",
    },
    time: 60,
    price: 600,
    priceByPhoto: 85,
    priceDiscountIfMoreThan: 11,
    priceByPhotoIfMoreThan: 65,
  },
];
