import { useCallback, useState } from 'react';
import * as S from './styles';

export type InputProps = {
  placeholder?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  callbackOnClickButton?: (value: string) => void;
};

function Input({ onChange, placeholder, callbackOnClickButton }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [currentValue, setCurrentValue] = useState('');

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  return (
    <S.Wrapper isFocused={isFocused}>
      <S.Input
        onChange={(event) => {
          onChange && onChange(event);
          callbackOnClickButton && setCurrentValue(event.target.value);
        }}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {callbackOnClickButton && (
        <S.ButtonSearch onClick={() => callbackOnClickButton(currentValue)}>
          Pesquisar
        </S.ButtonSearch>
      )}
    </S.Wrapper>
  );
}

export { Input };
