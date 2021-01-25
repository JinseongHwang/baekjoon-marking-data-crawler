
'use strict'

const puppeteer = require('puppeteer');
const readLine = require('readline');
const fs = require('fs');

const run = (ID) => {
    const URL = `https://www.acmicpc.net/status?user_id=${ID}`;

    (async () => {
        const browser = await puppeteer.launch({
            headless: false,
        });
        const page = await browser.newPage();
        await page.goto(URL);

        let scrappedData = [];
        let pageNumber = 1;

        while (true) {
            console.log(`[${pageNumber}] 페이지의 채점 현황을 수집 중입니다.`);
            pageNumber++;

            // 채점 현황 테이블 나타날 때까지 대기
            await page.waitForSelector('#status-table');

            const tbody = await page.$$('#status-table > tbody > tr');
            for (let tr of tbody) {
                const tdList = await tr.$$eval('td', (data) => data.map(d => d.textContent));
                const submitId = tdList[0];
                const userId = tdList[1];
                const problemId = tdList[2];
                const result = tdList[3];
                const memory = tdList[4];
                const time = tdList[5];
                const language = tdList[6];
                const codeLength = tdList[7];
                const created_at = tdList[8];
                console.log(`제출 번호: ${submitId}, 아이디: ${userId}, 문제: ${problemId}, 결과: ${result}, 메모리: ${memory}, 시간: ${time}, 언어: ${language}, 코드 길이: ${codeLength}, 제출한 시간: ${created_at}`);
            }

            const nextPageBtn = await page.$('#next_page');
            if (nextPageBtn) { // 다음 페이지가 존재할 경우
                await page.click('#next_page');
            } else { // 마지막 페이지일 경우
                console.log('모든 채점 현황 수집을 완료했습니다.');
                break;
            }
        }

        await browser.close();
    })();
}

// readLine 객체 생성
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 아이디 입력
rl.question('Enter your ID: ', (id) => {
    run(id);
    rl.close();
});