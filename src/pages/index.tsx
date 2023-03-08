import DefaultLayout from "@/components/layouts/DefaultLayout";
import Button from "@/components/ui/Button";
import { NextPageWithLayout } from "@/pages/_app";
import Head from "next/head";
import Router from "next/router";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>DebateAI</title>
      </Head>
      <main className="container mt-32 mb-16 flex flex-col items-center justify-center gap-10">
        <div className="grid max-w-3xl place-items-center gap-5">
          <h1 className="text-center text-4xl font-bold leading-tight text-gray-50 sm:text-6xl sm:leading-tight">
            Sharpen your debating skills by debating with AI
          </h1>
          <p className="text-center text-lg text-gray-400 sm:text-xl">
            Debate with AI and improve your debating skills, and get useful
            insights on the topics for your next debate
          </p>
        </div>
        <div className="flex w-full gap-4 items-center max-w-xs">
          <Button
            aria-label="navigate to debate page"
            onClick={() => Router.push("/debate")}
          >
            Start Debate
          </Button>
          <Button
            aria-label="navigate to enquire page"
            variant="secondary"
            onClick={() => Router.push("/insights")}
          >
            Get Insights
          </Button>
        </div>
      </main>
    </>
  );
};

export default Home;

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;
