require ('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');

const app = express();

const PORT = 5000 || process.env.PORT;

app.use(express.static('public'));

// Connect to DB
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

// app.get('', (req, res) => {
//     res.send ("Hello test");
// })

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    
})



// require('dotenv').config();                          // Завантажує змінні середовища з файлу .env у process.env.
// const express = require('express');                   // Імпортує бібліотеку Express для створення веб-сервера.
// const expressLayout = require('express-ejs-layouts'); // Імпортує бібліотеку для використання EJS з макетами (layouts).

// const app = express();                                // Створює новий екземпляр додатку Express.

// const PORT = process.env.PORT || 5000;               // Встановлює порт для сервера: використовує PORT з середовища або 5000 за замовчуванням.

// app.use(express.static('public'));                    // Дозволяє сервірувати статичні файли (CSS, JS, зображення) з каталогу 'public'.

// // Templating Engine
// app.use(expressLayout);                               // Включає підтримку макетів (layouts) для шаблонізатора EJS.
// app.set('layout', './layouts/main');                  // Вказує шлях до основного макету, який буде використовуватись для всіх сторінок.
// app.set('view engine', 'ejs');                        // Встановлює EJS як шаблонізатор для рендерингу HTML.

// app.get('', (req, res) => {                           // Визначає обробник маршруту для GET-запитів на кореневу адресу.
//     res.send("Hello test");                           // Відправляє текстову відповідь "Hello test" на запит.
// })

// app.listen(PORT, () => {                              // Запускає сервер на вказаному порті.
//     console.log(`App listening on port ${PORT}`);    // Виводить повідомлення в консоль про те, що сервер запущено і слухає вказаний порт.
// })
