import DefaultLayout from "@/components/layouts/DefaultLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { zodResolver } from "@hookform/resolvers/zod";
import Head from "next/head";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  topic: z.string().min(1).max(100),
});
type Inputs = z.infer<typeof schema>;

const Debate: NextPageWithLayout = () => {
  // react-hook-form
  const { register, handleSubmit, formState } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Debate with AI | DebateAI</title>
      </Head>
      <main className="container mx-auto mt-20 mb-16 flex flex-col items-center justify-center gap-10 px-4">
        <form
          aria-label="generate shows from"
          className="mt-14 grid w-full max-w-xl gap-7"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
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
              {...register("topic")}
            />
          </fieldset>
          {formState.errors.topic && (
            <p className="text-sm font-medium">
              {formState.errors.topic.message}
            </p>
          )}
        </form>
      </main>
    </>
  );
};

export default Debate;

Debate.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;
