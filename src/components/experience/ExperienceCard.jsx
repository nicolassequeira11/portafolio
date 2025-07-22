import { DarkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PropTypes from 'prop-types';

export const ExperienceCard = ({ image, logo, title, description, link}) => {
  const { darkmode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  return(
    <div className="flex gap-x-10 max-md:flex-col">
      <div className="w-3/12 max-sm:w-full max-md:w-9/12 mx-auto max-lg:w-6/12 max-xl:w-6/12">
        <img 
          src={image} 
        />
        <img 
          src={logo} 
          className="mt-2 w-3/12 mx-auto"
        />
      </div>

      <div className="w-9/12 flex flex-col max-md:w-full max-md:mt-6">
        {/* Title */}
        <p 
          className={`text-2xl font-[700] max-md:text-xl
            ${darkmode === "false" ? "text-lightblue" : "text-fourthDarkMode"}`
          }
        >
          {title}
        </p>

        {/* Description */}
        <p 
          className={`mt-2 font-[500] text-justify
            ${darkmode === "false" ? "text-darkblue " : "text-fourthDarkMode"}`
          }
        >
          {description}
        </p>

        {/* Link */}
        <a 
          href={link}
          target="_blank"
          className={`font-[600] mt-6 bg-lightblue w-fit ps-3 rounded-full p-1
            ${darkmode === "false" ? "text-white" : "text-white"}`
          }
        >
          {language ? "Ver proyecto" : "See project"}
          <KeyboardArrowRightIcon />
        </a>
      </div>
    </div>
  )
}

ExperienceCard.propTypes = {
  image: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};