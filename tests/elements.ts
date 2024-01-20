//Random index to element list
export function random(max){
    return Math.floor(Math.random() * max);
}

//SauceDemo Page
export const productsPage = "//div[@class='header_secondary_container']//span[contains(string(),'Products')]";
export const cartPage = "//div[@class='header_secondary_container']//span[contains(string(),'Your Cart')]";
export const checkoutPage = "//div[@class='header_secondary_container']//span[contains(string(),'Checkout: Your Information')]";
export const checkoutOverview = "//div[@class='header_secondary_container']//span[contains(string(),'Checkout: Overview')]";
export const checkoutComplete = "//div[@class='header_secondary_container']//span[contains(string(),'Checkout: Complete!')]";
export const listProducts = "//div[@class='inventory_item']//div[@class='inventory_item_label']//div[@class='inventory_item_name ']";
export const shoppingCartLink = "//a[@class='shopping_cart_link']";
export const itemsInCart = "//span[@class='shopping_cart_badge']";
export const checkoutButton = "//button[@id='checkout']";
export const continueCheckoutButton = "//input[@type='submit'][@id='continue']";
export const checkoutFinishButton = "//button[@id='finish']";
export const thanksMessage = "//div[@id='checkout_complete_container']//h2";
export const backButton = "//button[@id='back-to-products']";
export const menuButton = "//button[@id='react-burger-menu-btn']";
export const logOut = "//div[@class='bm-menu-wrap']//a[@id='logout_sidebar_link']";

export function addToCart(item){
    const selectItem = "//div[@class='inventory_item_name '][contains(string(),'"+item+"')]/parent::*[1]/parent::*[1]//following-sibling::*[1]//button[contains(string(),'Add to cart')]";
    return selectItem;
}

export function removeFromCart(item){
    const selectItem = "//div[@class='inventory_item_name '][contains(string(),'"+item+"')]/parent::*[1]/parent::*[1]//following-sibling::*[1]//button[contains(string(),'Remove')]";
    return selectItem;
}
