import React, { useState } from "react";
import styled from "styled-components";

type ButtonSwitchProps = {
  leftLabel: string;
  rightLabel: string;
  onLeftClick: () => void;
  onRightClick: () => void;
  title?: string;
};

// Componente ButtonSwitch
const ButtonSwitch: React.FC<ButtonSwitchProps> = ({ leftLabel, rightLabel, onLeftClick, onRightClick, title }) => {
  const [isActiveLeft, setActiveLeft] = useState(true);

   return (
    <SwitchButton>
      <ActiveSpan style={{ left: isActiveLeft ? "0%" : "50%" }} />
      <SwitchButtonCase
        className={isActiveLeft ? "active-case" : ""}
        style={{ borderRadius: "10px 0 0 10px" }}
        title={title}
        onClick={() => {
          setActiveLeft(true);
          onLeftClick();
        }}
      >
        {leftLabel}
      </SwitchButtonCase>
      <SwitchButtonCase
        className={isActiveLeft ? "" : "active-case"}
        style={{ borderRadius: "0 10px 10px 0" }}
        title={title}
        onClick={() => {
          setActiveLeft(false);
          onRightClick();
        }}
      >
        {rightLabel}
      </SwitchButtonCase>
    </SwitchButton>
  );
};

export default ButtonSwitch;

const SwitchButton = styled.div`
  width: 400px;
  height: 40px;
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: 0.3s ease all;
  border: 1px solid white;
  background: #fff;
`;

const SwitchButtonCase = styled.button`
  display: inline-block;
  background: none;
  width: 49%;
  height: 100%;
  color: #6d7ef0;
  position: relative;
  border: 1px solid #495eec;
  transition: 0.5 ease-in-out all;
  padding-bottom: 1px;

  &:hover {
    color: #fff;
    cursor: pointer;
    background: #6d7ef0;
    transition: 0.5s ease all;
  }

  &:focus {
    outline: none;
  }

  &.active-case {
    color: #fff;
    background: #495eec;
    font-weight: 400;
  }
`;

const ActiveSpan = styled.span`
  color: #fff;
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: -1;
  transition: 0.5s ease-out all;
`;
