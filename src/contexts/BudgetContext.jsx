import { createContext, useState } from "react";


const BudgetContext = createContext()

export function BudgetProvider() {
    

    const [budgetMode, setBudgetMode] = useState(false)
    
      return (
        <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
        {children}
        </BudgetContext.Provider>
      );
    
      
    }
    
    export default BudgetContext;

