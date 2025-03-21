
function analyzeDeal() {
    const appraisedValue = parseFloat(document.getElementById('appraisedValue').value);
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const rehabBudget = parseFloat(document.getElementById('rehabBudget').value);
    const legalFees = parseFloat(document.getElementById('legalFees').value);
    const holdingCosts = parseFloat(document.getElementById('holdingCosts').value);
    const timeline = parseFloat(document.getElementById('timeline').value);
    const arv = parseFloat(document.getElementById('arv').value);

    const totalInvestment = purchasePrice + rehabBudget + legalFees + (holdingCosts * timeline);
    const estimatedProfit = arv - totalInvestment;
    const roi = ((estimatedProfit / totalInvestment) * 100).toFixed(2);

    document.getElementById('results').innerHTML = `
        <h3>Analysis Results</h3>
        <p><strong>Total Investment:</strong> $${totalInvestment.toLocaleString()}</p>
        <p><strong>Estimated Profit:</strong> $${estimatedProfit.toLocaleString()}</p>
        <p><strong>Estimated ROI:</strong> ${roi}%</p>
    `;
}
