# 📋 PHIẾU BÀI TẬP 03

# **CSS CORE — Selectors, Box Model, Inheritance & Cascade**

> **Tài liệu tham chiếu:** `tuan_2_css_core/08_introduction_css.md` → `11_box_model.md`
>
> ⏱️ **Thời gian:** 150 phút | 📊 **Tổng điểm:** 100

---

## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)

### Câu A1 (5đ) — 3 Cách nhúng CSS

- Có 3 cách nhúng css vào html

1. Inline

- Ưu: Tiện khi cần test nhanh hoặc sửa 1 element duy nhất
- Nhược: Code HTML bị rối, khó bảo trì, không tái sử dụng dc lại code css

  <img src="/Users/hanguyen/Documents/PBT/PBT_03/screenshots/Screenshot 2026-05-03 at 21.49.54.png" width="300" alt="" >

2.  External

- Ưu: Tách biệt hoàn toàn giữa nội dung html và giao diện css, có thể tái sử dụng code css và trông sạch code
- Nhược: Tạo thêm một yêu cầu HTTP (HTTP Request) để tải file, có thể làm chậm trang một chút ở lần đầu tiên nếu file quá nặng
- Nên dùng khi nào: Luôn luôn là lựa chọn ưu tiên cho các dự án thực tế, các trang web có nhiều trang con

    <img src="/Users/hanguyen/Documents/PBT/PBT_03/screenshots/Screenshot 2026-05-03 at 21.35.23.png" width="300" alt="" >

3.  Internal

- Ưu: Tất cả style sẽ chỉ nằm trên 1 file html, không tốn thêm thời gian để yêu cầu tải file từ server
- Nhược: Chỉ có trên 1 trang html duy nhất, code sẽ trở nên bị rối nếu có nhiều style css
- Nên dùng khi nào: Làm các trang Landing Page đơn giản (chỉ có 1 trang duy nhất) hoặc khi cần viết CSS đặc thù cho một trang con mà các trang khác không cần đến

    <img src="/Users/hanguyen/Documents/PBT/PBT_03/screenshots/Screenshot 2026-05-03 at 20.42.18.png" width="300" alt="" >

**Câu hỏi thêm:** Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách nào "thắng"? Giải thích tại sao.

- Cách nhúng css nào được viết sau thì sẽ là thằng thắng cuối vì code sẽ được chạy từ trên xuống dưới, cái sau đè cái trước tuy nhiên chỉ đúng khi các bộ selector có hạng cân nhau
- Còn không thì tính theo độ ưu tiên sẽ được theo thứ tứ là inline > internal/external

### Câu A2 (8đ) — CSS Selectors — Dự đoán kết quả

1. h1 → Chọn: "ShopTlU"
2. .price → Chọn: "25.990.000đ" và "45.990.000đ"
3. #app header → Chọn: "ShopTLU", "Home", "Products", "About"
4. nav a:first-child → Chọn: "Home"
5. .product.featured h2 → Chọn: "MacBook Pro"
6. article > p → Chọn: "25.990.000đ", "Mô tả sản phẩm...", "45.990.000đ", "Mô tả sản phẩm..."
7. a[href="/"] → Chọn: "Home"
8. .top-bar.dark h1 → Chọn: "ShopTLU"

<img src="/Users/hanguyen/Documents/PBT/PBT_03/screenshots/Screenshot 2026-05-03 at 23.19.31.png" width="300" alt="" >
