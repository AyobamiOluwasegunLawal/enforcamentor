const { nanoid } = require("nanoid");
import image from "../contants/image"


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
        title: "AI job search",
        href: "https://enforca.co/",
        target: "_blank"
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
        icon: image.ai,
        title: "AI/Machine Learning Products",
    },

    {
        id: nanoid(),
        icon: image.agric,
        title: "Agritech",
    },

    {
        id: nanoid(),
        icon: image.logistic,
        title: "Logistics",
    },

    {
        id: nanoid(),
        icon: image.fintech,
        title: "Fintech",
    },

    {
        id: nanoid(),
        icon: image.mvp,
        title: "Other scalabe MVPs",
    }
]

export const testimonials = [
    {
        id: nanoid(),
        client: "Adeola",
        comment:"I currently work as an MI analyst with KIOX. With a lot of hard work, dedication, consistency and allowing Enforca hold my hands all through the journey of my job search I was able to get my dream job within few months of joining Enforca in the uk.",
        star:"⭐⭐⭐⭐⭐",
        location: "Uk"
    },

    {
        id: nanoid(),
        client: "Dami",
        comment:"Enforca has helped me land my current full time job. They provide personalized mentorship and practical skills that made all the difference for me. You're going to be assigned a mentor that is going to look at your career goals and wear your hats and give you personalized roadmap to getting your dream job.",
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
        header: 'Contact',
        address: '2nd Floor College House',
        address2:   '17 King Edwards Road',
        address3: 'Ruislip London HA4 7AE, United Kingdom',
        number: "+447392 807929, 07392 807929",

        email: 'Email: Engineering@enforcatech.com '
    }
]

export const process = [
    {
        id:nanoid(),
        title: "Discovery",
        desc:"The first step when The Dev Shop engages with a new client we take the time to bulld the foundation of a strong partnership. We get to know the system requirements and the user workflow and expertence. We will schedule an in depth assessment cfrunat the expectations are for your project. Our philosophy is to design, create, and deliver client solutions with integrity, trust and experience"
    },

    {
        id:nanoid(),
        title: "Architecture",
        desc:"The first step when The Dev Shop engages with a new client we take the time to bulld the foundation of a strong partnership. We get to know the system requirements and the user workflow and expertence. We will schedule an in depth assessment cfrunat the expectations are for your project. Our philosophy is to design, create, and deliver client solutions with integrity, trust and experience"
    },

    {
        id:nanoid(),
        title: "Development",
        desc:"The first step when The Dev Shop engages with a new client we take the time to bulld the foundation of a strong partnership. We get to know the system requirements and the user workflow and expertence. We will schedule an in depth assessment cfrunat the expectations are for your project. Our philosophy is to design, create, and deliver client solutions with integrity, trust and experience"
    },

    {
        id:nanoid(),
        title: "Release",
        desc:"The first step when The Dev Shop engages with a new client we take the time to bulld the foundation of a strong partnership. We get to know the system requirements and the user workflow and expertence. We will schedule an in depth assessment cfrunat the expectations are for your project. Our philosophy is to design, create, and deliver client solutions with integrity, trust and experience"
    },
]