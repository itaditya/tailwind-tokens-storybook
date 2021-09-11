import React from 'react';
import { styled } from '@storybook/theming';

const Heading = styled.h3`
  background-color: hotpink;
`;

function TestComp(props) {
  console.log(`props`, props); // aditodo remove this

  return <div>Yahah, {props.children}</div>
}

const StyledTestComp = styled(TestComp)`
  border-radius: 40px;
`;

export function Sizes({ title, property, prefix = '', sizes, className, children }) {
  return (
    <section>
      <Heading>{title}</Heading>
      {Object.entries(sizes).map(([name, size]) => {
        const isNegative = name.startsWith('-');
        if (isNegative) {
          return null;
        }
        const customClass = `${prefix}${property}-${name}`;

        return (
          <div key={name} className="">
            <div className="">
              <div className={customClass}>{children}</div>
              <StyledTestComp x={2} className="aditya">
                Hello
              </StyledTestComp>
            </div>
            <p className="">
              <span>Class: {customClass}</span>
              <span className="">Value: {size}</span>
            </p>
          </div>
        );
      })}
    </section>
  );
}
