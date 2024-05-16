import {defineConfig, test} from '@playwright/test';
import {type} from "node:os";
//import {allure} from 'allure-playwright';



test.beforeEach(async ({page}) => {
    await page.goto('https://banco.itau.co/');
    test.slow();
});

test.describe('abrir pg itau', () => {
    test('Paso 1: Abrir la página ITAÚ', async ({page}) => {

        await page.screenshot({ path: 'Pagina_inicial.png' });
        await page.locator('#portlet_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_rcpy').scrollIntoViewIfNeeded();
        await page.screenshot({ path: 'scroll_pagina_inicial.png' })

        // Scroll to an element
        await page.locator('#tooltipContainer').scrollIntoViewIfNeeded();
        await page.screenshot({ path: 'scroll_pagina_inicial2.png' })



    });


//hasta aqui
    test('Ruta Beneficios Itau - Mi Itaú efectivo', async ({page}) => {
        [
            {
                type:'Test',
                description: 'Apertura de pagina inicial de ITAÚ',

            },
            await page.screenshot({ path: 'Pagina_inicial.png' }),
            {
                type:'Test',
                description: 'click en beneficios ITAÚ',

            },
            await page.getByRole('button', {name: 'Beneficios Itaú'}).click(),
            await page.screenshot({ path: 'beneficios_itau.png' }),
            {
                type:'Test',
                description: 'Pantalla ITAÚ efectivo',

            },
            await page.getByRole('link', {name: 'Mi Itaú efectivo'}).click(),
            await page.screenshot({ path: 'itua_efectivo.png' }),
            {
                type:'Test',
                description: 'Pantalla ITAÚ efectivo',

            },
            await page.mouse.move(0, 1000),
        await page.screenshot({ path: 'itua_efectivo_SD.png' }),

        ]

    });


    test('Ruta Negocios internacionales - Mercado global Colombiano', async ({page}) => {
        allure.tag("Aqui hay scroll");
        await allure.step("Paso 1: Abre la pagina de Itaú", async () => {
            await allure.attachment("inicio_itau3.png", await page.screenshot(), {
                    contentType: "image/png",
                }
            );
            await page.mouse.down();
            await allure.attachment("scroll_down_pg_itau.png", await page.screenshot(), {
                    contentType: "image/png",
                }
            );
        });

        await allure.step("Paso 2: Localiza y da click en Negocios internacionales", async () => {
            await page.getByRole('button', {name: 'Negocios internacionales'}).click();
            await allure.attachment("Negocios internacionales.png", await page.screenshot(), {
                contentType: "image/png",
            });
        });

        await allure.step("Paso 3: Localiza y da click a mercado global colombiano", async () => {
            await page.getByRole('link', {name: 'Mercado global colombiano'}).click();
            await allure.attachment("Mercado global colombiano.png", await page.screenshot(), {
                contentType: "image/png",
            });
        });

    });

    test('Ruta productos - cuenta de ahorro programado', async ({page}) => {
        await allure.step("Paso 1: Ingresa a la página de Itaú", async () => {
            await page.goto('https://banco.itau.co/');
            await allure.attachment("inicio_itau4.png", await page.screenshot(), {
                contentType: "image/png",
            });
        });
        await allure.step("Paso 2: Localiza y da click a Productos", async () => {
            await page.getByRole('button', {name: 'Productos'}).click();
            await allure.attachment("Productos.png", await page.screenshot(), {
                contentType: "image/png",
            });
        });
        await allure.step("Paso 1: Localiza y da click a cuenta de ahorro programado", async () => {
            await page.getByRole('link', {name: 'Cuenta de ahorro programado'}).click();
            await allure.attachment("Cuenta de ahorro programado.png", await page.screenshot(), {
                contentType: "image/png",
            });
        });
    });

    test('Ruta Productos - Cuenta de ahorro AFC', async ({page}) => {
        await allure.step("Paso 1: Ingresa a la página de Itaú", async () => {
            await page.goto('https://banco.itau.co');
            await allure.attachment("inicio_itau5.png", await page.screenshot(), {
                contentType: "image/png",
            });
        });
        await allure.step("Paso 2: Localiza y da click a productos", async () => {
            await page.getByRole('button', {name: 'Productos'}).click();
            await allure.attachment("productos.png", await page.screenshot(), {
                contentType: "image/png",
            });
        });
        await allure.step("Paso 3: Localiza y da click a Cuenta de ahorro AFC", async () => {
            await page.getByRole('link', {name: 'Cuenta de ahorro AFC'}).click();
            await allure.attachment("Cuenta de ahorro AFC.png", await page.screenshot(), {
                contentType: "image/png",
            });
        });
    });

    test('Ruta Beneficios Itaú - Bike Itaú', async ({page}) => {
        await allure.step("Paso 1: Ingresa a la página de Itaú", async () => {
            await page.goto('https://banco.itau.co')
            await allure.attachment("inicio_itau6.png", await page.screenshot(), {
                contentType: "image/png",
            });
        });
        await allure.step("Paso 2: Localiza y da click a Beneficios Itaú", async () => {
            await page.getByRole('button', {name: 'Beneficios Itaú'}).click();
            await allure.attachment("Beneficios itau.png", await page.screenshot(), {
                contentType: "image/png",
            });
        });
        await allure.step("Paso 3: Localiza y da click a Bike Itaú", async () => {
            await page.getByRole('link', {name: 'Bike Itaú'}).click();
            await allure.attachment("bike itau.png", await page.screenshot(), {
                contentType: "image/png",
            });
        });
    });
});
