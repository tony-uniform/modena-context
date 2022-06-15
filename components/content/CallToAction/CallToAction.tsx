import styles from "./CallToAction.module.scss";

export const CallToAction: React.FC<any> = ({ component }) => {
  const entry = component?.parameters?.content?.value;
  const { DisplayName, Text } = entry || {};
  return (
    <div className={styles["cta"]}>
      <section className={styles["cta__inner"]}>
        <div className={styles["cta__content"]}>
          <h1 className={styles["cta__title"]}>{DisplayName}</h1>
          <p
            className={styles["cta__text"]}
            dangerouslySetInnerHTML={{ __html: Text }}
          />
        </div>
      </section>
    </div>
  );
};
