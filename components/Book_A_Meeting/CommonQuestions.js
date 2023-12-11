import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const CommonQuestions = ({ commonQuestions }) => {
  const [allowZeroExpanded, setallowZeroExpanded] = useState(true);
  const [data, setData] = useState([...commonQuestions]);

  const onChangeToggle = (index) => {
    const updatedData = data.map((item, i) => {
      return {
        ...item,
        toggle: i === index ? !item.toggle : false,
      };
    });

    setData(updatedData);
    setallowZeroExpanded(!updatedData.some((item) => item.toggle));
  };

  return (
    <div className="meeting-common-quest-area">
      <div className="container">
        <h1 className="comm-question-heading">
          Check out our common questions
        </h1>

        <div className="question-accordion">
          <Accordion allowZeroExpanded={allowZeroExpanded}>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-6">
                {data.map((quest, i) => {
                  return i % 2 === 0 ? (
                    <div
                      className="col-lg-12 col-md-12 col-sm-12"
                      key={quest.id}
                    >
                      <AccordionItem
                        className={`accord-item ${quest.toggle ? "m-0" : ""}`}
                      >
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <div
                              className="accordion-button-child"
                              onClick={() => onChangeToggle(i)}
                            >
                              <span>{quest.question}</span>

                              <div
                                className={`${
                                  quest.toggle ? "rotate-icon" : "down-arrow"
                                }`}
                              >
                                <img
                                  src="/images/book-a-meeting/icons/dark-arrow.png"
                                  alt="down"
                                />
                              </div>
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>{quest.answer}</p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </div>
                  ) : null;
                })}
              </div>

              <div className="col-lg-6 col-md-12 col-sm-6">
                {data.map((quest, i) => {
                  return i % 2 !== 0 ? (
                    <div
                      className="col-lg-12 col-md-12 col-sm-12"
                      key={quest.id}
                    >
                      <AccordionItem
                        className={`accord-item ${quest.toggle ? "m-0" : ""}`}
                      >
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <div
                              className="accordion-button-child"
                              onClick={() => onChangeToggle(i)}
                            >
                              <span>{quest.question}</span>

                              <div
                                className={`${
                                  quest.toggle ? "rotate-icon" : "down-arrow"
                                }`}
                              >
                                <img
                                  src="/images/book-a-meeting/icons/dark-arrow.png"
                                  alt="down"
                                />
                              </div>
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>{quest.answer}</p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CommonQuestions;
