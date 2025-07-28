import {
	inpCloseElement,
	inpRulesElement,
	inputAgainElement,
	inputPaperElement,
	resMaquinaElement,
	rootStyles,
} from './dom';
import { listOptions, numeroAleatorio, playGame } from './funcions';

inputPaperElement.addEventListener('click', event => {
	if (event.target.tagName !== 'DIV') {
		rootStyles.setProperty('--divButtonsDisplay', 'none');
		rootStyles.setProperty('--divResDisplay', 'flex');
		rootStyles.setProperty('--showAgain', '1');

		const numeroMaquina = numeroAleatorio(2, 0);

		resMaquinaElement.classList.add(
			`maquina--${listOptions[numeroMaquina].dataset.button}`,
		);
		const buttonPressed = event.target.dataset.button;
		playGame({ selectButton: buttonPressed });
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
