# Routing & Navigation

Tài liệu này cung cấp hướng dẫn chi tiết về cách sử dụng hệ thống Routing và Navigation trong Next.js, bao gồm cấu trúc thư mục, các loại file chính, và cách điều hướng hiệu quả trong ứng dụng.

## 📦 Mục lục

- [Tìm hiểu về App Router](#tìm-hiểu-về-app-router)
  - [Ưu điểm](#ưu-điểm)
  - [Nhược điểm](#nhược-điểm)
  - [Cấu trúc file](#cấu-trúc-file)

## Tìm hiểu về App Router

App Router là một trong những tính năng quan trọng của Next.js, giúp quản lý routing một cách hiệu quả và linh hoạt. **Tự động hóa routing**: Dựa trên cấu trúc thư mục, App Router tự động ánh xạ các file trong thư mục `/app` thành các route tương ứng.

### Ưu điểm

1. **Đơn giản hóa cấu trúc dự án**: Không cần phải định nghĩa các route thủ công, chỉ cần tổ chức file và thư mục hợp lý.
2. **Tăng tính module hóa**: Mỗi route có thể được thiết kế như một module độc lập với các file như `page.tsx`, `layout.tsx`, `error.tsx`, v.v.
3. **Hỗ trợ SEO tốt hơn**: Metadata riêng cho từng route có thể được định nghĩa trong file `head.tsx`.

### Nhược điểm

- **Phụ thuộc vào cấu trúc thư mục**: Việc thay đổi cấu trúc thư mục có thể ảnh hưởng đến các route hiện tại.
- **Không hỗ trợ điều hướng tùy ý**: Điều hướng phải tuân theo cấu trúc thư mục, các trường hợp đặc biệt cần sử dụng Middleware để xử lý.

App Router là một công cụ mạnh mẽ, nhưng để sử dụng hiệu quả, cần hiểu rõ cách tổ chức và các quy tắc liên quan đến hệ thống routing của Next.js.

Ví dụ: có trang About /app/about/page.tsx tương ứng với url là /about

### Cấu trúc file

| File          | Mục đích sử dụng                                                                 |
|:---------------|:----------------------------------------------------------------------------------|
| page.tsx      | Component chính của route                                                        |
| layout.tsx    | Dùng để bọc layout cho route và các route con                                    |
| template.tsx  | Giao diện bọc route con, nhưng khi điều hướng sẽ render lại                      |
| error.tsx     | Bắt lỗi khi render route                                                         |
| loading.tsx   | Hiển thị khi đang tải                                                            |
| not-found.tsx | Hiển thị khi không tìm thấy nội dung (page 404)                                  |
| route.ts      | Tạo ra các API route                                                             |
| head.tsx      | Metadata riêng cho route                                                         |

### Redirect - Điều hướng

1. `<Link>` Component
1. `useRouter()` hook (Client Components)
1. `redirect()` function (Server Components)
1. native History API

===================

#### 1. Link Component

```tsx
<ul className="flex space-x-4">
    <li>
        <Link href="/" className="hover:text-gray-400">
            Home
        </Link>
    </li>
    <li>
        <Link href="/about" className="hover:text-gray-400">
            About
        </Link>
    </li>
    ...
</ul>
```

#### 2. useRouter hook (Client Components)

#### 3. Link Component (Server Components)

#### 4. Link Component
