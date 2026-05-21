### PHẦN A — ĐỌC HIỂU (20 điểm)

#### Câu A1 (10đ) — Grid System

Dựa trên nguyên lý thiết kế "Mobile-first" của hệ thống lưới 12 cột (Grid System - phổ biến nhất là Bootstrap), đây là kết quả phân tích layout của bạn:

### Bảng phân tích Layout

| Kích thước     | < 768px (Mobile)                                            | 768px - 991px (Tablet)                                          | ≥ 992px (Desktop)                                              |
| -------------- | ----------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------- |
| **Số cột**     | 1 cột / hàng                                                | 2 cột / hàng                                                    | 4 cột / hàng                                                   |
| **Box layout** | Xếp thành **4 hàng** dọc.<br>Mỗi Box chiếm 100% chiều rộng. | Xếp thành **2 hàng**.<br>(Box 1-2 hàng trên, Box 3-4 hàng dưới) | Nằm trên **1 hàng** ngang duy nhất.<br>Cả 4 Box xếp cạnh nhau. |

---

### Giải đáp câu hỏi thêm

**1. `col-md-6` nghĩa là gì?**
Cú pháp này được chia thành 3 phần:

- **`col` (Column):** Khai báo đây là một cột trong Grid System.
- **`md` (Medium):** Điểm ngắt (breakpoint) áp dụng cho các thiết bị có kích thước màn hình trung bình (thường từ 768px trở lên, như máy tính bảng).
- **`6`:** Số lượng cột mà phần tử này sẽ chiếm trên tổng số 12 cột của hệ thống.
  => **Tóm lại:** `col-md-6` yêu cầu phần tử chiếm **50% chiều rộng** (6/12) khi màn hình đạt từ 768px trở lên.

**2. Tại sao không cần viết `col-sm-12`?**
Bởi vì Grid System hoạt động theo cơ chế **kế thừa từ dưới lên (Mobile-first)**:

- Class `col-12` đã đặt phần tử chiếm 12 cột (100% chiều rộng) bắt đầu từ kích thước nhỏ nhất (0px).
- Thuộc tính này sẽ được giữ nguyên và tự động áp dụng cho các kích thước lớn hơn tiếp theo (bao gồm cả `sm` >= 576px) **cho đến khi** nó bị ghi đè bởi một breakpoint lớn hơn.
- Vì bạn đã có `col-md-6` ở mốc 768px để ghi đè, khoảng từ 0px đến 767px sẽ hoàn toàn kế thừa `col-12`. Do đó, viết thêm `col-sm-12` là hành động lặp lại và dư thừa code.

#### Câu A2 (10đ) — Utilities & Components

### 1. Giải thích class `d-none d-md-block`

Class này kết hợp hai tiện ích hiển thị (Display Utilities) trong Bootstrap để điều khiển sự xuất hiện của phần tử theo từng kích thước màn hình (Mobile-first):

- **`d-none`**: Đặt `display: none;` cho phần tử, bắt đầu từ kích thước màn hình nhỏ nhất (0px). Nghĩa là mặc định phần tử này sẽ bị **ẩn**.
- **`d-md-block`**: Đặt `display: block;` cho phần tử khi màn hình đạt kích thước từ **md** (Medium, ≥ 768px) trở lên.
  => **Kết luận:** Element này sẽ **ẩn** trên các thiết bị di động (màn hình < 768px) và **hiển thị** (dưới dạng block) trên các màn hình từ Tablet trở lên (≥ 768px).

---

### 2. Liệt kê 5 Spacing Utilities và giải thích

Spacing utilities trong Bootstrap được cấu tạo theo cú pháp: `{thuộc tính}{chiều}-{kích thước}`.

1.  **`mt-3`**: Đặt **Margin Top** (khoảng cách bên ngoài ở phía trên) với kích thước mức độ 3 (mặc định là `1rem`, tương đương 16px).
2.  **`px-4`**: Đặt **Padding trục X** (khoảng cách bên trong ở hai bên trái và phải - Left & Right) với kích thước mức độ 4 (mặc định là `1.5rem`, tương đương 24px).
3.  **`mb-auto`**: Đặt **Margin Bottom** (khoảng cách bên ngoài ở phía dưới) là `auto`, giúp phần tử tự động đẩy phần trống xuống dưới cùng (thường dùng trong flexbox để căn chỉnh khoảng cách linh hoạt).
4.  **`py-2`**: Đặt **Padding trục Y** (khoảng cách bên trong ở phía trên và dưới - Top & Bottom) với kích thước mức độ 2 (mặc định là `0.5rem`, tương đương 8px).
5.  **`mx-auto`**: Đặt **Margin trục X** (trái và phải) là `auto`. Tiện ích này rất phổ biến để **căn giữa** một phần tử block (đã có chiều rộng xác định) theo chiều ngang.

---

### 3. Sự khác nhau giữa `.container`, `.container-fluid`, `.container-md`

| Class                  | Đặc điểm và Kích thước                                                                                                                            | Mục đích sử dụng                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **`.container`**       | Có chiều rộng cố định (`max-width`) thay đổi tại từng điểm ngắt (sm, md, lg, xl, xxl).                                                            | Dùng khi muốn nội dung nằm gọn ở giữa màn hình, có lề trống ở hai bên.                                      |
| **`.container-fluid`** | Luôn chiếm **100% chiều rộng** ở mọi kích thước màn hình, từ nhỏ nhất đến lớn nhất.                                                               | Dùng cho các section trải dài toàn màn hình (như header, footer, banner).                                   |
| **`.container-md`**    | Chiếm 100% chiều rộng ở màn hình nhỏ (< 768px). Từ màn hình **md** (≥ 768px) trở lên, nó mới hoạt động giống `.container` (có max-width cố định). | Dùng khi muốn nội dung tràn viền trên điện thoại nhưng lại được đóng khung gọn gàng trên tablet và desktop. |
