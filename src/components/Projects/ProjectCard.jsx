import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};

const projectData = [
  {
    title: "PAPIS",
    imageSrc: "papis-image-url.jpg",
    description:
      "Developed reusable components for Indian Railways' Public Address and Passenger Information System. Built a responsive web and tablet app using React and Material-UI, integrated APIs, and implemented CRUD operations.",
    skills: ["React", "Material-UI", "API Integration", "CRUD Operations"],
    demo: "https://papis-demo-url.com",
    source: "https://github.com/papis-source",
  },
  {
    title: "Restaurant Billing & Management System",
    imageSrc: "restaurant-image-url.jpg",
    description:
      "Created desktop, web, and mobile apps for restaurant management with features like billing, table reservations, and employee management. Technologies used: React.js, Push Notifications, REST APIs.",
    skills: ["React.js", "React Native", "Push Notifications", "REST APIs"],
    demo: "https://restaurant-demo-url.com",
    source: "https://github.com/restaurant-source",
  },
  {
    title: "Hotel Management Application",
    imageSrc: "hotel-image-url.jpg",
    description:
      "Led frontend development for a hotel management app with billing, reservations, and inventory management. Implemented CRUD operations, access control, and CRM features.",
    skills: ["React", "CRUD Operations", "Access Control", "CRM"],
    demo: "https://hotel-demo-url.com",
    source: "https://github.com/hotel-source",
  },
  {
    title: "Lightup",
    imageSrc: "lightup-image-url.jpg",
    description:
      "Developed an e-commerce site with React.js, Tailwind CSS, Redux, and Firebase authentication. Integrated external APIs for real-time product info and smooth user experience.",
    skills: ["React.js", "Tailwind CSS", "Redux", "Firebase", "API Integration"],
    demo: "https://unique-entremet-ca79d6.netlify.app",
    source: "https://github.com/lightup-source",
  },
  {
    title: "CBS Forms",
    imageSrc: "cbs-forms-image-url.jpg",
    description:
      "Built a web form for managing accident claims and workers' compensation with complex form validations.",
    skills: ["React", "Form Validation", "Web Development"],
    demo: "https://app.completebillingservices.biz",
    source: "https://github.com/cbs-forms-source",
  },
  {
    title: "Fnz Chain",
    imageSrc: "fnz-chain-image-url.jpg",
    description:
      "Developed a web app to manage mutual funds, with UI development and API integrations.",
    skills: ["React", "UI Development", "API Integration"],
    demo: "https://fnz-chain-demo-url.com",
    source: "https://github.com/fnz-chain-source",
  },
  {
    title: "Namaste Arizona",
    imageSrc: "namaste-arizona-image-url.jpg",
    description:
      "Created dynamic UI components using React as per design specifications.",
    skills: ["React", "UI Components", "Web Development"],
    demo: "http://www.aznamaste.com",
    source: "https://github.com/namaste-arizona-source",
  },
];

export default projectData;
