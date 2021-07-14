# Lab de Azure App Service

- **[Grabación de la sesión en vivo]()**

**Azure App Service** es un servicio PaaS que te permite  crear aplicaciones web que se pueden desplegar en el internet público.

Puede ser usado para realizar:
- Aplicaciones web
- API RESTful
- Backend de aplicaciones web
- Backend de aplicaciones móviles
- Backend de aplicaciones de escritorio
- Enter otros

**Curiosidad:** Casi todo el código de las prácticas es funcional y fue generado con [GitHub Copilot](https://copilot.github.com/).

## Requerimientos
- [CLI de Azure](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [Git](https://git-scm.com/downloads)
- [Cuenta de GitHub](https://github.com/)
- [Node.js](https://nodejs.org/es/download/)

## Práctica 1: Despliegue de una aplicación web en PHP

1. Copia el código de la webapp ejemplo que se encuentra en [pagina-php](/pagina-php)
    - Aquí tienes dos archivos  `index.php` y `test.php`
2. Crea una carpeta aparte y pega el código en un archivo nuevo.
   - Debes tener un archivo `index.php`

3. Inicia un repositorio de Git con el siguiente comando:
```GitHub
git init
```
__________________
## Práctica 2: Despliegue de una API en Node.js
1. Copia el código de la API ejemplo que se encuentra en [api-nodejs](/api-nodejs)
    - Aquí tienes el archivo `app.js` y `package.json`
    - El archivo `package.json` es el que contiene la información de la aplicación y las librerías a instalar
    - El archivio `app.js` es el que contiene la lógica de la aplicación y es el que se va a ejecutar
2. Crea una carpeta aparte y pega el código en un archivo nuevo.
   - Debes tener un archivo `app.js`

3. Inicia un repositorio de Git con el siguiente comando:
```GitHub
git init
```
4. Inicia un proyecto de Node.js con el siguiente comando:
```cmd
npm init
```

5. Instala las librerías que necesitas
```cmd
npm install
```
6. Si se sobrescribió el archivo `package.json` copia y pega el de este proyecto
7. Revisa el código de la API ejemplo
8. Inicia el proyecto y prueba su funcionamiento
```cmd
npm start
```
9. Verifica su funcionamiento en aplicaciones como Talend API Tester o Postman

- Si accedes a http://localhost:3000/ deberías ver el mensaje "Hola Mundo" y en la consola deberás ver "El servidor se está ejecutando en http://localhost:3000/"

- Si envías un post con el parametro `name=Juan` deberías ver el mensaje "Hola Juan" en la consola