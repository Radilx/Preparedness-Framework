# Quantifying Unknowns

Imagine it's your first day on the team, and you have until EOD to prepare an lightweight interactive report on potential strategies for detecting and triaging *unknown unknowns*.

This repository serves as an example of how one might approach such a problem.  

## Methodology 

Given a particular prompt, jailbreak, or use case, this tool generates a Risk Score based on the following:

- Whether the use case represents a potentially catastrophic risk along any of three axes (focused, neutral, and targeted attacks)
- The degree to which it is already captured in our existing Tracked Risk Categories

If a use case is not captured well by our existing Tracked Risk Categories, and is potentially catastrophic, this could indicate that a new Tracked Risk Category is needed. However, in practice, this system would need to be deployed at scale, with certain thresholds for alerting. This repository simply contains an MVP of the demo.

|Landing Page|Sample Report|
|------|-----|
|![Screenshot 2024-05-08 at 12 59 00 PM](https://github.com/Radilx/Preparedness-Framework/assets/22382740/ca8a90bf-aa25-41ea-9b77-73366fd7e4d6)|![Screenshot 2024-05-08 at 12 58 35 PM](https://github.com/Radilx/Preparedness-Framework/assets/22382740/a97899aa-ea50-4b8a-afe7-32d0344fea24)|

## Future Work


In the future, we could improve this system by:
- Considering existing evals when determining whether a use case represents a catastrophic unknown
- Building out an automated detection system for concerning unknowns
- Giving more consideration to the ideal environment for threat actors in the risk analysis process
    - Allowing the user to interact with the system and adjust the resources, domain knowledge, etc of the threat actor
- Spending more time on the layout, to ensure we are communicating clearly and concisely to stakeholders
- A final recommendation as to whether a new category is needed
