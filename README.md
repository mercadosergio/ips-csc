# IPS CUIDADO SEGURO EN CASA
## Prueba técnica - Gestión de Ordenes - API

## Requisitos técnicos
- Node.js
- Nest.js
- SQL Server

## Instalación

1. En la terminal clone el repositorio `https://github.com/mercadosergio/ips-csc.git`
2. Configurar variables de entorno en el archivo `.env` siguiendose por el archivo `.env.example`
3. Configurar entorno de Prisma ORM con el comando en la terminal `npx prisma generate`
4. Ubicarse en la raiz del proyecto en la terminal y ejecutar `npm install`.
5. Ejecutar la aplicación `npm run start:dev`


En la raiz de este proyecto encontrará el archivo con los scripts de la estructura de la base de datos

## Endpoints

- `/clients`
- `/clients/:id`
- `/orders`


NOTA: Se soluciono el error de ejecución de la API REST un día después, si no es válido en la prueba técnica, puede devolver al ultimo commit del dia de la prueba `git checkout f0cf4cd5323625f58217ff1695ae5e4d7907ba6f`