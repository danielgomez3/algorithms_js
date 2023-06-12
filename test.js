const twoPairs = x => {
  return function(y) {
    if (typeof y === 'undefined') {
      y = false;
    }
    return x !== y;
  };
};