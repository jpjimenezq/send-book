# Send Books

## Descripción
Este proyecto es una landing page que permite poder proporcionar datos como *nombre* y *email* para el envio de un libro proporcionado por **CodeGame**.

## Tecnologías Utilizadas
- Lenguajes de programación (JavaScript, TypeScript)
- Frameworks (Next.js, React)
- Base de datos (MySQL)
- Herramientas adicionales (Resend para envío de correos)

## Instalación
1. Clona este repositorio:
    ```bash
    git clone https://github.com/CodeGameMexico/FreeEbooks
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd proyecto
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Configura las variables de entorno:
    ```bash
    cp .env.example .env
    ```
    Luego, edita el archivo `.env` con tus valores.

5. Inicia la aplicación:
    ```bash
    npm run dev
    ```

## Uso

Luego de realizacion la instalacion y iniciar la aplicacion, para acceder a la página de inicio, abre tu navegador y navega a `http://localhost:3000`.

## Estructura del Proyecto
- `/src` - Contiene el código fuente de la aplicación.
- `/src/app` - Contiene las distintas carpetas y archivos de la pagina
- `/src/app/api/send` - Contiene la API
- `/src/app/component` - Contiene los componentes de la aplicacion (template del email a enviar)
- `/lib` - Contiene la conexion a la base de datos

## Licencia
Este proyecto está licenciado bajo la **CodeGame**.