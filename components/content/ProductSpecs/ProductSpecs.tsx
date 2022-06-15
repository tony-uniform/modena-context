import {
  Accordion,
  AccordionItem,
} from "@/components/atoms/accordion/accordion";
import { AccordionProps } from "@/components/atoms/accordion/accordionTypes";
import { Slot } from "@uniformdev/canvas-react";

import styles from "./ProductSpecs.module.scss";

type SpecsProps = {
  internalName: string;
  header: string;
  copy: string;
};

export const ProductSpecs: React.FC<any> = ({ component }) => {
  const entry = component?.parameters?.entry?.value;
  const { smallIntroHeader, header, benefits } = entry || {};

  return (
    <article className={styles["product-specs"]}>
      <h3 className={styles["product-specs__title"]}>
        <span className={styles["product-specs__tag"]}>{smallIntroHeader}</span>
        {header}
      </h3>
      <aside className={styles["product-specs__supporting"]}>
        <Accordion>
          {benefits ? (
            benefits.map((item: SpecsProps, index: number) => (
              <AccordionItem key={index} {...item} />
            ))
          ) : (
            <Slot name="items">
              {({ component }) => (
                <AccordionItem
                  {...(component?.parameters?.entry?.value as AccordionProps)}
                />
              )}
            </Slot>
          )}
        </Accordion>
      </aside>
    </article>
  );
};
