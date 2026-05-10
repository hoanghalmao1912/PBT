### Câu A1 (10đ) — 5 Loại Positioning

Đọc chương 12. Điền bảng sau mà **KHÔNG** tra Google:

| Position   | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí                            | Cuộn theo trang? | Use case                                                  |
| ---------- | ------------------------- | -------------------------------------------- | ---------------- | --------------------------------------------------------- |
| `static`   | Có                        | Mặc định (không thể chỉnh top/left)          | Có               | Các phần tử văn bản, bố cục cơ bản                        |
| `relative` | Có                        | Chính vị trí ban đầu của nó                  | Có               | Làm gốc tọa độ cho phần tử con dùng absolute              |
| `absolute` | Không                     | Phần tử cha gần nhất có position khác static | Có               | Icon thông báo, menu dropdown, tooltip                    |
| `fixed`    | Không                     | Khung hình trình duyệt (Viewport)            | Không            | Header cố định, nút "Back to top", quảng cáo góc màn hình |
| `sticky`   | Có                        | Viewport (khi cuộn đến điểm giới hạn)        | Có               | Tiêu đề bảng hoặc thanh menu giữ lại khi cuộn             |

1. Khi nào absolute tham chiếu body?
   Phần tử absolute sẽ tham chiếu đến body khi tất cả các phần tử cha bao quanh nó đều có position: static (mặc định) hoặc nó không có phần tử cha nào

2. Khi nào absolute tham chiếu parent?
   Nó sẽ tham chiếu đến một phần tử cha cụ thể khi phần tử cha đó được thiết lập thuộc tính position là relative, absolute, hoặc fixed
3. Khái niệm "nearest positioned ancestor"
   Đây là tổ tiên gần nhất có vị trí được thiết lập. Trong CSS, một phần tử được coi là "positioned" nếu thuộc tính position của nó khác với static

- Trình duyệt sẽ đi ngược lên từ phần tử hiện tại để tìm thẻ cha, ông, hoặc cố đầu tiên có position khác static.
- Ngay khi tìm thấy, nó sẽ dùng kích thước và tọa độ của tổ tiên đó làm hệ quy chiếu để tính toán các giá trị top, right, bottom, left của phần tử con

### Câu A2 (10đ) — Flexbox vs Grid

1. TH1: 4 items sẽ nằm trên cùng 1 hàng vì mỗi item có flex: 1, chúng sẽ chia đều chiều rộng của container (mỗi cái chiếm 25%)

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 11.03.36.png" width="300" alt="" >

2. TH2:
   Mỗi item chiếm 45% + 2.5%\*2 (margin) = 50% chiều rộng và vì tổng là 100%, mỗi hàng chứa được tối đa 2 items. Với 6 items chúng sẽ xếp thành 3 hàng 2 cột

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 11.05.36.png" width="300" alt="" >

3. TH3:
   3 items nằm trên 1 hàng

- space-between: Item 1 sát lề trái, Item 3 sát lề phải, Item 2 nằm chính giữa.
- align-items: center: Các item được căn giữa theo trục dọc của container.

 <img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 11.08.15.png" width="300" alt="" >

4. TH4:
   Dự đoán: 1 hàng duy nhất có 3 cột, cột 1 và 3 rộng cố định 200px, cột 2 dùng 1fr sẽ tự động co giãn để chiếm toàn bộ phần diện tích còn lại

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 11.10.36.png" width="300" alt="" >

5. TH5:

- Bố cục gồm 3 hàng và 3 cột

Hàng 1: Items 1, 2, 3

Hàng 2: Items 4, 5, 6

Hàng 3: Item 7 nằm ở cột đầu tiên bên trái, hai cột còn lại để trống

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 11.12.34.png" width="300" alt="" >

## PHẦN B — THỰC HÀNH CODE (60 điểm)

### Bài B1 (15đ) — Positioning Playground

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 18.48.12.png" width="500" alt="" >

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 18.48.51.png" width="500" alt="" >

## PHẦN C — SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Flexbox vs Grid: Khi nào dùng gì?

1. Navigation bar ngang (logo + menu + buttons)

- Lựa chọn: Flexbox
- Giải thích: Navbar là layout 1 chiều (ngang). Flexbox cực kỳ mạnh mẽ trong việc phân bổ không gian giữa các phần tử (logo sang trái, menu ra giữa, nút sang phải) bằng justify-content và căn giữa theo chiều dọc bằng align-items

2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)

