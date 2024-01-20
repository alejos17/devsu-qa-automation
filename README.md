
# Automation Test - petstore

Este repositorio contiene el automation test que evalua el ejercicio dos, prueba los diferentes endpoints del sitio petstore.

El framework utilizado en el proyecto es [Karate Framework](https://github.com/karatelabs/karate), para testing de API, en lenguaje JAVA / JavaScript. 

## Autor

- Alejandro Tamayo [alejos17@gmail.com]()

## Feature

El proyecto utiliza un único feature divido en escenarios:

- [@CrearPet:]() Añadir una mascota a la tienda, con id asignado en el response guarda un json para uso posterior.

- [@ConsultarPet:]() Consultar la mascota ingresada previamente, para esto lee el archivo json guardado en paso previo.

- [@ActualizarPet:]() Actualizar el nombre de la mascota y el status de la mascota a 'sold'.

- [@ConsultarStatusPet:]() Consultar la mascota modificada por status.

## Estructura del proyecto

En una estructura básica de un proyecto JAVA, en el paquete test se establece toda la jerarquía necesaria por Karate Framework para funcionar

```javascript
devsu-qa-automation{
    src{
        test{
            java{
                api{
                    petstore{
                        feature
                        body.json
                    }
                karate-config.js
            }
        }
    }
}
```

## Run Locally

Requisitos
- SDK Java 11
- IntelliJ IDE

Clonar el proyecto, branch: api

```bash
  git clone https://github.com/alejos17/devsu-qa-automation.git
```

Ir al directorio del proyecto

```bash
  cd my-project
```


## Running Tests

Para correr el test, desde IntelliJ, click derecho en el feature "completeTest.feature" y dar clik en 'Run Feature: completeTest', el resultado del test queda en la ruta /target/karate-reports/ y abrir el reporte karate-summary.html

## Support

Para dudas, email alejos17@gmail.com

created - 20 de enero 2024

