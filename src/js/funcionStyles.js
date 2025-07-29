import { resMaquinaElement, resultHumanElement, rootStyles } from './dom';
import { listOptions } from './funcions';

const stylesButtonsGame = ({ numeroMaquina, humanChoose }) => {
	rootStyles.setProperty('--divButtonsDisplay', 'none');
	rootStyles.setProperty('--divResDisplay', 'flex');

	setTimeout(() => {
		resMaquinaElement.classList.add(
			`maquina--${listOptions[numeroMaquina].dataset.button}`,
		);
		rootStyles.setProperty('--showAgain', '1');
		rootStyles.setProperty('--showMaquina', '0');
	}, 50);

	resultHumanElement.classList.add(`maquina--${humanChoose}`);
};

const stylesResetGame = () => {
	rootStyles.setProperty('--showAgain', '0');
	rootStyles.setProperty('--showMaquina', '1');
	rootStyles.setProperty('--divButtonsDisplay', 'flex');
	rootStyles.setProperty('--divResDisplay', 'none');

	listOptions.forEach(element => {
		resMaquinaElement.classList.remove(`maquina--${element.dataset.button}`);
		resultHumanElement.classList.remove(`maquina--${element.dataset.button}`);
	});
};

export { stylesButtonsGame, stylesResetGame };
