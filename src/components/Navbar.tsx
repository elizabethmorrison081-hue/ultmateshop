"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

interface NavbarProps {
  username?: string;
  balance?: string;
  discount?: string;
}

export default function Navbar({ username: propUsername, balance: _balance, discount = "0" }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState(propUsername || "User");
  const balance = "0.00";
  const pathname = usePathname();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const isAuthPage = pathname === '/login' || pathname === '/register';

  if (isAuthPage) return null;

  return (
    <>
      {/* Navbar Custom */}
      <div className={styles.navbarCustom}>
        <div className={styles.topbar}>
          <div className="d-flex align-items-center gap-3">
            <button 
              className={`${styles.hamburger} btn btn-link p-0 text-dark`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="mdi mdi-menu font-24"></i>
            </button>
          </div>

          <div className="d-flex align-items-center gap-4">
            <Link href="#" className={styles.resellerBadge}>
              Apply for reseller
            </Link>

            <div className="d-none d-md-block">
              <h5 className="my-0">Discount: {discount}%</h5>
            </div>

            <div 
              className={styles.userProfile}
              onMouseEnter={() => setDropdownOpen(true)}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="text-end">
                <h5 className="my-0">
                  {username}
                  <br />
                  <span className={styles.balanceText}>0.00 $</span>
                </h5>
              </div>
              <i className="ri-arrow-down-s-line font-20"></i>

              {dropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <Link href="#" className={styles.dropdownItem}>
                    <i className="ri-user-line"></i> Profile
                  </Link>
                  <Link href="/login" className={styles.dropdownItem}>
                    <i className="ri-logout-box-line"></i> Logout
                  </Link>
                </div>
              )}
            </div>
 
          </div>
        </div>
      </div>

      {/* Top Navigation */}
      <div className={`${styles.topnav} ${isMenuOpen ? styles.topnavOpen : ''}`}>
        <div className="container-fluid">
          <ul className={styles.navLinks}>
            <li>
              <Link href="#" className={styles.navLink}>
                <span className={styles.navIcon}><i className="ri-newspaper-line"></i></span> News
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.navLink}>
                <span className={styles.navIcon}><i className="ri-bank-card-line"></i></span> CCS
              </Link>
            </li>
            <li>
              <Link href="#" className={`${styles.navLink}`}>
                <span className={styles.navIcon}><i className="ri-dashboard-line"></i></span> Bidding
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.navLink}>
                <span className={styles.navIcon}><i className="ri-customer-service-2-line"></i></span> Support
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className={styles.navLink}>
                <span className={styles.navIcon}><i className="ri-bit-coin-line"></i></span> Add Funds
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
