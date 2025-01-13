import styles from "./StarReview.module.css";

const StarReviewPresentation = () => {
  return (
    <>
      <p>
        <span className={`${styles.yellow} fa fa-star`}></span>
        <span className={`${styles.yellow} fa fa-star`}></span>
        <span className={`${styles.yellow} fa fa-star`}></span>
        <span className={`${styles.yellow} fa fa-star`}></span>
        <span className="fa fa-star"></span>
        <span>(4.67 - 172 reviews)</span>
      </p>
    </>
  );
};

export default StarReviewPresentation;
