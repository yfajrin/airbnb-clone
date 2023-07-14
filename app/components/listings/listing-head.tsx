'use client'

import Image from "next/image";
import Heading from "../heading";
import useCountries from "../../hooks/useCountries";
import { safeUser } from "../../types";
import HeartButton from "../heart-button";

interface ListingHeadProps {
    title: string;
    locationValue: string;
    imageSrc: string;
    id: string;
    currentUser?: safeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
    title, locationValue, imageSrc, id, currentUser
}) => {
    const { getByValue } = useCountries();
    const location = getByValue(locationValue);

  return (
    <>
      <Heading 
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className='w-full h-[60vh] overflow-hidden rounded-xl relative'>
        <Image 
            alt='image'
            src={imageSrc}
            fill
            className='object-cover w-full'
        />
        <div className='absolute top-5 right-5'>
            <HeartButton 
                listingId={id}
                currentUser={currentUser}
            />

        </div>
        </div>
    </>
  )
};

export default ListingHead;
