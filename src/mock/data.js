/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Bienvenidos a mi portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hola, mi nombre es',
  name: 'Agustin Sartorio',
  subtitle: 'Y soy desarrollador Front-End',
  cta: 'Conoceme',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Tengo 21 años, soy emprendedor y desarrollador web fullstack. Emprendí durante 3 años en la industria del marketing y comunicación a la vez que también aprendía sobre trading y otras cosas más. Durante esos años aprendi muchos valores tales como liderazgo, trabajo en equipo, comunicación efectiva, disciplina, a ser proactivo, constancia y muchos otros mas. Pero sobre todo aprendí a mejorar como persona, y en esa busqueda constante de mejora y de aprender cosas nuevas me topé con este mundo tan apasionante del desarrollo, donde todos esos valores aprendidos años anteriores me complementan para ser un mejor programador y dar lo mejor de mí en todo momento. Además es algo que me encanta porque puedo fluir, crear y dejar mi marca en cada trabajo.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://imgur.com/DG2XD5B', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pi-dogs.png',
    title: 'Proyecto individual - Dogs',
    info: 'Aplicación tipo SPA (single page application) de perros, donde consumo de una API externa, TheDogApi. En esta aplicación se pueden ver las distintas razas de perros, ordenarlas ascendente y descendentemente tanto por peso como por nombre, y también filtrar por los distintos tipos de temperamentos. Además cuenta con la posibilidad de crear tu propia raza y que se guarden la base de datos con sus temperamentos y características.',
    info2: 'Aplicación hecha con React, Redux, CSS, Sequelize, Express, Node.js, PostgreSQL.',
    url: 'https://pi-dogs-snowy.vercel.app/',
    repo: 'https://github.com/Agus-Sartorio/PI-Dogs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Henry Network',
    info: 'Red social hecha exclusivamente para la comunidad del Bootcamp Henry. La misma cuenta con la posibilidad de crear, comentar y likear posts. Cuenta con notificaciones  y chat en tiempo real. Además cuenta con un estado de administrador donde este puede bloquear personas por distintas violaciones a las normas de la comunidad, en estos casos a dicha persona le llega mediante el correo el aviso de que su cuenta fue inhabilitada. El administrador es quien da de alta a las personas que se registran en la red social.',
    info2: 'Mi papel principal en este trabajo fue encargarme de los estilos de la aplicación.',
    url: 'https://social-network-chi.vercel.app/',
    repo: 'https://github.com/Agus-Sartorio/socialNetwork', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'aeroLab.png',
    title: 'Aerolab challenge',
    info: 'Challenge de front-end hecho con Next.js, Typescript y Styled-components. El desafio consistía en replicar una planilla de figma que me fue dada y agregarle distintas funcionalidades e interacciones para el usuario.',
    info2: '',
    url: 'https://aero-lab-challenge.vercel.app/',
    repo: 'https://github.com/Agus-Sartorio/aeroLabChallenge', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '¡No dudes en contactarme por cualquier consulta! Los enlaces a mis redes están abajo',
  btn: 'Hablemos',
  email: 'sartorio85@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/agustin-sartorio',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Agus-Sartorio',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
