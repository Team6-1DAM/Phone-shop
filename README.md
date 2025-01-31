Phone-Shop - Aplicacion Web -

Phone-Shop es la primera version de una pagina funcional de compra - venta de telefonos moviles, aceptando articulos de todas las epocas. En la version 1.0 está implementado el control de usuarios, la lista de productos a la venta,proveedores de los productos y realizacion de pedidos. La aplicacion cambia de aspecto segun el tipo de usuario.El administrador de la página puede tener acceso al CRUD completo de tres tablas implementadas ( USERS, SUPPLIERS, PRODUCTS), de la tabla Orders no se ha habilitado nada mas que la generacion de registros, que da pendiente la visualizacion de los pedidos realizados por el usuario.
El administrador tiene una vista ampliada de los datos de un producto conociendo sus unidades disponibles y los datos del proveedor que lo suministra. Un usuario anonimo solo puede ver los productos, un usuario registrado podra comprar el producto y modificar sus datos de usuario. Tambien esta previsto que cuando pueda comprar tendrá acceso a su historial de pedidos realizado.

Para ello se ha cosnstruido la base de datos con SQLite. Recomendamos el uso de DB Browser for SQLite para crear y manipular la base de datos. La base de datos hay que crearla y alojarla fisicamente en el Backend de la carpeta del proyecto retrobytenodejs, se tiene que llamar: retrocomputers.db

IMPORTANTE:
las imagenes se suben a la carpeta /IMAGES en el backend, viene inicialmente creada y viene con la imagen no_image.jpg para que se puedan visualizar directamente los registros que acabamos de poner.
Hay una colección de HOPPSCOTCH con el CRUD completo de las tres tablas(USERS, SUPPLIERS, PRODUCTS, ORDERS) ESTA EN EL BACKEND Y SE LLAMA coleccion_hoppscotch_bd.json
Se ha utilizado como base para el servidor NodeJS y Express, luego hemos ido implementado unas librerias muy conocidas como son cors, multer, sqlite3, knex en el backend y axios toastify-js en el frontend. El aplicativo tiene un total de 14 htmls, los cuales vienen referenciadas en el fichero pacjage.json del frontend.

Para iniciar la aplicacion, una vez creada la BD y rellenada con la muestra de registros, hay que instalar la librerias tanto en el backend como en el frontend. Iniciamosu terminal, como por ejemplo el terminal de Visual Studio Code Nos ponemos en el Backend de nuestro proyecto.. cd backend Instalamos las librerias.. npm install Iniciamos el Backend npm start A continuacion nos sale un mensaje en el terminal que el puero 8081 esta escuchando.., todo va bien¡¡

Recomendamos el uso de nodemon si se va a seguir desarrollando, para no tener que estar iniciando todo el rato el backend

En el lado cliente nos vamos a su directorio.. cd.. cd frontend Instalamos la librerias necesarias.. npm install E iniciamos.. npm start

Nos vamos a un navegador y ponemos la direccion.. http://localhost:1234/

Es aqui donde se visualiza nuestro aplicativo en el frontend, y donde ya podemos empezar a operar.