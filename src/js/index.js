import {
	inpCloseElement,
	inpRulesElement,
	inputAgainElement,
	inputPaperElement,
	resMaquinaElement,
	resultHumanElement,
	rootStyles,
} from './dom';

import { listOptions, playGame } from './funcions';

inputPaperElement.addEventListener('click', event => {
	if (event.target.tagName !== 'DIV') {
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
		resMaquinaElement.classList.remove(`maquina--${element.dataset.button}`);
		resultHumanElement.classList.remove(`maquina--${element.dataset.button}`);
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
