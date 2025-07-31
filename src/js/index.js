import {
	inpCloseElement,
	inpRulesElement,
	inputAgainElement,
	inputPaperElement,
	rootStyles,
} from './dom';
import { stylesResetGame } from './funcionStyles';
import { getLS, playGame, setStartWinCounter } from './funcions';

window.addEventListener('load', () => {
	const actCountHumanWin = getLS('user')?.human || 0;
	const actCountMachineWin = getLS('user')?.machine || 0;

	setStartWinCounter({ actCountHumanWin, actCountMachineWin });
});

inputPaperElement.addEventListener('click', event => {
	if (event.target.tagName !== 'DIV') {
		const selectButton = event.target.dataset.button;
		playGame({ selectButton });
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
