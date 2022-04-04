function hash(key = '') {
  let hash = 0;
  for (let char of key) {
    hash = (hash << 5) - hash + char.charCodeAt();
    hash |= 0;
  }

  return hash
}

console.log(hash('H3Ll#L@kfah1!'));
