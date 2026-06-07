# PBT_10 Answers

## PHẦN A — KIỂM TRA ĐỌC HIỂU

### Câu A1 (5đ) — Sync vs Async

Output dự đoán:

1. `1 - Start`
2. `4 - End`
3. `3 - Promise`
4. `6 - Promise 2`
5. `2 - Timeout 0ms`
6. `5 - Timeout 100ms`
7. `7 - Nested timeout`

Giải thích:

- JavaScript chạy synchronous code trước. `console.log("1 - Start")` và `console.log("4 - End")` in ra ngay.
- `Promise.resolve().then(...)` tạo một microtask, và microtasks được xử lý ngay sau khi stack hiện tại trống, trước các macrotasks như `setTimeout`.
- `setTimeout(..., 0)` và `setTimeout(..., 100)` là macrotasks. `Timeout 0ms` vẫn chờ đến lượt trong task queue sau khi microtasks hoàn thành.
- Trong promise thứ hai, `console.log("6 - Promise 2")` chạy trong microtask, rồi `setTimeout(..., 0)` tạo một macrotask mới, nên `7 - Nested timeout` xuất hiện sau các microtask hiện tại.

### Câu A2 (5đ) — Fetch API

1. `await fetch(...)` — `fetch` trả về một Promise chứa đối tượng `Response` khi request hoàn thành. `await` cần để chờ request hoàn tất và lấy `Response`;
   nếu không dùng `await`, biến `response` sẽ là Promise thay vì kết quả trả về.
2. `response.ok` — false khi response status nằm trong khoảng 400–599.
   Ví dụ:
   - `404` → Not Found
   - `500` → Internal Server Error
   - `429` → Too Many Requests
3. `response.json()` — phương thức này cũng trả về một Promise vì quá trình đọc body và parse JSON là bất đồng bộ, nên cần `await` thêm lần nữa.
4. `try...catch` — catch xử lý:
   - lỗi network (mất mạng, DNS không tìm thấy)
   - lỗi khi parse JSON (`response.json()` ném lỗi nếu body không hợp lệ)
   - lỗi tường minh từ `throw new Error(...)` khi `response.ok` là false.

### Câu A3 (5đ) — Promise States

Sơ đồ:

- `Pending` → `Fulfilled` khi Promise hoàn tất thành công
- `Pending` → `Rejected` khi Promise bị lỗi

Giải thích:

Callback Hell xảy ra khi ta lồng nhiều callback vào nhau, dẫn đến code khó đọc, khó debug và khó maintain.

Ví dụ callback hell 4 cấp:

```javascript
loginUser(credentials, function (user) {
  fetchProfile(user.id, function (profile) {
    fetchSettings(profile.id, function (settings) {
      updateUI(settings, function () {
        console.log("Done");
      });
    });
  });
});
```

Refactor thành async/await:

```javascript
async function loadUserData(credentials) {
  try {
    const user = await loginUser(credentials);
    const profile = await fetchProfile(user.id);
    const settings = await fetchSettings(profile.id);
    await updateUI(settings);
    console.log("Done");
  } catch (error) {
    console.error(error);
  }
}
```

---
