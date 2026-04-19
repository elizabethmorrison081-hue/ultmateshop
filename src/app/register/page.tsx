"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./register.module.css";

export default function RegisterPage() {
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
    const username = formData.get("reg[username]");
    const password = formData.get("reg[password]");
    const passwordRepeat = formData.get("reg[password_repeat]");
    const verifyCode = formData.get("reg[verifyCode]");

    if (!username || !password || !passwordRepeat || !verifyCode) {
      alert("Please fill in all mandatory fields");
      return;
    }

    if (password !== passwordRepeat) {
      alert("Passwords do not match");
      return;
    }

    // Show loading state
    setIsLoading(true);

    // Simulate 0.5s delay before redirection
    setTimeout(() => {
      router.push("/login");
    }, 500);
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerCard}>
        {/* Logo Section */}
        <div className={styles.cardHeader}>
          <img
            src="/logo2.png"
            alt="UltimateShop Logo"
            width="350"
            height="200"
            style={{ margin: "0 auto", display: "block" }}
          />
        </div>

        <div className={styles.cardBody}>
          <div style={{ clear: "both", textAlign: "center", color: "red" }}></div>
          <br />

          <form id="login-form" onSubmit={handleSubmit}>
            <div className="mb-3" style={{ marginBottom: "1rem" }}>
              <label htmlFor="reg_username" className={styles.formLabel}>
                Username
              </label>
              <input
                className={styles.formControl}
                name="reg[username]"
                id="reg_username"
                type="text"
                maxLength={30}
              />
            </div>

            <div className="mb-3" style={{ marginBottom: "1rem" }}>
              <label htmlFor="reg_password" className={styles.formLabel}>
                Password
              </label>
              <input
                className={styles.formControl}
                name="reg[password]"
                id="reg_password"
                type="password"
                maxLength={25}
              />
            </div>

            <div className="mb-3" style={{ marginBottom: "1rem" }}>
              <label htmlFor="reg_password_repeat" className={styles.formLabel}>
                Repeat Password
              </label>
              <input
                className={styles.formControl}
                name="reg[password_repeat]"
                id="reg_password_repeat"
                type="password"
              />
            </div>

            <div className="mb-3" style={{ marginBottom: "1rem" }}>
              <label htmlFor="reg_jabber" className={styles.formLabel}>
                Jabber (Optional)
              </label>
              <input
                className={styles.formControl}
                placeholder="Optional"
                name="reg[jabber]"
                id="reg_jabber"
                type="text"
              />
            </div>

            <div className="mb-3" style={{ marginBottom: "1rem" }}>
              <label htmlFor="reg_referrer_id" className={styles.formLabel}>
                Referral code (Optional)
              </label>
              <input
                className={styles.formControl}
                placeholder="Optional"
                name="reg[referrer_id]"
                id="reg_referrer_id"
                type="text"
                maxLength={10}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="reg_verifyCode" className={styles.formLabel}>
                Code
              </label>
              <div className={styles.captchaWrapper}>
                <input
                  style={{ width: "100px" }}
                  className={styles.formControl}
                  name="reg[verifyCode]"
                  id="reg_verifyCode"
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
                href="/login"
                className={styles.btnWarning}
                style={{ marginRight: "0.5rem" }}
              >
                <b>&lt;-</b>
              </Link>
              <button className={styles.btnWarning} type="submit" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