- Lựa chọn: Grid
- Giải thích: Đây là layout 2 chiều dạng bảng Grid giúp cố định 3 cột đều nhau cực nhanh với grid-template-columns: repeat(3, 1fr). Khi số lượng ảnh tăng lên, chúng sẽ tự động xuống dòng và giữ đúng cấu trúc cột mà không cần tính toán margin

3. Layout blog: main content + sidebar

- Lựa chọn: Grid
- Giải thích: Grid phù hợp để phân chia khung sườn chính (main layout) của trang web và có thể dễ dàng thiết lập tỷ lệ cố định cho Sidebar và phần nội dung chính co giãn (1fr) một cách tường minh.

4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)

- Lựa chọn: Flexbox hoặc Grid
- Giải thích:

* Flexbox: Tốt nếu bạn muốn các cột tự co giãn linh hoạt dựa trên độ dài của chữ bên trong.
* Grid: Tốt nếu bạn muốn 4 cột luôn thẳng hàng tuyệt đối và đều

5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)

- Lựa chọn: Kết hợp cả hai
- Giải thích: \* Grid (ngoài): Dùng để sắp xếp các Card trên trang web thành các hàng và cột
- Flexbox (trong): Dùng bên trong mỗi Card và thiết lập Card là display: flex với flex-direction: column. Khi đó, bạn chỉ cần cho phần text ở giữa thuộc tính flex: 1, nó sẽ tự nở ra để đẩy nút bấm luôn xuống dính sát đáy Card bất kể nội dung dài hay ngắn

### Câu C2 (10đ) — Debug Flexbox

#### Lỗi 1

1. Mô tả lỗi

- Lỗi này xảy ra do cơ chế mặc định của Flexbox:
- Khi các card nằm trong một card-container có display: flex, chúng sẽ cố gắng cao bằng nhau trong cùng một hàng (nhờ thuộc tính mặc định align-items: stretch)
- Tuy nhiên, các thành phần bên trong mỗi card (như tiêu đề, đoạn mô tả) lại có độ dài nội dung khác nhau
- Vì các thành phần bên trong card đang được xếp chồng một cách tự nhiên (Flow layout), phần nào có chữ dài hơn sẽ đẩy nút bấm xuống thấp hơn, còn card ít chữ thì nút sẽ bị kéo ngược lên trên

2. Cách sửa

- Biến từng Card thành một Flex Container
- thêm thuộc tính flex-grow: 1 vào phần nội dung nằm giữa ảnh và nút bấm . Khi đó, phần nội dung này sẽ tự động giãn ra để chiếm toàn bộ khoảng trống còn dư trong card

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 19.20.49.png" width="500" alt="" >

#### Lỗi 2

1. Mô tả lỗi

- Thiếu thuộc tính căn chỉnh: Thuộc tính text-align: center chỉ có tác dụng căn giữa các dòng văn bản bên trong khối .hero-content, nó không có khả năng di chuyển cả khối đó ra giữa màn hình
- Trục ngang và dọc: Để căn giữa một phần tử con trong Flexbox, bạn cần tác động vào cả Trục chính (Main Axis) và Trục phụ (Cross Axis) của container cha

2. Cách sửa

- Căn giữa theo chiều ngang: Thêm justify-content: center; Thuộc tính này sẽ đẩy các item con ra giữa theo trục nằm ngang
- Căn giữa theo chiều dọc: Thêm align-items: center; thuộc tính này sẽ giúp nội dung đặt xuống đúng giữa chiều cao của trình duyệt

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 19.25.18.png" width="500" alt="" >

#### Lỗi 3

1. Mô tả lỗi

- Lỗi này xuất phát từ cơ chế mặc định của Flexbox là flex-shrink
- Mặc dù đã đặt width: 250px, nhưng trong Flexbox, giá trị này chỉ được coi là chiều rộng lý tưởng. Khi phần .content có quá nhiều nội dung hoặc chứa các phần tử không thể xuống dòng (như ảnh lớn, bảng, hoặc chuỗi văn bản dài), Flexbox sẽ ưu tiên nhường không gian cho phần nội dung chính và tự động co (shrink) chiều rộng của Sidebar lại để tránh làm tràn khung hình

2. Cách sửa

- Thêm thuộc tính flex-shrink: 0 cho .sidebar. Thuộc tính này ra lệnh cho trình duyệt trong bất kỳ tình huống nào, không được phép co kích thước của phần tử này nhỏ hơn chiều rộng đã định

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 19.29.35.png" width="500" alt="" >
