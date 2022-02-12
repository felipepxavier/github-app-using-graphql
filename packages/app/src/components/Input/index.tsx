import * as S from './styles';

export type InputProps = {
  placeholder?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
};

function Input({ onChange, placeholder }: InputProps) {
  return <S.Input onChange={onChange} placeholder={placeholder} />;
}

export { Input };
