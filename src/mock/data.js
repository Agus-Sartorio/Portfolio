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
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pi-dogs.png',
    title: 'Proyecto individual - Dogs',
    info: 'Aplicación tipo SPA (single page application) de perros, donde consumo de una API externa, TheDogApi. En esta aplicación se pueden ver las distintas razas de perros, ordenarlas ascendente y descendentemente tanto por peso como por nombre, y también filtrar por los distintos tipos de temperamentos. Además cuenta con la posibilidad de crear tu propia raza y que se guarden la base de datos con sus temperamentos y características.',
    info2: '',
    url: '',
    repo: 'https://github.com/Agus-Sartorio/PI-Dogs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
