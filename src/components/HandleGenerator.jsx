function LCG(seed) {
  const m = 0x80000000;
  const a = 1103515245;
  const c = 12345;

  return function () {
    seed = (a * seed + c) % m;
    return seed / (m - 1);
  };
}

const generateHandle = () => {
  let handle = "h";
  const characters = "abcdefg0123456789";

  const seed = Date.now() + Math.floor(Math.random() * 1000);
  const random = LCG(seed);

  for (let i = 0; i < 39; i++) {
    handle += characters.charAt(Math.floor(random() * characters.length));
  }

  return handle;
};

const HandleGenerator = () => {
  const handle = generateHandle();
  return handle;
};

export default HandleGenerator;
