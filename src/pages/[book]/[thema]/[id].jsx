import { useRouter } from "next/router";

const LearnRoom = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <section>
      <h1>Word with ID: &quot;{id}&quot;</h1>
    </section>
  );
};

export default LearnRoom;
