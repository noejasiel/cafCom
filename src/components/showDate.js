export const showDate = (fecha, n=20) => {
  //console.log(fecha, "fecha original");
  if (fecha) {
    let newdate = fecha.split(":");
    let auxHr = 0;
    if (parseInt(newdate[1]) + n < 60) {
      newdate[1] = parseInt(newdate[1]) + n;
    } else {
      auxHr = parseInt(newdate[1]) + n - 60;

      if (parseInt(newdate[0]) + 1 == 13) {
        newdate[0] = 1;
        newdate[0] = parseInt(newdate[0]) + 1;
      } else {
        newdate[0] = parseInt(newdate[0]) + 1;
      }
      newdate[1] = auxHr;
    }
    //console.log(JSON.stringify(newdate));
    return newdate.join(":");
  }
};
