/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
export const Header = () => (
  <header>
    <div>
      <div className="topNav">
        <Image
          className="image"
          src={"/images/catLogo.jpg"}
          width={30}
          height={30}
          alt="logo"
        />
        <nav>
          <ul>
            <li>
              {" "}
              <Link href="/" passHref>
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                Events{" "}
              </Link>
            </li>

            <li>
              <Link href="/about-us" passHref>
                {" "}
                About Us{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <p> KunZ's Signup Event project</p>
    
  </header>
);
