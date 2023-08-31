/**
 * (gacha simulator) Probability of "At Least One"
 * success rate = 1 - (1 - p)^n
 * p = (drop rate) probability of success in a given trial
 * n = (pulls) number of trials
 * configure output
 * s = step(s) specifies the interval between numbers
 * d = decimal place to round
 */

// html elements
/** @type {HTMLDivElement} */
const elResult = document.querySelector("#result");
// inputs
const inpIds = ['#percentChance', '#numTrial', '#step', '#fixedDec'];
/** @type {HTMLInputElement[]} */
const inps = inpIds.map(id => document.querySelector(id));
const [inpPercentChance, inpNumTrial, inpStep, inpFixedDec] = inps;

inps.forEach(inp => inp.addEventListener("input", updateDOM));

// table header row
const thVals = ["Pull", "Success %"];

updateDOM();

function updateDOM() {
    // parse values from inputs. if invalid, set default vals
    const p = Number(inpPercentChance.value) || 1;
    const n = Number(inpNumTrial.value) || 100;
    const s = Number(inpStep.value) || 1;
    const d = Number(inpFixedDec.value) || 2;
    // calc % chance of a successful pull. format as tbl row data
    const trialPercents = [];
    for (let i = s; i <= n; i += s) {
        trialPercents.push([i, calcChance(p, i).toFixed(d)]);
    }
    // create table & append to page
    const tbl = createTable(thVals, trialPercents);
    elResult.innerHTML = null;
    elResult.appendChild(tbl);
}

function calcChance(trialPercentage, numOfTrials) {
    const [p, n] = [trialPercentage, numOfTrials];
    if (!p || !n) return;
    const chance = (1 - Math.pow((1 - p / 100), n)) * 100;
    return chance;
}

/**
 * Creates a table from the passed in data
 * @param {[]} [thVals] array to use as table headers
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
                const cell = row.insertCell();
                cell.textContent = rowVal;
            })
        });
    }
    return tbl;
}
