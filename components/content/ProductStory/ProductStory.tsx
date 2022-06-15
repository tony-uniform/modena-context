import styles from "./ProductStory.module.scss";
import { ComponentProps, Slot } from "@uniformdev/canvas-react";
import Image from "next/image";

type StoryBlockProps = ComponentProps<{
  introHeader?: string;
  header?: string;
  copy?: string;
}>;

export const ProductStory: React.FC<any> = ({ component }) => {
  const entry = component?.parameters?.entry?.value;
  const { title, tagLine, intro, backgroundImage, stories } = entry || {};
  const { src, alt } = backgroundImage || {};
  const backgroundImageSrc = encodeURIComponent(src);
  return (
    <div className={styles["story"]}>
      <section className={styles["story__inner"]}>
        <div className={styles["story__banner"]}>
          {backgroundImageSrc && (
            <Image
              src={backgroundImageSrc}
              alt={alt}
              layout="fill"
              objectFit="cover"
              loading="eager"
              quality="75"
              className={styles["story__img"]}
            />
          )}
          {title && (
            <h2 className={styles["story__title"]}>
              {tagLine && (
                <span
                  className={`${styles["story__tagline"]} ${styles["story__tagline--spaced"]}`}
                  dangerouslySetInnerHTML={{ __html: tagLine }}
                />
              )}
              <span dangerouslySetInnerHTML={{ __html: title }} />
            </h2>
          )}
        </div>
        <div className={styles["story__container"]}>
          <p
            className={styles["story__text"]}
            dangerouslySetInnerHTML={{ __html: intro }}
          />
          <aside className={styles["story__supporting"]}>
            {stories ? (
              stories.map((s, i) => <StoryBlock key={i} {...s} />)
            ) : (
              <Slot name="stories">
                {({ component }) => (
                  <StoryBlock
                    {...(component?.parameters?.entry
                      ?.value as StoryBlockProps)}
                  />
                )}
              </Slot>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
};

const StoryBlock: React.FC<StoryBlockProps> = ({
  header,
  introHeader,
  copy,
}) => {
  return (
    <section className={styles["story__card"]}>
      <h3 className={styles["story__subtitle"]}>
        <span className={styles["story__tagline"]}>{introHeader}</span>
        {header}
      </h3>
      {copy && (
        <div
          className={styles["story__text"]}
          dangerouslySetInnerHTML={{ __html: copy }}
        />
      )}
    </section>
  );
};
