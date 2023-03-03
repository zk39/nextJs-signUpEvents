import React from 'react'
import Image from "next/image";
import Link from "next/link";
export const AllEvents = ({data}) => {
  return (
    <div className="events-page">
     
    
        {data.map((temp) => {
          return (
            <Link className='card' key={temp.id} href={`/events/${temp.id}`} passHref={true}>
      
              <Image
                src={temp.image}
                alt={temp.title}
                width={400}
                height={400}
              />
              <h2>{temp.title}</h2>
           
            </Link>
          );
        })}
      
    </div>
    
  )
}

export default AllEvents;
