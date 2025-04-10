module.exports = function formatSize(bites) {
  const bitesNum = Number(bites);
  if (bitesNum < 1000000) {
    return `${(bitesNum / 1000).toFixed(2)} MB`;
  } else {
    return `${(bitesNum / 1000000).toFixed(2)} GB`;
  }
};
