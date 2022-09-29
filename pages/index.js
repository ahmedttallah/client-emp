import Head from "next/head";
import Container from "../components/Container";
import Hero from "../components/Hero";
import { getCookie } from "cookies-next";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "../constants";
import { useRouter } from "next/router";

export default function Home() {


  const router = useRouter();

  useEffect(() => {
    const loadData = async () => {
      // checks if the user is authenticated
      const token = getCookie("x-access-token");
      await axios
        .get(`${baseURL}/verify-token`, {
          headers: { "x-access-token": token },
        })
        .catch(function (error) {
          if (error.response) {
            router.push("/auth/login");
          } else {
            toast.error(error.message);
          }
        });
    };
    loadData();
  }, [router]); // Ensure Auth


  return (
    <div>
      <Head>
        <title>Emplopedia</title>
        <meta name="description" content="Generated by Towebia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="flex justify-center mt-10 mb-20">
          <h1 className="flext justify-center text-xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Coming Soon ...
          </h1>
        </div>
        <Hero />
      </Container>
    </div>
  );
}
