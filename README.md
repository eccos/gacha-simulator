# Gacha Simulator
[Try Me](https://eccos.github.io/gacha-simulator)  
Calculates the **Success Rate %** for every pull depending on the **Drop Rate %** of an item to get a sense of the **Number of Pulls** needed to get the item.

Uses the Probability of "At Least One" Formula to calculate successes:  
success% = 1 - (1 - p)^n  
p = (drop rate) probability of success in a given trial  
n = (pulls) number of trials

## What is Gacha?
In short, gambling. It's a vending machine mechanic, where every item has a **Drop Rate %**. **Pulls** refer to the number of tries. Rarer items (low drop rate) require more pulls (tries) to earn than common items (high drop rate). More pulls increases the **Success Rate**.
