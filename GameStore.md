# GAMESTORE UI SPEC (HTML + CSS + JS ONLY)

## 1. OVERVIEW
Thiết kế một website GameStore giống itch.io + Threads:
- Layout sạch, hiện đại, dark mode
- Focus vào game, cộng đồng, bài viết
- Responsive (desktop + mobile)
- Không dùng framework backend
- Có thể dùng Vanilla JS hoặc nhẹ như AlpineJS

---

## 2. GLOBAL LAYOUT

### 2.1 Main Layout
- Header (fixed top)
- Sidebar (optional desktop)
- Main content
- Footer

### 2.2 Header
Bao gồm:
- Logo (trái)
- Search bar (giữa)
- Navigation:
  - Home
  - Games
  - Posts
- Right:
  - Login / Register (Guest)
  - Avatar dropdown (User)

---

## 3. HOME PAGE

### 3.1 Hero Section
- Banner game nổi bật
- Nút: "Play Now" / "View Game"

### 3.2 Featured Games
Grid layout (3–5 columns):
- Thumbnail
- Title
- Price (Free / $)
- Rating (stars)
- Tag

### 3.3 Trending Section
- Horizontal scroll (giống itch.io)

### 3.4 Latest Posts (Threads style)
- Avatar
- Username
- Content preview
- Like / Comment count

---

## 4. GAMES PAGE

### 4.1 Filter Sidebar
- Price: Free / Paid
- Tags (checkbox)
- Rating
- Sort:
  - Newest
  - Most Popular
  - Price

### 4.2 Game List
Grid:
- Thumbnail
- Title
- Dev name
- Price
- Rating
- Buttons:
  - View
  - Play (if free)

### 4.3 Empty State
- "Hiện chưa có trò chơi nào"

---

## 5. GAME DETAIL PAGE

### 5.1 Game Info
- Title
- Dev name
- Price
- Tags
- Rating stars

### 5.2 Media
- Screenshot carousel
- Video iframe

### 5.3 Actions
- Buy / Download
- Play (browser)
- Add to Favorite

### 5.4 Tabs
- Description
- Comments
- Ratings

### 5.5 Comments
- List comments
- Input box (if logged in)

---

## 6. POSTS PAGE (THREAD STYLE)

### 6.1 Post Feed
Each post:
- Avatar
- Username
- Content
- Images
- Like / Dislike
- Comment

### 6.2 Create Post (Logged user)
- Textarea
- Upload image
- Post button

---

## 7. PROFILE PAGE

### 7.1 User Info
- Avatar
- Username
- Bio
- Follow button

### 7.2 Tabs
- Games
- Posts
- Favorites

### 7.3 States
- Nếu user bị block:
  - "Tài khoản đã bị khóa"

---

## 8. DASHBOARD (DEV)

### 8.1 Stats
- Downloads chart
- Views chart
- Revenue

### 8.2 Manage Games
- List game
- Edit / Delete / Upload

### 8.3 Manage Posts
- CRUD post

---

## 9. ADMIN PANEL

### 9.1 Overview
- Total users
- Revenue
- Activity

### 9.2 Moderation
- Approve game
- Reject game (with reason)
- Delete content

---

## 10. INTERACTIONS (JS REQUIRED)

### 10.1 Game Actions
- Like / Dislike
- Rating stars
- Favorite toggle

### 10.2 Post Actions
- Like
- Comment expand

### 10.3 Filters
- Dynamic filtering (JS)

### 10.4 Notifications (mock)
- Toast message

---

## 11. DESIGN STYLE

### 11.1 Theme
- Dark mode
- Background: #0f0f0f
- Card: #1a1a1a
- Accent: #ff4747 (itch-like)

### 11.2 Components
- Rounded corners
- Soft shadow
- Hover effect

---

## 12. FILE STRUCTURE

- index.html (home)
- games.html
- game-detail.html
- posts.html
- profile.html
- dashboard.html
- admin.html

- css/
  - styles.css

- js/
  - main.js

---

## 13. DATA MOCK

Dùng JS mock data:
- games[]
- users[]
- posts[]

---

## 14. REQUIREMENTS

- Pure HTML/CSS/JS
- Không backend
- Code clean, dễ mở rộng
- Component reusable
- Responsive

---

## 15. EXTRA (OPTIONAL)

- Infinite scroll
- Modal popup
- Animation hover