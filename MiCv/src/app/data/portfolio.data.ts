// Todos los datos del CV en un solo sitio. Edita aquí y se actualiza toda la web.
export const PERFIL = {
  nombre: 'Jorge Jurado',
  rol: 'Desarrollador web junior',
  ciudad: 'Marbella',
  email: 'jorgejurado087@gmail.com',
  github: 'https://github.com/JorgeJuradoG',
  // Clave pública de Web3Forms (te llega por email al crearla en web3forms.com)
  formKey: 'ad00f1fd-ad26-4efd-b48a-ff38ce550c03',
  resumen:
    'Soy desarrollador web junior y me formé en Desarrollo de Aplicaciones Web. He participado en un proyecto real de software con Angular, JavaScript, Firebase y GitHub, siempre con metodologías ágiles y control de versiones.',
  datos: [
    { icono: 'map-pin', texto: 'Marbella, Málaga' },
    { icono: 'languages', texto: 'Castellano nativo · Inglés B2 (Cambridge)' },
    { icono: 'car', texto: 'Carnet de conducir B' },
  ],
  fortalezas: [
    { icono: 'zap', titulo: 'Aprendo rápido', texto: 'Me incorporo pronto a nuevas herramientas y tecnologías.' },
    { icono: 'users', titulo: 'Trabajo en equipo', texto: 'Acostumbrado a Scrum, entregas iterativas y entornos distribuidos.' },
    { icono: 'lightbulb', titulo: 'Resuelvo problemas', texto: 'Afronto los retos técnicos con actitud positiva.' },
  ],
};

export const TECNOLOGIAS = [
  { titulo: 'Frontend', icono: 'monitor', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'] },
  { titulo: 'Backend y bases de datos', icono: 'database', items: ['Firebase Authentication', 'Firebase Realtime Database'] },
  { titulo: 'Herramientas', icono: 'wrench', items: ['Git', 'GitHub', 'Visual Studio Code', 'Notion'] },
  { titulo: 'Metodologías', icono: 'refresh-cw', items: ['Scrum', 'Desarrollo ágil', 'Control de versiones', 'Trabajo colaborativo'] },
];

export const EXPERIENCIA = [
  {
    puesto: 'Desarrollador Web Junior', empresa: 'ZAITEC SOLUTIONS, S.L.', fecha: 'Mar 2025 – Jun 2025',
    puntos: [
      'Desarrollo de un mock funcional de aplicación móvil con Angular.',
      'Autenticación de usuarios con Firebase Authentication.',
      'Almacenamiento y sincronización de datos con Firebase Realtime Database.',
      'Control de versiones con Git y GitHub en un entorno de trabajo distribuido.',
      'Entregas iterativas bajo Scrum.',
    ],
    nota: 'La coordinación técnica valoró mi capacidad de aprendizaje, mi responsabilidad y mi adaptación a las metodologías ágiles.',
  },
  {
    puesto: 'Retail Assistant', empresa: 'Primark', fecha: 'Ago 2021 – actualidad',
    puntos: ['Montaje y apertura de la tienda.', 'Atención al cliente en caja.', 'Reposición y mantenimiento de zonas.'],
    nota: '',
  },
  {
    puesto: 'Recepcionista', empresa: 'Monarque Sultán', fecha: 'May 2022 – Jul 2022',
    puntos: ['Check-in y check-out con Millenium.', 'Gestión de reservas telefónicas.', 'Trato personalizado al cliente.'],
    nota: '',
  },
];

// Sustituye por tus proyectos reales y añade los enlaces a los repositorios
export const PROYECTOS = [
  {
    nombre: 'Mock de aplicación móvil',
    descripcion: 'Prototipo funcional hecho en ZAITEC con login de usuarios y datos sincronizados en tiempo real.',
    tags: ['Angular', 'Firebase', 'Scrum'], repo: '', demo: '',
  },
  {
    nombre: 'Tu proyecto del ciclo',
    descripcion: 'Añade aquí un proyecto de DAW con una descripción corta y el enlace a su repositorio.',
    tags: ['Angular', 'TypeScript'], repo: 'https://github.com/JorgeJuradoG', demo: '',
  },
];

export const FORMACION = [
  { titulo: 'Grado Superior en Desarrollo de Aplicaciones Web', centro: 'MEDAC', fecha: '2023 – 2025' },
  { titulo: 'Grado en Turismo', centro: 'Universidad de Málaga', fecha: '2018 – 2023' },
  { titulo: 'Bachillerato de Ciencias Sociales', centro: 'I.E.S. Guadalpín', fecha: '2016 – 2018' },
];