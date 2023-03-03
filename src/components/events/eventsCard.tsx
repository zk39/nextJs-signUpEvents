import React, { useRef, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
const SingleEventsCard = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value;
    const eventId = router?.query.id;
    console.log(emailValue);
    try {
      //fetch request
      const response = await fetch("/api/EmailRegister", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      const result = await response.json();
      alert(result.message);

      if (!response) throw new Error(`Error : ${response.status}`);
      console.log("POST", data);
    } catch (error) {
      console.log("Error: ", e);
    }
    
  };
  return (
    <>
      <div className="event-single-page">
        <Image src={data.image} width={1000} height={500} alt={data.title} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <form onSubmit={onSubmit} className="email_registration">
          <label>Get Registered for this Event! </label>
          <input
            // ref={inputEmail}
            type="email"
            id="email"
            name="first"
            placeholder="please enter your email"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SingleEventsCard;
