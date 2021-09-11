export const getUTCDate = (epoch?: boolean) => {
  if(epoch) {
    return new Date().getTime();
  }

  return new Date().toUTCString();
}

export const addHours = (hours: number, date = new Date(), utc = false, epoch = false) => {

  date.setHours(date.getHours() + hours);

  return returnDate(date, utc, epoch)
}

export const addMinutes = (mins: number, date = new Date(), utc = false, epoch = false) => {

  date.setMinutes(date.getMinutes() + mins);

  return returnDate(date, utc, epoch)
}

export const addSeconds = (secs: number, date = new Date(), utc = false, epoch = false) => {

  date.setSeconds(date.getSeconds() + secs);

  return returnDate(date, utc, epoch)
}

const returnDate = (date: Date, utc: boolean, epoch:boolean) => {
  if(epoch) {
    return date.getTime();
  }else if(utc) {
      return date.toUTCString();
  }
  return date;
}