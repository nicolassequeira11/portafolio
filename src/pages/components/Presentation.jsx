import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { LanguageContext } from "../../context/LanguageContext";

export const Presentation = () => {
  const { darkmode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  return(
    <div 
      className={`mx-auto md:w-12/12 py-14  
        ${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`}
    >
      <div
        className={`text-justify text-xl mx-auto
          max-md:w-10/12 max-md:text-justify md:w-9/12 
            ${darkmode === "false" ? "text-mydark" : "text-fourthDarkMode"}`}
      >
        <p>
          {language 
            ? "Impulso tu presencia online con interfaces modernas y sitios web que convierten: páginas corporativas, landing pages y e-commerce en WordPress diseñados para destacar." 
            : "I boost your online presence with modern interfaces and high-converting websites: corporate pages, landing pages, and WordPress e-commerce designed to stand out."
          }
        </p>
        <p className="mt-5">
          {language 
            ? "Actualmente, colaboro con AWAQ ONGD, donde trabajo en estrecha coordinación con el equipo de backend y diseño, asegurando que cada proyecto se ejecute con precisión y eficiencia."
            : "Currently, I collaborate with AWAQ ONGD, working closely with the backend and design teams to ensure that each project is executed with precision and efficiency."
          }
        </p>
        <p className="mt-5">
          {language 
            ? "Tengo experiencia en la implementación de diseños de Figma, garantizando que cada detalle se refleje fielmente en el código."
            : "I have experience in the implementation of Figma designs, ensuring that every detail is accurately reflected in the code."
          }
        </p>
        <p className="mt-5">
          {language 
            ? "Me defino por mi responsabilidad, compromiso y atención al detalle, cualidades que aplico en cada etapa del desarrollo para cumplir con los objetivos de la mejor manera posible."
            : "I am defined by my responsibility, commitment, and attention to detail, qualities that I apply at every stage of development to achieve goals in the best possible way."
          }
        </p>
      </div>
      
      <hr className={`border-b-1 mt-14 
        ${darkmode === "false" ? "border-mydark" : "border-thirdDarkMode" }`}>
      </hr>
    </div>
  )
}