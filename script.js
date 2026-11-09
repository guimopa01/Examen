const preguntas = [
  {
    pregunta: "1. ¿Cuál fue la materia prima empleada para que funcionara la máquina de vapor en la primera revolución industrial?",
    respuestas: [
      "El petróleo",
      "La electricidad",
      "El gas natural",
      "El carbón"
    ],
    correcta: 3
  },
  {
    pregunta: "2. ¿En qué país se produjo la primera revolución industrial a partir del siglo XVIII?",
    respuestas: [
      "Inglaterra",
      "Alemania",
      "Francia",
      "Estados Unidos"
    ],
    correcta: 0
  },
  {
    pregunta: "3. ¿Qué país se convirtió en el primer país de Europa (tras Gran Bretaña) en transformarse económicamente, centrándose en el hierro, el carbón y los textiles?",
    respuestas: [
      "Bélgica",
      "España",
      "Francia",
      "Italia"
    ],
    correcta: 0
  },
  {
    pregunta: "4. ¿En qué año se sitúa el inicio de la segunda revolución industrial?",
    respuestas: [
      "2011",
      "1870",
      "1969",
      "1784"
    ],
    correcta: 1
  },
  {
    pregunta: "5. ¿Qué fuentes de energía introdujo la segunda revolución industrial para la producción masiva?",
    respuestas: [
      "El carbón y la energía hidráulica",
      "La electricidad y el petróleo",
      "La energía solar y la eólica",
      "La energía nuclear y el gas"
    ],
    correcta: 1
  },
  {
    pregunta: "6. El Ford T, de Henry Ford, es un ejemplo de la producción en cadena propia de la...",
    respuestas: [
      "cuarta revolución industrial",
      "tercera revolución industrial",
      "primera revolución industrial",
      "segunda revolución industrial"
    ],
    correcta: 3
  },
  {
    pregunta: "7. En Alemania se lanzó el primer vehículo propulsado por petróleo, creado por el grupo...",
    respuestas: [
      "Bayer",
      "Ford",
      "Daimler",
      "Siemens"
    ],
    correcta: 2
  },
  {
    pregunta: "8. ¿Qué material, inventado a inicios del siglo XX, se considera el primer polímero completamente sintético?",
    respuestas: [
      "La baquelita",
      "El aluminio",
      "El caucho vulcanizado",
      "El acero inoxidable"
    ],
    correcta: 0
  },
  {
    pregunta: "9. En la segunda revolución industrial, ¿qué material se empleaba para cubrir otros metales como el hierro y el acero protegiéndolos de la corrosión?",
    respuestas: [
      "El níquel",
      "El cobre",
      "El zinc",
      "El aluminio"
    ],
    correcta: 2
  },
  {
    pregunta: "10. ¿Quién creó el proceso de conservación alimentaria conocido como pasteurización?",
    respuestas: [
      "Felix Hoffmann",
      "Thomas Alva Edison",
      "James Watt",
      "Louis Pasteur"
    ],
    correcta: 3
  },
  {
  pregunta: "11. La tercera revolución industrial se produce en la década de...",
  respuestas: [
    "1970",
    "1870",
    "2010",
    "1990"
  ],
  correcta: 0
},
{
  pregunta: "12. ¿Cómo suele denominarse la época iniciada con la tercera revolución industrial?",
  respuestas: [
    "Era de la conectividad",
    "Era de la electrificación",
    "Era del vapor",
    "Era de la información"
  ],
  correcta: 3
},
{
  pregunta: "13. ¿Quién acuñó el término «ingeniería del software» y diseñó el software del módulo de mando y del módulo lunar del Programa Apolo?",
  respuestas: [
    "Ada Lovelace",
    "Margaret Hamilton",
    "Grace Hopper",
    "Hedy Lamarr"
  ],
  correcta: 1
},
{
  pregunta: "14. ¿Aproximadamente a partir de qué año tiene lugar la cuarta revolución industrial (industria 4.0 o 4IR)?",
  respuestas: [
    "2000",
    "1969",
    "2020",
    "2011"
  ],
  correcta: 3
},
{
  pregunta: "15. ¿Qué significan las siglas CPS en el contexto de la industria 4.0?",
  respuestas: [
    "Cloud Processing Services",
    "Computer Production Systems",
    "Control Process Software",
    "Cyber Physical Systems (sistemas ciberfísicos)"
  ],
  correcta: 3
},
{
  pregunta: "16. ¿Cuál de los siguientes NO es uno de los cuatro tipos fundamentales de tecnologías disruptivas de la industria 4.0 según el texto?",
  respuestas: [
    "Análisis e inteligencia",
    "Ingeniería avanzada (fabricación aditiva, energía renovable, nanopartículas)",
    "Máquina de vapor y mecanización",
    "Conectividad, datos y potencia computacional"
  ],
  correcta: 2
},
{
  pregunta: "17. Las tecnologías 4IR promueven un crecimiento responsable a largo plazo a través de acciones en tres grandes áreas. ¿Cuáles son?",
  respuestas: [
    "Industrial, comercial y financiera",
    "Tecnológica, laboral y educativa",
    "Económica, política y cultural",
    "Medioambiental, social y gobernanza"
  ],
  correcta: 3
},
{
  pregunta: "18. Según el texto, durante la próxima década la demanda de habilidades tecnológicas, como la codificación, aumentará en más del...",
  respuestas: [
    "50 %",
    "30 %",
    "10 %",
    "33 %"
  ],
  correcta: 0
},
{
 pregunta: "19. La quinta revolución industrial (industria 5.0) está centrada en...",
  respuestas: [
    "la sustitución completa de los trabajadores por robots",
    "la vuelta a la producción artesanal",
    "el uso exclusivo de combustibles fósiles",
    "el ser humano, el cuidado del medioambiente y los beneficios sociales"
  ],
  correcta: 3
},
{
  pregunta: "20. La digitalización es el proceso de...",
  respuestas: [
    "imprimir todos los documentos de la empresa",
    "sustituir a los empleados por máquinas",
    "cambiar los estados de los elementos de analógicos a digitales",
    "trasladar la producción a otros países"
  ],
  correcta: 2
},
  {
  pregunta: "21. En el proceso de digitalización, ¿qué función tienen los perfiles de usuario asignados a las cuentas de los empleados?",
  respuestas: [
    "Restringir y permitir accesos a las cuentas",
    "Calcular las nóminas de los empleados",
    "Sustituir el uso de contraseñas",
    "Fabricar las piezas de forma automática"
  ],
  correcta: 0
},
{
  pregunta: "22. ¿Qué tecnología se considera un pilar fundamental de la transformación digital en la cuarta revolución industrial, al romper las barreras geográficas?",
  respuestas: [
    "El fax",
    "La máquina de vapor",
    "El telégrafo",
    "La computación en la nube"
  ],
  correcta: 3
},
{
  pregunta: "23. En la industria 4.0, los robots programados para desactivar su tarea si golpean o chocan con un empleado reciben el nombre de...",
  respuestas: [
    "robots sociales",
    "robots autónomos",
    "robots colaborativos",
    "robots industriales aislados"
  ],
  correcta: 2
},
{
  pregunta: "24. ¿Qué significan las siglas AGV, ejemplo de sistema ciberfísico?",
  respuestas: [
    "Automated Guided Vehicle",
    "Advanced Graphic Visualization",
    "Automatic Gateway Verification",
    "Artificial General Vision"
  ],
  correcta: 0
},
{
  pregunta: "25. ¿Cómo se denomina el cargo de mayor responsabilidad de una organización, situado en el nivel superior del organigrama?",
  respuestas: [
    "HR (Human Resources)",
    "CFO (Chief Financial Officer)",
    "CTO (Chief Technology Officer)",
    "CEO (Chief Executive Officer)"
  ],
  correcta: 3
},
{
  pregunta: "26. ¿Cuál de los siguientes NO es un ejemplo de doble verificación de usuario citado en el texto?",
  respuestas: [
    "Envío de un SMS al móvil",
    "Introducción de un PIN",
    "Introducción de un dato biométrico (huella, pupila)",
    "Enviar una carta certificada"
  ],
  correcta: 3
},
{
  pregunta: "27. La tecnología operativa (OT) alude a...",
  respuestas: [
    "el hardware y el software que controlan los procesos físicos",
    "la gestión de sistemas informáticos, redes y software de oficina",
    "la contabilidad de la empresa",
    "el diseño de interfaces de usuario web"
  ],
  correcta: 0
},
{
  pregunta: "28. En cuanto a los aspectos temporales, ¿qué valora principalmente la OT frente a la IT?",
  respuestas: [
    "La recuperación de datos históricos",
    "El almacenamiento de grandes cantidades de datos",
    "La capacidad de respuesta en tiempo real",
    "El envío de correo electrónico"
  ],
  correcta: 2
},
{
  pregunta: "29. ¿Cuál de las siguientes profesiones está asociada al entorno IT y no al OT?",
  respuestas: [
    "Administrador/a de bases de datos",
    "Programador/a de robots industriales",
    "Ingeniero/a industrial electrónico",
    "Operario/a de fábrica"
  ],
  correcta: 0
},
{
  pregunta: "30. ¿Qué significan las siglas SCADA?",
  respuestas: [
    "System Control and Digital Automation",
    "Supervisory Control and Data Acquisition",
    "Smart Computing and Device Administration",
    "Secure Cloud Access and Data Analysis"
  ],
  correcta: 1
},
  {
  pregunta: "31. Respecto a las diferencias entre edge computing y cloud computing, ¿cuál de las siguientes afirmaciones es correcta?",
  respuestas: [
    "La edge computing procesa los datos en el borde de la red, cerca del dispositivo, y requiere poco ancho de banda",
    "La cloud computing es la más adecuada para aplicaciones que requieren baja latencia, como los dispositivos IoT",
    "La edge computing es más barata y más fácil de escalar que la cloud computing",
    "La cloud computing procesa los datos cerca de la fuente y no los transmite por la red"
  ],
  correcta: 0
},
{
  pregunta: "32. El sistema fabril (factory system) apareció en Inglaterra durante la Revolución Industrial en rechazo al tradicional sistema doméstico de producción artesanal.",
  respuestas: [
    "Verdadero",
    "Falso"
  ],
  correcta: 0
},
{
  pregunta: "33. La primera revolución industrial supuso el paso de un modelo económico basado en la agricultura a uno basado en la industria y también se conoce como industria 1.0.",
  respuestas: [
    "Verdadero",
    "Falso"
  ],
  correcta: 0
},
{
  pregunta: "34. En 1897 el químico Felix Hoffmann sintetizó el ácido acetilsalicílico, posteriormente llamado aspirina.",
  respuestas: [
    "Verdadero",
    "Falso"
  ],
  correcta: 0
},
{
  pregunta: "35. Thomas Alva Edison inventó el fonógrafo, el primer aparato que reproducía y grababa sonidos, además de la lámpara incandescente.",
  respuestas: [
    "Verdadero",
    "Falso"
  ],
  correcta: 0
},
{
  pregunta: "36. Según el texto, la brecha salarial se originó durante la tercera revolución industrial.",
  respuestas: [
    "Verdadero",
    "Falso"
  ],
  correcta: 1
},
{
  pregunta: "37. La COVID-19 aceleró la transición hacia la 4IR al obligar a las empresas a adoptar la digitalización y las operaciones sin contacto.",
  respuestas: [
    "Verdadero",
    "Falso"
  ],
  correcta: 0
},
{
  pregunta: "38. Las habilidades blandas son las que se aprenden en el trabajo, en los estudios y a través de la lectura.",
  respuestas: [
    "Verdadero",
    "Falso"
  ],
  correcta: 1
},
{
  pregunta: "39. El ciberpunk es un género literario de ciencia ficción relacionado con William Gibson, autor de la trilogía del Ensanche.",
  respuestas: [
    "Verdadero",
    "Falso"
  ],
  correcta: 0
},
{
  pregunta: "40. En el diagrama en forma de árbol que representa la estructura de la empresa, las ramas son los departamentos y las hojas son los empleados.",
  respuestas: [
    "Verdadero",
    "Falso"
  ],
  correcta: 0
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
  let temaOscuroGuardado = false;
  const botonTema = document.getElementById('theme-toggle');

  try {
    temaOscuroGuardado = localStorage.getItem('modo-oscuro') === 'true';
  } catch (error) {
    // El tema sigue siendo alternable aunque el navegador bloquee el almacenamiento.
  }

  document.body.classList.toggle('modo-oscuro', temaOscuroGuardado);
  actualizarBotonTema(botonTema, temaOscuroGuardado);
  botonTema.addEventListener('click', alternarModoOscuro);
  mostrarPregunta();
};

function alternarModoOscuro() {
  const modoOscuroActivo = document.body.classList.toggle('modo-oscuro');
  const botonTema = document.getElementById('theme-toggle');

  try {
    localStorage.setItem('modo-oscuro', modoOscuroActivo);
  } catch (error) {
    // El cambio visual no depende de que se pueda guardar la preferencia.
  }

  actualizarBotonTema(botonTema, modoOscuroActivo);
}

function actualizarBotonTema(boton, modoOscuroActivo) {
  boton.textContent = modoOscuroActivo ? 'Modo Xavi ON' : 'Modo Xavi OFF';
  boton.setAttribute('aria-pressed', modoOscuroActivo);
}




