import { test, expect } from '@playwright/test';
import {allure} from 'allure-playwright';

test.beforeEach(async ({ page }) => {
    allure.severity("Hight");
    allure.epic("POC Itaú");
    allure.owner("Pragma");
    await page.goto('https://banco.itau.co/');
    test.slow();
});

test.describe('Ruta Beneficios Itau - Mi Itaú efectivo',()=>{
    test('Ruta Beneficios Itau - Mi Itaú efectivo', async ({ page }) => {
        await page.setViewportSize({ width: 800, height: 600 });
        await allure.step("Paso 1: Abrir la pagina de Itaú", async () =>{
            await allure.attachment("inicio_itau2.png", await page.screenshot(), {
                contentType: "image/png",});
        });

        await allure.step("Paso 2: Abre el menú", async () =>{
                await page.locator("//button[contains(@aria-label, 'menu')]").click();
            await allure.attachment("apertura menu.png", await page.screenshot(), {
                contentType: "image/png",});
        });
        await allure.step("Paso 3: da click en beneficios mi ITAÚ efectivo", async () =>{
            await page.getByRole('link', { name: 'Mi Itaú efectivo' }).click();
            await allure.attachment("beneficios ITAU.png", await page.screenshot(), {
                contentType: "image/png",});
        });
    });
});

test('Ruta Beneficios Itau - Mi Itaú efectivo', async ({ page }) => {
    await allure.step("Paso 1: Abrir la pagina de Itaú", async () =>{
        await allure.attachment("inicio_itau2.png", await page.screenshot(), {
            contentType: "image/png",});
    });

    await allure.step("Paso 2: Detecta y da click en Beneficion Itaú", async () =>{
        await page.getByRole('button', { name: 'Beneficios Itaú' }).click();
        await allure.attachment("Beneficios Itaú.png", await page.screenshot(), {
            contentType: "image/png",});
    });

    await allure.step("Paso 3: Detecta y da click en Mi Itaú Efectivo", async () =>{
        await allure.step("Paso 3.1 Da clich y abre Mi itau en efectivo", async ()=>{
            await page.getByRole('link', { name: 'Mi Itaú efectivo' }).click();
            await allure.attachment("Mi itaú efectivo.png", await page.screenshot(), {
                contentType: "image/png",});
        });
        await allure.step("Paso 3.2: Scroll hacia abajo",async ()=>{
            await page.mouse.move(0,1000);
            await allure.attachment("Mi itaú efectivo_dd.png", await page.screenshot(), {
                contentType: "image/png",});
        });

    });
});
