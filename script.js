const preguntas = [
  {
    pregunta: "1. ¿Qué es la computación en la nube?",
    respuestas: [
      "La instalación física de servidores dentro de las oficinas de una empresa",
      "La distribución de servicios informáticos a través de internet",
      "Un modelo donde el usuario debe comprar licencias y hardware permanentemente antes de usarlos",
      "Un sistema de almacenamiento exclusivo en discos duros locales sin conexión a red"
    ],
    correcta: 1
  },
  {
    pregunta: "2. ¿Qué permite la computación en la nube?",
    respuestas: [
      "Acceder a los recursos de manera remota, bajo demanda y pagando solo por lo que se utiliza",
      "Obligar a las empresas a gestionar el mantenimiento físico de sus propios servidores",
      "Eliminar completamente la necesidad de conexión a internet para trabajar",
      "Comprar hardware propio a un precio único e invariable"
    ],
    correcta: 0
  },
  {
    pregunta: "3. ¿Qué característica no pertenece al modelo tradicional (on-premise)?",
    respuestas: [
      "Costes iniciales elevados en la compra de hardware y licencias",
      "Instalación y configuración de servidores a cargo de la empresa",
      "Eliminación del mantenimiento físico del hardware",
      "Control directo sobre los datos y la infraestructura"
    ],
    correcta: 2
  },
  {
    pregunta: "4. ¿Qué es el modelo on-premise?",
    respuestas: [
      "Un modelo de alquiler de software a través de navegadores web sin instalación previa",
      "Un modelo donde la empresa compra, instala y gestiona la infraestructura dentro de sus propias instalaciones",
      "Un servicio de infraestructura pública compartido entre múltiples empresas en internet",
      "Una arquitectura basada exclusivamente en la ejecución de código sin servidores"
    ],
    correcta: 1
  },
  {
    pregunta: "5. ¿Qué característica no pertenece al modelo de nube?",
    respuestas: [
      "Alta disponibilidad",
      "Gestión delegada",
      "Pago por uso",
      "Mantenimiento físico del HW"
    ],
    correcta: 3
  },
  {
    pregunta: "6. ¿Qué es la escalabilidad?",
    respuestas: [
      "La garantía de que un servicio nunca sufrirá interrupciones físicas",
      "La capacidad de los recursos para crecer o reducirse según las necesidades",
      "La obligación de pagar una tarifa fija mensual independientemente del tráfico consumido",
      "La exclusividad de usar un centro de datos dedicado a una única empresa"
    ],
    correcta: 1
  },
  {
    pregunta: "7. ¿Qué es la elasticidad?",
    respuestas: [
      "La capacidad de adaptarse en tiempo real, de forma temporal y automática, a los cambios en la demanda",
      "El control exclusivo sobre el sistema operativo y las aplicaciones instaladas",
      "La compra de servidores físicos adicionales para guardar en un almacén de reserva",
      "El modelo de pago mediante una cuota anual fija sin importar el uso"
    ],
    correcta: 0
  },
  {
    pregunta: "8. ¿Qué modelo de servicio de nube es falso?",
    respuestas: [
      "IaaS", 
      "PaaS", 
      "SaaS", 
      "BaaS"
    ],
    correcta: 3
  },
  {
    pregunta: "9. ¿Qué ofrece el modelo IaaS?",
    respuestas: [
      "Aplicaciones completamente listas para utilizar a través de internet sin necesidad de instalar o actualizar nada",
      "Infraestructura virtualizada como servidores, discos y redes, donde el usuario controla el sistema operativo y aplicaciones",
      "Una plataforma de desarrollo donde el usuario solo gestiona el código de la aplicación",
      "Plataforma preparada para ejecutar aplicaciones sin preocuparse por la infraestructura, gestionando solo el código y su configuración"
    ],
    correcta: 1
  },
  {
    pregunta: "10. ¿Qué ofrece el modelo PaaS?",
    respuestas: [
      "Infraestructura virtualizada como servidores, discos y redes, donde el usuario controla el sistema operativo y aplicaciones",
      "Aplicaciones completas como Google Docs o Microsoft 365",
      "Plataforma preparada para ejecutar aplicaciones sin preocuparse por la infraestructura, gestionando solo el código y su configuración",
      "Aplicaciones completamente listas para utilizar a través de internet sin necesidad de instalar o actualizar nada"
    ],
    correcta: 2
  },
  {
    pregunta: "11. ¿Qué ofrece el modelo SaaS?",
    respuestas: [
      "Aplicaciones completamente listas para utilizar a través de internet sin necesidad de instalar o actualizar nada",
      "Plataforma preparada para ejecutar aplicaciones sin preocuparse por la infraestructura, gestionando solo el código y su configuración",
      "Infraestructura virtualizada como servidores, discos y redes, donde el usuario controla el sistema operativo y aplicaciones",
      "Acceso a nivel de sistema operativo para configurar redes y máquinas virtuales"
    ],
    correcta: 0
  },
  {
    pregunta: "12. ¿Qué modelo de despliegue de nube es falso?",
    respuestas: [
      "Nube pública", 
      "Nube privada", 
      "Nube híbrida", 
      "Nube kun"
    ],
    correcta: 3
  },
  {
    pregunta: "13. ¿Qué caracteriza a la nube pública?",
    respuestas: [
      "Los recursos se alojan en centros de datos del proveedor y se comparten entre múltiples clientes",
      "Es una infraestructura alojada únicamente en los servidores locales del cliente sin conexión a terceros",
      "Prohíbe el acceso a internet a cualquier usuario externo",
      "Requiere la compra de hardware propietario por parte de la empresa consumidora"
    ],
    correcta: 0
  },
  {
    pregunta: "14. ¿Cuál no es una ventaja de la nube pública?",
    respuestas: [
      "Menor coste inicial",
      "Escalabilidad inmediata",
      "Mantenimiento a cargo del proveedor",
      "Control directo y total sobre la infraestructura física"
    ],
    correcta: 3
  },
  {
    pregunta: "15. Indica las 2 desventajas de nube pública",
    respuestas: [
      "Costes iniciales muy elevados y flexibilidad limitada",
      "Menos control directo y posibles preocupaciones de privacidad en entornos regulados",
      "Mantenimiento físico complejo a cargo del usuario y pago fijo obligatorio",
      "Ausencia de acceso global y falta de escalabilidad"
    ],
    correcta: 1
  },
  {
    pregunta: "16. ¿Qué caracteriza a la nube privada?",
    respuestas: [
      "Se comparte libremente entre miles de empresas desconocidas en centros de datos públicos",
      "Es una infraestructura dedicada exclusivamente a una sola organización",
      "Solo permite utilizar aplicaciones de correo electrónico SaaS",
      "No requiere ningún tipo de inversión económica ni mantenimiento"
    ],
    correcta: 1
  },
  {
    pregunta: "17. ¿Cuál es una ventaja de la nube privada?",
    respuestas: [
      "Menor coste financiero en comparación con la nube pública",
      "Mayor control, seguridad y personalización",
      "Ausencia total de responsabilidad en la gestión del sistema",
      "Escalabilidad ilimitada inmediata sin presupuesto previo"
    ],
    correcta: 1
  },
  {
    pregunta: "18. Indica las 3 desventajas de nube privada",
    respuestas: [
      "Costes más altos, escalabilidad y flexibilidad limitada",
      "Menor seguridad física, ausencia de opciones de configuración y pago por uso estricto",
      "Dependencia absoluta de proveedores externos para SaaS, lentitud de red global e imposibilidad de crear usuarios",
      "Falta total de control sobre los datos y obligatoriedad de compartir recursos con otras empresas"
    ],
    correcta: 0
  },
  {
    pregunta: "19. ¿Qué caracteriza a la nube híbrida?",
    respuestas: [
      "La exclusión total de cualquier servicio que funcione a través de internet",
      "La combinación de nube privada y pública",
      "El uso exclusivo de servidores locales sin conexión remota",
      "La sustitución de administradores por IA"
    ],
    correcta: 1
  },
  {
    pregunta: "20. ¿Cómo se distribuye la carga de trabajo en la nube híbrida?",
    respuestas: [
      "La empresa mantiene los datos sensibles en la nube privada y usa la pública para cargas temporales",
      "Todos los datos sensibles se publican en la nube pública y las tareas temporales se ejecutan únicamente on-premise",
      "Se eliminan los servidores privados y solo se usan aplicaciones SaaS gratuitas",
      "Toda la carga se ejecuta en servidores locales sin conexión externa"
    ],
    correcta: 0
  },
  {
    pregunta: "21. ¿Qué es AWS?",
    respuestas: [
      "Una plataforma de servicios en la nube segura",
      "El tacón de GTA V",
      "Una base de datos en papel estilo Alicia",
      "Un teclado para darle una ostia"
    ],
    correcta: 0
  },
  {
    pregunta: "22. ¿Qué es EC2?",
    respuestas: [
      "Servicio de almacenamiento de objetos no relacionales",
      "Servidores virtuales",
      "Un gestor de identidades, usuarios y permisos",
      "Un servicio de base de datos relacional"
    ],
    correcta: 1
  },
  {
    pregunta: "23. ¿Qué es S3?",
    respuestas: [
      "Un servicio de ejecución de código sin servidor",
      "Servicio de almacenamiento de objetos",
      "Un motor de base de datos SQL",
      "Una red privada virtual"
    ],
    correcta: 1
  },
  {
    pregunta: "24. ¿Qué es IAM?",
    respuestas: [
      "Gestión de usuarios y permisos",
      "Un servicio de alquiler de máquinas virtuales",
      "Un sistema de archivos de bloques",
      "Una plataforma de correo electrónico"
    ],
    correcta: 0
  },
  {
    pregunta: "25. ¿Qué es RDS?",
    respuestas: [
      "Servicio enfocado en bases de datos relacionales",
      "Un servicio de almacenamiento masivo",
      "Un servicio para creación de usuarios",
      "Una herramienta de análisis en tiempo real"
    ],
    correcta: 0
  },
  {
    pregunta: "26. ¿Qué es Lambda?",
    respuestas: [
      "Un centro de datos físico en las oficinas del cliente",
      "Ejecución de código sin servidor",
      "Un servicio de almacenamiento de objetos",
      "Gestión de usuarios y permisos"
    ],
    correcta: 1
  },
  {
    pregunta: "27. ¿Qué son los servicios web?",
    respuestas: [
      "Cualquier software disponible a través de internet",
      "Una página web estática guardada en el disco local que no requiere red",
      "Un servidor físico instalado únicamente en las instalaciones del cliente",
      "Un cableado de red para interconectar ordenadores locales"
    ],
    correcta: 0
  },
  {
    pregunta: "28. ¿De qué depende la elección de un servicio o modelo en la nube?",
    respuestas: [
      "De la cantidad de licencias de software físico que posea la empresa previamente",
      "De los objetivos empresariales y requisitos tecnológicos",
      "De la obligación legal de contratar siempre el nivel de control sobre la infraestructura física",
      "Del tamaño del centro de datos local"
    ],
    correcta: 1
  },
  {
    pregunta: "29. Diferencia entre escalabilidad vertical y horizontal",
    respuestas: [
      "La vertical añade más recursos a un servidor y la horizontal añade más servidores",
      "La vertical aumenta el espacio físico del centro de datos y la horizontal reduce la potencia de cálculo",
      "La horizontal es solo para bases de datos relacionales y la vertical para archivos de imagen",
      "La vertical elimina servidores y la horizontal los sustituye por redes locales"
    ],
    correcta: 0
  },
  {
    pregunta: "30. ¿Qué es CAF de AWS?",
    respuestas: [
      "Un marco estructurado para planificar y acelerar la adopción de la nube",
      "Un servicio de almacenamiento masivo de archivos estáticos",
      "Un tipo de servidor virtual para ejecutar código sin servidor (Serverless)",
      "Un protocolo de seguridad VPN"
    ],
    correcta: 0
  },
  {
    pregunta: "31. ¿Qué factores influyen en el coste de los servicios de AWS?",
    respuestas: [
      "El número de empleados contratados por la empresa cliente, el precio y las horas de uso",
      "Tipo de recurso, horas de uso, almacenamiento y transferencia de datos",
      "El precio del hardware físico, las horas de uso y la cantidad de empleados contratados",
      "Una tarifa plana fija obligatoria"
    ],
    correcta: 1
  },
  {
    pregunta: "32. Respecto a la afirmación 'En la nube solo pagas por lo que usas, por lo tanto la nube siempre es más barata que el modelo on-premise', ¿cuál es la valoración correcta y su principal riesgo económico?",
    respuestas: [
      "Es falsa porque los proveedores de nube aplican una cuota fija mensual de mantenimiento de infraestructura que se cobra al margen del uso real de los servidores virtualizados",
      "Es falsa porque, aunque el modelo sea de pago por uso, si la arquitectura no está optimizada o no se monitorean los recursos en ejecución, se pueden generar gastos descontrolados que superen el coste del modelo on-premise",
      "Es falsa porque el pago por uso solo se aplica a los servicios de almacenamiento (SaaS), mientras que el procesamiento de datos (IaaS) exige una inversión de capital inicial (CapEx) obligatoria",
      "Es falsa porque en la nube pública es obligatorio contratar una reserva mínima de instancias con compromiso de permanencia anual antes de poder desplegar aplicaciones"
    ],
    correcta: 1
  },
  {
    pregunta: "33. ¿Qué relación existe entre la arquitectura de una app y su coste?",
    respuestas: [
      "Ninguna, el coste de una aplicación en la nube es siempre idéntico sin importar su diseño",
      "Una buena arquitectura de nube reduce costes al consumir recursos solo cuando se necesitan",
      "Las aplicaciones más antiguas instaladas en la nube son siempre más económicas que las modernas",
      "Cuantos más servidores físicos dedicados solicite la arquitectura, más barato será el servicio"
    ],
    correcta: 1
  },
  {
    pregunta: "34. ¿Qué ventajas económicas puede aportar la nube?",
    respuestas: [
      "Ahorro inicial, pago por uso y escalabilidad",
      "Ahorro inicial y pago por uso pero con cuota fija obligatoria para mantener la escalabilidad",
      "Eliminación del pago por uso",
      "Mantenimiento del gasto inicial sin escalabilidad y con pago por uso"
    ],
    correcta: 0
  },
  {
    pregunta: "35. ¿Qué es AWS Pricing Calculator?",
    respuestas: [
      "Una herramienta web gratuita de AWS que permite estimar, planificar y simular el coste de arquitecturas y servicios en la nube antes de desplegarlos",
      "Una herramienta web gratuita de AWS que realiza cobros automáticos mensuales a la cuenta bancaria del usuario sin previo aviso",
      "Una herramienta web gratuita de AWS diseñada para gestionar y consultar bases de datos relacionales directamente mediante SQL",
      "Una herramienta web gratuita de AWS que analiza y escanea el código fuente de funciones Serverless para detectar errores de sintaxis"
    ],
    correcta: 0
  },
  {
    pregunta: "36. Tenemos una app con 1 servidor. De repente pasa de 100 usuarios habituales a 10.000 usuarios durante un par de horas por una promoción puntual. El sistema detecta el pico de tráfico, añade automáticamente 5 servidores más para repartir la carga y los apaga de forma automática cuando el tráfico vuelve a 100 usuarios para no pagar de más,  ¿Qué se usa?",
    respuestas: [
      "Escalabilidad vertical",
      "Escalabilidad horizontal",
      "Vertical y horizontal",
      "Elasticidad"
    ],
    correcta: 3
  },
  {
    pregunta: "37. Una empresa tiene una base de datos en un servidor que se está quedando sin memoria. Deciden cambiar esa máquina virtual por una de mayor tamaño con el doble de CPU y RAM. Al mismo tiempo, añaden 2 servidores web idénticos en paralelo detrás de un equilibrador de carga para atender a más usuarios a la vez,  ¿Qué se usa?",
    respuestas: [
      "Escalabilidad vertical",
      "Escalabilidad horizontal",
      "Vertical y horizontal",
      "Elasticidad"
    ],
    correcta: 2
  },
  {
    pregunta: "38. Una empresa alquila servidores virtuales y almacenamiento en la nube, encargándose de instalar su propio sistema operativo Linux, configurar los cortafuegos de red y desplegar manualmente sus bases de datos, ¿Qué modelo de servicio utiliza?",
    respuestas: [
      "IaaS", 
      "PaaS", 
      "SaaS", 
      "Ninguno xulo playa"
    ],
    correcta: 0
  },
  {
    pregunta: "39. Un equipo de desarrollo sube directamente el código fuente de su app a un entorno de ejecución gestionado donde el proveedor de la nube se encarga de mantener el sistema operativo, actualizar los servidores web y gestionar la infraestructura,  ¿Qué modelo de servicio utiliza?",
    respuestas: [
      "IaaS", 
      "PaaS", 
      "SaaS", 
      "Payo"
    ],
    correcta: 1
  },
  {
    pregunta: "40. Una empresa utiliza la plataforma Salesforce a través del navegador web para gestionar las ventas y contactos de sus clientes sin instalar software ni administrar servidores,  ¿Qué modelo de servicio utiliza?",
    respuestas: [
      "IaaS", 
      "PaaS", 
      "SaaS", 
      "Pileta"
    ],
    correcta: 2
  },
  {
    pregunta: "41. Los empleados de una empresa utilizan Microsoft 365 y Dropbox en la nube para crear documentos de texto, compartir hojas de cálculo y guardar archivos corporativos,  ¿Qué modelo de servicio utiliza?",
    respuestas: [
      "IaaS", 
      "PaaS", 
      "SaaS", 
      "Xokas"
    ],
    correcta: 2
  },
  {
    pregunta: "42. Una empresa crea una instancia EC2 y administra el sistema operativo,  ¿Qué modelo de servicio utiliza?",
    respuestas: [
      "IaaS", 
      "PaaS", 
      "SaaS", 
      "Amogus"
    ],
    correcta: 0
  },
  {
    pregunta: "43. Un desarrollador despliega su código Python utilizando el servicio gestionado AWS Elastic Beanstalk, encargándose solo del mantenimiento de la aplicación sin preocuparse por la máquina virtual subyacente,  ¿Qué modelo de servicio utiliza?",
    respuestas: [
      "IaaS", 
      "PaaS", 
      "SaaS", 
      "Autonomo"
    ],
    correcta: 1
  }
];


