import React from 'react';

import backgroundImage from "../assets/person-component_bg.png";
import whowearemobile from '../assets/who_we_are_mobile.png';
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.jpeg";
import person1Bg from "../assets/person1_bg.png";
import person2Bg from "../assets/person2_bg.png";

function useMobile(){
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}
const WhoWeAre = () => {
    const teamMembers = [
        {
            image: person1,
            name: "Sam Watts",
            title: "Owner & CEO",
            achievements: [
                "University of Tampa Lacrosse",
                "College Nation Champion",
                "Under Armour All-American",
                "2x High School State Champion",
            ],
        },
        {
            image: person2,
            name: "Mia Erif",
            title: "Web Developer & SEO Expert",
            achievements: [
                "Software Engineer Graduate",
                "Certified in Web Development, SEO",
                "Certified in UI/UX Designing",
                "Skilled in Full-Stack Development",
            ],
        },
    ]
    const isMobile = useMobile();

    return (
        // <div
        //     className="w-full bg-cover bg-center bg-no-repeat py-8 lg:py-16 relative "
        //     style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "100% 100%", }}
        // >
    <div
      className="w-full bg-cover bg-center bg-no-repeat py-8 lg:py-16 relative"
      style={{ backgroundImage: `url(${isMobile ? whowearemobile : backgroundImage})`, backgroundSize: "100% 100%" }}
    >
            {/* Background overlay */}

            <div className="relative z-10 max-w-5xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold   font-montserrat leading-tight">
                        <span className="text-[#146BFE]">Who</span> <span className="text-white">We Are</span>
                    </h2>
                </div>

                {/* Team Member Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[750px] mx-auto">
                    {teamMembers.map((member, index) => (

                        <div
                            key={index}
                            style={{
                               backgroundImage: `url('${index === 0 ? person1Bg : person2Bg}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="backdrop-blur-sm p-4 mx-auto w-[320px] max-w-md h-[590px] flex flex-col mb-6 sm:mb-0"
                        >
                            {/* Profile Image - Made larger */}
                            <div className="flex justify-center mb-4 "> {/* Negative margins to extend beyond card */}
                                <div className="w-full h-90"> {/* Increased height */}
                                    <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Name and Title */}
                            <div className="mb-4 px-2 font-normal font-montserrat"> {/* Reduced margin and added padding */}
                                <h3 className="text-white text-2xl font-bold mb-1">{member.name}</h3>
                                <p className="text-gray-300 text-base">{member.title}</p>
                            </div>

                            {/* Divider */}
                            <div className="mb-4 px-2"> {/* Reduced margin and added padding */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                            </div>

                            {/* Achievements */}
                            <div className="space-y-1 font-normal font-montserrat px-2">
                                {member.achievements.map((achievement, achievementIndex) => (
                                    <div key={achievementIndex} className="text-white/90 text-[13px]"> {/* Changed from text-sm to text-xs */}
                                        {achievement}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre
