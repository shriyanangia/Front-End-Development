import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

/* React Portal:
A React Portal is a feature that allows you to render a component outside of its parent 
DOM hierarchy while maintaining the parent-child relationship in React. 
This is particularly useful for UI elements like 
modals, tooltips, or dropdowns that need to visually break out of their container.

React Portals are created using the ReactDOM.createPortal method, which takes two arguments:
Child: The React element you want to render.
Container: The DOM node where you want to render the element.

Benefits:
1. Avoiding Overflow and Z-Index Issues
When you need to render components like modals, tooltips, or dropdowns, they often need to appear 
above other content. If these components are nested within a parent that has 
overflow: hidden or z-index constraints, they might get clipped or not display correctly. 
Portals allow you to render these components outside of their parent hierarchy, avoiding such issues.

2. Better Accessibility
Portals can help improve accessibility by allowing you to place interactive elements in a 
more logical place in the DOM. For example, a modal rendered via a portal can be placed at 
the end of the DOM, making it easier for screen readers to navigate.

3. Simplified Styling
By rendering components outside of their parent hierarchy, you can simplify your CSS. 
You don’t have to worry about parent styles affecting your modal or tooltip, making it easier 
to manage and maintain your styles.*/

function Modal({ children, onClose }) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;
