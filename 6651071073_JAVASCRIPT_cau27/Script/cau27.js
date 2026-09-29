const orderItems = document.getElementById("orderItems");
const message = document.getElementById("message");

function updateRowTotal(row) {
  const quantity = Number(row.querySelector(".quantity").value);
  const unitPrice = Number(row.querySelector(".unit-price").value);
  const lineTotal = row.querySelector(".line-total");

  if (
    !Number.isFinite(quantity) ||
    !Number.isFinite(unitPrice) ||
    quantity < 0 ||
    unitPrice < 0
  ) {
    lineTotal.value = "";
    return;
  }

  lineTotal.value = quantity * unitPrice;
}

function updateAllRows() {
  orderItems.querySelectorAll("tr").forEach(updateRowTotal);
  message.textContent =
    orderItems.children.length === 0 ? "Chưa có sản phẩm." : "";
}

orderItems.addEventListener("input", (event) => {
  const row = event.target.closest("tr");

  if (row) {
    updateRowTotal(row);
  }
});

orderItems.addEventListener("click", (event) => {
  if (!event.target.classList.contains("delete-button")) {
    return;
  }

  event.target.closest("tr").remove();
  updateAllRows();
});

updateAllRows();
