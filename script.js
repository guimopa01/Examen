const preguntas = [
  {
    pregunta: "1. ¿Cuál es el principal interés de los inversores como stakeholders?",
    respuestas: [
      "Conocer el impacto medioambiental en la zona donde viven.",
      "Recaudar impuestos de la empresa.",
      "Conseguir el máximo rendimiento de sus acciones.",
      "Mejorar las condiciones laborales de la plantilla."
    ],
    correcta: 2
  },
  {
    pregunta: "2. ¿Qué stakeholders son las personas que, sin ser necesariamente clientes, viven en la zona donde se ubica la empresa?",
    respuestas: [
      "Los acreedores.",
      "Los proveedores.",
      "Las comunidades locales.",
      "Las instituciones políticas."
    ],
    correcta: 2
  },
  {
    pregunta: "3. Dentro de las 5P, la P de Prosperidad se relaciona principalmente con...",
    respuestas: [
      "Políticas económicas basadas en las finanzas sostenibles y el reparto justo de la riqueza.",
      "Una sociedad alejada de la conflictividad y las injerencias.",
      "La conservación de la biodiversidad en la tierra y en los océanos.",
      "Las alianzas entre pueblos, gobiernos y empresas."
    ],
    correcta: 0
  },
  {
    pregunta: "4. ¿Qué tres dimensiones debe equilibrar el desarrollo sostenible según la definición de la unidad?",
    respuestas: [
      "La competitividad, la innovación y la digitalización.",
      "El crecimiento de la economía, el respeto del medioambiente y el bienestar social.",
      "El beneficio empresarial, la reducción de impuestos y el empleo.",
      "La seguridad jurídica, la transparencia y la gobernanza."
    ],
    correcta: 1
  },
  {
    pregunta: "5. ¿Qué tipo de sostenibilidad se centra en la preservación de la biodiversidad sin renunciar al progreso económico y social?",
    respuestas: [
      "Sostenibilidad ambiental.",
      "Sostenibilidad social.",
      "Sostenibilidad económica.",
      "Sostenibilidad institucional."
    ],
    correcta: 0
  },
  {
    pregunta: "6. La empresa Cemex, que favorece la autoconstrucción para que las comunidades obtengan una vivienda digna, es un ejemplo de sostenibilidad...",
    respuestas: [
      "Económica.",
      "Ambiental.",
      "Institucional.",
      "Social."
    ],
    correcta: 3
  },
  {
    pregunta: "7. La Agenda 2030 fue aprobada por la ONU en septiembre de 2020.",
    respuestas: [
      "Verdadero",
      "Falso"
    ],
    correcta: 1
  },
  {
    pregunta: "8. ¿Cuál de estos es uno de los elementos clave del Acuerdo de París?",
    respuestas: [
      "Limitar el aumento de las temperaturas a 1,5 °C.",
      "Eliminar por completo el uso de combustibles fósiles antes de 2025.",
      "Revisar la contribución de los países a la reducción de emisiones cada diez años.",
      "Prohibir la financiación climática a los países en desarrollo."
    ],
    correcta: 0
  },
  {
    pregunta: "9. ¿Cuántas metas plantea la Agenda 2030 en total?",
    respuestas: [
      "17.",
      "169.",
      "196.",
      "100."
    ],
    correcta: 1
  },
  {
    pregunta: "10. ¿Cuál de los siguientes es un indicador de sostenibilidad social?",
    respuestas: [
      "La materia prima utilizada.",
      "El ciclo de vida del producto.",
      "El volumen de negocio.",
      "La conciliación laboral y familiar."
    ],
    correcta: 3
  },
  {
    pregunta: "11. Según la unidad, ¿cuál es posiblemente el criterio ASG menos extendido, aunque el Pacto Mundial de la ONU insta a las empresas a aplicarlo?",
    respuestas: [
      "El criterio ambiental.",
      "El criterio social.",
      "Ninguno: los tres están igual de extendidos.",
      "El criterio de gobernanza."
    ],
    correcta: 3
  },
  {
    pregunta: "12. El tamaño de la empresa es el factor que más influye en la existencia o no de algunos stakeholders.",
    respuestas: [
      "Verdadero",
      "Falso"
    ],
    correcta: 0
  },
  {
    pregunta: "13. ¿Cuál de los siguientes es un indicador de sostenibilidad institucional?",
    respuestas: [
      "La gestión de la diversidad.",
      "El fondo de maniobra.",
      "La huella de carbono.",
      "La cantidad de agua consumida."
    ],
    correcta: 1
  },
  {
    pregunta: "14. El Acuerdo de París es un tratado internacional vinculante sobre el cambio climático, adoptado por 196 partes en 2015, que entró en vigor el 4 de noviembre de 2016.",
    respuestas: [
      "Verdadero",
      "Falso"
    ],
    correcta: 0
  },
  {
    pregunta: "15. Los derechos humanos, las normas laborales, las políticas de igualdad y la diversidad e inclusión forman parte de los criterios...",
    respuestas: [
      "Financieros.",
      "De gobernanza.",
      "Sociales.",
      "Ambientales."
    ],
    correcta: 2
  },
  {
    pregunta: "16. Para que un producto sea considerado ISR debe indicar expresamente en su política de inversión que incluye criterios medioambientales, sociales y de buen gobierno.",
    respuestas: [
      "Verdadero",
      "Falso"
    ],
    correcta: 0
  },
  {
    pregunta: "17. ¿Cuál de las siguientes acciones NO forma parte del Marco Estratégico de Energía y Clima de España?",
    respuestas: [
      "El Plan Nacional Integrado de Energía y Clima.",
      "La Estrategia de Transición Justa.",
      "La Ley de Economía Circular Global de la ONU.",
      "El Anteproyecto de Ley de Cambio Climático y Transición Energética."
    ],
    correcta: 2
  },
  {
    pregunta: "18. Además de la liquidez y el riesgo, ¿qué criterio tradicional de inversión complementa la ISR con criterios éticos, sociales y ambientales?",
    respuestas: [
      "La rentabilidad.",
      "La gobernanza.",
      "La reputación.",
      "La exclusión."
    ],
    correcta: 0
  },
  {
    pregunta: "19. Los criterios de gobernanza solo son aplicables a las grandes corporaciones de accionistas.",
    respuestas: [
      "Verdadero",
      "Falso"
    ],
    correcta: 1
  },
  {
    pregunta: "20. Combatir la pesca ilegal y excesiva es una de las metas del...",
    respuestas: [
      "ODS 2: Hambre cero.",
      "ODS 14: Vida submarina.",
      "ODS 15: Vida de ecosistemas terrestres.",
      "ODS 13: Acción por el clima."
    ],
    correcta: 1
  },
  {
    pregunta: "21. ¿Qué producto de inversión socialmente responsable consiste en invertir en empresas cuyo fin es la solución a problemas sociales y medioambientales?",
    respuestas: [
      "Bonos verdes y sociales.",
      "Capital de riesgo social.",
      "Préstamos verdes.",
      "Fondos de inversión sostenibles."
    ],
    correcta: 1
  },
  {
    pregunta: "22. ¿Cuál de estos NO figura entre los cinco indicadores de sostenibilidad más eficaces?",
    respuestas: [
      "La reducción de residuos y tasas de reciclaje.",
      "El volumen de negocio.",
      "Los kilómetros recorridos en los procesos logísticos.",
      "El consumo de energía."
    ],
    correcta: 1
  },
  {
    pregunta: "23. Garantizar el acceso a la vivienda y fomentar el uso del transporte público son metas vitales del...",
    respuestas: [
      "ODS 10: Reducción de las desigualdades.",
      "ODS 11: Ciudades y comunidades sostenibles.",
      "ODS 7: Energía asequible y no contaminante.",
      "ODS 1: Fin de la pobreza."
    ],
    correcta: 1
  },
  {
    pregunta: "24. El ODS 8 está muy relacionado con el ODS 4, ya que la educación de calidad es el motor para conseguir un trabajo de calidad y sostenible en el tiempo.",
    respuestas: [
      "Verdadero",
      "Falso"
    ],
    correcta: 0
  },
  {
    pregunta: "25. La estrategia ISR según la cual no se consideran fondos ISR las empresas de sectores como el tabaco, el juego o el armamentístico se denomina...",
    respuestas: [
      "Exclusión.",
      "Cumplimiento de tratados internacionales.",
      "Objetivo social enfocado a la sostenibilidad.",
      "Integración de factores ASG."
    ],
    correcta: 0
  },
  {
    pregunta: "26. ¿Cuál es el instrumento más importante para la planificación y la ejecución de las actividades de desarrollo de la ONU a nivel nacional?",
    respuestas: [
      "El Plan Nacional Integrado de Energía y Clima.",
      "El Acuerdo de París.",
      "El Marco Estratégico de Energía y Clima.",
      "El Marco de Cooperación de las Naciones Unidas para el Desarrollo Sostenible."
    ],
    correcta: 3
  },
  {
    pregunta: "27. Las inversiones socialmente responsables y los productos financieros solidarios son lo mismo.",
    respuestas: [
      "Verdadero",
      "Falso"
    ],
    correcta: 1
  },
  {
    pregunta: "28. Según la Comisión Mundial sobre el Medioambiente y el Desarrollo de la ONU, una empresa sostenible responde a las necesidades del presente sin comprometer la capacidad de las nuevas generaciones de responder a las suyas.",
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
    mostrarPregunta();
};




