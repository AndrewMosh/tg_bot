// const TelegramBot = require("node-telegram-bot-api");
// const axios = require("axios");

// // Ваш токен для доступа к Telegram API
const token = "сюды токен";

// // Создание экземпляра бота
// const bot = new TelegramBot(token, { polling: true });

// // Обработка команды /start
// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, "/weather + город");
// });

// // Обработчик команды получения погоды
// bot.onText(/\/weather (.+)/, async (msg, match) => {
//   const location = match[1];

//   const apiKey = "сюды ключ апи";
//   const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

//   try {
//     const response = await axios.get(url);

//     if (response.status === 200) {
//       const weatherData = response.data.current;

//       // Отправить информацию о погоде обратно пользователю
//       bot.sendMessage(
//         msg.chat.id,
//         `Погода в ${location}:` +
//           `\nТемпература: ${weatherData.temp_c}°C` +
//           `\nОщущается как: ${weatherData.feelslike_c}°C` +
//           `\nПогодные условия: ${weatherData.condition.text}`
//       );
//     } else {
//       bot.sendMessage(msg.chat.id, "Произошла ошибка при получении погоды.");
//     }
//   } catch (error) {
//     bot.sendMessage(msg.chat.id, "Произошла ошибка при получении погоды.");
//   }
// });
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// const { Telegraf } = require('telegraf');
// const words = [];
// let currentWord = "";
// const bot = new Telegraf('YOUR_BOT_TOKEN');

// bot.start((ctx) => {
//   ctx.reply(
//     'Добро пожаловать в игру "Угадай слово"! Я загадал одно из трех слов: apple, banana, orange. Выбери одну букву и посмотрим, есть ли она в слове.'
//   );
//   currentWord = words[Math.floor(Math.random() * words.length)];
// });

// bot.hears(/^([a-zа-я])$/i, (ctx) => {
//   const letter = ctx.match[1].toLowerCase();
//   if (currentWord.includes(letter)) {
//     ctx.reply(`Отлично, буква "${letter}" есть в загаданном слове!`);
//   } else {
//     ctx.reply(
//       `К сожалению, буквы "${letter}" нет в загаданном слове, попробуйте еще раз.`
//     );
//   }
// });

// bot.launch();

const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const bot = new Telegraf(token);
bot.command("oldschool", (ctx) => ctx.reply("Hello"));
bot.command("hipster", Telegraf.reply("λ"));
bot.launch();

// let bitch = [
//   "bitch",
//   "whore",
//   "dick",
//   "faggot",
//   "pussy",
//   "asshole",
//   "fuck",
//   "shit",
//   "ass",
//   "cock",
//   "penis",
//   "cunt",
// ];

// bot.start((ctx) => ctx.reply("Welcome"));
// bot.help((ctx) => ctx.reply("Send me a sticker"));
// bot.on(message("sticker"), (ctx) => ctx.reply("👍"));
// bot.hears("hi", (ctx) =>
//   ctx.reply("hi, " + bitch[Math.floor(Math.random() * bitch.length)])
// );
// bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
