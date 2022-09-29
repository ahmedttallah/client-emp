import Image from "next/image";
import Container from "./Container";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap mb-40">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Emplopedia
            </h1>
            <p className="py-10  text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              Where Companies can get trusted and Verified employees. Talents can
              certify their skills and get verified.
              <br /> So both Companies and talents would trust each other as they
              are trusted by Emplopedia.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-500 rounded-md "
              >
                Get Verified
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src="/img/hero.png"
              alt="Hero Illustration"
              width="1334"
              height="787"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
