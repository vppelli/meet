// src/__tests__/EndToEnd.test.js

import puppeteer from "puppeteer";

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            // headless: false,
            // slowMo: 250,
            // timeout: 0
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .details-btn');

        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeNull();
    });
});

// Bonus

// describe('filter events by city', () => {
//     let browser;
//     let page;
//     beforeAll(async () => {
//         browser = await puppeteer.launch({
//             // headless: false,
//             // slowMo: 250,
//             // timeout: 0
//         });
//         page = await browser.newPage();
//         await page.goto('http://localhost:3000/');
//         await page.waitForSelector('#city-search');
//     });

//     afterAll(() => {
//         browser.close();
//     });

//     test('When user hasn\'t searched for a city, show upcoming events from all cities', async () => {
//         const CitySearch = await page.$('.city .suggestions');
//         expect(CitySearch).toBeDefined();
//     });

//     test('User should see a list of suggestions when they search for a city', async () => {
//         await page.focus('#city-search .city');
//         // await page.type('Berlin, Germany');


//     });

//     test('User can select a city from the suggested list', async () => {
//     });
// });