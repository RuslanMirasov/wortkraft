import { useRouter } from "next/router";

const ThemaPage = () => {
  const router = useRouter();
  const { thema } = router.query;
  return (
    <section>
      <h1>Thema &quot;{thema}&quot;</h1>
    </section>
  );
};

export default ThemaPage;
