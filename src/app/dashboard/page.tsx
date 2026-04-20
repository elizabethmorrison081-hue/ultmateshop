"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Dashboard.module.css";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
  const [balance] = useState("0.00");
  const [discount] = useState("0");
  const [username, setUsername] = useState("User");
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  const [isInfoMinimized, setIsInfoMinimized] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className={styles.dashboardWrapper}>
      <Navbar username={username} balance={balance} discount={discount} />

      {/* Main Content */}
      <div className={styles.contentPage}>
        <div className="container-fluid">
          <h1 className="sr-only">
            UltimateShop User Dashboard - Manage Funds & Premium Services
          </h1>

          {/* Information Card */}
          {isInfoVisible && (
            <div className={styles.infoCard}>
              <div className={styles.infoCardHeader}>
                <h2 className="fw-bold mb-0" style={{ fontSize: '1.25rem' }}>Information</h2>
                <div className={styles.cardControls}>
                  <button 
                    className={styles.controlBtn}
                    onClick={() => setIsInfoMinimized(!isInfoMinimized)}
                    title={isInfoMinimized ? "Expand" : "Minimize"}
                  >
                    <i className={isInfoMinimized ? "ri-add-line" : "ri-subtract-line"}></i>
                  </button>
                  <button 
                    className={styles.controlBtn}
                    onClick={() => setIsInfoVisible(false)}
                    title="Close"
                  >
                    <i className="ri-close-line"></i>
                  </button>
                </div>
              </div>
              {!isInfoMinimized && (
                <div className="text-dark mt-3">
                  <p className="mb-1">- Each Address is for 1 payment/transaction only!</p>
                  <p className="mb-1">- Any payment above 300$, will be credited 15% bonus on payment.</p>
                  <p className="mb-1">- We will credit your payment after 3 confirmations on blockchain</p>
                  <p className="mb-0">- We do not refund any balance.</p>
                </div>
              )}
            </div>
          )}

          <div className="text-center mb-4">
            <h5 className="text-danger fw-bold">
              You should have at least $50 balance to use this service.
            </h5>
          </div>

          <h2 className={styles.tableTitle}>Add Funds</h2>

          {/* Crypto Cards Row */}
          <div className="row">
            {/* Bitcoin Card */}
            <div className="col-md-6">
              <div className={styles.fundCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cryptoIcon}>
                    <img src="https://ultimateshop.net/public/assets/img/bitcoin.png" alt="BTC" width="30" height="30" />
                  </div>
                  <div>
                    <h2 className="my-0 font-16 fw-semibold">Bitcoin - BTC (5% Fee)</h2>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className="sr-only">Bitcoin Payment Details</h3>
                  <div className="text-center mb-3">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?data=bc1q9lm8hadh2uc3zzrhv7svle0d8m8ce27p4e0hyv&size=150x150"
                      alt="QR Code"
                      className={styles.qrCode}
                    />
                  </div>
                  <label className="form-label d-block mb-2">Send any amount to this Address</label>
                  <input
                    type="text"
                    readOnly
                    className={styles.formControl}
                    value="bc1q9lm8hadh2uc3zzrhv7svle0d8m8ce27p4e0hyv"
                  />
                  <button className={styles.btnWarning}>
                    Press this button after Paying
                  </button>
                </div>
              </div>
            </div>

            {/* Litecoin Card */}
            <div className="col-md-6">
              <div className={styles.fundCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cryptoIcon}>
                    <img src="https://ultimateshop.net/public/assets/img/ltcc.png" alt="LTC" width="30" height="30" />
                  </div>
                  <div>
                    <h2 className="my-0 font-16 fw-semibold">Litecoin - LTC (3% Fee)</h2>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className="sr-only">Litecoin Payment Details</h3>
                  <div className="text-center mb-3">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?data=ltc1qasgpjr6fzdmr303mdkskut305qhxz2x4pc4ngz&size=150x150"
                      alt="QR Code"
                      className={styles.qrCode}
                    />
                  </div>
                  <label className="form-label d-block mb-2">Send any amount to this Address</label>
                  <input
                    type="text"
                    readOnly
                    className={styles.formControl}
                    value="ltc1qasgpjr6fzdmr303mdkskut305qhxz2x4pc4ngz"
                  />
                  <button className={styles.btnWarning}>
                    Press this button after Paying
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className={styles.tableContainer}>
            <h3 className={styles.tableTitle} style={{ border: "none" }}>
              Payments History
            </h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Coin</th>
                  <th>Address</th>
                  <th>Amount in Coin</th>
                  <th>Coin rate</th>
                  <th>Original Amount</th>
                  <th>Bonus</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Check</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={10} className={styles.emptyState}>
                    No results found.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Essential utility classes from original Bootstrap theme */
        .container-fluid {
          width: 100%;
          padding-right: 1.5rem;
          padding-left: 1.5rem;
          margin-right: auto;
          margin-left: auto;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -0.75rem;
          margin-left: -0.75rem;
        }
        .col-md-6 {
          flex: 0 0 auto;
          width: 50%;
          padding-right: 0.75rem;
          padding-left: 0.75rem;
        }
        @media (max-width: 768px) {
          .col-md-6 {
            width: 100%;
          }
        }
        .font-16 { font-size: 16px; }
        .font-20 { font-size: 20px; }
        .font-24 { font-size: 24px; }
        .fw-bold { font-weight: 700; }
        .fw-semibold { font-weight: 600; }
        .text-danger { color: #fa5c7c !important; }
        .text-dark { color: #313a46 !important; }
        .mb-0 { margin-bottom: 0 !important; }
        .mb-2 { margin-bottom: 0.5rem !important; }
        .mb-3 { margin-bottom: 1rem !important; }
        .mb-4 { margin-bottom: 1.5rem !important; }
        .mt-0 { margin-top: 0 !important; }
        .my-0 { margin-top: 0 !important; margin-bottom: 0 !important; }
        .text-center { text-align: center !important; }
        .d-flex { display: flex !important; }
        .align-items-center { align-items: center !important; }
        .justify-content-between { justify-content: space-between !important; }
        .gap-3 { gap: 1rem !important; }
        .gap-4 { gap: 1.5rem !important; }
        .p-0 { padding: 0 !important; }
        .text-end { text-align: right !important; }
      `}</style>
    </div>
  );
}
