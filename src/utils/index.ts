// Uruguay's offset is UTC-03 so that's the default value
export function getTimezoneTime(countryOffset = -3) {
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;

  const utcTime = localTime + localOffset;
  const countryTime = utcTime + 3600000 * countryOffset;

  return new Date(countryTime).toLocaleString().split(", ")[1];
}

export function timeLeftInDublin() {
  const dayPablitoComesBack = new Date(2022, 11, 10);
  const today = new Date();

  const timeLeft = dayPablitoComesBack.getTime() - today.getTime();
  const daysLeft = Math.round(timeLeft / (1000 * 3600 * 24));

  return `Falta${daysLeft > 1 ? "n" : ""} ${daysLeft} ${
    daysLeft > 1 ? "días" : "día"
  } para que Pablito vuelva a Montevideo`;
}
