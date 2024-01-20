import { test, Browser, Page, expect } from '@playwright/test';
import * as elements from './elements';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    let browser: Browser;
    let page: Page;

test.describe('SauceDemo: Complete Test', () => {
    
    test('Scenario: Shopping', async ({page}) => {  
        test.slow();
        console.log('Seleccion de productos aleatorios');

        await test.step('Step 1: Agregar dos productos al carrito',async () => {
            var productsPage = await page.locator(elements.productsPage).innerText();
            await expect(productsPage).toBe("Products");
            var products = await page.locator(elements.listProducts).allInnerTexts();
            var item1 = elements.random(products.length);
            console.log('Productos', products);
            console.log('Producto 1 seleccionado: ',products[item1]);
            console.log('Agregando Producto 1 al carrito');
            await page.locator(elements.addToCart(products[item1])).click();
            await expect(page.locator(elements.removeFromCart(products[item1]))).toBeVisible;
            var item2 = elements.random(products.length);

            while (item1 == item2){
                item2 = elements.random(products.length);
            }

            console.log('Producto 2 seleccionado: ',products[item2]);
            console.log('Agregando Producto 2 al carrito');
            await page.locator(elements.addToCart(products[item2])).click();
            await expect(page.locator(elements.removeFromCart(products[item2]))).toBeVisible;
        })

        await test.step('Step 2: Visualizar el carrito',async () => {
            var cant = await page.locator(elements.itemsInCart).innerText();
            console.log('Cantidad de productos agregados: ',cant);
            await expect(cant).toBe("2");
            await page.locator(elements.shoppingCartLink).click();
            var cartPage = await page.locator(elements.cartPage).innerText();
            await expect(cartPage).toBe("Your Cart");
            await page.locator(elements.checkoutButton).click();
        })

        await test.step('Step 3: Completar formulario de compra',async () => {
            var check = await page.locator(elements.checkoutPage).innerText();
            await expect(check).toBe("Checkout: Your Information");
            await page.getByRole('textbox', {name: 'First Name'}).fill("Alejandro")
            await page.getByRole('textbox', {name: 'Last Name'}).fill("Tamayo")
            await page.getByRole('textbox', {name: 'Zip/Postal Code'}).fill("170002")
            await page.locator(elements.continueCheckoutButton).click();
        })

        await test.step('Step 4: Finalizar la compra',async () => {
            var view = await page.locator(elements.checkoutOverview).innerText();
            await expect(view).toBe("Checkout: Overview");
            await delay(2000);
            await page.locator(elements.checkoutFinishButton).click();            
        })

        await test.step('Step 5: Verificar la compra',async () => {
            var complete = await page.locator(elements.checkoutComplete).innerText();
            await expect(complete).toBe("Checkout: Complete!");
            await delay(2000);
            var message = await page.locator(elements.thanksMessage).innerText();
            await expect(message).toBe("Thank you for your order!");
            await page.locator(elements.backButton).click();

            await page.locator(elements.menuButton).click();
            await page.locator(elements.logOut).click();
            console.log('Test Finalizado');
        })
    } )
} )

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto("https://www.saucedemo.com");
    await page.getByRole('textbox', {name: 'Username'}).fill("standard_user")
    await page.getByRole('textbox', {name: 'Password'}).fill("secret_sauce")
    await page.getByRole('button', {name: 'Login'}).click()
});

test.afterEach(async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});

})();