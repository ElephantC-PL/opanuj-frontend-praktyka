function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    if (input.value) {
      if (Number.isInteger(Number(input.value))) {
        if (
          Number(input.value) > 0 &&
          Number(input.value) < 100 &&
          Number(input.value) % 2 === 0
        ) {
          result.innerHTML = 'Valid';
        } else {         
          result.innerHTML = 'Invalid 1';
        }
       // result.innerHTML = 'Valid';
      } else {
        result.innerHTML = 'Invalid 2';
      }
    } else {
      result.innerHTML = 'Invalid 3';
    }
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();

// błąd 1  isInteger -  przyjmował stringa i przez to zwracał zawsze false
// błąd 2  jeden raz nadmiarowo było "result.innerHTML = 'Valid';"
// błąd 3 ifologia
// bład 4 wielokrotne przypisanie innerHTML - duplikacja kodu
// błąd 5 brak rozszerzalności

// zasady walidacji:
// 1 całkowita
// 2 większa od 0
// 3 mniejsza od 100
// 4 podzielna przez 2
