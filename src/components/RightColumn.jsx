import Expense from "./Expense";
import Income from "./Income";
import TotalBalanceState from "./TotalBalanceState";

function RightColumn() {
  return (
    <div className="lg:col-span-2">
      <TotalBalanceState />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <Income />
        <Expense />
      </div>
    </div>
  );
}

export default RightColumn;
