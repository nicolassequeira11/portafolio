import React from "react";
import { ModalImg } from "../../components/Modal";

export const Certificates = ({ language, darkmode }) => {

  const dataCertificates = [
    {
      "name": "TypeScript - Udemy",
      "img": "./media/certifications/typescript-udemy.jpg"
    },
    {
      "name": "Desarrollo Web - JAP",
      "img": "./media/certifications/jap-fase2.png"
    },
    {
      "name": "Desarrollo Web - CoderHouse",
      "img": "./media/certifications/desarrollo.png"
    },
    {
      "name": "Marketing Digital Avanzado - CoderHouse",
      "img": "./media/certifications/marketing.png"
    },
    {
      "name": "Marketing Digital Community Manager - CoderHouse",
      "img": "./media/certifications/community.png"
    },
    {
      "name": "Marketing Digital Growth - CoderHouse",
      "img": "./media/certifications/growth.png"
    }
  ]

  return(
    <div className={`py-20 ${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`} id="certificates">
      <h2 
        className="max-md:text-3xl md:text-4xl m-auto text-center w-fit rounded-full px-8 py-3 font-bold text-white bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue"
      >
        {language ? "Certificados" : "Certificates"}
      </h2>
      <div 
        className="flex flex-wrap my-6 w-10/12 mx-auto"
      >
        {dataCertificates.map((item, index) => (
          <ModalImg keyImg={index} img={item.img} />
        ))}
      </div>
    </div>
  )
}