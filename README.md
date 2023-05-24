# Allure

## Установка
установить плагин в dev dependencies
npm i -D @shelex/cypress-allure-plugin

## Настройка
В config файле прописать

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        }
    }
});

## При наличии препроцессора
необходимо добавить следующие настройки:

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('file:preprocessor', webpackPreprocessor);
            allureWriter(on, config);
            return config;
        },
        env: {
            allureReuseAfterSpec: true
        }
    }
});

## Импортировать команды
в файл cypress/support/e2e.js
import '@shelex/cypress-allure-plugin';
либо
require('@shelex/cypress-allure-plugin');

Для получения отчета в Allure при выполнении скрипта необходимо добавлять флаг
--env allure=true

Т.о., скрипт будет выглядеть следуюшим образом: 
npx cypress run --env allure=true

## Команды запуска

Запуск спека с возможностью дальнейшего формирования отчета:  "cy:run:with:allure:writing:results"

Формирование отчета о прохождении тестов в формате JSON: "generate:allure:report"

Формирование отчета о прохождении тестов в формате HTML :"allure:open"

Группа команд запуск спека + формирование отчета HTML
"cy:run:with:allure:html"

Удаление результатов предыдущих запусков: "clear:previous:output"

