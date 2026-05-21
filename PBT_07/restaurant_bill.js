function inHoaDon(danhSachMon, isWednesday = false, hasTip = false) {
  let tongCong = 0;
  let textMonAn = "";

  // Tính tổng và in danh sách món
  for (let i = 0; i < danhSachMon.length; i++) {
    const mon = danhSachMon[i];
    const thanhTien = mon.gia * mon.sl;
    tongCong += thanhTien;

    const tenMon = `${i + 1}. ${mon.ten}`.padEnd(15);
    const sl = `x${mon.sl}`.padEnd(6);
    const gia = `@${mon.gia / 1000}k`.padEnd(6);
    const tien = `= ${thanhTien / 1000}k`;
    textMonAn += `║ ${tenMon}${sl}${gia}${tien.padEnd(9)}║\n`;
  }

  // Tính % giảm giá
  let phanTramGiam = 0;
  if (tongCong > 1000000) phanTramGiam = 15;
  else if (tongCong > 500000) phanTramGiam = 10;

  if (isWednesday) phanTramGiam += 5;

  // Tính chi tiết
  const tienGiam = tongCong * (phanTramGiam / 100);
  const sauGiam = tongCong - tienGiam;
  const vat = sauGiam * 0.08;
  const tip = hasTip ? sauGiam * 0.05 : 0;
  const thanhToan = sauGiam + vat + tip;

  // Format VND
  const f = (n) => n.toLocaleString("vi-VN") + "đ";

  // In Bill
  console.log("╔══════════════════════════════════════╗");
  console.log("║        HÓA ĐƠN NHÀ HÀNG              ║");
  console.log("╠══════════════════════════════════════╣");
  console.log(textMonAn.trimEnd());
  console.log("╠══════════════════════════════════════╣");
  console.log(`║ Tổng cộng:      ${f(tongCong).padStart(20)} ║`);
  console.log(`║ Giảm giá (${phanTramGiam}%): ${f(tienGiam).padStart(19)} ║`);
  console.log(`║ VAT (8%):       ${f(vat).padStart(20)} ║`);
  console.log(`║ Tip (5%):       ${f(tip).padStart(20)} ║`);
  console.log("╠══════════════════════════════════════╣");
  console.log(`║ THANH TOÁN:     ${f(thanhToan).padStart(20)} ║`);
  console.log("╚══════════════════════════════════════╝");
}

// Test case
const order = [
  { ten: "Phở bò", gia: 65000, sl: 2 },
  { ten: "Trà đá", gia: 5000, sl: 3 },
  { ten: "Bún chả", gia: 55000, sl: 1 },
];

inHoaDon(order, false, true);
