// Todos los datos del CV y de la carta de recomendación en un solo sitio.
export const PERFIL = {
  nombre: 'Jorge Jurado',
  rol: 'Desarrollador web junior',
  ciudad: 'Marbella',
  // Ruta de una foto en public/ (por ejemplo '/foto.jpg'). Vacío = se muestran tus iniciales.
  foto: '',
  email: 'jorgejurado087@gmail.com',
  github: 'https://github.com/JorgeJuradoG',
  // Clave pública de Web3Forms
  formKey: 'ad00f1fd-ad26-4efd-b48a-ff38ce550c03',
  resumen:
    'Desarrollador Web Junior especializado en Angular, con formación en Desarrollo de Aplicaciones Web y experiencia participando en proyectos reales de desarrollo de software. Experiencia en la creación de aplicaciones utilizando Angular, JavaScript, Firebase y GitHub, trabajando bajo metodologías ágiles y control de versiones. Destaco por mi rápida capacidad de aprendizaje, trabajo en equipo y orientación a la resolución de problemas.',
  // Dato de la carta de recomendación, visible en el hero
  avalHero: '12 semanas de prácticas reales, valoradas muy positivamente por su coordinador',
  datos: [
    { icono: 'map-pin', texto: 'Marbella, Málaga' },
    { icono: 'languages', texto: 'Castellano: nativo' },
    { icono: 'languages', texto: 'Inglés: B2 (Cambridge)' },
    { icono: 'car', texto: 'Carnet de conducir B1' },
  ],
  fortalezas: [
    { icono: 'message-circle', titulo: 'Buena comunicación', texto: 'Trato directo y claro con el equipo, la coordinación y los clientes.' },
    { icono: 'zap', titulo: 'Rápido aprendizaje', texto: 'Incorporo nuevas herramientas y conceptos con rapidez y los aplico con criterio.' },
    { icono: 'users', titulo: 'Trabajo en equipo', texto: 'Colaboración eficaz en entornos distribuidos, con GitHub y entregas iterativas con enfoque ágil.' },
    { icono: 'lightbulb', titulo: 'Resolución de problemas', texto: 'Afronto los retos técnicos con responsabilidad, constancia y una actitud muy positiva.' },
  ],
};

// "aval" = lo que destaca la carta de recomendación sobre ese grupo (vacío si no aplica)
export const TECNOLOGIAS = [
  { titulo: 'Frontend', icono: 'monitor', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'],
    aval: 'Mi coordinador destacó mi excelente comprensión de Angular y de JavaScript.' },
  { titulo: 'Backend y bases de datos', icono: 'database', items: ['Firebase Authentication', 'Firebase Realtime Database'],
    aval: 'Integré con solvencia autenticación y base de datos en tiempo real en el proyecto de prácticas.' },
  { titulo: 'Herramientas', icono: 'wrench', items: ['Git', 'GitHub', 'Visual Studio Code', 'Notion'],
    aval: 'Trabajé de forma continua con GitHub como plataforma de control de versiones.' },
  { titulo: 'Metodologías', icono: 'refresh-cw', items: ['Scrum', 'Desarrollo ágil', 'Control de versiones', 'Trabajo colaborativo'],
    aval: 'Entregas iterativas con enfoque ágil, con un Scrum Master como coordinador.' },
  { titulo: 'Ofimática', icono: 'file-text', items: ['Dominio de la ofimática', 'Microsoft Office'], aval: '' },
];

