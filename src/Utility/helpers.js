/**Formats an input number(amount) to money-formatted string */
function formatCurrency(amount) {
  // RegEx from:
  // https://stackoverflow.com/questions/49261076/applying-currency-format-using-replace-and-a-regular-expression
  let currencyString = amount.toString();
  currencyString =
    "$" + currencyString.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, "$1,");

  return currencyString;
}

export { formatCurrency };
