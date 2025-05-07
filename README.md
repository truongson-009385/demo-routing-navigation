# Routing & Navigation

Tài liệu này cung cấp hướng dẫn chi tiết về cách sử dụng hệ thống Routing và Navigation trong Next.js, bao gồm cấu trúc thư mục, các loại file chính, và cách điều hướng hiệu quả trong ứng dụng.

## 📦 Mục lục

- [Nghiên cứu chủ yếu về App Router](#nghiên-cứu-chủ-yếu-về-app-router)
    - [Lợi ích của App Router](#lợi-ích-của-app-router)
    - [Hạn chế cần lưu ý](#hạn-chế-cần-lưu-ý)

## Nghiên cứu chủ yếu về App Router

App Router là một trong những tính năng quan trọng của Next.js, giúp quản lý routing một cách hiệu quả và linh hoạt. Dưới đây là một số điểm nổi bật khi sử dụng App Router:

- **Tự động hóa routing**: Dựa trên cấu trúc thư mục, App Router tự động ánh xạ các file trong thư mục `/app` thành các route tương ứng.
- **Hỗ trợ dynamic routing**: Sử dụng các file có tên dạng `[param].tsx` để tạo các route động, cho phép truyền tham số qua URL.
- **Tích hợp tốt với các tính năng khác của Next.js**: App Router hoạt động mượt mà với các tính năng như API Routes, Middleware, và Server Components.
- **Tối ưu hóa hiệu suất**: Với khả năng prefetch và lazy loading, App Router giúp cải thiện tốc độ tải trang và trải nghiệm người dùng.

### Lợi ích của App Router

1. **Đơn giản hóa cấu trúc dự án**: Không cần phải định nghĩa các route thủ công, chỉ cần tổ chức file và thư mục hợp lý.
2. **Tăng tính module hóa**: Mỗi route có thể được thiết kế như một module độc lập với các file như `page.tsx`, `layout.tsx`, `error.tsx`, v.v.
3. **Hỗ trợ SEO tốt hơn**: Metadata riêng cho từng route có thể được định nghĩa trong file `head.tsx`.

### Hạn chế cần lưu ý

- **Phụ thuộc vào cấu trúc thư mục**: Việc thay đổi cấu trúc thư mục có thể ảnh hưởng đến các route hiện tại.
- **Không hỗ trợ điều hướng tùy ý**: Điều hướng phải tuân theo cấu trúc thư mục, các trường hợp đặc biệt cần sử dụng Middleware để xử lý.

App Router là một công cụ mạnh mẽ, nhưng để sử dụng hiệu quả, cần hiểu rõ cách tổ chức và các quy tắc liên quan đến hệ thống routing của Next.js.

Ví dụ: có trang About /app/about/page.tsx tương ứng với url là /about

## Cấu trúc file

| File          | Mục đích sử dụng                                                                 |
|---------------|----------------------------------------------------------------------------------|
| page.tsx      | Component chính của route                                                        |
| layout.tsx    | Dùng để bọc layout cho route và các route con                                    |
| template.tsx  | Giao diện bọc route con, nhưng khi điều hướng sẽ render lại                      |
| error.tsx     | Bắt lỗi khi render route                                                         |
| loading.tsx   | Hiển thị khi đang tải                                                            |
| not-found.tsx | Hiển thị khi không tìm thấy nội dung (page 404)                                  |
| route.ts      | Tạo ra các API route                                                             |
| head.tsx      | Metadata riêng cho route                                                         |

### Các loại file chính trong App Router

- **page.tsx**: Component chính của route, chứa nội dung hiển thị cho route.
- **layout.tsx**: Dùng để bọc layout cho route và các route con, giúp tái sử dụng giao diện.
- **template.tsx**: Tương tự như layout nhưng khi điều hướng, template sẽ render lại thay vì giữ nguyên.
- **error.tsx**: Xử lý và hiển thị lỗi khi render route.
- **loading.tsx**: Hiển thị trạng thái tải khi route đang được tải.
- **not-found.tsx**: Hiển thị nội dung khi không tìm thấy route (trang 404).
- **route.ts**: Định nghĩa các API route, cho phép xử lý logic server-side.
- **head.tsx**: Định nghĩa metadata riêng cho từng route, hỗ trợ SEO tốt hơn.
	+ <Link> Component
	+ useRouter hook (Client Components)
    
    ```
		//property
		console.log(router.pathname); // Đường dẫn hiện tại (không bao gồm query string)
		console.log(router.query); // Đối tượng chứa các tham số query
		console.log(router.asPath); // Chuỗi đường dẫn đầy đủ (bao gồm query string)
		console.log(router.isFallback); // Boolean cho biết trang có đang ở chế độ fallback hay không (với dynamic routes)

		//function
		router.push(""); // push(url, as, options): Điều hướng đến một trang mới
		router.replace(""); // replace(url, as, options): Tương tự push nhưng thay thế history thay vì thêm mới
		router.back(); // Quay lại trang trước
		router.reload(); // Tải lại trang hiện tại
		router.prefetch(""); // Prefetch một trang để tải nhanh hơn khi điều hướng
		
		
	+ redirect function (Server Components)
	+ native History API có 2 loại: pushState, replaceState

- Không thể điều hướng mà không theo directory, chỉ có thể dùng middleware để chuyển hướng(Redirect) tới trang muốn đến.