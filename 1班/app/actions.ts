"use server";
import { authenticate, type StudentResult } from "./server-data";

export type LoginState = { ok: boolean; message?: string; data?: StudentResult };
export async function login(_: LoginState, formData: FormData): Promise<LoginState> {
  if (formData.get("website")) return { ok: false, message: "帳號或密碼不正確" };
  const result = await authenticate(String(formData.get("studentId") ?? ""), String(formData.get("password") ?? ""));
  return result ? { ok: true, data: result } : { ok: false, message: "帳號或密碼不正確，請重新確認。" };
}
