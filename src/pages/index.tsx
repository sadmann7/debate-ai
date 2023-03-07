import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DebateGPT - Debate with AI</title>
      </Head>
      <main className="container mx-auto mt-32 mb-16 flex flex-col items-center justify-center gap-10 px-4">
        <div className="grid max-w-2xl place-items-center gap-5">
          <h1 className="text-center text-4xl font-bold leading-tight text-gray-50 sm:text-6xl sm:leading-tight">
            Sharpen your debating skills with AI
          </h1>
          <p className="text-center text-lg text-gray-400 sm:text-xl">
            Debate with AI and get feedback on your arguments.
          </p>
        </div>
      </main>
    </>
  );
}
