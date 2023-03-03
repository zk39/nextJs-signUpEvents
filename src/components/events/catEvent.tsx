import React from 'react';
import Image from "next/image";
import Link from "next/link";

export const EventCategoryPage = ({data,pageName}) => {
  return (
    <div className='cat-events'>
    <h1>Event in {pageName}</h1>
    {/* loop data to render specific event */}
    <div className='content'>
    {data.map((temp) => (
      <Link className='card' key={temp.id}  href={`/events/${temp.city}/${temp.id}`} passHref={true}>
     
        <Image src={temp.image} width={300} height={300} alt={temp.title} />
        <h2>{temp.title}</h2>
        <p>{temp.descroption}</p>
     
      </Link>
    ))}
    </div>
  </div>
  )
}
export default EventCategoryPage;