// Función para barajar un array
function barajarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Barajar el orden de las preguntas
barajarArray(preguntas);

// Barajar las respuestas dentro de cada pregunta y actualizar la respuesta correcta
preguntas.forEach(pregunta => {
    const respuestas = [...pregunta.respuestas];
    const correcta = pregunta.correcta;
    barajarArray(respuestas);
    pregunta.correcta = respuestas.indexOf(pregunta.respuestas[correcta]);
    pregunta.respuestas = respuestas;
});

let indicePregunta = 0;
let preguntaActual = 1;
let respuestasCorrectas = 0;

// Función para mostrar la pregunta y las respuestas
function mostrarPregunta() {
    const preguntaContainer = document.getElementById('pregunta');
    const respuestasContainer = document.getElementById('respuestas-container');
    const inputContainer = document.getElementById('input-container');
    const respuestaBox = document.getElementById('respuesta-box');
    const respuestaText = document.getElementById('respuesta-text');
    const contadorPregunta = document.getElementById('contador-pregunta');

    preguntaContainer.innerText = preguntas[indicePregunta].pregunta;
    respuestasContainer.innerHTML = '';
    respuestaBox.style.display = 'none';
    contadorPregunta.innerText = `Pregunta ${preguntaActual} de ${preguntas.length}`;
    inputContainer.style.display = 'none';

    preguntas[indicePregunta].respuestas.forEach((respuesta, index) => {
        const respuestaElement = document.createElement('div');
        respuestaElement.classList.add('respuesta');
        respuestaElement.innerText = respuesta;
        respuestaElement.onclick = () => seleccionarRespuesta(index);
        respuestasContainer.appendChild(respuestaElement);
    });
}

