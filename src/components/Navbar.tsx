import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Ultimate<span>Shop</span>
        </Link>
        <div className={styles.links}>
          <Link href="/dashboard" className={styles.link}>Dashboard</Link>
          <Link href="/login" className={styles.link}>Login</Link>
          <Link href="/register" className={styles.cta}>Register</Link>
        </div>
      </div>
    </nav>
  );
}
