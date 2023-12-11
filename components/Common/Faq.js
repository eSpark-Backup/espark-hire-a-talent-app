import React, { useState } from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const Faq = ({ title, item }) => {
  const [allowZeroExpanded, setallowZeroExpanded] = useState(true);
  const [data, setData] = useState([...item]);
  const onChangeToggle = (value, index) => {
    let temp = [...data];
    temp[index].toggle = !value;
    setData([...temp]);
    setallowZeroExpanded(!allowZeroExpanded);
  };

  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2 className="fw-semibold">{title}</h2>
          </div>
          <div className="faq-accordion">
            <Accordion allowZeroExpanded={allowZeroExpanded}>
              {item?.map((item, i) => (
                <AccordionItem uuid={i} key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div
                        onClick={() => onChangeToggle(item.toggle, i)}
                        className="button-header"
                      >
                        <p
                          style={{
                            fontSize: '22px',
                            fontWeight: '600',
                            color: '#09114A',
                          }}
                        >
                          {item.heading}
                        </p>

                        <Image
                          src={
                            item.toggle
                              ? '/images/icon/Group_93.svg'
                              : '/images/icon/group_92.svg'
                          }
                          alt="Outsourced Employee - Staff Outsourcing Solutions - Outsourced Staff - Global Employment Outsourcing - Employment Outsourcing Services – eSpark Talent"
                          width={75}
                          height={75}
                        />
                      </div>
                      <div>
                        <AccordionItemPanel>
                          <p
                            style={{
                              fontSize: '16px',
                              fontWeight: '400',
                              color: '#6F76A8',
                            }}
                          >
                            {item.paragraph}
                          </p>
                        </AccordionItemPanel>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faq;
