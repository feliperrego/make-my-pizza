import React, {
  useEffect, useState, useRef,
} from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsExclamationCircle } from 'react-icons/bs';
import { useField } from '@unform/core';
import {
  InputContainer, StyledInput, InputGroup,
} from './styles';
import InlineFeedback from '../InlineFeedback';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  guide?: boolean;
  placeholderChar?: string;
  keepCharPositions?: boolean;
  showMask?: boolean;
}

const Input: React.FC<Props> = ({
  name, disabled, type, ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [inputType, setInputType] = useState(type);
  const {
    fieldName, defaultValue, registerField, error, clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    } as any);
  }, [fieldName, registerField]);

  useEffect(() => {
    if (type === 'password') {
      setInputType(passwordVisibility ? 'text' : 'password');
    }
  }, [type, passwordVisibility, setInputType]);

  const toggleVisibility = () => setPasswordVisibility(!passwordVisibility);

  const renderVisibilityIcon = (visibility: boolean) => {
    const Icon = visibility ? AiOutlineEyeInvisible : AiOutlineEye;
    return type === 'password' && <Icon onClick={toggleVisibility} color="#9291A1" />;
  };

  return (
    <InputGroup>
      <InputContainer invalid={error ? 1 : 0} disabled={disabled}>
        <StyledInput
          invalid={error ? 1 : 0}
          ref={inputRef}
          id={fieldName}
          type={inputType}
          defaultValue={defaultValue}
          disabled={disabled}
          onFocus={clearError}
          {...props}
        />

        {renderVisibilityIcon(passwordVisibility)}

        {!!error && <BsExclamationCircle />}
      </InputContainer>

      {error && <InlineFeedback dangerouslySetInnerHTML={{ __html: error }} />}
    </InputGroup>
  );
};

export default Input;
