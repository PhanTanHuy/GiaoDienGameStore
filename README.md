# GameStore — Review từng trang

Frontend demo **HTML + CSS + JavaScript thuần** (không framework, không backend), giao diện dark mode lấy cảm hứng từ **itch.io** (lưới game, discovery) và **Threads** (feed bài viết).

---

## Chạy thử nhanh

- Mở trực tiếp file `index.html` bằng trình duyệt, hoặc dùng máy chủ tĩnh (ví dụ Live Server trong VS Code) để tránh hạn chế một số trình duyệt với `file://`.

---

## Cấu trúc chính

| File / thư mục | Vai trò |
|----------------|---------|
| `index.html`, `games.html`, … | Mỗi file một trang; `data-page` báo cho `main.js` biết render gì |
| `css/styles.css` | Theme, layout, component (card, feed, bảng, responsive) |
| `js/main.js` | Mock data (`games`, `users`, `posts`), render template, tương tác |
| `Image/` | Ảnh cover/gallery game (xem `Image/README.md` để đặt đúng tên file) |

---

## Review từng trang

### `index.html` — Trang chủ

**Nội dung:** Hero banner + game nổi bật, lưới **Featured Games**, thanh **Trending** cuộn ngang, preview **Latest Posts** (kiểu thread).

**Điểm tốt:** Luồng “khám phá” rõ: từ banner → game → cộng đồng; sidebar desktop giúp điều hướng nhanh.

**Gợi ý:** Có thể thêm ô search thật (lọc client-side theo tên/tag) nếu muốn demo đầy đủ hơn.

---

### `games.html` — Danh sách game

**Nội dung:** Sidebar lọc **giá** (All / Free / Paid), **tag** (checkbox), **rating tối thiểu**, **sắp xếp** (Newest / Popular / Price); lưới card game; empty state tiếng Việt khi không còn game khớp bộ lọc.

**Điểm tốt:** Lọc chạy ngay trên client, phản hồi tức thì; phù hợp bài tập thể hiện JS.

**Gợi ý:** Khi không chọn tag nào, vùng chip filter có thể trống — có thể ẩn hoặc hiển thị “No tags selected” cho rõ hơn.

---

### `game-detail.html` — Chi tiết game

**Nội dung:** Thông tin game, carousel ảnh, iframe video, nút Buy/Download/Play/Favorite, tab **Description / Comments / Ratings**; gõ comment mock và đánh giá sao cục bộ.

**Điểm tốt:** Đủ block cho đồ án: media + hành động + tab + comment.

**Gợi ý:** Query `?id=` — nhớ link từ lưới game luôn kèm `id` đúng (đã có trong card “View”).

---

### `posts.html` — Feed cộng đồng

**Nội dung:** Composer tạo bài (text + nút upload mock), feed post với like/dislike, mở rộng comment giả lập.

**Điểm tốt:** Bố cục gần Threads: avatar, tên, nội dung, ảnh grid, hành động dưới bài.

**Gợi ý:** Upload ảnh thật cần `FileReader` hoặc chỉ preview URL — hiện là UI mock.

---

### `profile.html` — Hồ sơ người dùng

**Nội dung:** Banner user, bio, Follow, tab **Games / Posts / Favorites**; có nhánh hiển thị khi tài khoản bị khóa (trong data `blocked`).

**Điểm tốt:** Tách tab rõ; favorites gắn với state `favorites` trong JS.

**Gợi ý:** Có thể thêm `?user=id` nếu sau này nhiều profile.

---

### `dashboard.html` — Bảng điều khiển developer

**Nội dung:** Số liệu tổng quan, biểu đồ cột đơn giản, bảng quản lý game (Edit/Delete/Upload mock), quản lý post.

**Điểm tốt:** Đủ “màn hình dev” cho demo; không cần chart library.

**Gợi ý:** Nút chỉnh sửa có thể mở modal form — tùy chọn nâng cao.

---

### `admin.html` — Admin

**Nội dung:** Thống kê tổng quan, hàng đợi moderation (Approve / Reject / Delete) với toast mock.

**Điểm tốt:** Tách được vai trò admin so với dashboard dev.

**Gợi ý:** Reject “with reason” có thể thêm ô textarea trong bước sau.

---

## Ảnh game

Ảnh được trỏ trong `js/main.js` tới thư mục `Image/` (ví dụ `Image/neon-drift-1.jpg`). Đặt file đúng tên trong `Image/README.md` để thumbnail và carousel hiển thị đầy đủ.

---

## Tài liệu thiết kế gốc

Chi tiết yêu cầu bài: `GameStore.md`.
