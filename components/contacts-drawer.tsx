import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./contacts-drawer.module.css";

export type ContactsDrawerType = {
  onClose?: () => void;
};

const ContactsDrawer: NextPage<ContactsDrawerType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.contactsdrawer} data-animate-on-scroll>
      <b className={styles.messages}>Messages</b>
      <div className={styles.conversation}>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.messages}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.omgThisIs}>14:32</div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.messages}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.omgThisIs}>14:32</div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.messages}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.omgThisIs}>14:32</div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.messages}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.omgThisIs}>14:32</div>
        </div>
        <div className={styles.contactCard}>
          <div className={styles.photoautoLayout}>
            <img
              className={styles.photoautoLayoutChild}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className={styles.nametext}>
              <b className={styles.messages}>Cameron Williamson</b>
              <div className={styles.omgThisIs}>omg, this is amazing</div>
            </div>
          </div>
          <div className={styles.omgThisIs}>14:32</div>
        </div>
      </div>
    </div>
  );
};

export default ContactsDrawer;
