# TP2-Trabajo Final

  

Este proyecto resuelve el siguiente enunciado:
*"1. Realizar una API REST con Node.js y Express, con una arquitectura cliente/servidor como se vió en clase. 
2. El manejo de funciones asíncronas, la correcta distribución de las carpetas del proyecto, la inclusión de patrones de diseño, test, validaciones, base de datos (puede ser la vista en clase o a elección) y documentación, es obligatoria. 
3. El proyecto debe contar con al menos dos CRUD completos (crear, leer, actualizar y eliminar datos). 
4. Incorporar al proyecto al menos dos implementaciones de librerías/dependencias/recursos externos que faciliten o sean útiles para el funcionamiento del servidor y añadan valor agregado al proyecto (ver sugerencias). 
5. Debe contar con al menos un test para funcionalidades exitosas y otro en caso de error, siguiendo lineamientos vistos en clase.”*
  

---

  
## Tecnologías Utilizadas
- **Node.js + Express** para servidor y ruteo.
- **MongoDB Atlas** para persistencia real.
- **Factory Pattern** para alternar Memoria/Mongo.
- **JOI** para validación de datos de entrada.
- **Axios** para consumir una API externa de cotización de dólar (**Dólar API**).
- **Faker.js** para generar datos random de prueba.
- **Mocha + Chai + Supertest** para pruebas de endpoints (muy desesperadas).
- **dotenv** para variables de entorno.


## Cómo levantar el servidor

  

### 1. Requisitos

  

- Node.js (versión 18 o superior)

- Postman (opcional para probar)

  

### 2. Pasos para iniciar el proyecto

  

```bash

npm install  # Instala las dependencias

npm start  # Levanta el servidor

npm run  watch  # También inicia el servidor pero con recarga automática

### 3. Pruebas en Postman

PRODUCTS

**GET**

`/products`

Listar todos los productos

**GET**

`/products/:id`

Obtener un producto por ID

**POST**

`/products`

Crear un producto (valida con JOI)

**PATCH**

`/products/:id`

Actualizar parcialmente un producto

**PUT**

`/products/:id`

Actualizar completamente un producto

**DELETE**

`/products/:id`

Eliminar un producto

**GET**

`/products/convert/:id`

Precio en ARS usando cotización dólar (Axios)

**GET**

`/products/prueba/random`

Genera producto random (Faker.js)

-----------------------------------------------------------------------
USERS

**GET**

`/users`

Listar todos los usuarios

**GET**

`/users/:id`

Obtener un usuario por ID

**POST**

`/users`

Crear usuario (valida con JOI)

**PATCH**

`/users/:id`

Actualizar parcialmente un usuario

**PUT**

`/users/:id`

Actualizar completamente un usuario

**DELETE**

`/users/:id`

Eliminar un usuario
