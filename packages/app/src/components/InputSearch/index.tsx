type InputProps = {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

function InputSearch({ onChange }: InputProps) {
  return <input onChange={onChange} placeholder="Digite o username" />;
}

export { InputSearch };
