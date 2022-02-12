import * as S from './styles';

type InputProps = {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

function InputSearch({ onChange }: InputProps) {
  return <S.Input onChange={onChange} placeholder="Digite o username" />;
}

export { InputSearch };
