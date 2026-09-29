const salaryForm = document.getElementById("salaryForm");
const salaryInput = document.getElementById("salary");
const coefficientInput = document.getElementById("coefficient");
const monthlySalaryInput = document.getElementById("monthlySalary");

salaryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const salary = Number(salaryInput.value);
  const coefficient = Number(coefficientInput.value);

  if (
    !Number.isFinite(salary) ||
    !Number.isFinite(coefficient) ||
    salary < 0 ||
    coefficient < 0
  ) {
    monthlySalaryInput.value = "Vui lòng nhập dữ liệu hợp lệ.";
    return;
  }

  monthlySalaryInput.value = salary * coefficient;
});
