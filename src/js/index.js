import {
	inpCloseElement,
	inpRulesElement,
	inputAgainElement,
	inputPaperElement,
	rootStyles,
} from './dom';
import { stylesResetGame } from './funcionStyles';
import { getLS, playGame, setStarWinCounter } from './funcions';

window.addEventListener('load', () => {
	const actCountWin = getLS('user')?.human || 0;

	setStarWinCounter(actCountWin);
});

inputPaperElement.addEventListener('click', event => {
	if (event.target.tagName !== 'DIV') {
		const buttonPressed = event.target.dataset.button;
		playGame({ selectButton: buttonPressed });
	}
});

inputAgainElement.addEventListener('click', () => {
	inputAgainElement.disabled = true;
	stylesResetGame();
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
