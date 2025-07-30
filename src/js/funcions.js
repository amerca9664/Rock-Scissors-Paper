import { RESULT } from './constResults';
import {
	inputAgainElement,
	inputPaperElement,
	lblResElement,
	lblScoreElement,
} from './dom';
import { stylesButtonsGame, stylesSelWinner } from './funcionStyles';

const LS = localStorage;

const getLS = key => {
	const data = LS.getItem(key);

	if (!data) {
		return console.log(`No found data with ${key}`);
	}

	const formatData = JSON.parse(data);

	return formatData;
};

const setLS = object => {
	const sendData = JSON.stringify(object.user);

	LS.setItem(Object.keys(object), sendData);
};

let contadorWin = 0;

const setStarWinCounter = value => {
	contadorWin = value;
	lblScoreElement.textContent = contadorWin;
};

const numeroAleatorio = (max, min) =>
	Math.floor(Math.random() * (max + 1 - min) + min);

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
		setLS({ user: { human: contadorWin, machine: 0 } });

		return;
	}

	lblResElement.textContent = 'Perdiste';
	stylesSelWinner(false);
};

export {
	numeroAleatorio,
	playGame,
	getLS,
	setLS,
	listOptions,
	setStarWinCounter,
};
