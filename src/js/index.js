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

const botonesEfects = {
	paper: {
		setScale: '--scalePaper',
		setMoveY: '--movePaperY',
		setMoveX: '--movePaperX',
		valMoveY: '20cqh',
		valMoveX: '-9cqw',
		setOpacity: '--paperOpacity',
	},
	rock: {
		setScale: '--scaleRock',
		setMoveY: '--moveRockY',
		setMoveX: '--moveRockX',
		valMoveY: '-20cqh',
		valMoveX: '-112%',
		setOpacity: '--rockOpacity',
	},
	scissors: {
		setScale: '--scaleScissors',
		setMoveY: '--moveScissorsY',
		setMoveX: '--moveScissorsX',
		valMoveY: '20cqh',
		valMoveX: '-35cqw',
		setOpacity: '--scissorsOpacity',
	},
	valScale: '1.4',
	valOpacity: '0',
};

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
		rootStyles.setProperty(
			botonesEfects[event.target.dataset.button].setScale,
			botonesEfects.valScale,
		);
		rootStyles.setProperty(
			botonesEfects[event.target.dataset.button].setMoveY,
			botonesEfects[event.target.dataset.button].valMoveY,
		);
		rootStyles.setProperty(
			botonesEfects[event.target.dataset.button].setMoveX,
			botonesEfects[event.target.dataset.button].valMoveX,
		);
		rootStyles.setProperty('--scaleButtonRobot', botonesEfects.valScale);
		rootStyles.setProperty('--moveButtonRobotY', '20cqh');
		rootStyles.setProperty('--moveButtonRobotX', '22cqw');

		rootStyles.setProperty('--buttonRobotOpacity', '1');
		rootStyles.setProperty('--showAgain', '1');
		rootStyles.setProperty('--showMaquina', '0');

		listOptions.forEach(element => {
			element.disabled = true;
			if (event.target.dataset.button !== element.dataset.button) {
				rootStyles.setProperty(
					botonesEfects[element.dataset.button].setOpacity,
					botonesEfects.valOpacity,
				);
			}
		});

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

		rootStyles.setProperty('--backDivRes', '10');
	}
});

inputAgainElement.addEventListener('click', event => {
	rootStyles.setProperty('--scaleButtonRobot', '1');
	rootStyles.setProperty('--moveButtonRobotY', '0%');

	rootStyles.setProperty('--buttonRobotOpacity', '0');
	rootStyles.setProperty('--showAgain', '0');
	rootStyles.setProperty('--showMaquina', '1');
	rootStyles.setProperty('--backDivRes', '0');
	inputAgainElement.disabled = true;

	listOptions.forEach(element => {
		element.disabled = false;

		rootStyles.setProperty(
			botonesEfects[element.dataset.button].setOpacity,
			'1',
		);
		rootStyles.setProperty(botonesEfects[element.dataset.button].setScale, '1');
		rootStyles.setProperty(
			botonesEfects[element.dataset.button].setMoveY,
			'0%',
		);
		rootStyles.setProperty(
			botonesEfects[element.dataset.button].setMoveX,
			'0%',
		);

		resMaquinaElement.classList.remove(`maquina--${element.dataset.button}`);
	});
});

inpRulesElement.addEventListener('click', event => {
	rootStyles.setProperty('--rulesMoveY', '0');
	rootStyles.setProperty('--back', '20');
	rootStyles.setProperty('--backOpacity', '1');
});

inpCloseElement.addEventListener('click', event => {
	rootStyles.setProperty('--rulesMoveY', '-2000px');
	rootStyles.setProperty('--back', '-20');
	rootStyles.setProperty('--backOpacity', '0');
});
