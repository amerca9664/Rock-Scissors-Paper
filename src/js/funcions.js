import { RESULT } from './constResults';
import {
	inputAgainElement,
	inputPaperElement,
	lblResElement,
	lblScoreElement,
} from './dom';
import { stylesButtonsGame, stylesSelWinner } from './funcionStyles';

const numeroAleatorio = (max, min) =>
	Math.floor(Math.random() * (max + 1 - min) + min);

let contadorWin = 0;
const listOptions = [...inputPaperElement.children];

const playGame = ({ selectButton }) => {
	inputAgainElement.disabled = false;
	const numeroMaquina = numeroAleatorio(2, 0);
	stylesButtonsGame({
		numeroMaquina: numeroMaquina,
		humanChoose: selectButton,
	});

	const resultWin = RESULT[selectButton].ganar.some(
		botton => botton === listOptions[numeroMaquina].dataset.button,
	);
	const resultDraw = RESULT[selectButton].empatar.some(
		botton => botton === listOptions[numeroMaquina].dataset.button,
	);

	if (resultDraw) {
		lblResElement.textContent = 'Empate';
		stylesSelWinner();
		return;
	}
	if (resultWin) {
		lblResElement.textContent = 'Gano';
		stylesSelWinner(true);
		contadorWin += 1;
		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		setTimeout(() => (lblScoreElement.textContent = contadorWin), 1000);

		return;
	}

	lblResElement.textContent = 'Perdiste';
	stylesSelWinner(false);
};

export { numeroAleatorio, playGame, listOptions };
