const weekdayForm = document.getElementById("weekdayForm");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const result = document.getElementById("result");

const weekdays = [
  "Chủ Nhật",
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
];

weekdayForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const day = Number(dayInput.value);
  const month = Number(monthInput.value);
  const year = Number(yearInput.value);

  if (
    !Number.isInteger(day) ||
    !Number.isInteger(month) ||
    !Number.isInteger(year) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1 ||
    year > 9999
  ) {
    result.textContent = "Vui lòng nhập ngày, tháng, năm hợp lệ.";
    return;
  }

  const date = new Date(year, month - 1, day);
  const isValidDate =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;

  if (!isValidDate) {
    result.textContent = "Ngày không tồn tại trong tháng đã chọn.";
    return;
  }

  result.textContent = `${weekdays[date.getDay()]} Ngày ${day} tháng ${month} năm ${year}`;
});
