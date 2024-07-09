"use client";

import { useCounterStore } from "@/providers/counter-store-provider";

const TotalPrice = () => {
  const { steps, count, album, totalPricePhotos, frame } = useCounterStore(
    (state) => state
  );

  const totalPrice = totalPricePhotos + album.price + frame.price;

  return (
    <>
      <p>
        Usted se encuentra en el paso {steps} y ha elegido {count} fotos, por $
        {totalPricePhotos}, y el album {album.title} por ${album.price} y un
        cuadro {frame.title} por ${frame.price}
      </p>
      <p>Precio total es: ${totalPrice}</p>
    </>
  );
};

export default TotalPrice;
