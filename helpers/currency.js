const format = (value) => {
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });
  return formatter.format(value);
};

module.exports = { format };
