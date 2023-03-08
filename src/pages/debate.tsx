import DefaultLayout from "@/components/layouts/DefaultLayout";
import { NextPageWithLayout } from "@/pages/_app";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <>
      <Head>
        <title>Debate with AI | DebateAI</title>
      </Head>
      <main className="container mx-auto mt-32 mb-16 flex flex-col items-center justify-center gap-10 px-4">
        <form
          aria-label="generate shows from"
          className="mt-14 grid w-full max-w-xl gap-7"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <fieldset className="grid gap-3">
            <label
              htmlFor="topic"
              className="text-sm font-medium text-white sm:text-base"
            >
              Enter topic
            </label>
            <input
              type="text"
              id="topic"
              className="w-full rounded-md border-gray-400 bg-transparent px-4 py-2.5 text-base text-gray-50 transition-colors placeholder:text-gray-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
              placeholder="e.g. Effect of our carbon footprint on the environment"
            />
          </fieldset>
        </form>
      </main>
    </>
  );
};

export default Home;

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;
