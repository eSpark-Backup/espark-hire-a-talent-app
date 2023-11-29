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

  const onChangeToggle = (value, index) => {
    let temp = [...data];
    temp[index].toggle = !value;
    setData([...temp]);
    setallowZeroExpanded(!allowZeroExpanded);
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
              {commonQuestions.map((quest, i) => {
                return (
                  <div className="col-lg-6 col-md-12 col-sm-6" key={quest.id}>
                    <AccordionItem
                      className={`${
                        i >= commonQuestions.length - 2 ? "last-two" : ""
                      } accord-item ${quest.toggle ? "m-0" : ""} ${
                        i % 2 === 0 ? "" : "even-button"
                      }`}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <div
                            className="accordion-button-child"
                            onClick={() => onChangeToggle(quest.toggle, i)}
                          >
                            {quest.question}

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
                );
              })}
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CommonQuestions;
