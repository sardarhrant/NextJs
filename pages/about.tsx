import { useRouter } from "next/router";
import { useCallback } from "react";

export default function AboutPage() {
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, []);

  const goHome = useCallback(() => {
    router.push('/');
  }, []);

  return (
    <>
      <button onClick={goBack}>Go back</button>
      <button onClick={goHome}>Go Home</button>
    </>
  );
};