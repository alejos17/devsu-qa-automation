
# Automation Test - Demo

Este repositorio contiene el automation test que realiza el flujo completo de la compra de dos productos en el sito comercial SauceDemo. 

El framework utlizado es [Playwright](https://playwright.dev/), un framework para testing y webscrapping impulsado por Microsoft, en lenguaje TypeScript, NodeJS y con la herramienta TraceView para persistir el paso a paso del test por cada uno de los elementos web y la petición a cada uno de los servicios.

## Autor

- Alejandro Tamayo [@alejos17@gmail.com]()

## Features

El proyecto esta compuesto por un único feature que realiza el flujo esperado:

- [completeTest:]() Ingresa en la web del comercio, realiza el proceso de autenticación, selecciona dos productos de forma aleatoria y los agrega al carrito de compras, procede a verificar el pedido, realiza checkout con los datos del comprador, finaliza la compra y verifica el estado final, como ultimo paso realiza un LogOut del sitio web.

## Estructura del proyecto

```javascript
devsu-qa-automation{
    node-modules
    test{
        elements.ts
        completeTest.spec.ts
    }
    .gitignore
    package-lock.json
    package.json
    playwright.config.ts
    README.md
}
```

## Run Locally

Requisitos
- NodeJS 18.16.0 o superior

Clonar el proyecto, branch: e2e

```bash
  git clone https://github.com/alejos17/devsu-qa-automation.git
```

Ir al directorio del proyecto

```bash
  cd my-project
```

Instalar framework Playwright

```bash
  npm install -D @playwright/test@latest
```

Instalar webdriver de Chrome

```bash
  npx playwright install chromium
```
Descarga automaticamente la ultima versión compatible con Playwright


## Running Tests

```bash
  npx playwright test --project=chromium
```

Para ver el reporte del test en un navegador:

```bash
  npx playwright show-report
```

## Support

Para dudas, email alejos17@gmail.com

create - 20 de enero 2024

