# Данный проект создан для изучения функций Cypress на примере тестирования приложения "Secret Santa"

## Установка Cypress в проект

1. Скопировать проект в локальный репозиторий
2. Выполнить команды
npm install cypress --save dev
npm init

## Запуск тестов
осуществляется вводом команды npm run в сочетании с одним из следующих скриптов:

cy:open - открытие Cypress в браузере с возможностью выбора  
cy:run - открытие Cypress  в headless режиме (без отрытия браузера) и запуск всех тестов  
cy:run:first - запуск первого теста (главная страница) в headless режиме  
cy:run:second  - запуск второго теста (посещение страниц "мои коробки", "создание новой коробки", "жеребьевка", "личный кабинет") в headless режиме  
cy:run:all - последовательный локальный запуск первого и второго тестов в headless режиме  
cy:prod - локальный запуск второго теста в headless режиме на продакшн окружении   
cy:prod:dashboard - запуск второго теста в headless режиме на продакшн окружении с записью результов прогона на дашборде Cypress cloud  
cy:1:chrome - локальный запуск первого теста в headless режиме в браузере Chrome  
cy:2:electron - локальный запуск второго теста в headless режиме в браузере Electron  
cy:both:specs:dif:browsers - локальный запуск первого и второго тестов в headless режиме в браузерах Chrome и Electron соответственно  
cy:both:specs:dif:browsers:dash - запуск первого и второго тестов в headless режиме в браузерах Chrome и Electron соответственно с записью результатов прогона на дашборде Cypress cloud  
cy:dashboard - запуск всех тестов в headless режиме с записью результатов прогона на дашборде Cypress cloud  
cy:run:6 - запуск 6 теста (тестирование API создания, редактирования, удаления коробки) в headless режиме  
cy:run:e2e - запуск end-to-end теста (создание коробки, добавление участников, запуск жеребьевки, получение уведомлений, удаление коробки)  
cy:run:local:1folder - локальный последовательный запуск тестов, находящихся в одной папке, браузер Сhrome  
cy:run:dash:1folder - последовательный запуск тестов, находящихся в одной папке, с записью результатов прогона на дашборде Cypress cloud, браузер Сhrome  
cy:run:local:2folder - локальный последовательный запуск тестов, находящихся в одной папке, браузер Electron  
cy:run:dash:2folder - последовательный запуск тестов, находящихся в одной папке, с записью результатов прогона на дашборде Cypress cloud, браузер Electron  
cy:run:parallel:dash - параллельный запуск тестов, находящихся в разных папках, с записью результатов прогона на дашборде Cypress cloud  
cy:run:dash:2spec - запуск второго теста с записью результов прогона на дашборде Cypress cloud  
cy:run:dash:6spec - запуск шестого теста с записью результов прогона на дашборде Cypress cloud  
cy:run:dash:2:6:parallel - параллельный запуск 2 и 6 тестов (из одной папки) с записью результов прогона на дашборде Cypress cloud  
cy:run:local:2specs:parallel:using:plugin - локальный параллельный запуск 3 и 4 тестов (из одной папки) с использованием плагина для параллельного запуска на Windows cypress-parallel  

# Allure

## Установка
установить следующие пакеты:
npm i allure-commandline
и
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

Скрипт будет выглядеть следуюшим образом: 
npx cypress run --env allure=true

## Команды запуска

Запуск спека с возможностью дальнейшего формирования отчета:  "cy:run:with:allure:writing:results"

Формирование отчета о прохождении тестов в формате JSON: "generate:allure:report"

Формирование отчета о прохождении тестов в формате HTML :"allure:open"

Удаление результатов предыдущих запусков: "clear:previous:output"

Группа команд удаление предыдущих результатов + запуск спека + формирование отчета HTML
"cy:run:with:allure:html"



