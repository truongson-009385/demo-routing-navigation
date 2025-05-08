# Routing & Navigation

Tài liệu này cung cấp hướng dẫn chi tiết về cách sử dụng hệ thống Routing và Navigation trong Next.js, bao gồm cấu trúc thư mục, các loại file chính, và cách điều hướng hiệu quả trong ứng dụng.

>Link demo sản phẩm
>[https://demo-routing-navigation.netlify.app/](https://demo-routing-navigation.netlify.app/){:target="_blank"}

## 📦 Mục lục

- [Tìm hiểu về App Router](#tìm-hiểu-về-app-router)
  - [Ưu điểm](#ưu-điểm)
  - [Nhược điểm](#nhược-điểm)
  - [Cấu trúc file](#cấu-trúc-file)

### Hướng dẫn chạy dự án

  Để chạy dự án này, bạn cần thực hiện các bước sau:

1. **Cài đặt môi trường**

  Trước tiên, hãy đảm bảo rằng bạn đã cài đặt các công cụ cần thiết:

  - **Node.js**: Tải và cài đặt từ [Node.js Official Website](https://nodejs.org/). Phiên bản khuyến nghị là LTS.
  - **npm** hoặc **yarn**: Được cài đặt cùng với Node.js. Bạn có thể kiểm tra bằng lệnh:

  ```bash
  node -v
  npm -v
  ```

2. **Clone repository**

  Clone repository từ GitHub về máy của bạn:

  ```bash
  git clone https://github.com/truongson-009385/demo-routing-navigation.git
  ```

3. **Cài đặt dependencies**

  Di chuyển vào thư mục dự án và cài đặt các dependencies:

  ```bash
  cd demo-routing-navigation
  npm install
  ```

  Hoặc nếu bạn sử dụng **yarn**:

  ```bash
  yarn install
  ```

4. **Chạy dự án**

  Khởi chạy ứng dụng trong môi trường phát triển:

  ```bash
  npm run dev
  ```

  Hoặc với **yarn**:

  ```bash
  yarn dev
  ```

Đường dẫn mặc định ứng dụng [http://localhost:3000](http://localhost:3000)

5. **Chạy json server**

  Vì ứng dụng sử dụng json-server để fake data nên chúng ta cần bật server lên bằng câu lệnh sau:

  ```bash
  npx json-server db.json --port=4001
  ```

Đường dẫn của server [http://localhost:4001](http://localhost:4001)

## Tìm hiểu về App Router

App Router là một trong những tính năng quan trọng của Next.js, giúp quản lý routing một cách hiệu quả và linh hoạt. **Tự động hóa routing**: Dựa trên cấu trúc thư mục, App Router tự động ánh xạ các file trong thư mục `/app` thành các route tương ứng.

### Ưu điểm

1. **Đơn giản hóa cấu trúc dự án**: Không cần phải định nghĩa các route thủ công, chỉ cần tổ chức file và thư mục hợp lý.
2. **Tăng tính module hóa**: Mỗi route có thể được thiết kế như một module độc lập với các file như `page.tsx`, `layout.tsx`, `error.tsx`, ...
3. **Hỗ trợ SEO tốt hơn**: Metadata riêng cho từng route có thể được định nghĩa trong file `head.tsx`.

### Nhược điểm

- **Phụ thuộc vào cấu trúc thư mục**: Việc thay đổi cấu trúc thư mục có thể ảnh hưởng đến các route hiện tại.
- **Không hỗ trợ điều hướng tùy ý**: Điều hướng phải tuân theo cấu trúc thư mục, các trường hợp đặc biệt cần sử dụng Middleware để xử lý.

App Router là một công cụ mạnh mẽ, nhưng để sử dụng hiệu quả, cần hiểu rõ cách tổ chức và các quy tắc liên quan đến hệ thống routing của Next.js.

Ví dụ: có trang About /app/about/page.tsx tương ứng với url là /about

### Cấu trúc file

Dưới đây là một ví dụ minh họa cấu trúc thư mục của App Router trong Next.js:

```plaintext
/app
├── about
│   ├── page.tsx         // Component chính cho route /about
│   ├── layout.tsx       // Layout bọc cho route /about và các route con
│   ├── template.tsx     // Template bọc route con, render lại khi điều hướng
│   ├── error.tsx        // Xử lý lỗi khi render route /about
│   ├── loading.tsx      // Hiển thị trạng thái loading khi tải route /about
│   ├── not-found.tsx    // Trang 404 cho route /about
├── api
│   └── route.ts         // API route
├── layout.tsx           // Layout bọc toàn bộ ứng dụng
├── page.tsx             // Component chính cho route /
```

Cấu trúc này giúp bạn dễ dàng quản lý các route và module hóa ứng dụng một cách hiệu quả.

| File          | Mục đích sử dụng                                                                 |
|:---------------|:----------------------------------------------------------------------------------|
| page.tsx      | Component chính của route                                                        |
| layout.tsx    | Dùng để bọc layout cho route và các route con                                    |
| template.tsx  | Giao diện bọc route con, nhưng khi điều hướng sẽ render lại                      |
| error.tsx     | Bắt lỗi khi render route                                                         |
| loading.tsx   | Hiển thị khi đang tải                                                            |
| not-found.tsx | Hiển thị khi không tìm thấy nội dung (page 404)                                  |
| route.ts      | Tạo ra các API route                                                             |

Ví dụ cụ thể `src/app/error.tsx`

```tsx
'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">
        Something went wrong!
      </h1>
      <p className="text-center text-red-500 mt-2">{error.message}</p>
      <button onClick={reset} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Try Again</button>
    </div>
  );
}   
```

Ví dụ cụ thể `src/app/not-found.tsx`

```tsx
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='text-center mt-10'>
            <h2 className='text-2xl font-bold'>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className='text-blue-500 hover:underline button'>Back Home</Link>
        </div>
    )
}
```

Ví dụ cụ thể `src/app/about/template.tsx`

```tsx
export default function AboutTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-4 text-center">
        <h1 className="text-2xl font-bold">About Page Template</h1>
      </header>
      <main className="p-4">{children}</main>
      <footer className="bg-blue-500 text-white py-2 text-center">
        <p>&copy; 2023 My Application</p>
      </footer>
    </div>
  );
}
```

Template này được sử dụng để bọc các route con của `/about`, cung cấp một giao diện nhất quán với header và footer. Nội dung của các route con sẽ được render trong phần `{children}`.

### Redirect - Điều hướng

1. `<Link>` Component
1. `useRouter()` hook (Client Components)
1. `redirect()` function (Server Components)
1. native History API

---------------

#### 1. `<Link>` Component

Next.js cung cấp component điều hướng với `<Link></Link>`, giúp tạo các liên kết điều hướng trong ứng dụng. Khi được render, `<Link></Link>` sẽ tự động chuyển đổi thành thẻ `<a></a>` trong HTML.

Ví dụ cụ thể trong file `src/components/layout/header.tsx`:

```tsx
import Link from "next/link";
```

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

#### 2. `useRouter()` hook (Client Components)

`useRouter` là một hook được cung cấp bởi Next.js, cho phép bạn điều hướng trong các Client Components. Bạn có thể sử dụng `useRouter` để thực hiện các hành động như chuyển trang, thay đổi lịch sử trình duyệt, hoặc lấy thông tin về route hiện tại.

Các phương thức phổ biến của `useRouter`:

- `router.push(url: string)`: Điều hướng đến một URL mới.
- `router.replace(url: string)`: Thay thế URL hiện tại mà không thêm vào lịch sử trình duyệt.
- `router.back()`: Quay lại trang trước đó trong lịch sử trình duyệt.
- `router.prefetch(url: string)`: Tải trước dữ liệu cho một route cụ thể.

Lưu ý: `useRouter` chỉ hoạt động trong các Client Components và không thể sử dụng trong Server Components.

Ví dụ cụ thể trong file `src/app/about/page.tsx`:

```tsx
'use client'

import { useRouter } from "next/navigation";
```

Khởi tạo `useRouter` trong component

```tsx
export default function About() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mt-10">About Us</h1>
      <button onClick={() => router.push('/')} className="bg-blue-500 text-white px-4 py-2 rounded mt-5">
        Click Me
      </button>
    </div>
  );
}
```

#### 3. `redirect()` function (Server Components)

`redirect()` được sử dụng để chuyển hướng người dùng đến một URL khác từ phía server.

```tsx
import { redirect } from 'next/navigation';
```

```tsx
export default function LoginPage() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    redirect('/login');
  }

  return <div>Welcome to the dashboard!</div>;
}
```

#### 4. native History API

Next.js cũng hỗ trợ sử dụng Native History API để điều hướng trong ứng dụng. Đây là một phương pháp điều hướng thủ công, phù hợp khi bạn cần kiểm soát chi tiết hơn về lịch sử trình duyệt.

- `history.pushState(state, title[, url])`: Thêm một mục mới vào lịch sử trình duyệt và điều hướng đến URL mới.
- `history.replaceState(state, title[, url])`: Thay thế mục hiện tại trong lịch sử trình duyệt bằng URL mới mà không thêm mục mới.

Ví dụ:

```tsx
<button
  onClick={() => {
    history.pushState(null, '', '/new-page');
  }}
  className="bg-green-500 text-white px-4 py-2 rounded"
>
  Go to New Page
</button>
```
