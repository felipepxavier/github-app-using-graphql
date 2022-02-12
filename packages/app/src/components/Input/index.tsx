import { useCallback, useState } from 'react';
import * as S from './styles';

export type InputProps = {
  placeholder?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  isSearch?: boolean;
};

function Input({ onChange, placeholder, isSearch = false }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  return (
    <S.Wrapper isFocused={isFocused}>
      <S.Input
        onChange={onChange}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isSearch && <S.ButtonSearch>Pesquisar</S.ButtonSearch>}
    </S.Wrapper>
  );
}

export { Input };
