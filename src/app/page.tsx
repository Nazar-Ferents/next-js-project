
import {createUser} from "@/src/app/actions/user";

export default function Home() {

  return (

      <form action={createUser}>

          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="name" placeholder="Name" />
           <input type="text" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>


  );
}
