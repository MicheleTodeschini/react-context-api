import { createContext, useState } from "react";

const budgetContext = createContext()

const [budgetMode, setBudgetMode] = useState(false)

export default BudgetContext;