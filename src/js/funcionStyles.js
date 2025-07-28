import { resMaquinaElement, resultHumanElement, rootStyles } from './dom';
import { listOptions } from './funcions';

const stylesButtonsGame = ({ numeroMaquina, humanChoose }) => {
	rootStyles.setProperty('--divButtonsDisplay', 'none');
	rootStyles.setProperty('--divResDisplay', 'flex');
	rootStyles.setProperty('--showAgain', '1');

	resMaquinaElement.classList.add(
		`maquina--${listOptions[numeroMaquina].dataset.button}`,
	);

	resultHumanElement.classList.add(`maquina--${humanChoose}`);
};

export { stylesButtonsGame };
