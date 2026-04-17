'use client';

import styles from './Dashboard.module.css';

export default function DashboardPage() {
  const stats = [
    { label: 'Total Revenue', value: '$45,231.89', trend: '+20.1%', items: 1 },
    { label: 'Subscriptions', value: '+2350', trend: '+180.1%', items: 2 },
    { label: 'Sales', value: '+12,234', trend: '+19%', items: 3 },
    { label: 'Active Now', value: '+573', trend: '+201', items: 4 },
  ];

  const recentSales = [
    { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00' },
    { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00' },
    { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00' },
    { name: 'William Kim', email: 'will@email.com', amount: '+$99.00' },
    { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00' },
  ];

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <div>
          <h1 className="animate-fade-in">Dashboard</h1>
          <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>Welcome back to your administration panel.</p>
        </div>
        <button className="glass" style={{ padding: '0.7rem 1.5rem', fontWeight: 600 }}>Download Report</button>
      </header>

      <div className={styles.statsGrid}>
        {stats.map((stat, i) => (
          <div key={i} className={`${styles.statCard} glass animate-fade-in`} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
            <span className={styles.statLabel}>{stat.label}</span>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={`${styles.statTrend} ${styles.trendUp}`}>{stat.trend} from last month</span>
          </div>
        ))}
      </div>

      <div className={styles.mainGrid}>
        <section className={`${styles.section} glass animate-fade-in`} style={{ animationDelay: '0.6s' }}>
          <h2>Overview</h2>
          <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>
            <div style={{ padding: '4rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', textAlign: 'center' }}>
               <p>Chart Visualization placeholder</p>
               <p style={{ fontSize: '0.8rem' }}>Implement a chart library like Recharts here</p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} glass animate-fade-in`} style={{ animationDelay: '0.7s' }}>
          <h2>Recent Sales</h2>
          <div className={styles.activityList}>
            {recentSales.map((sale, i) => (
              <div key={i} className={styles.activityItem}>
                <div className={styles.activityInfo}>
                  <h3>{sale.name}</h3>
                  <p>{sale.email}</p>
                </div>
                <div className={styles.activityAmount}>{sale.amount}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
