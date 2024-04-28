import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MessageCard from "./message-card";
import ContactsDrawer from "./contacts-drawer";
import PortalDrawer from "./portal-drawer";
import styles from "./index.module.css";

const UserMessages: NextPage = () => {
  const [isContactsDrawerOpen, setContactsDrawerOpen] = useState(false);

  const openContactsDrawer = useCallback(() => {
    setContactsDrawerOpen(true);
  }, []);

  const closeContactsDrawer = useCallback(() => {
    setContactsDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.userMessages}>
        <div className={styles.contacts}>
          <b className={styles.messages}>Messages</b>
          <div className={styles.conversation}>
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
          </div>
        </div>
        <div className={styles.messages1}>
          <div className={styles.messageheader}>
            <div className={styles.title}>
              <b className={styles.messages}>Cameron</b>
            </div>
            <button
              className={styles.iconsaxlinearhambergermenu}
              onClick={openContactsDrawer}
            >
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </button>
          </div>
          <div className={styles.messagescontainer}>
            <div className={styles.contactmessage}>
              <div className={styles.conversationBubble}>
                <div className={styles.whatDoYou}>What do you mean?</div>
              </div>
            </div>
            <div className={styles.contactmessage}>
              <div className={styles.conversationBubble}>
                <div className={styles.whatDoYou}>What do you mean?</div>
              </div>
            </div>
            <div className={styles.conversationBubbleWrapper}>
              <div className={styles.conversationBubble2}>
                <div className={styles.iThinkThe}>
                  I think the idea that things are chaning isnt good
                </div>
              </div>
            </div>
            <div className={styles.conversationBubbleWrapper}>
              <div className={styles.conversationBubble2}>
                <div className={styles.iThinkThe}>
                  I think the idea that things are chaning isnt good
                </div>
              </div>
            </div>
            <div className={styles.contactmessage}>
              <div className={styles.conversationBubble}>
                <div className={styles.whatDoYou}>What do you mean?</div>
              </div>
            </div>
            <div className={styles.conversationBubbleWrapper}>
              <div className={styles.conversationBubble2}>
                <div className={styles.iThinkThe}>
                  I think the idea that things are chaning isnt good
                </div>
              </div>
            </div>
            <div className={styles.conversationBubbleWrapper}>
              <div className={styles.conversationBubble2}>
                <div className={styles.iThinkThe}>
                  I think the idea that things are chaning isnt good
                </div>
              </div>
            </div>
            <div className={styles.contactmessage3}>
              <div className={styles.conversationBubble}>
                <div className={styles.whatDoYou}>What do you mean?</div>
              </div>
            </div>
            <div className={styles.conversationBubbleWrapper}>
              <div className={styles.conversationBubble2}>
                <div className={styles.iThinkThe}>
                  I think the idea that things are chaning isnt good
                </div>
              </div>
            </div>
            <div className={styles.conversationBubbleWrapper2}>
              <div className={styles.conversationBubble2}>
                <div className={styles.iThinkThe}>
                  I think the idea that things are chaning isnt good
                </div>
              </div>
            </div>
          </div>
          <div className={styles.messageinput}>
            <div className={styles.composeNewBtn}>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group@2x.png"
              />
              <div className={styles.typeAMessage}>Type a message</div>
            </div>
            <img
              className={styles.composeNewBtn1}
              alt=""
              src="/compose-new-btn@2x.png"
            />
          </div>
        </div>
      </div>
      {isContactsDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeContactsDrawer}
        >
          <ContactsDrawer onClose={closeContactsDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default UserMessages;
