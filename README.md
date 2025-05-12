# Routing & Navigation

Tài liệu này cung cấp một số khái niệm và ví dụ cụ thể  về Routing & Navigation trong App Route của thằng Next.js. [Link sản phẩm](https://demo-routing-navigation.netlify.app/)

## Mục lục

- [Hướng dẫn chạy dự án](#hướng-dẫn-chạy-dự-án)
- [File-system - Route theo thư mục](#file-system---route-theo-thư-mục)
- [Navigation - Điều hướng](#navigation---điều-hướng)
- [Redirecting - Chuyển hướng](#redirecting---chuyển-hướng)
- [Giao diện](#giao-diện)
- [Next Server](#next-server)
- [Other](#other)
- [Route không theo thư mục](#route-không-theo-thư-mục)

---------------

## Hướng dẫn chạy dự án

## File-system - Route theo thư mục

### 1. Danh sách file

Dưới đây là danh sách file và mục đích sử dụng của từng file trong App Route:

| File          | Mục đích sử dụng                                                                 |
|:--------------|:---------------------------------------------------------------------------------|
| page.tsx      | Component chính của route                                                        |
| layout.tsx    | Dùng để bọc layout cho route và các route con                                    |
| template.tsx  | Giao diện bọc route con, nhưng khi điều hướng sẽ render lại                      |
| error.tsx     | Bắt lỗi khi render route                                                         |
| loading.tsx   | Hiển thị khi đang tải                                                            |
| not-found.tsx | Hiển thị khi không tìm thấy nội dung (page 404)                                  |
| default.tsx   | Định nghĩa nội dung mặc định cho một route khi không có route con nào được chọn  |
| route.ts      | Tạo ra các API route                                                             |

Ví dụ minh hoạ về cấu trúc file:

```plaintext
/app
├── dashboard
│   ├── page.tsx
│   ├── layout.tsx
│   ├── template.tsx
│   ├── error.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
├── api
│   └── route.ts
├── layout.tsx
├── page.tsx
```

### 2. Route group

Trong App Route chúng ta có thể nhóm các chức năng giống nhau vào 1 nhóm chung bằng 1 thư mục bằng cú pháp `(tên thư mục)`. Ví dụ minh hoạ:

```plaintext
/app
├── (auth)
│   ├── login
│   |    ├── page.tsx
│   ├── register
│   |    ├── page.tsx
│   ├── profile
│   |    ├── page.tsx
│   ├── layout.tsx
├── layout.tsx
├── page.tsx
```

### 3. Đường dẫn động

Đường dẫn động(Dynamic Routes) là cách chúng ta sử dụng các url có nhận tham số, để thay đổi thông tin dựa vào tham số nhận được.

Ví dụ minh hoạ:

```plaintext
/app
├── products
│   ├── [id]
│   |    ├── page.tsx
│   ├── page.tsx
├── layout.tsx
├── page.tsx
```

```tsx
//app/products/[id]/page.tsx
export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div>
      <h1>
        Product Detail: {id}
      </h1>
    </div>
  );
}
```

### 4. Chặn route

## Navigation - Điều hướng

### 1. Linking

### 2. Navigation

### 3. Other

## Redirecting - Chuyển hướng

### 1. Server

### 2. Client

### 3. Next config

### 4. Middleware

## Giao diện

### 1. Layout & Page

### 2. Template

### 3. Parallel

### 4. Error

### 5. Loading

## Next Server

### 1. Route Handlers

### 2. Middleware

## Other

### 1. Localization - Ngôn ngữ

### 2. Route cache

## Route không theo thư mục
