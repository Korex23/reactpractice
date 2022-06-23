// import img1 from "../../public/images/image1";
// import img2 from "../../images/image1";
// import img3 from "../images/image3.jpg";
// import img4 from "../images/image4.jpg";
import DataBase from "../DB.json";
import { CardComponent } from "./cardIter";
import { LearnersHubHome } from "./cardIter";
import { LearnersHubPage } from "./cardIter";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";

export const MultipleCards = () => {
  return (
    <div className="row mx-3 g-3">
      {DataBase.products.map((product) => {
        return (
          <div className="col-sm-12 col-md-6 col-lg-3 mb-5">
            <CardComponent {...product}></CardComponent>
          </div>
        );
      })}
    </div>
  );
};

export const MultipleCards2 = () => {
  return (
    <div className="row mx-3 g-3">
      {DataBase.learners1.map((learner) => {
        return (
          <div className="col-sm-12 col-md-4 col-lg-4">
            <LearnersHubHome {...learner}></LearnersHubHome>
          </div>
        );
      })}
    </div>
  );
};

export const MultipleCards3 = () => {
  return (
    <section>
      {DataBase.learners2.map((learn) => {
        return <LearnersHubPage {...learn}></LearnersHubPage>;
      })}
    </section>
  );
};
