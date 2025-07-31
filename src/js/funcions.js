import { RESULT } from './constResults';
import {
	inputAgainElement,
	inputPaperElement,
	lblResElement,
	lblScoreElement,
	lblScoreHouseElement,
} from './dom';
import { stylesButtonsGame, stylesSelWinner } from './funcionStyles';

const LS = localStorage;
let contadorHumanWin = 0;
let contadorHouseWin = 0;
const listOptions = [...inputPaperElement.children];

const getLS = key => {
	const data = LS.getItem(key);

	if (!data) {
		console.log(`No found data with ${key}`);
		return;
	}

	const formatData = JSON.parse(data);

	return formatData;
};

const setLS = object => {
	const keyUser = Object.keys(object)[0];
	const keyWinner = Object.keys(object[keyUser])[0];
	const valueWiner = Object.values(object[keyUser])[0];

	const data = getLS(keyUser) || { human: 0, machine: 0 };
	data[keyWinner] = valueWiner;

	const sendData = JSON.stringify(data);

	LS.setItem(keyUser, sendData);
};

const resetLS = () => {
	const data = { human: 0, machine: 0 };
	const user = 'user';

	const sendData = JSON.stringify(data);

	LS.setItem(user, sendData);
};

const setStartWinCounter = ({ actCountMachineWin, actCountHumanWin }) => {
	contadorHumanWin = actCountHumanWin;
	contadorHouseWin = actCountMachineWin;

	lblScoreElement.textContent = contadorHumanWin;
	lblScoreHouseElement.textContent = contadorHouseWin;
};

const numeroAleatorio = (max, min) =>
	Math.floor(Math.random() * (max + 1 - min) + min);

const playGame = ({ selectButton }) => {
	inputAgainElement.disabled = false;
	const numeroMaquina = numeroAleatorio(2, 0);
	stylesButtonsGame({
		numeroMaquina,
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
		contadorHumanWin += 1;
		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		setTimeout(() => (lblScoreElement.textContent = contadorHumanWin), 1000);
		setLS({ user: { human: contadorHumanWin } });

		return;
	}

	contadorHouseWin += 1;
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	setTimeout(() => (lblScoreHouseElement.textContent = contadorHouseWin), 1000);
	setLS({ user: { machine: contadorHouseWin } });
	lblResElement.textContent = 'Perdiste';
	stylesSelWinner(false);
};

export {
	numeroAleatorio,
	playGame,
	getLS,
	setLS,
	listOptions,
	setStartWinCounter,
	resetLS,
};
