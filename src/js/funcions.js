import { RESULT } from './constResults';
import {
	inputAgainElement,
	inputPaperElement,
	lblResElement,
	lblScoreElement,
} from './dom';

const numeroAleatorio = (max, min) =>
	Math.floor(Math.random() * (max + 1 - min) + min);

let contadorWin = 0;
const listOptions = [...inputPaperElement.children];

const playGame = ({ selectButton }) => {
	console.log(selectButton);
	const numeroMaquina = numeroAleatorio(2, 0);
	const resultWin = RESULT[selectButton].ganar.some(
		botton => botton === listOptions[numeroMaquina].dataset.button,
	);
	const resultDraw = RESULT[selectButton].empatar.some(
		botton => botton === listOptions[numeroMaquina].dataset.button,
	);

	if (resultDraw) {
		lblResElement.textContent = 'Empate';
	} else if (resultWin) {
		lblResElement.textContent = 'Gano';
		contadorWin += 1;
		lblScoreElement.textContent = contadorWin;
	} else {
		lblResElement.textContent = 'Perdiste';
	}

	inputAgainElement.disabled = false;
};

export { numeroAleatorio, playGame, listOptions };
