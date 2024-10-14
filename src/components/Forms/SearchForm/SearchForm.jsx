import { Form, Input } from '../..';

const SearchForm = ({ filterBooks }) => {
  const handleSearch = e => {
    filterBooks(e.target.value);
  };

  return (
    <Form>
      <Input type="search" name="search" placeholder="Suche" icon="search" onChange={handleSearch} />
    </Form>
  );
};

export default SearchForm;
