import Form from "next/form";
import {saveActions} from "@/src/server-actions/server-actons";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <Form action={saveActions}>
        <input type="text" name={'title'}/>
        <button>send</button>
      </Form>
    </div>
  );
}
