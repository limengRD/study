const dt = new Date();
const y = dt.getFullYear();
const m = dt.getMonth()+1;
const d = dt.getDate().toString().padStart(2, '0');

const hh = dt.getHours();
const mm = dt.getMinutes();
const ss = dt.getSeconds().toString().padStart();

const dateStr = `${y}-${m}-${d} ${hh}:${mm}:${ss}`
console.log(dateStr)