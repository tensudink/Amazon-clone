import CategoryInfos  from "./CategoryInfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {CategoryInfos.map((infos ,index) => {
        return <CategoryCard key={index} data={infos} />;
      })}
    </section>
  );
}
export default Category;