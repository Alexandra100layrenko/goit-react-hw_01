import styles from './FriendListItem.module.css';
import clsx from 'clsx';


export default function FriendListItem({friend: {avatar, name, isOnline}, }) {
  
    const itemClsx = clsx(
      styles.item,
      isOnline ? styles.isActive : styles.isRetired
    );

    return(
        <div className={styles.item}>
            <img
                src={avatar}
                alt="User avatar"
                className={styles.avatar}
                width="60"
            />
            <p className={styles.name}>{name}</p>
            <p  className={itemClsx}>{isOnline ? "Online" : "Offline"}</p>
  </div>
  );
  
}