const inputPaperElement = document.getElementById('buttons');
const rootStyles = document.documentElement.style;
const resMaquinaElement = document.getElementById('result');
const lblResElement = document.getElementById('lblResult');
const inputAgainElement = document.getElementById('again');
const divResultElement = document.getElementById('btnResult');
const lblScoreElement = document.getElementById('score');
const inpRulesElement = document.getElementById('btnRules');
const inpCloseElement = document.getElementById('btnClose');

const numeroAleatorio = (max, min) =>
	Math.floor(Math.random() * (max + 1 - min) + min);

const result = {
	paper: {
		ganar: ['rock'],
		empatar: ['paper'],
	},
	rock: {
		ganar: ['scissors'],
		empatar: ['rock'],
	},
	scissors: {
		ganar: ['paper'],
		empatar: ['scissors'],
	},
};
let contadorWin = 0;
const listOptions = [...inputPaperElement.children];

inputPaperElement.addEventListener('click', event => {
	if (event.target.tagName !== 'DIV') {
		rootStyles.setProperty('--divButtonsDisplay', 'none');
		rootStyles.setProperty('--divResDisplay', 'flex');
		rootStyles.setProperty('--showAgain', '1');

		// listOptions.forEach(element => {
		// 	element.disabled = true;
		// 	if (event.target.dataset.button !== element.dataset.button) {
		// 		rootStyles.setProperty(
		// 			botonesEfects[element.dataset.button].setOpacity,
		// 			botonesEfects.valOpacity,
		// 		);
		// 	}
		// });

		const numeroMaquina = numeroAleatorio(2, 0);

		resMaquinaElement.classList.add(
			`maquina--${listOptions[numeroMaquina].dataset.button}`,
		);

		const resultWin = result[event.target.dataset.button].ganar.some(
			botton => botton === listOptions[numeroMaquina].dataset.button,
		);
		const resultDraw = result[event.target.dataset.button].empatar.some(
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
	}
});

inputAgainElement.addEventListener('click', () => {
	rootStyles.setProperty('--showAgain', '0');

	rootStyles.setProperty('--divButtonsDisplay', 'flex');
	rootStyles.setProperty('--divResDisplay', 'none');

	inputAgainElement.disabled = true;

	listOptions.forEach(element => {
		// 	element.disabled = false;

		// 	rootStyles.setProperty(
		// 		botonesEfects[element.dataset.button].setOpacity,
		// 		'1',
		// 	);
		// 	rootStyles.setProperty(botonesEfects[element.dataset.button].setScale, '1');
		// 	rootStyles.setProperty(
		// 		botonesEfects[element.dataset.button].setMoveY,
		// 		'0%',
		// 	);
		// 	rootStyles.setProperty(
		// 		botonesEfects[element.dataset.button].setMoveX,
		// 		'0%',
		// 	);

		resMaquinaElement.classList.remove(`maquina--${element.dataset.button}`);
	});
});

inpRulesElement.addEventListener('click', () => {
	rootStyles.setProperty('--rulesMoveY', '0');
	rootStyles.setProperty('--back', '20');
	rootStyles.setProperty('--backOpacity', '1');
});

inpCloseElement.addEventListener('click', () => {
	rootStyles.setProperty('--rulesMoveY', '-2000px');
	rootStyles.setProperty('--back', '-20');
	rootStyles.setProperty('--backOpacity', '0');
});
