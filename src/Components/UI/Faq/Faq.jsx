import React from "react";
import "./Faq.scss";

const Faq = () => {
  return (
    <div className="faq">
      <div className="faq__wrapper">
        <div className="faq__desc">
          <h1 className="faq__title">Frequently asked questions</h1>
          <p className="faq__text">
            If you have any further questions, please contact us{" "}
          </p>
        </div>
        <div className="faq__accor">
          <div className="c">
            <input type="checkbox" id="faq-1" />
            <h3 className="faq__accortitle">
              <label htmlFor="faq-1">
                Will I receive lifetime access to the courses?
              </label>
            </h3>
            <div className="p">
              <p>
                "Our platform includes downloadable resources such as PDFs and
                worksheets to help you study and teach effectively."
              </p>
            </div>
          </div>
          <div className="c">
            <input type="checkbox" id="faq-2" />
            <h3 className="faq__accortitle">
              <label htmlFor="faq-2">
                Can I use the materials for community teaching?
              </label>
            </h3>
            <div className="p">
              <p>
                "Our platform includes downloadable resources such as PDFs and
                worksheets to help you study and teach effectively."
              </p>
            </div>
          </div>
          <div className="c">
            <input type="checkbox" id="faq-3" />
            <h3 className="faq__accortitle">
              <label htmlFor="faq-3">
                Will I receive lifetime access to the courses?
              </label>
            </h3>
            <div className="p">
              <p>
                "Our platform includes downloadable resources such as PDFs and
                worksheets to help you study and teach effectively."
              </p>
            </div>
          </div>
          <div className="c">
            <input type="checkbox" id="faq-4" />
            <h3 className="faq__accortitle">
              <label htmlFor="faq-4">
                Is there a free trial for the courses?
              </label>
            </h3>
            <div className="p">
              <p>
                "Our platform includes downloadable resources such as PDFs and
                worksheets to help you study and teach effectively."
              </p>
            </div>
          </div>
          <div className="c">
            <input type="checkbox" id="faq-5" />
            <h3 className="faq__accortitle">
              <label htmlFor="faq-5">
                Is there a free trial for the courses?
              </label>
            </h3>
            <div className="p">
              <p>
                "Our platform includes downloadable resources such as PDFs and
                worksheets to help you study and teach effectively."
              </p>
            </div>
          </div>
          <div className="c">
            <input type="checkbox" id="faq-6" />
            <h3 className="faq__accortitle">
              <label htmlFor="faq-6">Who can benefit from these courses?</label>
            </h3>
            <div className="p">
              <p>
                "Our platform includes downloadable resources such as PDFs and
                worksheets to help you study and teach effectively."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
