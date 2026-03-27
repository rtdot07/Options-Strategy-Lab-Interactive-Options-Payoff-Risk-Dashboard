# Options Strategy Lab (Interactive Options Payoff & Risk Dashboard)
## Project Objective
The objective of this project is to build an interactive, strategy-first options learning platform that helps users construct multi-leg vanilla option strategies and instantly understand outcomes (payoff, break-evens, and maximum profit/loss) using a transparent, educational UI.

## Inputs / Data Used
- Built-in strategy templates (14 predefined strategies) and a custom leg builder
- User-provided market assumptions (Spot, Volatility, Risk-free rate, Days to expiry)
- Black–Scholes-based fair premium estimation for each option leg (for UX/demo pricing)

## Dataset Used
- No external dataset is required: the app generates payoff/risk analytics from the user inputs + built-in strategy templates.

## Key Performance Indicators (KPIs) & Analysis Questions
• Where are the break-even point(s) at expiry, and how do they shift as you change strikes/premiums/legs?  
• What is the maximum profit vs maximum loss for the full strategy (not just an individual leg)?  
• Is the position a net debit or net credit to open, and how does that influence interpretation?  
• How does the payoff curve shape change across strategy types (income, protection, directional, volatility)?  
• Which leg(s) are driving the biggest risk concentration (e.g., short options creating large downside)?  
• Does the max gain or max loss occur near the current spot, and what that implies about the strategy setup?  
• How does volatility and time-to-expiry change the estimated fair premiums (and therefore the payoff)?  
• For a new user: how can you read the chart (spot line, zero P&L line, break-evens, and max profit/loss lines)?

## Process
• Strategy-first workflow: users select a template (or start custom) and then edit legs (buy/sell calls/puts, strikes, quantity, premium).  
• Premium estimation: each leg’s fair premium is calculated using a Black–Scholes-based approach with the user’s inputs.  
• Payoff analytics at expiry:
  - Generates a payoff curve across a spot range
  - Detects break-even point(s) where payoff crosses zero
  - Computes approximate max profit and max loss from the curve
• Risk transparency: summarizes max loss/max gain, net debit/credit, and provides short interpretation guidance for learning.

## Tech Stack
- React 19 + TypeScript + Vite
- Tailwind CSS
- Recharts (payoff chart & annotations)
- Black–Scholes-based pricing (demo/educational premium estimation)

## Getting Started
1. Open the `options-platform` folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run locally:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173`

## Dashboard (Demo)
Add your real screenshot/GIF after uploading to GitHub.

### Screenshot / GIF placeholders
`./docs/options-strategy-lab-demo.gif`
`./docs/options-strategy-lab-dashboard.png`

Example:
![Options Strategy Lab demo](./docs/options-strategy-lab-demo.gif)

### (Optional) Direct image links (recommended after upload)
- Dashboard image: `https://github.com/<your-username>/<your-repo>/blob/main/docs/options-strategy-lab-dashboard.png`

Dashboard <a href="https://github.com/<your-username>/<your-repo>/blob/main/docs/options-strategy-lab-dashboard.png">View Dashboard</a>

Example direct embed (replace with your own `user-attachments` link):
<img width="1029" height="662" alt="options-strategy-dashboard" src="https://github.com/user-attachments/assets/<replace-with-your-asset-id>" />

## Project Insights
• The platform shows payoff at expiry with clearly labeled axes, break-even reference lines, and explicit max profit/max loss lines for fast risk comprehension.  
• Users get immediate educational context: risk level, “when to use” guidance, and a reading guide that turns raw numbers into interpretation.  
• The workflow reduces mistakes by offering sensible defaults (spot/volatility/etc.) and a single reset action to restart the workspace.

## Final Conclusion
Options Strategy Lab helps users move from “strategy choice” to “decision-ready understanding” by combining:
1) a strategy builder,
2) an annotated payoff chart, and
3) a risk panel with max outcomes and interpretation.

Replace the GIF/screenshot links with your uploaded assets and the README will be ready for GitHub publishing.

