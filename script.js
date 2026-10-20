const preguntas = [
  {
    pregunta: "1. ¿Cuál es la diferencia fundamental entre una Máquina Virtual (VM) y un Contenedor en cuanto al SO?",
    respuestas: [
      "La VM solo emula hardware y el contenedor instala un Kernel propio por cada servicio.",
      "La VM comparte el Kernel del anfitrión y el contenedor ejecuta un Guest OS pesado.",
      "VM simula el HW del sistema y el contenedor utiliza el SO compartiendo kernel.",
      "No hay diferencia, ambos virtualizan exactamente el mismo nivel de software."
    ],
    correcta: 2
  },
  {
    pregunta: "2. ¿Qué diferencia existe entre una Máquina Virtual de Proceso y un Hipervisor (VMM)?",
    respuestas: [
      "La VM de proceso emula un entorno para un programa (ej. JVM) y el hipervisor virtualiza hardware para un SO completo.",
      "La VM de proceso emula un SO completo y el hipervisor solo ejecuta scripts de Bash.",
      "El hipervisor solo funciona en Windows y la VM de proceso solo en Linux.",
      "Son idénticos, ambos requieren instalar un SO invitado de gigabytes."
    ],
    correcta: 0
  },
  {
    pregunta: "3. ¿Qué componente del Kernel de Linux se encarga de aislar procesos, red y usuarios en contenedores?",
    respuestas: [
      "Cgroups (Control Groups)",
      "Chroot v2",
      "Docker Daemon",
      "Linux Namespaces"
    ],
    correcta: 3
  },
  {
    pregunta: "4. ¿Qué función cumplen los Cgroups (Control Groups) en la tecnología de contenedores?",
    respuestas: [
      "Aislar la tabla de procesos y la interfaz de red del contenedor.",
      "Limitar y controlar el uso de recursos de hardware como CPU, RAM e I/O.",
      "Asignar un nombre único al contenedor dentro del registro de Docker Hub.",
      "Gestionar la autenticación de usuarios root en la máquina anfitriona."
    ],
    correcta: 1
  },
  {
    pregunta: "5. ¿Qué realiza exactamente el comando 'docker run -d -p 1200:80 nginx'?",
    respuestas: [
      "Crea y arranca un contenedor en segundo plano (-d) exponiendo el puerto 80 del contenedor en el puerto 1200 del anfitrión.",
      "Arranca Nginx de forma interactiva en el puerto 80 del anfitrión mapeado al 1200 del contenedor.",
      "Descarga la imagen de Nginx y la compila en el puerto 1200 sin ejecutar ningún contenedor.",
      "Detiene los contenedores de Nginx que estén escuchando en el puerto 1200."
    ],
    correcta: 0
  },
  {
    pregunta: "6. ¿Cuál es la diferencia de rendimiento típica entre un contenedor y una Máquina Virtual?",
    respuestas: [
      "La VM es más rápida por tener acceso directo al hardware dedicado.",
      "El contenedor es mucho más lento debido a la capa extra de emulación del Kernel.",
      "El contenedor tiene un rendimiento cercano al nativo por ejecutar directamente sobre el Kernel del anfitrión.",
      "Rinden exactamente igual en consumo de CPU y memoria RAM."
    ],
    correcta: 2
  },
  {
    pregunta: "7. ¿Qué comando permite ejecutar un proceso interactivo dentro de un contenedor en ejecución?",
    respuestas: [
      "docker run -it <id> bash",
      "docker start -ai <id>",
      "docker attach <id>",
      "docker exec -it <id> bash"
    ],
    correcta: 3
  },
  {
    pregunta: "8. ¿Qué diferencia existe entre 'docker exec -d' y 'docker exec -it'?",
    respuestas: [
      "-d ejecuta en segundo plano (detached) y -it de forma interactiva conectando la terminal.",
      "-d borra el contenedor al terminar y -it lo reinicia automáticamente.",
      "-d asigna variables de entorno y -it muestra únicamente los logs del proceso.",
      "-d es para contenedores parados y -it para contenedores en ejecución."
    ],
    correcta: 0
  },
  {
    pregunta: "9. ¿Cómo se copia un fichero desde la máquina anfitriona hacia el interior de un contenedor?",
    respuestas: [
      "docker cp <id_contenedor>:/ruta/fichero ./fichero",
      "docker mv ./fichero_host.txt <id_contenedor>:/ruta/destino",
      "docker cp ./fichero_host.txt <id_contenedor>:/ruta/destino",
      "docker push ./fichero_host.txt <id_contenedor>:/ruta/destino"
    ],
    correcta: 2
  },
  {
    pregunta: "10. ¿Para qué sirve la opción '-e' en un comando 'docker run' o 'docker exec'?",
    respuestas: [
      "Para definir o inyectar variables de entorno dentro del contenedor.",
      "Para especificar la imagen base de Alpine o Ubuntu.",
      "Para exportar el contenedor a un fichero empaquetado .tar.",
      "Para ejecutar el contenedor en modo depuración (debug)."
    ],
    correcta: 0
  },
  {
    pregunta: "11. ¿Qué comando muestra las últimas 10 líneas de la salida estándar generada por un contenedor?",
    respuestas: [
      "docker inspect -n 10 <id_contenedor>",
      "docker ps -n 10 <id_contenedor>",
      "docker logs --tail 10 <id_contenedor> (o docker logs -n 10 <id_contenedor>)",
      "docker top 10 <id_contenedor>"
    ],
    correcta: 2
  },
  {
    pregunta: "12. ¿Qué comando elimina de una sola vez todos los contenedores que están parados en el sistema?",
    respuestas: [
      "docker rmi $(docker images -q)",
      "docker stop $(docker ps -q)",
      "docker system reset --all",
      "docker rm $(docker ps -a -q)"
    ],
    correcta: 3
  },
  {
    pregunta: "13. ¿Cuál es la diferencia entre 'docker rm' y 'docker rmi'?",
    respuestas: [
      "docker rm elimina imágenes y docker rmi elimina contenedores.",
      "docker rm elimina contenedores y docker rmi elimina imágenes locales.",
      "docker rm detiene contenedores y docker rmi reinicia el demonio de Docker.",
      "Ambos comandos realizan exactamente la misma función sobre contenedores."
    ],
    correcta: 1
  },
  {
    pregunta: "14. ¿Qué comando limpia de golpe imágenes no usadas, contenedores parados y redes huérfanas?",
    respuestas: [
      "docker system prune -a",
      "docker clean -a",
      "docker purge --all",
      "docker remove all"
    ],
    correcta: 0
  },
  {
    pregunta: "15. ¿Cómo se crea una nueva imagen local a partir de los cambios realizados en un contenedor en ejecución?",
    respuestas: [
      "docker save -m \"comentario\" <id> usuario/imagen:tag",
      "docker build -m \"comentario\" <id> usuario/imagen:tag",
      "docker commit -m \"comentario\" <id> usuario/imagen:tag",
      "docker push -m \"comentario\" <id> usuario/imagen:tag"
    ],
    correcta: 2
  },
  {
    pregunta: "16. ¿Qué diferencia hay entre los comandos 'docker save' y 'docker load'?",
    respuestas: [
      "save guarda una copia de un contenedor activo y load borra los volúmenes.",
      "save exporta una imagen a un fichero .tar y load restaura la imagen desde un fichero .tar.",
      "save sube la imagen a Docker Hub y load la descarga desde el registro.",
      "save crea un Dockerfile y load lo ejecuta automáticamente."
    ],
    correcta: 1
  },
  {
    pregunta: "17. ¿En qué ruta por defecto coloca el servidor Apache los archivos web en una imagen 'httpd:2.4'?",
    respuestas: [
      "/var/www/html/",
      "/usr/local/apache2/htdocs/",
      "/var/www/localhost/htdocs/",
      "/app/public/"
    ],
    correcta: 1
  },
  {
    pregunta: "18. ¿En qué ruta por defecto coloca Apache sus archivos web en una imagen basada en 'ubuntu:latest'?",
    respuestas: [
      "/usr/local/apache2/htdocs/",
      "/var/www/localhost/htdocs/",
      "/etc/apache2/www/",
      "/var/www/html/"
    ],
    correcta: 3
  },
  {
    pregunta: "19. ¿En qué ruta por defecto se ubican los archivos web de Apache en una imagen 'alpine:latest'?",
    respuestas: [
      "/var/www/localhost/htdocs/",
      "/var/www/html/",
      "/usr/local/apache2/htdocs/",
      "/home/alpine/www/"
    ],
    correcta: 0
  },
  {
    pregunta: "20. ¿Cuál es la instrucción adecuada en un Dockerfile para indicar el puerto de escucha del contenedor?",
    respuestas: [
      "PORT 80",
      "EXPOSE 80",
      "PUBLISH 80",
      "MAP 80"
    ],
    correcta: 1
  },
  {
    pregunta: "21. ¿Cuál es la diferencia principal entre las instrucciones 'RUN' y 'CMD' en un Dockerfile?",
    respuestas: [
      "RUN se ejecuta al arrancar el contenedor y CMD durante la compilación de la imagen.",
      "RUN instala únicamente Apache y CMD instala exclusivamente paquetes de Python.",
      "RUN se ejecuta al compilar la imagen (build) y CMD define el comando por defecto al arrancar el contenedor.",
      "Ambas instrucciones se ejecutan exactamente al mismo tiempo durante el arranque."
    ],
    correcta: 2
  },
  {
    pregunta: "22. ¿Qué diferencia existe entre las instrucciones 'COPY' y 'ADD' en un Dockerfile?",
    respuestas: [
      "COPY solo copia ficheros/carpetas locales; ADD permite descargar URLs y descomprimir archivos tar automáticamente.",
      "COPY permite descargar URLs remotas y ADD solo copia ficheros locales.",
      "COPY es para imágenes de Ubuntu y ADD únicamente para imágenes de Alpine.",
      "COPY borra los archivos tras copiarlos y ADD los mantiene en el contenedor."
    ],
    correcta: 0
  },
  {
    pregunta: "23. ¿Cuál es el comando recomendado para arrancar Apache en primer plano en una imagen Ubuntu en el Dockerfile?",
    respuestas: [
      "CMD [\"service\", \"apache2\", \"start\"]",
      "CMD [\"systemctl\", \"enable\", \"apache2\"]",
      "CMD [\"/usr/sbin/httpd\", \"-k\", \"stop\"]",
      "CMD [\"apachectl\", \"-D\", \"FOREGROUND\"]"
    ],
    correcta: 3
  },
  {
    pregunta: "24. ¿Qué comando compila un Dockerfile ubicado en el directorio actual asignándole el nombre 'miapp:1.0'?",
    respuestas: [
      "docker compile -t miapp:1.0 .",
      "docker build -t miapp:1.0 .",
      "docker make -t miapp:1.0 .",
      "docker run -b miapp:1.0 ."
    ],
    correcta: 1
  },
  {
    pregunta: "25. ¿Qué comando crea una red privada aislada de tipo bridge en Docker llamada 'mi_red'?",
    respuestas: [
      "docker network make mi_red",
      "docker network add mi_red",
      "docker network create mi_red",
      "docker run --net-create mi_red"
    ],
    correcta: 2
  },
  {
    pregunta: "26. ¿Cómo se conecta un contenedor activo con ID 'c123' a una red existente llamada 'red_test'?",
    respuestas: [
      "docker network connect red_test c123",
      "docker network add red_test c123",
      "docker network join red_test c123",
      "docker attach network red_test c123"
    ],
    correcta: 0
  },
  {
    pregunta: "27. ¿Qué ocurre cuando se desconecta un contenedor de una red mediante 'docker network disconnect'?",
    respuestas: [
      "El contenedor se borra inmediatamente de la máquina anfitriona.",
      "El contenedor pierde el acceso a la red especificada pero sigue ejecutándose.",
      "La red se elimina automáticamente del demonio de Docker.",
      "Se detienen todos los demás contenedores conectados a dicha red."
    ],
    correcta: 1
  },
  {
    pregunta: "28. ¿Cómo permite la resolución DNS interna de Docker comunicar dos contenedores en una red personalizada?",
    respuestas: [
      "Únicamente mediante sus direcciones IP dinámicas asignadas al arrancar.",
      "Configurando manualmente el fichero /etc/hosts en el anfitrión antes de cada ejecución.",
      "Haciendo uso del nombre del contenedor (--name) como si fuera un nombre de dominio (hostname).",
      "A través de las direcciones MAC asignadas por el router físico."
    ],
    correcta: 2
  },
  {
    pregunta: "29. ¿Qué herramienta o imagen ligera se suele utilizar para probar conectividad web y DNS en redes privadas?",
    respuestas: [
      "ubuntu:latest con Firefox",
      "busybox (ej. usando el comando 'wget -qO- http://nombre_contenedor')",
      "nginx:alpine en modo interactivo",
      "wireshark-cli"
    ],
    correcta: 1
  },
  {
    pregunta: "30. ¿Qué comando crea un volumen nombrado administrado por Docker con el nombre 'datos_app'?",
    respuestas: [
      "docker volume new datos_app",
      "docker make volume datos_app",
      "docker run -v create datos_app",
      "docker volume create datos_app"
    ],
    correcta: 3
  },
  {
    pregunta: "31. ¿Cuál es la sintaxis correcta para asociar un volumen nombrado 'mivolumen' a la carpeta '/app' de un contenedor?",
    respuestas: [
      "docker run -d -v mivolumen:/app nginx",
      "docker run -d -v /app:mivolumen nginx",
      "docker run -d --mount mivolumen=/app nginx",
      "docker run -d --volume-bind mivolumen /app nginx"
    ],
    correcta: 0
  },
  {
    pregunta: "32. ¿Qué diferencia existe entre un Volumen Nombrado y un Bind Mount?",
    respuestas: [
      "El volumen nombrado se borra al apagar el PC y el bind mount es siempre de solo lectura.",
      "El volumen nombrado es gestionado por Docker en su propio directorio y el bind mount monta una ruta específica del host.",
      "El bind mount solo funciona en Windows y el volumen nombrado solo en sistemas Linux.",
      "No hay diferencia, ambos guardan los datos dentro de la propia imagen inmutable."
    ],
    correcta: 1
  },
  {
    pregunta: "33. ¿Cuál es la sintaxis para realizar un Bind Mount conectando '/home/user/target' del host a '/app' en el contenedor?",
    respuestas: [
      "docker run -d -v /app:/home/user/target nginx",
      "docker run -d --bind /home/user/target:/app nginx",
      "docker run -d -v /home/user/target:/app nginx",
      "docker run -d -mount /app=/home/user/target nginx"
    ],
    correcta: 2
  },
  {
    pregunta: "34. ¿Qué ocurre con los datos almacenados en un Volumen Nombrado cuando se elimina el contenedor que lo usaba?",
    respuestas: [
      "Los datos del volumen se borran de forma permanente e irrecuperable.",
      "El volumen se comprime automáticamente en un archivo con extensión .tar.",
      "El volumen se convierte en un Bind Mount automáticamente.",
      "Los datos se mantienen intactos en el anfitrión hasta que se borre el volumen explícitamente."
    ],
    correcta: 3
  },
  {
    pregunta: "35. ¿Para qué se utiliza la opción '--tmpfs /app' al arrancar un contenedor?",
    respuestas: [
      "Para guardar los datos en un disco SSD secundario del anfitrión.",
      "Para crear un montaje temporal únicamente en la memoria RAM del host (sin escribir en disco).",
      "Para limitar el uso de memoria RAM a un máximo de 512 Megabytes.",
      "Para realizar copias de seguridad cada 10 minutos de la carpeta /app."
    ],
    correcta: 1
  },
  {
    pregunta: "36. ¿Cómo se realiza la copia de seguridad de un volumen montado en '/datos' de 'cont1' hacia '/backup/copia.tar' en el host?",
    respuestas: [
      "docker run --rm --volumes-from cont1 -v /backup_host:/backup ubuntu bash -c \"cd /datos && tar cvf /backup/copia.tar .\"",
      "docker volume backup cont1:/datos /backup/copia.tar",
      "docker cp cont1:/datos/*.tar /backup/copia.tar",
      "docker export volume cont1 > /backup/copia.tar"
    ],
    correcta: 0
  },
  {
    pregunta: "37. ¿Qué nombre de archivo por defecto busca el comando 'docker-compose up' para desplegar servicios?",
    respuestas: [
      "Dockerfile.compose",
      "docker-services.json",
      "docker-compose.yml",
      "compose-config.yaml"
    ],
    correcta: 2
  },
  {
    pregunta: "38. ¿Qué comando inicia todos los servicios definidos en el fichero Compose ejecutándolos en segundo plano?",
    respuestas: [
      "docker-compose start -all",
      "docker-compose up -d",
      "docker-compose run --detach",
      "docker-compose launch -b"
    ],
    correcta: 1
  },
  {
    pregunta: "39. ¿Qué comando detiene y destruye los contenedores, redes y volúmenes creados por Docker Compose?",
    respuestas: [
      "docker-compose stop --kill",
      "docker-compose remove -a",
      "docker-compose clean",
      "docker-compose down"
    ],
    correcta: 3
  },
  {
    pregunta: "40. ¿Qué comando permite escalar el servicio 'web' creando 3 instancias/réplicas en Docker Compose?",
    respuestas: [
      "docker-compose up -d --scale web=3",
      "docker-compose scale web=3",
      "docker-compose replicate web 3",
      "docker-compose copy web --count 3"
    ],
    correcta: 0
  },
  {
    pregunta: "41. ¿Qué comando de Docker Compose muestra el estado y puertos de los contenedores del proyecto?",
    respuestas: [
      "docker-compose list",
      "docker-compose status",
      "docker-compose ps",
      "docker-compose info"
    ],
    correcta: 2
  },
  {
    pregunta: "42. ¿Qué comando reconstruye las imágenes personalizadas definidas en el archivo 'docker-compose.yml'?",
    respuestas: [
      "docker-compose compile",
      "docker-compose build",
      "docker-compose make",
      "docker-compose refresh"
    ],
    correcta: 1
  },
  {
    pregunta: "43. ¿Para qué se utiliza la directiva 'depends_on' en un archivo 'docker-compose.yml'?",
    respuestas: [
      "Para indicar el orden de inicio de los servicios (ej. arrancar la BD antes que la web).",
      "Para establecer los límites máximos de memoria RAM que usará cada contenedor.",
      "Para enlazar carpetas del anfitrión mediante Bind Mounts obligatorios.",
      "Para mapear los puertos expuestos directamente en el router."
    ],
    correcta: 0
  },
  {
    pregunta: "44. ¿Cómo se sube una imagen compilada localmente al registro oficial de GitHub Container Registry (GHCR)?",
    respuestas: [
      "docker upload ghcr.io/usuario/repositorio/imagen:tag",
      "docker push ghcr.io/usuario/repositorio/imagen:tag",
      "git push ghcr.io/usuario/repositorio/imagen:tag",
      "docker send ghcr.io/usuario/repositorio/imagen:tag"
    ],
    correcta: 1
  },
  {
    pregunta: "45. ¿Qué comando permite autenticarse en un registro remoto pasando la contraseña o token por entrada estándar?",
    respuestas: [
      "docker login --token ghp_xxxx",
      "docker auth ghcr.io --key TOKEN",
      "echo \"TOKEN\" | docker login ghcr.io -u usuario --password-stdin",
      "docker connect ghcr.io -p TOKEN"
    ],
    correcta: 2
  },
  {
    pregunta: "46. ¿Qué ocurre si ejecutas 'docker run' especificando una imagen que no existe en tu equipo local?",
    respuestas: [
      "El comando falla de inmediato con un error de archivo no encontrado.",
      "Docker crea un Dockerfile vacío y te pide escribir las instrucciones.",
      "Docker la busca automáticamente en el registro (Docker Hub) y la descarga antes de ejecutarla.",
      "El sistema operativo anfitrión se reinicia para actualizar los repositorios."
    ],
    correcta: 2
  },
  {
    pregunta: "47. ¿Qué parámetro del comando 'docker run' elimina el contenedor automáticamente al finalizar su ejecución?",
    respuestas: [
      "--rm",
      "--delete",
      "--autoclean",
      "--temp"
    ],
    correcta: 0
  },
  {
    pregunta: "48. ¿Qué antecedente histórico de Linux introdujo por primera vez en 1982 el aislamiento del sistema de ficheros?",
    respuestas: [
      "FreeBSD Jail",
      "LXC",
      "KVM",
      "chroot"
    ],
    correcta: 3
  },
  {
    pregunta: "49. ¿Qué tres pilares componen la arquitectura Cliente-Servidor de Docker?",
    respuestas: [
      "Cliente (CLI), Servidor (Docker Daemon / dockerd) y Registro (Registry / Docker Hub).",
      "Hipervisor, Kernel y Sistema Operativo Invitado (Guest OS).",
      "Namespaces, Cgroups y Chroot.",
      "Docker Compose, Docker Swarm y Docker Desktop."
    ],
    correcta: 0
  },
  {
    pregunta: "50. ¿Cómo se soluciona el conflicto cuando el puerto 8080 del host ya está ocupado al lanzar un contenedor?",
    respuestas: [
      "Cambiando la instrucción 'EXPOSE 80' dentro del binario compilado del Kernel.",
      "Cambiando el mapeo en el comando a otro puerto del host libre, por ejemplo: '-p 9090:80'.",
      "Borrando el ejecutable /bin/bash de la máquina anfitriona.",
      "No se puede solucionar, es obligatorio usar siempre el puerto 8080 en el anfitrión."
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




