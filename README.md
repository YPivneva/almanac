###Деплой приложения Webpack на Github Pages
[![PR Sanity Check, Build and Deploy](https://github.com/YPivneva/almanac/actions/workflows/sanity-check.yml/badge.svg?branch=airtable)](https://github.com/YPivneva/almanac/actions/workflows/sanity-check.yml)

#Приложение календарь событий Данная страница предоставляет информацию об исторических событиях

##Структура проекта src/index.js: Точка входа для пакета Webpack. Этот файл импортирует файл CSS:
src/css/styles.css - основные стили для квсех страниц,
src/css/calendar - стили для календаря.
dist/index.html: HTML-шаблон для dist/index.html файла, сгенерированного HtmlWebpackPlugin.
webpack.config.js: Файл конфигурации для Webpack.

##Как запустить
Установка зависимостей: npm install
Создайте проект: npm run build
Открыть dist/index.html в веб-браузере.
