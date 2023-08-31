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
/** @type {HTMLDivElement} */
const elResult = document.querySelector("#result");

inps.forEach((inp) => {
    inp.addEventListener("change", updateDOM);
});

updateDOM();

function updateDOM() {
    const p = Number(inpPercentChance.value);
    const n = Number(inpNumTrial.value);

    const trialPercents = [];
    for (let i = 1; i <= n; i++) {
        trialPercents.push([i, calcChance(p, i)]);
    }
    const thVals = ["Trial", "% Chance"];
    const tbl = createTable(thVals, trialPercents);
    elResult.innerHTML = null;
    elResult.appendChild(tbl);
}

/**
 * Creates a table from the passed in data
 * @param {[]} [thVals] array of values to use as table headers
 * @param {[[]]} [trRows] array of arrays to use as table rows
 * @returns {HTMLTableElement}
 */
function createTable(thVals, trRows) {
    const tbl = document.createElement("table");
    if (thVals && thVals.length > 0) {
        const thead = tbl.createTHead();
        const thRow = thead.insertRow();
        thVals.forEach(thVal => {
            const thCell = thRow.appendChild(document.createElement("th"));
            thCell.textContent = thVal;
        });
    }
    if (trRows && trRows.length > 0) {
        const tbody = tbl.createTBody();
        trRows.forEach(trRow => {
            const row = tbody.insertRow();
            trRow.forEach(rowVal => {
                // const cell = row.insertCell();
                // cell.textContent = i + 1;
                const cell = row.insertCell();
                cell.textContent = rowVal;
            })
        });
    }
    return tbl;
}

function calcChance(trialPercentage, numOfTrials) {
    const [p, n] = [trialPercentage, numOfTrials];
    if (!p || !n) return;
    const chance = (1 - Math.pow((1 - p / 100), n)) * 100;
    return chance;
}