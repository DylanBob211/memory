import React from 'react';
import styled from 'styled-components';
import { GlobalWrapper, BackButton, GlobalTextElement } from '../App/AppElements';

export const TextElement = styled(GlobalTextElement)`
  font-size: 4rem;
`;

export const SettingsMenuWrapper = styled(GlobalWrapper)`
  justify-content: center;
  align-items: center;
`;

export const SettingsMenuBackButton = styled(BackButton)`
  position: absolute;
  top: 80%;
`;

export const SettingsRadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;

export const SettingsRadioLabel = styled.label`
  cursor: pointer;
  font-size: 2rem;
  background: none;
  border: .2em solid;
  border-color: ${props => (props.warning ? '#aa0000' : '#000')};
  padding: 1rem 4rem;
  transition-duration: .2s;
  transition-property: color, border;
  &:hover {
    color: white;
    border-color: #fff;
  }
`;

export const SettingsRadioButton = styled.input.attrs(
  () => ({ type: 'radio' }),
)`
  opacity: 0;
  position: fixed;
  width: 0;

  &:checked + ${SettingsRadioLabel} {
    background-color: #fef6;
    border-color: #fef;
  }

  &:focus + ${SettingsRadioLabel} {
    border: .2em solid #fef;
  }
`;

export const SettingsRadioUnit = ({
  id, value, tag, checked, ...props
}) => (
  <>
    <SettingsRadioButton id={id} value={value} {...props} />
    <SettingsRadioLabel htmlFor={id} {...props}>{tag || value.replace(/^\w/, c => c.toUpperCase())}</SettingsRadioLabel>
  </>
);
