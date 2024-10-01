const InputFile = ({ type, name, onChange, value }) => {
  return (
    <label>
      <input type={type} name={name} onChange={onChange} value={value} />
    </label>
  );
};

export default InputFile;
