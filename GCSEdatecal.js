function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startcounting() {
  const date1 = new Date('5/5/2025');
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))-1;
  const duration = 1
  const interval = (duration / diffDays) * 1000
  for (let i = 0; i <= diffDays; i++) {
    document.getElementById("startcount").innerHTML = String(i) + " days";
    await sleep(interval);

  }
  startextra(diffDays)

}


async function startextra(ddiff) {
  document.getElementById("eqs").style.animation = 'fadein 2s forwards';
  await sleep(1000)
  const weeks = Math.floor(ddiff / 7)
  const days = ddiff % 7
  const months = Math.round(ddiff / 30)
  document.getElementById("start-weeks").innerHTML = weeks + " weeks, " + days + " days";

  document.getElementById("start-months").innerHTML = "or about " + months + " months";
  document.getElementById("start-weeks").style.animation = 'fadein 2s forwards';
  document.getElementById("start-months").style.animation = 'fadein 2s forwards';
}



async function endcounting() {
  const date1 = new Date('6/20/2025');
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const duration = 1
  const interval = (duration / diffDays) * 1000
  for (let j = 0; j <= diffDays; j++) {
    document.getElementById("endcount").innerHTML = String(j) + " days";
    await sleep(interval);

  }
  endextra(diffDays)


}

async function endextra(ddiff) {
  document.getElementById("eqe").style.animation = 'fadein 2s forwards';
  await sleep(1000)
  const weeks = Math.floor(ddiff / 7)
  const days = ddiff % 7
  const months = Math.round(ddiff / 30)
  document.getElementById("end-weeks").innerHTML = weeks + " weeks, " + days + " days";

  document.getElementById("end-months").innerHTML = "or about " + months + " months";
  document.getElementById("end-weeks").style.animation = 'fadein 2s forwards';
  document.getElementById("end-months").style.animation = 'fadein 2s forwards';
}

startcounting()
endcounting()


