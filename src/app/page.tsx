import Form from "next/form";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      {/*<form action="/submit" method="POST" className="font-sans dark:text-white flex flex-col gap-2.5">*/}
      {/*  <input type="text" name={"name"} placeholder={'login'} className='input border-2 p-1'/>*/}
      {/*  <input type="text" name={"password"} placeholder={'password'} className='input border-2 p-1'/>*/}
      {/*  <button className='border-2 backdrop-invert-50 p-1'>submit</button>*/}
      {/*</form>*/}

      <Form action={"/submit"}>
        <input type="text" name={'name'}/>
        <button>send</button>
      </Form>
    </div>
  );
}
