export const getUTCDate = (epoch?: boolean) => {
  if(epoch) {
    return new Date().getTime();
  }

  return new Date().toUTCString();
}