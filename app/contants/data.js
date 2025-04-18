const { nanoid } = require("nanoid");
import { FaPaintBrush } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiOutlineAudit } from "react-icons/ai";
import { MdCloudDownload } from "react-icons/md";
import { HiSquare3Stack3D } from "react-icons/hi2";

export const navLinks = [
    {
        id: nanoid(),
        title: "Home",
        href: "/",
    },
    
    {
        id: nanoid(),
        title: "Startup",
        href: "/Startup"
    },

    {
        id: nanoid(),
        title: "Internship/Siwes",
        href: "/Internshipsiwes"
    },

    {
        id: nanoid(),
        title: "Learn more",
        href: "/MoreInfo"
    },
]

export const services = [
    {
        id: nanoid(),
        icon: <HiSquare3Stack3D className={'size-6'}/>,
        title: "Ai/machine learning product",
        description: "Web/App software development",
    },

    {
        id: nanoid(),
        icon: <FaPaintBrush className={'size-6'}/>,
        title: "Agritech product",
        description: "MVPs you don't throw away",
    },

    {
        id: nanoid(),
        icon: <IoPersonSharp className={'size-6'}/>,
        title: "Logistic product",
        description: "Automated testing & DevOps",
    },

    {
        id: nanoid(),
        icon: <FaPeopleGroup className={'size-6'}/>,
        title: "FIntech product",
        description: "Manage teams of best talent"
    },

    {
        id: nanoid(),
        icon: <AiOutlineAudit className={'size-6'}/>,
        title: "Other scalabe MVP's",
        description: "Proven audits & due dilligence"
    }
]

export const testimonials = [
    {
        id: nanoid(),
        client: "Adiola",
        comment:"I currently work as an MI analyst with KIOX. With a lot of hard work, dedication, consistency and allowing Mentor techies hold my hands all through the journey of my job search I was able to get my dream job within few months of joining Mentor techies in the uk.",
        star:"⭐⭐⭐⭐⭐",
        location: "Uk"
    },

    {
        id: nanoid(),
        client: "Dami",
        comment:"Mentor Techies has helped me land my current full time job. They provide personalized mentorship and practical skills that made all the difference for me. You're going to be assigned a mentor that is going to look at your career goals and wear your hats and give you personalized roadmap to getting your dream job.",
        star: "⭐⭐⭐⭐⭐",
        location: "UK"
    },

    {
        id: nanoid(),
        client: "Jedidia",
        comment: "The session has been really insightful and motivating. I really appreciate the opportunity to enhance my experience by gaining access to the projects, the mentorship is also good",
        star: "⭐⭐⭐⭐⭐",
        location: "Kenya"
    },
]

export const contact = [
    {
        id:nanoid(),
        header: 'Contact (BE)',
        address: '2nd Floor College House',
        address2:   '7 King Edwards Road',
        number: "07392 807929, 08127575385",

        email: 'Email: info@mentor-techies.com'
    }
]