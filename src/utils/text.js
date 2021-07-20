const text = {
  general: {
    name: 'Nombre',
    surname: 'Apellido',
    email: 'Direccion de Email',
    age: 'Edad',
    vehicle: 'Tipo de Vehiculo',
    plate: 'Patente',
  },
  landingPage: {
    title:
      'Proyecto Final Tecnicatura en Desarrollo de Software y Control de Calidad',
    subtitle:
      'Integrantes: Gonzalo Alvarez Campos, Lourdes Delgado Vitalone, Agustín Fogliatto, Lucas Gali, Ignacio Granero, Rodrigo Rivadeneira, Jacqueline Zelaya',
    sections: {
      section1: {
        title: 'Una nueva forma de estacionar',
        text: '¡RÁPIDO, FÁCIL Y PRÁCTICO DE USAR!',
      },
      section2: {
        title: 'Tecnologias que se usaron',
        text: 'Para realizar este proyecto se utilizaron tecnologias como MongoDB, Express, ReactJs, NodeJs y herramientas de testeo como Mocha y Chai. Se trabajo en gitlab y despues se migro a github. Usamos como hosting netlify para el front end y heroku para el backend. Para la seccion de metrics usamos una libreria llamada Highcharts para generar graficas dinamicas e interactivas!',
      },
      section3: {
        title: 'Proceso',
        text1:
          'Este proyecto nació en Desarrollo de Software en el 2019, la primera experiencia fue abordada con un cliente real que detecto un nicho en el mercado no satisfecho. Así nace AppArCar, una solución diseñada para quienes se encuentran expuestos diariamente al caos del Microcentro Tucumano. Buscamos que puedas ahorrar tu tiempo y disfrutarlo en lo que vos quieras. Menos tiempo buscando estacionamiento mas tiempo disfrutando de lo que mas te guste.',
        text2:
          'Este proyecto disruptivo promueve la experiencia de introducirse en un mundo laboral desde la simulación de start up que cumple con los objetivos pactados. Esto nos permite colaborar desde diferentes roles en el marco de trabajo scrum de las metodologías ágiles y también el uso de herramientas de gestión. De este modo podemos experimentar e implementar los conocimientos técnicos y soft skills adquiridas durante el desarrollo de siete sprint.',
      },
    },
  },
  home: {
    welcome: 'Bienvenidos a AppArCar',
    table: {
      searchInput: 'Buscar por nombre y/o direccion',
    },
  },
  parkingTable: {
    columns: {
      name: 'Nombre',
      address: 'Direccion',
      attention: 'Horario de Atencion',
      price: 'Precio',
      reserve: 'Reservar',
      cancel: 'Cancelar',
    },
  },
  registrationForm: {
    btn: 'Crear Cuenta',
    password: 'Contraseña',
    confirmPsw: 'Confirmar Contraseña',
    msg: 'Estas a un click de tu reserva',
    error_nodata: "Por favor, completar el formulario",
    error_email:'El mail ya existe',
    error_confirm: 'La contraseña es distinta a la confirmada',
  },
  signIn: {
    sign: 'Ingresar',
    msg: 'Bienvenido',
  },
  profile: {
    title: 'Perfil',
    vehicleTitle: 'Vehiculo',
    vehiclePlate: 'Patente',
    vehicleType: 'Tipo',
    msg: 'Informacion Personal',
    delete: 'Eliminar cuenta',
    updateError:
      'La informacion ingresada no es valida, ingrese informacion valida',
    updateCorrect:'Informacion del usuario actualizada exitosamente',
    credit: 'Tarjeta',
    number: 'Numero de tarjeta',
    complete_name: 'Nombre',
    expiry: 'Vencimiento',
    valid_until: 'vence',
    cvc: 'CVC',
    company: 'Empresa',
    register: 'Registrar Tarjeta',
    invalid_data: 'Informacion no valida',
  },
  metrics: {
    title: 'Metricas del Proyecto Final',
    subtitle:
      'Aqui les mostraremos algunos graficos con datos que se fueron tomando a lo largo del proceso de desarrollo de este proyecto.',
    firstMetric: 'Aqui vamos a tener humo de planning',
  },
  notFound: {
    msg: '404 - Not Found!',
    back: 'Volver',
    redirect: 'Retornando al Inicio',
  },
  navbar: {
    signin: 'Ingresar',
    signup: 'Registrarse',
    app: 'AppArCar',
    back: 'Volver',
    signOff: 'Cerrar Sesion',
    home: 'Inicio',
    profile: 'Perfil',
    metrics: 'Metricas',
  },
  footer: {
    unsta:
      'Universidad del Norte Santo Tomas de Aquino - Tucuman, Argentina, 2021 |',
    site: 'apparcar-unsta.netlify.app',
    unstaBtn: '- UNSTA - TDSC',
    gdocBtn: '- G-Doc',
    trelloBtn: '- Trello Board',
    repoBtn: '- Repositorio',
  },
  vehicleOptions: {
    title: 'Elegir tipo de Vehiculo',
    motorbike: 'Moto',
    car: 'Auto',
    truck: 'Camioneta',
  },
  modal: {
    close: 'Cerrar',
    save: 'Guardar Cambios',
    textReserve: 'La reserva fue exitosa',
    textCancel: 'La reserva fue cancelada',
    alert:
      'Hubo un error con la reserva o el estacionamiento se quedo sin lugares. Lo sentimos!',
  },
  noParking: {
    text: 'Lo sentimos, pero no hay estacionamientos cerca.',
  },
};

export default text
