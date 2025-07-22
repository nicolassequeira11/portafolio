import { useContext } from "react";
import Photo from "/media/photo.jpg";

import { DarkModeContext } from "../../context/DarkModeContext";
import { LanguageContext } from "../../context/LanguageContext";

export const Profile = () => {
  const { darkmode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  return(
    <div 
      id="profile" 
      className={`w-12/12 mx-auto text-white 
        justify-center flex flex-col max-md:h-[75vh]
      ${darkmode === "false" 
        ? "bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue" 
        : "bg-gradient-to-tr to-secondDarkMode via-gray-700 from-firstDarkMode"}`
      }
    >
      <div className="my-14 2xl:w-[70rem] mx-auto">
        <p 
          className="font-bold text-5xl
            max-sm:text-[2.7rem] text-center"
        >
          {language ? "Desarrollador Web" : "Web Developer"}
        </p>
        <div 
          className="max-sm:w-8/12 sm:w-6/12 my-10 md:w-5/12 lg:w-4/12 xl:w-3/12 mx-auto"
        >
          <img 
            src={Photo} 
            className="rounded-full w-[80%] m-auto" 
          />
        </div>
        <p 
          className="text-2xl mx-6 max-sm:text-xl max-sm:px-3 text-center font-semibold"
        >
          {language 
            ? "Sitios Web y Tiendas Online" 
            : "Websites and e-commerce"
          }
        </p>
      </div>
      
    </div>
  )
}