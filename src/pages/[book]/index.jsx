import { useRouter } from "next/router";

const BookPage = () => {
  const router = useRouter();
  const { book } = router.query;
  return (
    <section>
      <h1>Book "{book}"</h1>
    </section>
  );
};

export default BookPage;
