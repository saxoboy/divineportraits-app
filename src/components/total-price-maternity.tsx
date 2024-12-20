"use client";

import { dataSession } from "@/data/mini-session-data";
import { useCounterStore } from "@/providers/counter-store-provider";
import ContentFooter from "./content-footer";
import { InfoSessionProps } from "@/interfaces/sessionInterface";

const TotalPriceMaternity = ({ slug }: InfoSessionProps) => {
  const sessionList = dataSession;
  const session = sessionList.find((session) => session.slug === slug);

  const {
    count,
    countPerson,
    album,
    totalPricePhotos,
    frame,
    props,
    scenarios,
    locations,
    dressRental,
    serviciosAdicionales,
  } = useCounterStore((state) => state);

  const totalPropsPrice = props.reduce((acc, prop) => acc + prop.price, 0);
  const totalDressRentalPrice = dressRental.map((dress) => dress.price);
  const totalServiceAdicionalPrice = serviciosAdicionales.reduce(
    (acc, servicio) => acc + servicio.price,
    0
  );

  const totalPrice =
    session!.price +
    totalPricePhotos +
    album.price +
    frame.price +
    totalPropsPrice +
    locations.price +
    scenarios.price[0].price +
    totalDressRentalPrice.reduce((a, b) => a + b, 0) +
    totalServiceAdicionalPrice;

  return (
    <div className="flex flex-col-reverse w-full lg:w-2/6 gap-4 sticky mt-12 top-8">
      {/* <div className="hidden lg:block">
        <ContentFooter />
      </div> */}
      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
        <h1 className="text-2xl mb-4">
          Su cotizacion para su {session?.title} Custom es:
        </h1>

        <div className="flex justify-between gap-2 font-semibold">
          <div>{session?.title}</div>
          <div>${session?.price}</div>
        </div>
        {totalPricePhotos !== 0 && (
          <>
            <div className="flex justify-between gap-2 font-semibold">
              <div>{count} fotos contratadas</div>
              <div>${totalPricePhotos}</div>
            </div>
            {countPerson !== undefined && (
              <div className="flex justify-between gap-2 font-semibold">
                <div>{countPerson} personas adicionales</div>                
              </div>
            )}
          </>
        )}
        {album && album.price !== 0 && (
          <div className="flex justify-between gap-2 font-semibold">
            <div>{album.title}</div>
            <div>${album.price}</div>
          </div>
        )}
        {frame && frame.price !== 0 && (
          <div className="flex justify-between gap-2 font-semibold">
            <div>{frame.title}</div>
            <div>${frame.price}</div>
          </div>
        )}
        {totalPropsPrice !== 0 && (
          <>
            <div className="flex justify-between gap-2 font-semibold">
              <div>Props Especiales</div>
              <div>
                $
                {props &&
                  props.length > 0 &&
                  props.reduce((acc, prop) => acc + prop.price, 0)}
              </div>
            </div>

            {props && props.length > 0 && (
              <div>
                <ul className="list-inside list-disc text-sm">
                  {props.map((prop) => (
                    <li key={prop.id}>
                      {prop.title} por ${prop.price}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
        {scenarios && scenarios.price[0].price !== 0 && (
          <div className="flex justify-between gap-2 font-semibold">
            <div>{scenarios.title}</div>
            <div>${scenarios.price[0].price}</div>
          </div>
        )}
        {locations && locations.price !== 0 && (
          <div className="flex justify-between gap-2 font-semibold">
            <div>{locations.title}</div>
            <div>${locations.price}</div>
          </div>
        )}
        {dressRental && dressRental.length > 0 && (
          <>
            <div className="flex justify-between gap-2 font-semibold">
              <div>Vestuario</div>
              <div>${totalDressRentalPrice.reduce((a, b) => a + b, 0)}</div>
            </div>
            <ul className="list-inside list-disc text-sm">
              {dressRental.map((dress) => (
                <li key={dress.id}>
                  {dress.title} por ${dress.price}
                </li>
              ))}
            </ul>
          </>
        )}
        {serviciosAdicionales && serviciosAdicionales.length > 0 && (
          <>
            <div className="flex justify-between gap-2 font-semibold">
              <div>Servicios Adicionales</div>
              <div>${totalServiceAdicionalPrice}</div>
            </div>
            <ul className="list-inside list-disc text-sm">
              {serviciosAdicionales.map((servicio) => (
                <li key={servicio.id}>
                  {servicio.title} por ${servicio.price}
                </li>
              ))}
            </ul>
          </>
        )}
        <div className="flex justify-between gap-2 text-lg font-bold mt-12">
          <div>Total</div>
          <div>${totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default TotalPriceMaternity;
