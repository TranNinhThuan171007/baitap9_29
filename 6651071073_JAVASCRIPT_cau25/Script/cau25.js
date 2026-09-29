const menuForm = document.getElementById("menuForm");
const foodSelect = document.getElementById("food");
const drinkSelect = document.getElementById("drink");
const message = document.getElementById("message");
const bill = document.getElementById("bill");
const billItems = document.getElementById("billItems");
const total = document.getElementById("total");

function getSelectedItems(select) {
  return Array.from(select.selectedOptions).map((option) => ({
    name: option.textContent,
    price: Number(option.value),
  }));
}

function formatCurrency(amount) {
  return `${amount.toLocaleString("vi-VN")} đồng`;
}

menuForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedItems = [
    ...getSelectedItems(foodSelect),
    ...getSelectedItems(drinkSelect),
  ];

  if (selectedItems.length === 0) {
    bill.hidden = true;
    message.textContent = "Vui lòng chọn ít nhất một món.";
    return;
  }

  let subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const isNight =
    document.querySelector('input[name="time"]:checked').value === "night";

  if (isNight) {
    subtotal *= 1.1;
  }

  billItems.innerHTML = selectedItems
    .map(
      (item) => `
        <tr>
          <td>${item.name}</td>
          <td>${formatCurrency(item.price)}</td>
        </tr>`,
    )
    .join("");

  total.textContent = formatCurrency(subtotal);
  message.textContent = isNight ? "Đã cộng thêm 10% phụ thu ban đêm." : "";
  bill.hidden = false;
});
