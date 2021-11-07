const formatSize = (size) => {
  // throws NAN Undefined if size = 0
  if (!size) return null;

  const i = Math.floor(Math.log(size) / Math.log(1024));

  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    "" +
    ["B", "KB", "MB", "GB", "TB"][i]
  );
};

export default formatSize;
