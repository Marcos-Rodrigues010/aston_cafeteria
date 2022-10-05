const formatDoubleToMoney = (value) => {
  var format = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  };
  return value.toLocaleString('pt-BR', format);
};

const parseMoneyToDouble = (value) => {
  if (typeof value === 'string') {
    return Number(value.replace('R$', '')
      .replace('.', '')
      .replace(',', '.'));
  }
  return value;
};

const isValidString = str => {
  return str !== null && str !== undefined && str !== "" && str !== " ";
};
export default { formatDoubleToMoney, parseMoneyToDouble, isValidString };