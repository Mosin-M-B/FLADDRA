import "./SectionOne.css";
import { ArrSectionOne } from "./sectionOne.js";
export const SectionOne = () => {
  return (
    <>
      <section className="sectionOne">
        <div className="rotateimg"></div>
        <div className="s1c">
          <div className="innersection">
            <div className="innersectionheading">
              <h2>{ArrSectionOne[0].h2}</h2>
            </div>
            <div className="sectioncontent">
              <p>
                {ArrSectionOne[0].para}
              </p>
              <h3>{ArrSectionOne[0].h3}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
