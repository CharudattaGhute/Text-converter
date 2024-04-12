function uppcase() {
  const upper = document.getElementById("textarea").value;
  let result = upper.toUpperCase();
  document.getElementById("textarea").value = result;
}

function lowercase() {
  const lower = document.getElementById("textarea").value;
  let resultlower = lower.toLowerCase();
  document.getElementById("textarea").value = resultlower;
}
function trim() {
  const trimchr = document.getElementById("textarea").value;
  let resulttrim = trimchr.trim();
  document.getElementById("textarea").value = resulttrim;
}
function concat() {
  const concatstr = document.getElementById("textarea").value;
  const concatstr2 = prompt("Enter the string:");
  let resultconcat = concatstr.concat(concatstr2);
  document.getElementById("textarea").value = resultconcat;
  console.log(resultconcat);
}

function slice() {
  const slicestr = document.getElementById("textarea").value;
  const inputindex = prompt("ENter the index :");

  const start = parseInt(inputindex);
  const end = start + 1;

  const resultslice = slicestr.slice(start, end);
  document.getElementById("textarea").value = resultslice;
}
function length() {
  const strlength = document.getElementById("textarea").value;
  let resultlength = strlength.length;
  document.getElementById("textarea").value = resultlength;
}
function split() {
  const splitstr = document.getElementById("textarea").value;
  let resultsplit = splitstr.split("");
  document.getElementById("textarea").value = resultsplit;
}
function charat() {
  const chrstr = document.getElementById("textarea").value;
  let resultchr = prompt("Enter the inde:");

  let chrstrart = chrstr.charAt(resultchr);
  document.getElementById("textarea").value = chrstrart;
}
function countChar() {
  const text = document.getElementById("textarea").value;
  const charToCount = prompt("Enter the character to count:");
  const counttext = (text.match(new RegExp(charToCount, "g")) || []).length;
  document.getElementById("textarea").value = counttext;
}
function replace() {
  const replacestr = document.getElementById("textarea").value;
  const resultreplace = replacestr.replaceAll("the", "is");
  document.getElementById("textarea").value = resultreplace;
}
function hello() {
  let result = document.getElementById("textarea").value;
  let vouwelcount = 0;
  for (const char of result) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vouwelcount++;
    }
  }
  document.getElementById("textarea").value = vouwelcount;
}
