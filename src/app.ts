import { Context, Telegraf } from "telegraf";
import { Update } from "typegram";
import { getTimezoneTime, timeLeftInDublin } from "./utils";

const bot: Telegraf<Context<Update>> = new Telegraf(
  process.env.BOT_TOKEN as string
);

bot.command(["pablitoindublin"], (ctx) => {
  return ctx.reply(
    `⌛ Tiempo en Montevideo y Dublin ⌛\n\n🇺🇾 Montevideo: ${getTimezoneTime()}\n🇮🇪 Dublin: ${getTimezoneTime(
      0
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