export const EXPERIENCIA = [
  {
    puesto: 'Desarrollador Web Junior', empresa: 'ZAITEC SOLUTIONS, S.L.', fecha: 'Mar 2025 – Jun 2025',
    contexto: 'Prácticas formativas · 12 semanas · proyecto real',
    puntos: [
      'Desarrollo de un mock funcional de aplicación móvil utilizando Angular.',
      'Implementación de funcionalidades mediante JavaScript y Angular.',
      'Integración de Firebase Authentication para la gestión de usuarios.',
      'Integración de Firebase Realtime Database para el almacenamiento y la sincronización de datos.',
      'Control de versiones de forma continua con Git y GitHub.',
      'Colaboración eficaz en entornos de trabajo distribuidos, coordinado por un DevOps y Scrum Master freelance.',
      'Aplicación de buenas prácticas de programación.',
      'Participación en entregas iterativas bajo metodología Scrum.',
      'Incorporación rápida de nuevas herramientas y conceptos, aplicados con criterio en el desarrollo de la solución.',
    ],
    tags: ['Angular', 'JavaScript', 'Firebase Authentication', 'Firebase Realtime Database', 'Git', 'GitHub', 'Scrum'],
    nota: 'Durante el proyecto recibí una valoración muy positiva por parte de la coordinación técnica, que destacó mi capacidad de aprendizaje, mi responsabilidad, mi actitud ante los retos técnicos y mi adaptación a las metodologías ágiles.',
    // Fragmento literal de la carta. Confirma con el autor que acepta aparecer con su nombre.
    cita: 'Su paso por este proyecto ha sido muy valioso, y no tengo duda de que será un activo importante en cualquier equipo de desarrollo.',
    citaAutor: 'Borja Rodríguez Burgos · Desarrollador freelance, DevOps y Scrum Master',
  },
  {
    puesto: 'Retail Assistant', empresa: 'Primark', fecha: 'Ago 2021 – actualidad', contexto: '',
    puntos: [
      'Montaje y apertura de la tienda.',
      'Atención al cliente en caja.',
      'Tareas de reposición.',
      'Mantenimiento de zonas y otras tareas de tienda.',
    ],
    tags: [], nota: '', cita: '', citaAutor: '',
  },
  {
    puesto: 'Recepcionista', empresa: 'Monarque Sultán', fecha: 'May 2022 – Jul 2022', contexto: '',
    puntos: [
      'Realización de check-in y check-out con Millenium.',
      'Gestión y apoyo al resto del equipo.',
      'Gestión de reservas telefónicas.',
      'Trato personalizado al cliente.',
    ],
    tags: ['Millenium'], nota: '', cita: '', citaAutor: '',
  },
];

// Sustituye el segundo por un proyecto real y añade los enlaces a los repositorios
export const PROYECTOS = [
  {
    nombre: 'Mock de aplicación móvil',
    contexto: 'Prácticas formativas · 12 semanas · ZAITEC SOLUTIONS',
    descripcion:
      'Prototipo funcional de aplicación móvil desarrollado con Angular en un entorno de trabajo distribuido (marzo–junio 2025). Incluye gestión de usuarios con Firebase Authentication y almacenamiento con sincronización de datos mediante Firebase Realtime Database. El código se gestionó con Git y GitHub y se entregó de forma iterativa con enfoque ágil, coordinado por un DevOps y Scrum Master.',
    tags: ['Angular', 'JavaScript', 'Firebase Authentication', 'Firebase Realtime Database', 'Scrum'],
    repo: '', demo: '',
  },
  {
    nombre: 'Tu proyecto del ciclo',
    contexto: '',
    descripcion: 'Añade aquí un proyecto de DAW con una descripción corta y el enlace a su repositorio.',
    tags: ['Angular', 'TypeScript'], repo: 'https://github.com/JorgeJuradoG', demo: '',
  },
];

export const FORMACION = [
  { titulo: 'Grado Superior en Desarrollo de Aplicaciones Web', centro: 'MEDAC', nivel: 'Formación Profesional', fecha: '2023 – 2025',
    detalle: 'Prácticas formativas en ZAITEC SOLUTIONS (12 semanas): desarrollo de un mock de aplicación móvil con Angular y Firebase.' },
  { titulo: 'Grado en Turismo', centro: 'Universidad de Málaga (UMA)', nivel: 'Grado universitario', fecha: '2018 – 2023', detalle: '' },
  { titulo: 'Bachillerato de Ciencias Sociales', centro: 'I.E.S. Guadalpín', nivel: 'Bachillerato', fecha: '2016 – 2018', detalle: '' },
];