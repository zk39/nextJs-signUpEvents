import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => {
  return (
    <div className="home-body">
      {data?.map((temp) => {
        return (
          <Link className="card" key={temp.id} href={`/events/${temp.id}`}>
            
            <div className="image">
              <Image
                width={600}
                height={400}
                alt={temp.title}
                src={temp.image}
              />
            </div>

            <div className="content">
              <h2>{temp.title}</h2>
              <p>{temp.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
