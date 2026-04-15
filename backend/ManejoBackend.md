## cosas para hacer:
    - Registrar en el archivo .env el certificado OpenSSL
    - integracion con arca
    - json para los productos   


token de base de datos text o varchar de 2000 caracteres
sing text o varchar 512
{ params: {slug} }: { params: { slug: string } }


### Uso del OTP
Una vez dentro del olvide mi contraseña y colocado el mail, dentro de la consola del servidor de python se mostrara el codigo OTP junto al mail y un TempStamp ``` {'admin@test.com': {'code': ** 276561 **, 'time': 1775612183.2673972}} ``` 

**nota**: Como son servidores de prueba y desarrollo ambos son ejecutados en modo "dev". Ya que puede ser algo inestable para ejecutarlos en modo normal. (Ambos en ve de recibir el parametro dev, solamente recibirian el parametro run.)

# Tecnologia utilizada
## Fast API
- Rendimiento: Basado en ASGI, permite el manejo de peticiones asincrónicas (async/await), optimizando la concurrencia y el tiempo de respuesta.

- Documentación Automática: Generación nativa de esquemas interactivos (Swagger/OpenAPI) que facilita el testing de los endpoints.

- Ligereza: Arquitectura minimalista y modular

- Modernización: Mientras Django es el estándar para sistemas "monolíticos" y administrativos, FastAPI es el estándar actual para Microservicios y arquitecturas de Nube.

- Auge de la IA: Es el framework preferido para integrar modelos de Machine Learning y IA Generativa, lo que hoy domina las búsquedas laborales de Python.

- Eficiencia de Costos: Al procesar más peticiones con menos recursos (CPU/RAM), las empresas reducen costos de infraestructura en la nube

- Actualmente es utilizadas por empresas como: Netflix, Uber, Microsoft.

## Seguridad implementada: HASH
Se opto por el guardado de las contraseñas dentro de la base de datos hasheadas como un plus de seguridad. Se utilizo como algoritmo de hasheo "BCrypt" (Este dato no deberia ser mostrado, pero esto es meramente educativo). Ya que asegura que dos contraseñas distintas no generen el mismo hash tambien se tuvieron en cuenta los siguientes puntos:

- **Irreversibilidad**: A diferencia del cifrado, el hash es una función de una sola vía. No se puede "des-hashear" para volver al texto plano.
- **Seguridad**: ante filtraciones: Si la base de datos es vulnerada, el atacante solamente vera cadenas de texto sin poder descifrarlas.
- **Integridad del Secreto**: El sistema nunca conoce la contraseña real.

## Astro

- Arquitectura de Islas: Permite enviar prácticamente cero JavaScript al navegador por defecto, cargando componentes interactivos solo cuando son necesarios.

- Agnoticismo de Frameworks: Permite usar componentes de React, Vue, Svelte o Angular dentro de un mismo proyecto, lo que da una flexibilidad total para escalar el frontend.

- Rendimiento Out-of-the-box: Al generar sitios estáticos (SSG) o con renderizado en el servidor (SSR) extremadamente ligeros, logra puntajes de Web Vitals casi perfectos sin esfuerzo extra.

- Experiencia de Desarrollo (DX): Incluye herramientas modernas como ruteo basado en archivos, manejo de Markdown/Content Collections y un servidor de desarrollo muy rápido.

- Optimización de Recursos: Maneja automáticamente la optimización de imágenes, fuentes y estilos, lo que reduce drásticamente el peso de la página y mejora la velocidad de carga.


## Logica del checkeo de la base de datos:
```
Usuario envía email + password en texto plano
        ↓
Busca el usuario en la BD por email
        ↓
Si existe → compara el hash de la contraseña enviada con el hash guardado
        ↓
 Coincide → login ok    No coincide → error
```
## Logica del OTP
```
Usuario ingresa email en recovery-pwd
        ↓
FastAPI verifica que el email existe y genera OTP
        ↓
Imprime OTP en consola
        ↓
Usuario ingresa el código OTP
        ↓
FastAPI verifica el código
        ↓
Usuario ingresa la nueva contraseña
        ↓
FastAPI actualiza la contraseña en la BDUsuario ingresa email

```

# Estructura de carpetas
```
log-in-x-bautibustos/
├── backend/
│   ├── api/
│   │   ├── routes/
│   │   │   ├── recovery.py
│   │   │   └── users.py
│   │   └── schemas/
│   │       └── user.py
│   ├── db/
│   │   └── connection.py
│   ├── web/
│   │   ├── html/
│   │   │   └── index.html
│   │   └── static/
│   │       ├── css/
│   │       │   └── style.css
│   │       └── js/
│   │           └── login.js
│   ├── bigbang.sql
│   ├── main.py
│   └── requeriments.txt