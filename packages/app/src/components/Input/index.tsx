import * as S from './styles';

export type InputProps = {
  placeholder?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  isSearch?: boolean;
};

function Input({ onChange, placeholder, isSearch = false }: InputProps) {
  return (
    <S.Wrapper>
      <S.Input onChange={onChange} placeholder={placeholder} />
      {isSearch && <S.ButtonSearch>Pesquisar</S.ButtonSearch>}
    </S.Wrapper>
  );
}

export { Input };
