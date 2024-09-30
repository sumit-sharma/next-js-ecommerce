import { formatCurrency } from "@/util/format";
import Image from "next/image";
import React from "react";
import AddCartButton from "../cart/AddCartButton";

const PropertyCard = ({ property }) => {
  const { title, images, price } = property;
  return (
    <article className="group relative border-2 border-black">
      <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
        <Image
          className="rounded-md object-cover transform group-hover:scale-125 transition-transform duration-500"
          src={images[0]}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          alt={title}
          blurDataURL={images[0]}
        />
      </div>
      <div className='flex justify-between items-center'>
        <h3 className='text-sm font-semibold mt-1 ml-2'>
              {/* {title.substring(0, 30)} */}
              {title}
        </h3>
        <div className='flex justify-between items-center mt-1'>
          <p className='text-sm mt-1 p-2'>
            <span className='font-semibold'>{formatCurrency(price)} </span>
          </p>
          {/* country and flag */}
          {/* <CountryFlagAndName countryCode={country} /> */}
        </div>
        <AddCartButton />        
      </div>
    </article>
  );
};

export default PropertyCard;
