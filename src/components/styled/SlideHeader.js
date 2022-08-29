import styled from "styled-components";

// -------------- Styled Component ---------------------

// Create a components
export const SlideHeader = styled.span`
   font-family: var(--primary_font);
   font-size: 20rem;
   font-weight: bold;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.5;
   letter-spacing: 0.02px;
   text-align: left;
   color: var(--primary_color_900);
  `;

// Create a wrapper to containt component
export const SlideHeaderWrapper = styled.section`
    padding: var(--main-padding);
`;
