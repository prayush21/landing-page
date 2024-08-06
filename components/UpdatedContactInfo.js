"use client";

import React from "react";

const ContactCard = ({ icon, title, content }) => {
  return (
    <div className="group bg-white p-6 rounded-lg shadow-lg border-solid border-4 border-transparent hover:border-theme-cyan hover:scale-105 transition-all duration-300 text-center flex flex-col items-center">
      <div className="my-4 border-solid border group-hover:border-theme-cyan border-transparent p-3 bg-gray-100 rounded-full">
        {icon}
      </div>
      <p className="font-semibold text-base">{title}</p>
      <p>{content}</p>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <>
      <div className="flex items-center justify-center my-10">
        <div className="container w-100 grid gap-6 lg:grid-cols-3">
          <ContactCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
            }
            title="Mail Here"
            content="info@juniperforge.com"
          />
          <ContactCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                stroke="currentColor"
                fill="currentColor"
              >
                <path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
              </svg>
            }
            title="Visit Here"
            content="1141-42, Sun Gravitas, Near Shyamal Cross Road, Rajmani Society, Satellite, Ahmedabad, Gujarat 380015"
          />
          <ContactCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
            }
            title="Call Here"
            content="+91-9975469785"
          />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
