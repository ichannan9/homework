function LottoNumbers() {
  const numbers = [];

  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 46);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers.sort((a, b) => a - b);
}
console.log(LottoNumbers());
