const namespace = "el";

function _bem(block: string, modifier?: string) {
  let cls = `${namespace}-${block}`;
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}

export const useNamespace = (block: string) => {
  const m = (modifier: string) => {
    return _bem(block, modifier);
  };
  return {
    m,
  };
};
