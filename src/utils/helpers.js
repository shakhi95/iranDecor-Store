//
export const cent2toman = (cent) => {
  let toman = String(cent * 200);
  const zeros = Math.pow(10, toman.length - 2);
  const first2 = Number(toman.slice(0, 2)) + 1;
  toman = (first2 * zeros).toString();

  const objRegex = new RegExp("(-?[0-9]+)([0-9]{3})");
  while (objRegex.test(toman)) {
    toman = toman.replace(objRegex, "$1/$2");
  }

  return `${toman} تومان`;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};
