import Head from "next/head";
import { SideBar } from "@/components/layouts/SideBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanban task management web app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <SideBar />
    </>
  );
}
