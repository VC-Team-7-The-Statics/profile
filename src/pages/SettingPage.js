import styles from "./SettingPage.module.scss";

function SettingPage() {
  return (
    <div className={styles["setting-container"]}>
      <h1 className={styles.title}>설정</h1>
      <div className={styles.content}>
        <a href="/" className={styles.setting}>
          로그아웃
        </a>
      </div>
    </div>
  );
}

export default SettingPage;
