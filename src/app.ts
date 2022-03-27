import { Context, Telegraf } from "telegraf";
import { Update } from "typegram";
import { getTimezoneTime, timeLeftInDublin } from "./utils";
import { Telegram } from "telegraf";
import "dotenv/config";

const BOT_TOKEN = process.env["BOT_TOKEN"];

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN must be defined");
}

const telegram = new Telegram(BOT_TOKEN);
telegram.setMyCommands([
  {
    command: "pablitoindublin",
    description: "Diferencia horaria entre Dublin y Montevideo",
  },
  {
    command: "pablitoinmontevideo",
    description: "En cuántos días vuelve Pablito a Montevideo :)",
  },
]);

const bot: Telegraf<Context<Update>> = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(`Usando los siguientes comandos podes ver:

/pablitoindublin - la diferencia horaria de dublin y montevideo
/pablitoinmontevideo - en cuántos días vuelve pablito a montevideo :)`);
});

bot.command(["pablitoindublin"], (ctx) => {
  return ctx.reply(
    `⌛ Tiempo en Montevideo y Dublin ⌛\n\n🇺🇾 Montevideo: ${getTimezoneTime()}\n🇮🇪 Dublin: ${getTimezoneTime(
      1
    )}`
  );
});

bot.command(["pablitoinmontevideo"], (ctx) => {
  return ctx.reply(
    `🛬 ¿En cuánto vuelve Pablito? 🛬\n\n🇺🇾 ${timeLeftInDublin()} 🇺🇾`
  );
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
