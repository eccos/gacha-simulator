/**
 * gacha simulator
 * chance = 1 - (1 - p)^n
 * p = trial percentage
 * n = number of trials
 * configure output
 * i = store every i step(s) in array
 * d = decimal place to round
 */

const inpIds = ['#percentChance', '#numTrial', '#step', '#fixedDec'];
/** @type {HTMLInputElement[]} */
const inps = inpIds.map(id => document.querySelector(id));
const [inpPercentChance, inpNumTrial, inpStep, inpFixedDec] = inps;
inps.forEach((inp) => {
    inp.addEventListener("change", updateDOM);
});
/** @type {HTMLDivElement} */
const elResult = document.querySelector("#result");

updateDOM();

function updateDOM() {
    const p = Number(inpPercentChance.value);
    const n = Number(inpNumTrial.value);

    const trialPercents = [];
    for (let i = 1; i < n; i++) {
        trialPercents.push(calcChance(p, i));
    }
    elResult.textContent = calcChance(p, n);
}

function calcChance(trialPercentage, numOfTrials) {
    const [p, n] = [trialPercentage, numOfTrials];
    if (!p || !n) return;
    const chance = (1 - Math.pow((1 - p/100), n)) * 100;
    return chance;
}