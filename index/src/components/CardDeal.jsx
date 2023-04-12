import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>


    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Increase in liquidity for property developers.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We're creating an alternative to traditional financing options, allowing for risk distribution and quick capital injections. Property 
        in need of additional capital were able to raise money through either selling their company or seeking debt. Now, they are able to 
        raise funds for the next big project while retaining ownership in their initial property.
      </p>
    </div>

    
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Removed barrier to entry for small investors.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Short-term rentals are an extraordinary investment offering lucrative returns while the underlying asset appreciates.
        So far it has only been available to a fortunate minority who have both the capital necessary and the knowledge of 
        local regulatory frameworks in popular tourist destinations. We're removing both these barriers and bringing this amazing
        opportunity to the small investor.
      </p>
    </div>

  </section>
);

export default CardDeal;