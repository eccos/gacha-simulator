/**
 * gacha simulator
 * chance = 1 - (1 - p)^n
 * p = trial percentage
 * n = number of trials
 * configure output
 * i = store every i step(s) in array
 * d = decimal place to round
 */

const inpIds = ['#percentChance', '#numTrail', '#step', '#fixedDec'];
/** @type {HTMLInputElement[]} */
const inps = inpIds.map(id => document.querySelector(id));
const [inpPercentChance, inpNumTrail, inpStep, inpFixedDec] = inps;
inps.forEach((inp) => {
    inp.addEventListener("change", updateDOM);
});
/** @type {HTMLDivElement} */
const elResult = document.querySelector("#result");

updateDOM();

function updateDOM() {
    const p = Number(inpPercentChance.value);
    const n = Number(inpNumTrail.value);
    elResult.textContent = calcChance(p, n);
}

function calcChance(trialPercentage, numOfTrials) {
    const [p, n] = [trialPercentage, numOfTrials];
    if (!p || !n) return;
    const chance = 1 - Math.pow((1 - p), n);
    return chance;
}