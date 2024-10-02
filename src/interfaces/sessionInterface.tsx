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
  image: {
    src: string;
    alt: string;
  };
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
