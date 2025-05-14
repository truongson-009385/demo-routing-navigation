import { redirect, permanentRedirect, notFound, RedirectType } from 'next/navigation';

// Định nghĩa interface cho tham số của redirectTo
interface RedirectOptions {
  path: string;
  replace?: boolean;
  isPermanent?: boolean;
  statusCode?: RedirectType;
}

// Kiểm tra môi trường client hay server
const isClient: boolean = typeof window !== 'undefined';

// Server Action để xử lý redirect từ client-side
async function performRedirect({ path, isPermanent = false, statusCode }: RedirectOptions): Promise<void> {
  "use server";
  if (isPermanent) {
    permanentRedirect(path);
  } else {
    redirect(path, statusCode);
  }
}

// Hàm điều hướng chính, dùng chung cho cả client và server
export async function redirectTo({
  path,
  replace = false,
  isPermanent = false,
  statusCode = RedirectType.push,
}: RedirectOptions): Promise<void> {
  if (isClient) {
    // Client-side: Gọi Server Action để thực hiện redirect
    await performRedirect({ path, isPermanent, statusCode: replace ? RedirectType.replace : statusCode });
  } else {
    // Server-side: Gọi trực tiếp redirect hoặc permanentRedirect
    if (isPermanent) {
      permanentRedirect(path);
    } else {
      redirect(path, replace ? RedirectType.replace : statusCode);
    }
  }
}

// Hàm xử lý lỗi 404
export function triggerNotFound(): never {
  notFound();
}