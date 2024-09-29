export default function convertNumberToWords(amount) {
  const sglDigit = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const dblDigit = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tensPlace = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const handleTens = (dgt, prevDgt) => {
    return dgt === 0 ? "" : " " + (dgt === 1 ? dblDigit[prevDgt] : tensPlace[dgt]);
  };

  const handleUTLC = (dgt, nxtDgt, denom) => {
    return (dgt !== 0 && nxtDgt !== 1 ? " " + sglDigit[dgt] : "") + (nxtDgt !== 0 || dgt > 0 ? " " + denom : "");
  };

  let str = "";
  let digitIdx = 0;
  let digit = 0;
  let nxtDigit = 0;
  const words = [];

  // Convert amount to string and check for NaN
  amount = amount.toString();
  if (isNaN(parseInt(amount))) {
    str = "";
  } else if (parseInt(amount) > 0 && amount.length <= 10) {
    for (digitIdx = amount.length - 1; digitIdx >= 0; digitIdx--) {
      digit = parseInt(amount[digitIdx], 10);
      nxtDigit = digitIdx > 0 ? parseInt(amount[digitIdx - 1], 10) : 0;
      const pos = amount.length - digitIdx - 1;

      switch (pos) {
        case 0:
          words.push(handleUTLC(digit, nxtDigit, ""));
          break;
        case 1:
          words.push(handleTens(digit, parseInt(amount[digitIdx + 1], 10)));
          break;
        case 2:
          words.push(digit !== 0 ? " " + sglDigit[digit] + " Hundred" + (parseInt(amount[digitIdx + 1], 10) !== 0 && parseInt(amount[digitIdx + 2], 10) !== 0 ? " and" : "") : "");
          break;
        case 3:
          words.push(handleUTLC(digit, nxtDigit, "Thousand"));
          break;
        case 4:
          words.push(handleTens(digit, parseInt(amount[digitIdx + 1], 10)));
          break;
        case 5:
          words.push(handleUTLC(digit, nxtDigit, "Lakh"));
          break;
        case 6:
          words.push(handleTens(digit, parseInt(amount[digitIdx + 1], 10)));
          break;
        case 7:
          words.push(handleUTLC(digit, nxtDigit, "Crore"));
          break;
        case 8:
          words.push(handleTens(digit, parseInt(amount[digitIdx + 1], 10)));
          break;
        case 9:
          words.push(digit !== 0 ? " " + sglDigit[digit] + " Hundred" + (parseInt(amount[digitIdx + 1], 10) !== 0 || parseInt(amount[digitIdx + 2], 10) !== 0 ? " and" : " Crore") : "");
          break;
        default:
          // No default action needed, but ensuring all cases are covered
          break;
      }
    }
    str = words.reverse().join("");
  } else {
    str = "";
  }
  return str;
}