// Función para seleccionar la respuesta
function seleccionarRespuesta(respuestaUsuario) {
    const respuestaBox = document.getElementById('respuesta-box');
    const respuestaText = document.getElementById('respuesta-text');
    const respuestasContainer = document.getElementById('respuestas-container');
    const respuestaCorrecta = preguntas[indicePregunta].correcta;
    const opciones = respuestasContainer.children;

    for (let i = 0; i < opciones.length; i++) {
        if (i === respuestaCorrecta) {
            opciones[i].classList.add('correcta');
        } else {
            opciones[i].classList.add('incorrecta');
        }
        opciones[i].onclick = null;
    }

    if (respuestaUsuario === respuestaCorrecta) {
        respuestaText.innerText = "¡Correcto!";
        respuestasCorrectas++;
    } else {
        respuestaText.innerText = `Incorrecto. Respuesta correcta: ${preguntas[indicePregunta].respuestas[respuestaCorrecta]}`;
    }

    respuestaBox.style.display = 'block';
}

// Función para avanzar a la siguiente pregunta
function siguientePregunta() {
    indicePregunta++;
    preguntaActual++;

    if (indicePregunta < preguntas.length) {
        mostrarPregunta();
    } else {
        alert(`Has completado todas las preguntas.\nRespuestas correctas: ${respuestasCorrectas} / ${preguntas.length}`);
        // Reiniciar el cuestionario
        indicePregunta = 0;
        preguntaActual = 1;
        respuestasCorrectas = 0;
        barajarArray(preguntas); // Rebarajar preguntas
        preguntas.forEach(pregunta => {
            const respuestas = [...pregunta.respuestas];
            const correcta = pregunta.correcta;
            barajarArray(respuestas);
            pregunta.correcta = respuestas.indexOf(pregunta.respuestas[correcta]);
            pregunta.respuestas = respuestas;
        });
        mostrarPregunta();
    }
}

// Inicializar la primera pregunta al cargar la página
window.onload = function() {
    mostrarPregunta();
};




