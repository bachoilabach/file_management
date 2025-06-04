"use client";

import { useState } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { notify } from "@/lib/toast";
import { redirect } from "next/navigation";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      notify.error("Vui lòng nhập đầy đủ tài khoản và mật khẩu.");
      return;
    }
    setLoading(true);
    notify.success(`Đăng nhập thành công với email: ${form.email}`);
    setLoading(false);
    redirect('/dashboard')
  };

  const handleGoogleLogin = () => {
    notify.info("Đăng nhập bằng Google...");
    // TODO: Supabase OAuth login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10 transition-all duration-300">
        <p className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Đăng nhập
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Tài khoản
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Nhập email..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Nhập mật khẩu..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg transition-all duration-200 cursor-pointer ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            <p className="text-white font-semibold text-lg mb-0">
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </p>
          </button>
        </form>

        <div className="flex items-center justify-center mt-6">
          <div className="border-t w-1/3" />
          <p className="mx-3 text-gray-500 text-sm">Hoặc</p>
          <div className="border-t w-1/3" />
        </div>

        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center cursor-pointer justify-center gap-3 py-4 px-4 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
          >
            <GoogleOutlined className="text-lg" />
            <span>Đăng nhập với Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
