import {test,expect} from "@playwright/test";
import {allure} from "allure-playwright";


test.beforeEach(async ({ page }) => {
    allure.severity("Hight");
    allure.epic("POC Itaú");
    allure.owner("Pragma");
    await page.goto('https://banco.itau.co/');
    test.slow();
});

test.describe('comparacion pagina ITAÚ',()=>{
    test('Comparar imagenes banco itau', async ({ page }) => {
        allure.description(
            "Test: Abrir la URL oficial de ITAÚ"
        );
        await allure.step("Paso 1: Abrir la página ITAÚ", async () =>{

            await allure.attachment("inicio_itau1.png", await page.screenshot(), {
                contentType: "image/png",});
        });
        await expect(page).toHaveScreenshot('C:/Users/andrea.beltran_pragm/Pictures/imagenes a comparar/imagen.png');
    });
});
