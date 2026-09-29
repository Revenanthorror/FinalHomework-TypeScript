const income: number = 50000;
const expenses: number = 30000;
const savings: number = 10000;

const netIncome: number = income - expenses;
const remaining: number = netIncome - savings;

console.log("Общий доход (income):", income);
console.log("Общий расход (expenses):", expenses);
console.log("Сбережения (savings):", savings);
console.log("Чистый доход (netIncome):", netIncome);
console.log("Остаток (remaining):", remaining);
