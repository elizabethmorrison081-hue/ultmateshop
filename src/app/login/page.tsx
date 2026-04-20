"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const captchaImages = ["/capcha/c1.png", "/capcha/c2.png", "/capcha/c3.png", "/capcha/c4.png"];
  const [captchaSrc, setCaptchaSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Initialize with a random image on mount to avoid hydration mismatch
  useEffect(() => {
    const randomImg = captchaImages[Math.floor(Math.random() * captchaImages.length)];
    setCaptchaSrc(randomImg);
  }, []);

  const refreshCaptcha = (e: React.MouseEvent) => {
    e.preventDefault();
    let nextImg;
    do {
      nextImg = captchaImages[Math.floor(Math.random() * captchaImages.length)];
    } while (nextImg === captchaSrc && captchaImages.length > 1);
    
    setCaptchaSrc(nextImg);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("LoginForm[username]");
    const password = formData.get("LoginForm[password]");
    const verifyCode = formData.get("LoginForm[verifyCode]");

    if (!username || !password || !verifyCode) {
      alert("Please fill in all fields");
      return;
    }

    // Show loading state
    setIsLoading(true);

    // Save username to localStorage
    localStorage.setItem('username', username as string);

    // Simulate 0.5s delay before redirection
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        {/* Logo Section */}
        <div className={styles.cardHeader}>
          <h1 className="sr-only">
            UltimateShop Login - Best Premium Cvv & Dumps Shop
          </h1>
          <img
            src="/logo2.png"
            alt="UltimateShop Logo"
            width="350"
            height="200"
            style={{ margin: "0 auto", display: "block" }}
          />
        </div>

        <div className={styles.cardBody}>
          <h2 className="sr-only">Account Authentication</h2>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '1.5rem' }}>
            Experience the most secure and reliable shopping for premium cards and data. 
            Join thousands of satisfied members at the world's leading CVV platform.
          </p>
          <form id="login-form" onSubmit={handleSubmit}>
            <div className="mb-3" style={{ marginBottom: "1rem" }}>
              <label htmlFor="LoginForm_username" className={styles.formLabel}>
                Username
              </label>
              <input
                className={styles.formControl}
                name="LoginForm[username]"
                id="LoginForm_username"
                type="text"
                maxLength={50}
              />
            </div>

            <div className="mb-3" style={{ marginBottom: "1rem" }}>
              <label htmlFor="LoginForm_password" className={styles.formLabel}>
                Password
              </label>
              <div className="input-group">
                <input
                  className={styles.formControl}
                  name="LoginForm[password]"
                  id="LoginForm_password"
                  type="password"
                  maxLength={50}
                />
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="LoginForm_verifyCode" className={styles.formLabel}>
                Verify Code
              </label>
              <div className={styles.captchaWrapper}>
                <input
                  style={{ width: "100px" }}
                  className={styles.formControl}
                  name="LoginForm[verifyCode]"
                  id="LoginForm_verifyCode"
                  type="text"
                />
                {captchaSrc && (
                  <img
                    id="yw0"
                    src={captchaSrc}
                    alt="Captcha"
                    onClick={refreshCaptcha}
                    className={styles.captchaImg}
                  />
                )}
              </div>
            </div>

            <div className="text-center" style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <Link
                href="/register"
                className={styles.btnWarning}
                style={{ marginRight: "0.5rem", textDecoration: "none" }}
              >
                Register
              </Link>
              <button className={styles.btnWarning} type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Log In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
