### Câu A1 (5đ) — var / let / const

**Dự đoán Output:**

- **Đoạn 1:** `undefined`
- **Đoạn 2:** Lỗi `ReferenceError` (Cannot access 'y' before initialization)
- **Đoạn 3:** Lỗi `TypeError` (Assignment to constant variable)
- **Đoạn 4:** `[1, 2, 3, 4]`
- **Đoạn 5:**
  `Trong block: 2`
  `Ngoài block: 1`

**Giải thích kết quả bất ngờ:**

- **Đoạn 1:** `var` bị _hoisting_ (đưa phần khai báo lên đầu) nhưng phần gán giá trị giữ nguyên vị trí, nên nó tồn tại nhưng mang giá trị `undefined`.
- **Đoạn 2:** `let` cũng bị hoisting nhưng nằm trong "Temporal Dead Zone" (Vùng chết tạm thời), không thể truy cập trước khi gán.
- **Đoạn 4:** Khai báo `const` với Array/Object chỉ ngăn việc gán lại toàn bộ biến (ví dụ: `arr = [5]`), chứ không ngăn được việc thay đổi nội dung bên trong (mutate) như thêm/sửa/xóa phần tử.

---

### Câu A2 (5đ) — Data Types & Coercion

**Dự đoán Output:**

```javascript
console.log(typeof null); // "object" (Đây là một lỗi lịch sử của JS)
console.log(typeof undefined); // "undefined"
console.log(typeof NaN); // "number"
console.log("5" + 3); // "53"
console.log("5" - 3); // 2
console.log("5" * "3"); // 15
console.log(true + true); // 2
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // "[object Object]" (Hoặc 0 tùy vào cách JS engine hiểu {} là block code hay object)
```

### Câu A3

**Dự đoán output**
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(NaN == NaN); // false (Đặc thù của NaN là không bằng chính nó)
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true

- Quy tắc:
  Từ giờ nên luôn dùng === (Strict Equality).
  Tại sao: === so sánh cả Giá trị và Kiểu dữ liệu. Trong khi == sẽ tự động ép kiểu (Type Coercion) trước khi so sánh, dẫn đến nhiều kết quả phi logic và dễ gây ra bug ngầm (ví dụ: "" == false ra true).

### Câu A4

- Các giá trị Falsy trong JS:
  Có đúng 8 giá trị falsy: false, 0, -0, 0n (BigInt), "" (chuỗi rỗng), null, undefined, NaN. (Tất cả các giá trị còn lại đều là Truthy).
  **Kết quả**

- if ("0") console.log("A"); // In ("0" là chuỗi khác rỗng => Truthy)
- if ("") console.log("B"); // Không in (Chuỗi rỗng => Falsy)
- if ([]) console.log("C"); // In (Array là object, object rỗng vẫn là Truthy)
- if ({}) console.log("D"); // In (Object rỗng => Truthy)
- if (null) console.log("E"); // Không in (Falsy)
- if (0) console.log("F"); // Không in (Falsy)
- if (-1) console.log("G"); // In (Số khác 0 => Truthy)
- if (" ") console.log("H"); // In (Chuỗi có chứa khoảng trắng => Truthy)

### Câu A5

// Cách 1:
const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
const url = `[https://api.example.com/users/$](https://api.example.com/users/$){userId}/orders?page=${page}`;

// Cách 3:
const html = `<div class="card">

<h2>${title}</h2>
    <p>${description}</p>
<span>Giá: ${price}đ</span>

</div>`;

## PHẦN C — SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Debug JavaScript

**1. Liệt kê 6 lỗi & Cách sửa:**

1. **Lỗi logic so sánh:** `if (giaSauGiam = 0)` là phép gán biến, luôn sai.
   -> _Sửa:_ Dùng so sánh tuyệt đối `if (giaSauGiam === 0)`.
2. **Sai kiểu dữ liệu:** Truyền `"100000"` (String) thay vì số.
   -> _Sửa:_ Truyền số nguyên `100000`.
3. **Lỗi "Ẩn" với `var` trong vòng lặp:** `var` có phạm vi hàm (function scope), khi `setTimeout` chạy thì vòng lặp đã kết thúc, `i` luôn bằng 5.
   -> _Sửa:_ Đổi `var i` thành `let i` (block scope) để mỗi vòng lặp lưu một giá trị `i` riêng biệt.
4. **Kiểu trả về bất nhất:** Hàm trả về chuỗi khi lỗi, trả về số khi tính đúng.
   -> _Sửa:_ Dùng `throw new Error("Lỗi")` để xử lý ngoại lệ chuẩn.
5. **Dùng `var` lỗi thời:** Khai báo `var giamGia` không an toàn.
   -> _Sửa:_ Dùng `const giamGia` vì giá trị không bị gán lại.
6. **Thiếu validation:** Không kiểm tra `giaBan` hợp lệ.
   -> _Sửa:_ Thêm `if (typeof giaBan !== 'number' || giaBan < 0)`.

**2. Code hoàn chỉnh:**

```javascript
function tinhGiaGiamGia(giaBan, phanTramGiam) {
  if (typeof giaBan !== "number" || giaBan < 0) {
    throw new Error("Giá bán không hợp lệ");
  }
  if (phanTramGiam < 0 || phanTramGiam > 100) {
    throw new Error("Phần trăm giảm không hợp lệ");
  }

  const giamGia = (giaBan * phanTramGiam) / 100;
  let giaSauGiam = giaBan - giamGia;

  if (giaSauGiam === 0) {
    console.log("Sản phẩm miễn phí!");
  }

  return giaSauGiam;
}

// Test
const gia = tinhGiaGiamGia(100000, 20);
console.log("Giá sau giảm: " + gia + "đ");

try {
  const gia2 = tinhGiaGiamGia(50000, 110);
  console.log("Giá: " + gia2);
} catch (e) {
  console.log(e.message);
}

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("Item " + i);
  }, 1000);
}
```
