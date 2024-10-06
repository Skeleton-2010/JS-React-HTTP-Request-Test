const randomID = (l) => {
  const set =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
  const n = set.length;
  let id = "";
  for (let c = 0; c < l; c++) {
    id += set[Math.floor(Math.random() * n)];
  }
  return id;
};

export default randomID;
