import fetcher from '../../../utils/fatcher';
import { mutate } from 'swr';
import { Button, Fieldset, Form, Icon, Input } from '../..';
import { usePopup } from '../../../hooks/usePopup';

const SearchForm = () => {
  const { setLoading, popupOpen, popupClose } = usePopup();

  const handleSearch = async data => {
    console.log(data);
    // setLoading(true);
    // try {
    //   await fetcher('/api/auth/login', 'POST', data);
    //   mutate('/api/auth/user');
    // } catch (error) {
    //   popupOpen('error', `Error ${error.status}`, error.message, 'login');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <Form onSubmit={handleSearch}>
      <Fieldset col="3">
        <Input type="radio" name="search-type" label="Wörter " value="words" checked />
        <Input type="radio" name="search-type" label="Bücher " value="books" />
        <Input type="radio" name="search-type" label="Themen" value="thems" />
      </Fieldset>
      <Input type="search" name="search" placeholder="Suche" />
    </Form>
  );
};

export default SearchForm;
