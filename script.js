const preguntas = [
  {
    pregunta: "1. ¿Qué es Git?",
    respuestas: [
      "Un editor de texto para programadores",
      "Un sistema de control de versiones para gestionar cambios en proyectos",
      "Una nube para guardar archivos",
      "Un lenguaje de programación"
    ],
    correcta: 1
  },
  {
    pregunta: "2. ¿Qué es GitHub?",
    respuestas: [
      "Un programa para hacer commits",
      "Una plataforma online para alojar repositorios Git y colaborar",
      "Un comando para sincronizar ramas",
      "Un sistema operativo para desarrolladores"
    ],
    correcta: 1
  },
  {
    pregunta: "3. Creas una carpeta nueva, ejecutas git init y luego miras dentro. ¿Qué deberías ver?(GIT)",
    respuestas: [
      "Un archivo llamado commits.txt",
      "Una carpeta oculta .git/",
      "Un archivo README generado automáticamente",
      "Nada nuevo"
    ],
    correcta: 1
  },
  {
    pregunta: "4. Tienes un archivo nuevo que nunca has añadido. Al hacer git status, ¿cómo aparecerá?(GIT)",
    respuestas: [
      "Como staged",
      "Como committed",
      "Como untracked",
      "Como merged"
    ],
    correcta: 2
  },
  {
    pregunta: "5. Tienes un archivo modificado pero NO lo has añadido. ¿Qué mostrará git status?(GIT)",
    respuestas: [
      "Que está en staging",
      "Que está modified",
      "Que está eliminado",
      "Que está en conflicto"
    ],
    correcta: 1
  },
  {
    pregunta: "6. Guardas cambios en un archivo y ejecutas git diff. ¿Qué deberías ver?(GIT)",
    respuestas: [
      "Un mensaje de error",
      "Un resumen sin detalles",
      "Un listado de líneas añadidas y eliminadas",
      "Solo los nombres de los archivos"
    ],
    correcta: 2
  },
  {
    pregunta: "7. Si haces git add a un archivo y luego git status, ¿en qué estado aparecerá?(GIT)",
    respuestas: [
      "Untracked",
      "Modified",
      "Staged",
      "Deleted"
    ],
    correcta: 2
  },
  {
    pregunta: "8. Haces git commit sin haber añadido nada antes. ¿Qué ocurre?(GIT)",
    respuestas: [
      "Se guarda todo el proyecto",
      "Se guardan solo los archivos modificados",
      "No se guarda nada porque no hay nada en staging",
      "Se borra el historial"
    ],
    correcta: 2
  },
  {
    pregunta: "9. Ejecutas git log en tu repositorio. ¿Qué información deberías ver en pantalla?(GIT)",
    respuestas: [
      "Una lista detallada con cada commit, su autor, fecha y mensaje",
      "Solo el último commit realizado",
      "Un gráfico visual de las ramas del proyecto",
      "Un archivo temporal generado automáticamente"
    ],
    correcta: 0
  },
  {
    pregunta: "10. Modificas un archivo y quieres deshacer esos cambios sin borrar el archivo con git restore. ¿Qué pasará?(GIT)",
    respuestas: [
      "El archivo se borra",
      "El archivo vuelve al estado del último commit",
      "El archivo se mueve a staging",
      "El archivo se convierte en untracked"
    ],
    correcta: 1
  },
  {
    pregunta: "11. Añadiste un archivo a staging por error. Lo quieres sacar sin perder los cambios (git restore). ¿Qué ocurrirá?(GIT)",
    respuestas: [
      "Se borran los cambios",
      "El archivo vuelve a modified",
      "El archivo se convierte en untracked",
      "El archivo se borra del proyecto"
    ],
    correcta: 1
  },
  {
    pregunta: "12. Creas una rama nueva y luego haces git branch. ¿Qué verás?(GIT)",
    respuestas: [
      "Solo la rama nueva",
      "Todas las ramas locales y un asterisco en la actual",
      "Solo la rama main",
      "Un error porque no hay commits"
    ],
    correcta: 1
  },
  {
    pregunta: "13. Estás en la rama main y te mueves a otra rama con git checkout / switch. ¿Qué debería pasar en tu proyecto?(GIT)",
    respuestas: [
      "Se borran archivos",
      "Cambian los archivos para coincidir con esa rama",
      "Se mezclan ambas ramas automáticamente",
      "No cambia nada"
    ],
    correcta: 1
  },
  {
    pregunta: "14. Creas una rama nueva y automáticamente quedas dentro de ella (git checkout -b). ¿Qué ha ocurrido?(GIT)",
    respuestas: [
      "Has creado una rama vacía sin moverte",
      "Has creado una rama y te has movido a ella",
      "Has eliminado la rama anterior",
      "Has hecho un merge sin querer"
    ],
    correcta: 1
  },
  {
    pregunta: "15. Estás en la rama main y decides fusionar otra rama llamada 'login' (git merge login). ¿Qué resultado esperas?(GIT)",
    respuestas: [
      "Se borran los cambios de 'login'",
      "Los cambios de 'login' se integran en main",
      "Se crea una rama nueva",
      "Se reinicia el historial"
    ],
    correcta: 1
  },
  {
    pregunta: "16. Intentas borrar una rama que aún tiene cambios no integrados (git branch -d). ¿Qué suele pasar?(GIT)",
    respuestas: [
      "Se borra sin avisar",
      "Git te bloquea y te avisa del riesgo",
      "Se hace merge automáticamente",
      "Se borra el historial completo"
    ],
    correcta: 1
  },
  {
    pregunta: "17. Quieres ver un árbol visual con todas las ramas y commits (git log --graph --oneline --all). ¿Qué deberías ver?(GIT)",
    respuestas: [
      "Un gráfico con líneas que representan ramas",
      "Solo la rama actual",
      "Un gráfico incorrecto",
      "Un mensaje de error"
    ],
    correcta: 0
  },
  {
    pregunta: "18. Tienes un repositorio local y quieres vincularlo con uno remoto (git remote add origin). ¿Qué ocurre después de hacerlo?(GIT)",
    respuestas: [
      "Se suben automáticamente todos los commits",
      "Tu repositorio local queda conectado a una URL remota",
      "Se borra tu carpeta local",
      "Se crea una rama nueva"
    ],
    correcta: 1
  },
  {
    pregunta: "19. Quieres comprobar a qué direcciones remotas apunta tu proyecto (git remote -v). ¿Qué deberías ver?(GIT)",
    respuestas: [
      "Solo la rama main",
      "Una lista de URLs remotas configuradas",
      "Un archivo de configuración",
      "Un mensaje de error"
    ],
    correcta: 1
  },
  {
    pregunta: "20. Subes una rama por primera vez al remoto (git push -u origin). ¿Qué efecto tiene?(GIT)",
    respuestas: [
      "Se crea la rama en GitHub y queda vinculada para futuros pushes",
      "Se borra la rama local",
      "Se hace merge automático",
      "Se reinicia el historial"
    ],
    correcta: 0
  },
  {
    pregunta: "21. Ya tienes una rama vinculada y haces push. ¿Qué ocurre?(GIT)",
    respuestas: [
      "Se suben tus commits nuevos",
      "Se borra la rama remota",
      "Se crea un fork",
      "Se hace un pull automático"
    ],
    correcta: 0
  },
  {
    pregunta: "22. Descargas un repositorio existente desde GitHub mediante git clone. ¿Qué obtienes?(GIT)",
    respuestas: [
      "Solo la carpeta .git",
      "El proyecto entero en una carpeta nueva",
      "Solo la rama main",
      "Un archivo ZIP vacío"
    ],
    correcta: 1
  },
  {
    pregunta: "23. Ejecutas git fetch para comprobar si hay cambios nuevos en el remoto sin modificar tu código local. ¿Qué ocurre?(GIT)",
    respuestas: [
      "Se mezclan los cambios automáticamente",
      "Se descargan commits en la sombra sin modificar tu trabajo",
      "Se borra tu rama actual",
      "Se crea una rama nueva"
    ],
    correcta: 1
  },
  {
    pregunta: "24. Traes los cambios de tus compañeros y se integran en tu proyecto. ¿Qué pasa?(GIT)",
    respuestas: [
      "Se borran tus commits",
      "Se mezclan los cambios (fast-forward o merge)",
      "Se crea un fork",
      "Se reinicia el repositorio"
    ],
    correcta: 1
  },
  {
    pregunta: "25. Quieres eliminar una rama remota para siempre (git push origin --delete). ¿Qué resultado esperas?(GIT)",
    respuestas: [
      "La rama desaparece del remoto",
      "La rama se convierte en privada",
      "La rama se mueve a staging",
      "La rama se fusiona automáticamente"
    ],
    correcta: 0
  },
  {
    pregunta: "26. Haces un Fork de un proyecto. ¿Qué obtienes?(GIT)",
    respuestas: [
      "Una copia completa del proyecto bajo tu cuenta",
      "Permisos para editar el proyecto original",
      "Un archivo ZIP",
      "Una rama nueva en el proyecto original"
    ],
    correcta: 0
  },
  {
    pregunta: "27. Creas un Pull Request. ¿Qué significa?(GIT)",
    respuestas: [
      "Estás pidiendo permiso para borrar una rama",
      "Estás solicitando que tus cambios se revisen e integren",
      "Estás creando un fork",
      "Estás haciendo un merge automático"
    ],
    correcta: 1
  },
  {
    pregunta: "28. Tu fork está desactualizado respecto al proyecto original. Usas Sync Fork. ¿Qué ocurre?(GIT)",
    respuestas: [
      "Se borran tus commits",
      "Tu fork se actualiza con los cambios del proyecto principal",
      "Se crea un PR automático",
      "Se reinicia tu repositorio"
    ],
    correcta: 1
  },
  {
    pregunta: "29. Estás haciendo un merge y Git consigue combinar automáticamente los cambios en un archivo sin conflicto. ¿Cómo quedará ese archivo?(GIT)",
    respuestas: [
      "Se marca como deleted y se borra",
      "Se marca como untracked",
      "Se considera merged correctamente y forma parte del nuevo commit",
      "Se queda fuera del merge y no cambia"
    ],
    correcta: 2
  },
  {
    pregunta: "30. Intentas fusionar la rama feature en main, pero ambos han modificado las mismas líneas de un archivo. ¿Qué ocurre?(GIT)",
    respuestas: [
      "El merge se hace igual y Git elige una versión al azar",
      "Git muestra un error de conflicto y detiene el merge",
      "Git borra el archivo para evitar problemas",
      "Git crea una rama nueva automáticamente"
    ],
    correcta: 1
  },
  {
    pregunta: "31. Estás en medio de un merge y hay conflictos. ¿Cómo se soluciona?(GIT)",
    respuestas: [
      "Borrar el archivo con conflicto y hacer commit",
      "Editar el archivo, elegir cambios, guardar, marcar como resuelto y hacer commit",
      "Volver a hacer git init",
      "Hacer otro merge sin tocar nada"
    ],
    correcta: 1
  },
  {
    pregunta: "32. Una API devuelve objetos enormes con muchos campos, pero el frontend solo usa 3. ¿Qué deberías hacer para mejorar el rendimiento?(OPTIMIZACION)",
    respuestas: [
      "Enviar todos los campos igualmente",
      "Enviar solo los campos necesarios",
      "Añadir más lógica al backend",
      "Aumentar el tamaño del servidor"
    ],
    correcta: 1
  },
  {
    pregunta: "33. Una página tarda mucho en cargar porque hace 12 consultas iguales cada vez. ¿Qué deberías optimizar?(OPTIMIZACION)",
    respuestas: [
      "El diseño del HTML",
      "La cantidad de comentarios en el código",
      "Las consultas repetidas",
      "El tamaño del repositorio"
    ],
    correcta: 2
  },
  {
    pregunta: "34. Cambias el código para que el total del carrito salga distinto “sin querer”. ¿Qué ha pasado?(OPTIMIZACION)",
    respuestas: [
      "Has optimizado correctamente",
      "Has cambiado el comportamiento del programa",
      "Has reducido memoria",
      "Has mejorado la red"
    ],
    correcta: 1
  },
  {
    pregunta: "35. Un listado enorme se carga completo en memoria aunque solo se muestran 20 elementos. ¿Qué deberías hacer?(OPTIMIZACION)",
    respuestas: [
      "Paginar los datos",
      "Aumentar la RAM",
      "Añadir más logs",
      "Repetir la consulta varias veces"
    ],
    correcta: 0
  },
  {
    pregunta: "36. Una función recorre una lista completa buscando un valor que suele aparecer al principio. ¿Qué mejora aplicarías?(OPTIMIZACION)",
    respuestas: [
      "Seguir recorriendo toda la lista siempre",
      "Salir en cuanto encuentres el valor",
      "Duplicar la lista",
      "Guardar la lista en un archivo"
    ],
    correcta: 1
  },
  {
    pregunta: "37. Una API tarda mucho porque devuelve imágenes, descripciones largas y datos que nadie usa. ¿Qué optimización aplicarías?(OPTIMIZACION)",
    respuestas: [
      "Reducir los campos enviados",
      "Añadir más endpoints",
      "Aumentar el número de hilos",
      "Guardar todo en memoria"
    ],
    correcta: 0
  },
  {
    pregunta: "38. Una parte del sistema se ejecuta en cada petición y es muy lenta. ¿Qué deberías hacer primero?(OPTIMIZACION)",
    respuestas: [
      "Optimizar sin medir",
      "Detectar dónde se pierde el tiempo",
      "Cambiar toda la arquitectura",
      "Añadir más clases"
    ],
    correcta: 1
  },
  {
    pregunta: "39. Tienes una lista de provincias que nunca cambia, pero la consultas en base de datos en cada petición. ¿Qué mejora aplicarías?(OPTIMIZACION)",
    respuestas: [
      "Guardarla en caché",
      "Consultarla aún más veces",
      "Enviarla por red en cada llamada",
      "Guardarla en un archivo temporal"
    ],
    correcta: 0
  },
  {
    pregunta: "40. Una función lee un archivo varias veces sin necesidad. ¿Qué tipo de optimización es esta?(OPTIMIZACION)",
    respuestas: [
      "Global",
      "Local",
      "Dependiente de la máquina",
      "Visual"
    ],
    correcta: 1
  },
  {
    pregunta: "41. Reduces el tamaño de las respuestas de una API y eliminas campos innecesarios. ¿Qué tipo de optimización es?(OPTIMIZACION)",
    respuestas: [
      "Dependiente de la máquina",
      "Local",
      "Independiente de la máquina",
      "Visual"
    ],
    correcta: 2
  },
  {
    pregunta: "42. Aumentas la memoria del servidor porque el proceso se queda corto. ¿Qué tipo de optimización es?(OPTIMIZACION)",
    respuestas: [
      "Independiente de la máquina",
      "Local",
      "Global",
      "Dependiente de la máquina"
    ],
    correcta: 3
  },
  {
    pregunta: "43. Cambias cómo se cargan listados y reduces consultas en varias partes del sistema. ¿Qué tipo de optimización es?(OPTIMIZACION)",
    respuestas: [
      "Local",
      "Global",
      "Visual",
      "Temporal"
    ],
    correcta: 1
  },
  {
    pregunta: "44. El servidor va lento solo cuando hay muchos usuarios simultáneos. ¿Qué deberías revisar primero?(OPTIMIZACION)",
    respuestas: [
      "El color del CSS",
      "La cantidad de consultas",
      "El tamaño del repositorio",
      "Los comentarios del código"
    ],
    correcta: 1
  },
  {
    pregunta: "45. Una función abre un recurso de lectura pero no lo cierra. ¿Qué estás optimizando si lo corriges?(OPTIMIZACION)",
    respuestas: [
      "Nada, es solo estilo",
      "Estabilidad y rendimiento local",
      "El diseño del frontend",
      "La red"
    ],
    correcta: 1
  },
  {
    pregunta: "46. Una API envía 5 MB de datos cuando solo se necesitan 50 KB. ¿Qué estás optimizando?(OPTIMIZACION)",
    respuestas: [
      "La red",
      "El disco",
      "El CSS",
      "El número de commits"
    ],
    correcta: 0
  },
  {
    pregunta: "47. Tienes una variable llamada d que almacena el total de pedidos, pero nadie entiende qué significa. ¿Qué deberías aplicar?(REFACTORIZAR)",
    respuestas: [
      "Extraer método",
      "Renombrar variable",
      "Extraer constante",
      "Mover método"
    ],
    correcta: 1
  },
  {
    pregunta: "48. Un método de 120 líneas mezcla validación, cálculos y envío de emails. Es difícil de leer. ¿Qué patrón aplicarías primero?(REFACTORIZAR)",
    respuestas: [
      "Extraer método",
      "Extraer constante",
      "Renombrar",
      "Inline"
    ],
    correcta: 0
  },
  {
    pregunta: "49. En varios controladores aparece copiado el mismo código para validar emails. ¿Qué deberías hacer?(REFACTORIZAR)",
    respuestas: [
      "Mover campo",
      "Extraer constante",
      "Sustituir duplicación (DRY)",
      "Renombrar método"
    ],
    correcta: 2
  },
  {
    pregunta: "50. Tienes un número '8' repetido en varios sitios para validar la longitud mínima de una contraseña. ¿Qué patrón aplicarías?(REFACTORIZAR)",
    respuestas: [
      "Extraer constante",
      "Extraer método",
      "Renombrar variable",
      "Mover método"
    ],
    correcta: 0
  },
  {
    pregunta: "51. Un controlador web contiene lógica de negocio, validaciones y acceso a base de datos. ¿Qué patrón aplicarías?(REFACTORIZAR)",
    respuestas: [
      "Extraer constante",
      "Mover método",
      "Renombrar variable",
      "Sustituir duplicación"
    ],
    correcta: 1
  },
  {
    pregunta: "52. Una condición enorme con varios && y comprobaciones hace que el código sea difícil de entender. ¿Qué deberías hacer?(REFACTORIZAR)",
    respuestas: [
      "Extraer método que explique la condición",
      "Extraer constante",
      "Mover campo",
      "Renombrar clase"
    ],
    correcta: 0
  },
  {
    pregunta: "53. Un método tiene un nombre como f() y nadie sabe qué hace. ¿Qué patrón aplicarías?(REFACTORIZAR)",
    respuestas: [
      "Extraer método",
      "Renombrar método",
      "Mover método",
      "Extraer constante"
    ],
    correcta: 1
  },
  {
    pregunta: "54. Tienes un método que calcula el precio final, pero dentro también valida el email del usuario. ¿Qué patrón aplicarías?(REFACTORIZAR)",
    respuestas: [
      "Extraer constante",
      "Extraer método",
      "Sustituir duplicación",
      "Mover campo"
    ],
    correcta: 1
  },
  {
    pregunta: "55. Una clase tiene un campo que realmente pertenece a otra clase donde se usa siempre. ¿Qué patrón aplicarías?(REFACTORIZAR)",
    respuestas: [
      "Renombrar variable",
      "Extraer método",
      "Mover campo",
      "Extraer constante"
    ],
    correcta: 2
  },
  {
    pregunta: "56. Ves que dos métodos distintos tienen exactamente el mismo bloque de código para calcular un descuento. ¿Qué deberías hacer?(REFACTORIZAR)",
    respuestas: [
      "Renombrar variable",
      "Extraer método y reutilizarlo",
      "Mover campo",
      "Extraer constante"
    ],
    correcta: 1
  },
  {
    pregunta: "57. Una condición compleja aparece en varios sitios. ¿Qué patrón aplicarías?(REFACTORIZAR)",
    respuestas: [
      "Extraer método explicativo",
      "Extraer constante",
      "Mover método",
      "Renombrar variable"
    ],
    correcta: 0
  },
  {
    pregunta: "58. Cambias el nombre de un método y el IDE actualiza todas las referencias automáticamente. ¿Qué patrón has aplicado?(REFACTORIZAR)",
    respuestas: [
      "Extract Method",
      "Move Method",
      "Rename",
      "Inline"
    ],
    correcta: 2
  },
  {
    pregunta: "59. Un método tiene demasiadas responsabilidades: valida, calcula, guarda y envía emails. ¿Qué patrón aplicarías para empezar a dividirlo?(REFACTORIZAR)",
    respuestas: [
      "Extraer constante",
      "Extraer método",
      "Mover campo",
      "Renombrar variable"
    ],
    correcta: 1
  },
  {
    pregunta: "60. Un valor como 'ADMIN' aparece repetido en 10 sitios. ¿Qué patrón aplicarías?(REFACTORIZAR)",
    respuestas: [
      "Extraer constante",
      "Extraer método",
      "Mover método",
      "Sustituir duplicación"
    ],
    correcta: 0
  },
  {
    pregunta: "61. El controlador está lleno de lógica que debería estar en el servicio. ¿Qué patrón aplicarías?(REFACTORIZAR)",
    respuestas: [
      "Renombrar",
      "Mover método",
      "Extraer constante",
      "Extraer método"
    ],
    correcta: 1
  },
  {
    pregunta: "62. Tienes un NullPointerException potencial porque haces rol.equals(\"ADMIN\") cuando rol puede ser null. ¿Qué detectaría un analizador?(ANALIZAR CODIGO)",
    respuestas: [
      "Un problema de estilo",
      "Un bug probable",
      "Un import innecesario",
      "Un método demasiado corto"
    ],
    correcta: 1
  },
  {
    pregunta: "63. En tu código aparece una variable declarada pero nunca usada. ¿Qué avisaría un analizador estático?(ANALIZAR CODIGO)",
    respuestas: [
      "Código muerto o innecesario",
      "Error de compilación",
      "Problema de red",
      "Problema de concurrencia"
    ],
    correcta: 0
  },
  {
    pregunta: "64. Un método tiene 120 líneas, muchos if anidados y es difícil de leer. ¿Qué avisaría un analizador?(ANALIZAR CODIGO)",
    respuestas: [
      "Que falta un comentario",
      "Que el método es demasiado largo o complejo",
      "Que la clase debe ser final",
      "Que el nombre del archivo es incorrecto"
    ],
    correcta: 1
  },
  {
    pregunta: "65. El analizador te marca que usas un número '8' repetido en varias validaciones. ¿Qué regla está señalando?(ANALIZAR CODIGO)",
    respuestas: [
      "Evitar duplicación",
      "Evitar números mágicos",
      "Evitar imports estáticos",
      "Evitar métodos privados"
    ],
    correcta: 1
  },
  {
    pregunta: "66. El IDE subraya una condición que siempre es falsa y nunca se ejecuta. ¿Qué tipo de problema es?(ANALIZAR CODIGO)",
    respuestas: [
      "Estilo",
      "Código muerto",
      "Problema de red",
      "Problema de concurrencia"
    ],
    correcta: 1
  },
  {
    pregunta: "67. Un analizador te avisa de que un método tiene demasiadas responsabilidades. ¿Qué está evaluando?(ANALIZAR CODIGO)",
    respuestas: [
      "Rendimiento",
      "Complejidad y mantenibilidad",
      "Seguridad avanzada",
      "Configuración del servidor"
    ],
    correcta: 1
  },
  {
    pregunta: "68. El analizador marca que una clase tiene imports que no se usan. ¿Qué tipo de aviso es?(ANALIZAR CODIGO)",
    respuestas: [
      "Bug crítico",
      "Estilo y convenciones",
      "Problema de concurrencia",
      "Problema de red"
    ],
    correcta: 1
  },
  {
    pregunta: "69. El IDE te muestra una bombilla con un 'quick fix' para renombrar una variable confusa. ¿Qué está haciendo?(ANALIZAR CODIGO)",
    respuestas: [
      "Refactorización automática",
      "Optimización de rendimiento",
      "Compilación incremental",
      "Ejecución de pruebas"
    ],
    correcta: 0
  },
  {
    pregunta: "70. El analizador detecta que un método nunca se llama desde ninguna parte del proyecto. ¿Qué tipo de problema es?(ANALIZAR CODIGO)",
    respuestas: [
      "Código muerto",
      "Problema de seguridad",
      "Problema de concurrencia",
      "Error de compilación"
    ],
    correcta: 0
  },
  {
    pregunta: "71. El equipo discute sobre estilo de código, pero el analizador ya tiene reglas configuradas. ¿Qué ventaja aporta?(ANALIZAR CODIGO)",
    respuestas: [
      "Evita que el código compile",
      "Evita discusiones porque las reglas son comunes",
      "Aumenta el tamaño del proyecto",
      "Reduce la RAM usada"
    ],
    correcta: 1
  },
  {
    pregunta: "72. Un analizador te avisa de que una condición es redundante porque ya se comprobó antes. ¿Qué está detectando?(ANALIZAR CODIGO)",
    respuestas: [
      "Problema de red",
      "Código innecesario",
      "Error de compilación",
      "Problema de seguridad"
    ],
    correcta: 1
  },
  {
    pregunta: "73. Configuras el analizador para ignorar la carpeta target/. ¿Qué estás haciendo?(ANALIZAR CODIGO)",
    respuestas: [
      "Cambiando la lógica del programa",
      "Ajustando exclusiones para evitar ruido",
      "Eliminando código",
      "Optimizando la red"
    ],
    correcta: 1
  },
  {
    pregunta: "74. El analizador te avisa de que un método tiene demasiados parámetros y es difícil de mantener. ¿Qué está midiendo?(ANALIZAR CODIGO)",
    respuestas: [
      "Estilo visual",
      "Complejidad",
      "Seguridad",
      "Rendimiento"
    ],
    correcta: 1
  },
  {
    pregunta: "75. Una herramienta como Checkstyle te marca que los nombres de métodos no siguen la convención. ¿Qué tipo de problema es?(ANALIZAR CODIGO)",
    respuestas: [
      "Bug crítico",
      "Estilo y consistencia",
      "Problema de red",
      "Problema de concurrencia"
    ],
    correcta: 1
  },
  {
    pregunta: "76. SpotBugs te avisa de que una comparación de cadenas puede fallar por null. ¿Qué tipo de aviso es?(ANALIZAR CODIGO)",
    respuestas: [
      "Estilo",
      "Bug probable",
      "Código muerto",
      "Complejidad"
    ],
    correcta: 1
  },
  {
    pregunta: "77. Encuentras un comentario que dice // incrementa i justo encima de i++;. ¿Qué deberías hacer?(DOCUMENTACION)",
    respuestas: [
      "Mantenerlo porque explica el código",
      "Borrarlo porque no aporta nada",
      "Convertirlo en Javadoc",
      "Añadir más comentarios similares"
    ],
    correcta: 1
  },
  {
    pregunta: "78. Un método público calcula el precio final y tiene reglas importantes de entrada (no acepta negativos). ¿Qué deberías usar?(DOCUMENTACION)",
    respuestas: [
      "Un comentario // calcula precio",
      "Nada, el nombre ya basta",
      "Javadoc con @param y @throws",
      "Un comentario al final del archivo"
    ],
    correcta: 2
  },
  {
    pregunta: "79. Un comentario explica “aplicamos IVA reducido por normativa”. ¿Qué tipo de comentario es?(DOCUMENTACION)",
    respuestas: [
      "Innecesario",
      "Explica el porqué y aporta valor",
      "Un comentario redundante",
      "Un comentario mal formado"
    ],
    correcta: 1
  },
  {
    pregunta: "80. Un método privado muy simple tiene un Javadoc enorme. ¿Qué deberías hacer?(DOCUMENTACION)",
    respuestas: [
      "Mantenerlo",
      "Ampliarlo aún más",
      "Quitar el Javadoc y mejorar el nombre del método",
      "Convertirlo en comentario de una línea"
    ],
    correcta: 2
  },
  {
    pregunta: "81. Un compañero pregunta por qué un método hace una validación extra rara. No está documentado. ¿Qué deberías añadir?(DOCUMENTACION)",
    respuestas: [
      "Un comentario explicando el motivo",
      "Un comentario explicando línea por línea",
      "Un Javadoc con @deprecated",
      "Nada, que lo deduzca del código"
    ],
    correcta: 0
  },
  {
    pregunta: "82. Ves un método público sin documentación y no queda claro qué devuelve. ¿Qué deberías hacer?(DOCUMENTACION)",
    respuestas: [
      "Añadir Javadoc con @return",
      "Añadir un comentario // devuelve algo",
      "Cambiar el nombre del método sin más",
      "Eliminar el método"
    ],
    correcta: 0
  },
  {
    pregunta: "83. Un método lanza IllegalArgumentException si un parámetro es negativo, pero no está indicado en ningún sitio. ¿Qué falta?(DOCUMENTACION)",
    respuestas: [
      "Un comentario al final",
      "Un @throws en el Javadoc",
      "Un comentario TODO",
      "Un import nuevo"
    ],
    correcta: 1
  },
  {
    pregunta: "84. El proyecto tiene reglas de estilo y Javadoc configuradas para todo el equipo. ¿Qué ventaja aporta?(DOCUMENTACION)",
    respuestas: [
      "Evita que el código compile",
      "Evita discusiones sobre estilo",
      "Hace el código más lento",
      "Elimina la necesidad de pruebas"
    ],
    correcta: 1
  },
  {
    pregunta: "85. Un comentario explica un caso especial que solo ocurre con usuarios bloqueados. ¿Qué tipo de comentario es?(DOCUMENTACION)",
    respuestas: [
      "Innecesario",
      "Útil porque explica un edge case",
      "Incorrecto porque no usa Javadoc",
      "Debe eliminarse siempre"
    ],
    correcta: 1
  },
  {
    pregunta: "86. Generas Javadoc HTML desde IntelliJ y faltan clases. ¿Qué suele ser el problema?(DOCUMENTACION)",
    respuestas: [
      "El proyecto no compila",
      "El Scope no incluye todo el proyecto",
      "Falta un import",
      "El código tiene demasiados comentarios"
    ],
    correcta: 1
  },
  {
    pregunta: "87. Un método público tiene parámetros con restricciones importantes (no null, rangos). ¿Qué deberías documentar?(DOCUMENTACION)",
    respuestas: [
      "Solo el nombre del método",
      "Nada, se entiende",
      "@param explicando las restricciones",
      "Un comentario al final del archivo"
    ],
    correcta: 2
  },
  {
    pregunta: "88. Ves un comentario que explica “esto está así por un bug del proveedor externo”. ¿Qué tipo de comentario es?(DOCUMENTACION)",
    respuestas: [
      "Innecesario",
      "Explica una decisión importante",
      "Un comentario redundante",
      "Un comentario mal formado"
    ],
    correcta: 1
  },
  {
    pregunta: "89. Un README explica cómo ejecutar el proyecto y cómo probarlo. ¿Qué parte de la documentación cubre?(DOCUMENTACION)",
    respuestas: [
      "Reglas de negocio",
      "Puntos de entrada",
      "Nivel proyecto",
      "Decisiones raras"
    ],
    correcta: 2
  },
  {
    pregunta: "90. Deck y Card. Una baraja crea todas sus cartas al inicializarse. Las cartas existen como objetos independientes y pueden usarse en otros contextos. La baraja solo las mantiene para mezclarlas y repartirlas. Las cartas no dependen de la baraja para existir. ¿Qué relación es?",
    respuestas: [
      "Composición",
      "Agregación",
      "Asociación",
      "Realización"
    ],
    correcta: 2
  },
  {
    pregunta: "91. Player y Stats. Un jugador tiene un objeto Stats con vida y energía. Stats no depende del jugador para existir y podría asignarse a otro personaje. El jugador solo lo referencia. Ambos pueden existir por separado. ¿Qué relación es?",
    respuestas: [
      "Composición",
      "Asociación",
      "Generalización",
      "Dependencia"
    ],
    correcta: 1
  },
  {
    pregunta: "92. Team y Champion. Un equipo está formado por varios campeones. Un campeón puede cambiar de equipo o no pertenecer a ninguno. Si el equipo desaparece, los campeones siguen existiendo. El equipo solo los agrupa. ¿Qué relación es?",
    respuestas: [
      "Composición",
      "Agregación",
      "Asociación",
      "Realización"
    ],
    correcta: 1
  },
  {
    pregunta: "93. Champion y Items. Un campeón puede tener varios objetos equipados. Los objetos pueden existir sin el campeón y moverse entre ellos. Si el campeón desaparece, los objetos no se destruyen. ¿Qué relación es?",
    respuestas: [
      "Composición",
      "Agregación",
      "Generalización",
      "Dependencia"
    ],
    correcta: 1
  },
  {
    pregunta: "94. Champion y Ability. Un campeón tiene habilidades que solo existen para él. Si el campeón desaparece, las habilidades también desaparecen. No pueden existir por separado. ¿Qué relación es?",
    respuestas: [
      "Agregación",
      "Composición",
      "Asociación",
      "Realización"
    ],
    correcta: 1
  },
  {
    pregunta: "95. Deck y su lista interna de cartas generadas. La baraja crea sus cartas internamente. No existen antes ni después de la baraja. Si la baraja se destruye, las cartas desaparecen. ¿Qué relación es?",
    respuestas: [
      "Asociación",
      "Agregación",
      "Composición",
      "Generalización"
    ],
    correcta: 2
  },
  {
    pregunta: "96. Ability, PassiveAbility y ActiveAbility. Ambas clases extienden Ability y comparten estructura pero implementan comportamiento distinto. ¿Qué relación es?",
    respuestas: [
      "Realización",
      "Generalización",
      "Agregación",
      "Dependencia"
    ],
    correcta: 1
  },
  {
    pregunta: "97. Potion y HealthPotion. HealthPotion hereda de Potion y añade comportamiento específico. Es un tipo de Potion. ¿Qué relación es?",
    respuestas: [
      "Composición",
      "Generalización",
      "Realización",
      "Asociación"
    ],
    correcta: 1
  },
  {
    pregunta: "98. Player implementa IManageHealth. La interfaz define métodos y Player los implementa. No hay código en la interfaz, solo contrato. ¿Qué relación es?",
    respuestas: [
      "Generalización",
      "Realización",
      "Agregación",
      "Dependencia"
    ],
    correcta: 1
  },
  {
    pregunta: "99. ArrayList implementa List. List define el contrato y ArrayList lo cumple con implementación concreta. ¿Qué relación es?",
    respuestas: [
      "Realización",
      "Composición",
      "Asociación",
      "Agregación"
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




