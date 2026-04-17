import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className="animate-fade-in">
          <span className={styles.badge}>New Season Arrival</span>
          <h1 className={styles.title}>
            Unleash the <br /> <span>Ultimate Experience</span>
          </h1>
          <p className={styles.description}>
            Discover curated collections of premium goods. Designed for the modern life, 
            crafted for the future. Elevate your lifestyle today.
          </p>
          <div className={styles.actions}>
            <Link href="/register" className={styles.primaryBtn}>
              Get Started
            </Link>
            <Link href="/login" className={styles.secondaryBtn}>
              Sign In
            </Link>
          </div>
        </div>
        
        <div className={`${styles.visual} glass animate-fade-in`} style={{ animationDelay: '0.2s' }}>
           <div className={styles.mockContent}>
              <div className={styles.mockBar} style={{ width: '60%' }}></div>
              <div className={styles.mockBar} style={{ width: '40%' }}></div>
              <div className={styles.mockBar} style={{ width: '80%' }}></div>
              <div className={styles.mockCircle}></div>
           </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={`${styles.featureCard} glass`}>
          <h3>Premium Quality</h3>
          <p>Only the finest materials and craftsmanship.</p>
        </div>
        <div className={`${styles.featureCard} glass`}>
          <h3>Global Shipping</h3>
          <p>Fast and secure delivery to your doorstep.</p>
        </div>
        <div className={`${styles.featureCard} glass`}>
          <h3>Secure Checkout</h3>
          <p>Your privacy and security are our priority.</p>
        </div>
      </section>
    </div>
  );
}
