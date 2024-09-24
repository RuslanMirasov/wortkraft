import { useRouter } from "next/router";

const RoomPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <section>
      <h1>Word with ID: "{id}"</h1>
    </section>
  );
};

export default RoomPage;
