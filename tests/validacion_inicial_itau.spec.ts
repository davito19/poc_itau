import {defineConfig, test} from '@playwright/test';
import {allure} from 'allure-playwright';



test.beforeEach(async ({page}) => {
    allure.severity("Hight");
    allure.epic("POC Itaú");
    allure.owner("Pragma");
    await page.goto('https://banco.itau.co/');
    test.slow();
});

test.describe('abrir pg itau', () => {
    test('abrir banco itau', async ({page}) => {
        allure.description(
            "Test: Abrir la URL oficial de ITAÚ"
        );
        await allure.step("Paso 1: Abrir la página ITAÚ", async () => {

            await allure.attachment("inicio_itau1.png", await page.screenshot(), {
                contentType: "image/png",
            });

        });
        // Scroll to an element

        await allure.step("Paso 2: Scroll", async () => {
            await page.locator('#portlet_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_rcpy').scrollIntoViewIfNeeded();
            await allure.attachment("inicio_itau_scroll2.png", await page.screenshot(), {
                contentType: "image/png",
            });

        });
        await allure.step("Paso 3: Scroll", async () => {
            await page.locator('#tooltipContainer').scrollIntoViewIfNeeded();
            await allure.attachment("inicio_itau_scroll3.png", await page.screenshot(), {
                contentType: "image/png",
            });

        });
    });


//hasta aqui
    test('Ruta Beneficios Itau - Mi Itaú efectivo', async ({page}) => {
        await allure.step("Paso 1: Abrir la pagina de Itaú", async () => {
            await allure.attachment("inicio_itau2.png", await page.screenshot(), {
                contentType: "image/png",
            });
        });

        await allure.step("Paso 2: Detecta y da click en Beneficion Itaú", async () => {
            await page.getByRole('button', {name: 'Beneficios Itaú'}).click();
            await allure.attachment("Beneficios Itaú.png", await page.screenshot(), {
                contentType: "image/png",
            });
        });

        await allure.step("Paso 3: Detecta y da click en Mi Itaú Efectivo", async () => {
            await allure.step("Paso 3.1 Da click y abre Mi ituaau en efectivo", async () => {
                await page.getByRole('link', {name: 'Mi Itaú efectivo'}).click();
                await allure.attachment("Mi itaú efectivo.png", await page.screenshot(), {
                    contentType: "image/png",
                });
            });
            await allure.step("Paso 3.2: Scroll hacia abajo", async () => {
                await page.mouse.move(0, 1000);
                await allure.attachment("Mi itaú efectivo_dd.png", await page.screenshot(), {
                    contentType: "image/png",
                });
            });

        });
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
