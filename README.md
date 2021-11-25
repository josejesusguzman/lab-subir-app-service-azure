# Lab de Azure App Service

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

4. Revisa el código de la página ejemplo

5. Puedes probar la página instalando XAMP o similares

6. [Sube el proyecto a App Service](#sube-el-proyecto-a-app-service)
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

- Si envías una petición post con el parametro `name=Juan` deberías ver el mensaje "Juan" en la consola

10. [Sube el proyecto a App Service](#sube-el-proyecto-a-app-service)

_______

## Sube el proyecto a App Service

- Remplaza las \<LETRAS EN MAYUSCULAS Y DENTRO DE MAYOR Y MENOR QUE\> dependiendo de tus preferencias 

1. Crea un plan de App Service. Puede hacerlo al crear un servicio de App Service desde el portal de Azure o usando la linea de comando CLI de Azure.

```CLI de Azure
az appservice plan create --name <NOMBRE_PLAN_APP_SERVICE> --resource-group <NOMBRE_GRUPO_DE_RECURSOS> --sku FREE
```

2. Crea el servicio de App Service. Igualmente puedes hacerlo como desees

- Ajusta el parametro después de --runtime dependiendo del lenguaje de programación que estés usando. Por ejemplo, para PHP sería algo así `"PHP|7.4"`

```CLI de Azure
az webapp create -n <NOMBRE_APP_SERVICE> -g <NOMBRE_GRUPO_DE_RECURSOS> -p <NOMBRE_PLAN_APP_SERVICE> --runtime "node|10.6" --deployment-local-git
```

3. Si anteriormente no has establecido las credenciales de implementación de nivel de usuario o si no recuerdas tu contraseña, ejecuta el siguiente comando:


```CLI de Azure
az webapp deployment user set --user-name <USERNAME_GITHUB>
```

4. Obten la dirección de implementación de Git con:
```CLI de Azure

az webapp deployment source config-local-git -n <NOMBRE_APP_SERVICE> -g <NOMBRE_GRUPO_DE_RECURSOS>
```

5. Agrega el control remoto a tu código con:

- **Nota**: a debes tener el repositorio local creado
- **Nota**: Si falla la implementación cambia el código a la rama master con `git branch master ` y después `git checkout master`

```cmd
git remote add webapp <DIRECCION_IMPLEMENTACION_GIT>
```

6. Despliega la aplicación con:

```cmd
git push webapp main:main
```

- Nota: Si estás en la rama master el comando sería así:

```cmd
git push webapp master:master
```

7. cuando te aparezca el siguiente mensaje en la consola, significa que el deploy fue exitoso

```cmd
remote: Finished successfully.
remote: Running post deployment command(s)...
remote: Deployment successful.
```