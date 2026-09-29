const canChiForm = document.getElementById("canChiForm");
const solarYearInput = document.getElementById("solarYear");
const lunarYearInput = document.getElementById("lunarYear");
const message = document.getElementById("message");

const heavenlyStems = [
  "Canh",
  "Tân",
  "Nhâm",
  "Quý",
  "Giáp",
  "Ất",
  "Bính",
  "Đinh",
  "Mậu",
  "Kỷ",
];
const earthlyBranches = [
  "Thân",
  "Dậu",
  "Tuất",
  "Hợi",
  "Tý",
  "Sửu",
  "Dần",
  "Mão",
  "Thìn",
  "Tỵ",
  "Ngọ",
  "Mùi",
];

canChiForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const year = Number(solarYearInput.value.trim());

  if (!Number.isInteger(year) || year < 1 || year > 9999) {
    lunarYearInput.value = "";
    message.textContent =
      "Vui lòng nhập năm dương lịch là số nguyên từ 1 đến 9999.";
    return;
  }

  lunarYearInput.value = `${heavenlyStems[year % 10]} ${earthlyBranches[year % 12]}`;
  message.textContent = "";
});

canChiForm.requestSubmit();
