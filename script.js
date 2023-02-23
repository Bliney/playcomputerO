let butonat = document.querySelectorAll('.btn_option');
let loja = ['', '', '', '', '', '', '', '', ''];
let popup = document.getElementById("popup")
let restart = document.getElementById("restart");
let piketELojtarit1 = document.getElementById("piketELojtarit1");
let piketELojtarit2 = document.getElementById("piketELojtarit2");

let Piket1 = 0;
let Piket2 = 0;

let LojtariIRadhes = 'O';
let LojaPerfundon = false; 

butonat.forEach((buton, indeksi) => {
  buton.addEventListener('click', () => {
    if (!LojaPerfundon && loja[indeksi] === '') {
      loja[indeksi] = LojtariIRadhes;
      buton.textContent = LojtariIRadhes;
      buton.style.color = LojtariIRadhes === 'X' ? '#000000' : '#000000'; 
      if (ShikoPerFitues()) {
        MbaroLojen(LojtariIRadhes + ' wins!');
      } else if (ShikoPerBarazim()) {
        MbaroLojen('It\'s a draw!');
      } else {
        NdrroLojtarin();
        LevizjaEKompjuterit();
      }
    }
  });
});

function NdrroLojtarin(){
  if(LojtariIRadhes == "X") {
    LojtariIRadhes = "O";
  } else {
    LojtariIRadhes = "X";
  }
}

function LevizjaEKompjuterit() {
  if (!LojaPerfundon) {
    let randomindeks;
    do {
      randomindeks = Math.floor(Math.random() * 9);
    } while (loja[randomindeks] !== '');
    loja[randomindeks] = LojtariIRadhes;
    butonat[randomindeks].textContent = LojtariIRadhes;
    butonat[randomindeks].style.color = LojtariIRadhes === 'X' ? '#000000' : '#000000';

    if (ShikoPerFitues()) {
      MbaroLojen(LojtariIRadhes + ' wins!');
    } else if (ShikoPerBarazim()) {
      MbaroLojen('It\'s a draw!');
    } else {
      NdrroLojtarin();
    }
  }
}

function ShikoPerFitues() {
  return ShikoHorizontalisht() || ShikoVertikalisht() || ShikoDiagonale();
}

function ShikoHorizontalisht() {
  for (let i = 0; i < 9; i += 3) {
    if (loja[i] !== '' && loja[i] === loja[i + 1] && loja[i] === loja[i + 2]) {
      numeroPiket()
      return true;
    }
  }
  return false;
}

function ShikoVertikalisht() {
  for (let i = 0; i < 3; i++) {
    if (loja[i] !== '' && loja[i] === loja[i + 3] && loja[i] === loja[i + 6]) {
      numeroPiket()
      return true;
    }
  }
  return false;
}

function ShikoDiagonale() {
  if (loja[0] !== '' && loja[0] === loja[4] && loja[0] === loja[8]) {
    numeroPiket()
    return true;
  }
  if (loja[2] !== '' && loja[2] === loja[4] && loja[2] === loja[6]) {
    numeroPiket()
    return true;
  }
  return false;
}

function ShikoPerBarazim() {
  return loja.every((value) => value !== '');
}

function MbaroLojen(message) {
  LojaPerfundon = true;
  const popup = document.getElementById('popup');
  const messageElement = document.getElementById('mesazhi');
  messageElement.textContent = message;
  popup.classList.remove('hide');
}

restart.addEventListener('click', () => {
  loja.fill('');
  butonat.forEach((buton) => {
    buton.textContent = '';
    buton.style.color = '#000000';
  });
  LojtariIRadhes = 'X';
  LojaPerfundon = false;
popup.classList.add('hide');
  LevizjaEKompjuterit();
});

function numeroPiket(){
  if(LojtariIRadhes == "X") {
    Piket1 += 1;
    piketELojtarit1.innerHTML = Piket1;
  } else {
    Piket2 += 1;
    piketELojtarit2.innerHTML = Piket2
  }
}