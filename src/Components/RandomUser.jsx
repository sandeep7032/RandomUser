import { useState } from "react";
import UserTable from "./UserTable";
import UserFilter from "./UserFilter";
import { getUser } from "../API/User";

const RandomUser = () => {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState([]);

  const getData = () => {
    getUser(setUsers, setState);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Random User Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        temporibus quisquam eaque repellendus deleniti nulla alias deserunt?
        Quaerat quod ducimus deleniti iste consequuntur, iure perferendis magnam
        quibusdam repudiandae neque recusandae tempora aliquam quia cum culpa
        natus, numquam sapiente hic fuga cupiditate! Dolore reiciendis repellat
        temporibus reprehenderit doloribus minus. Nisi natus, dignissimos,
        recusandae dolores aspernatur nesciunt eaque debitis dolorum voluptas
        vel amet! Non maiores illo nulla explicabo inventore cupiditate
        reiciendis tenetur voluptatem quasi, cumque facilis beatae, velit
        ducimus ab deleniti quaerat soluta, accusantium saepe tempore. Qui quas
        quia quo reprehenderit modi natus obcaecati tempore quos, quisquam
        architecto beatae esse? Id totam voluptas nesciunt ea. Accusamus
        recusandae nam aspernatur totam qui tempore, aliquam obcaecati non
        voluptate fugit quos soluta? Placeat illum, minus id velit quia, quos
        nulla impedit provident iusto, eligendi architecto neque beatae
        perferendis ipsa. Temporibus dolorem ab odio doloribus fuga quia
        voluptatibus, consectetur assumenda dolor soluta suscipit doloremque
        labore natus et architecto tempora voluptate deserunt, quaerat cumque
        sequi ipsam, quam velit? Iure, aperiam natus. Reprehenderit, delectus
        perspiciatis. Adipisci saepe velit modi iure soluta, inventore ratione
        magnam placeat? Iste ullam dolor repellendus reprehenderit nobis
        pariatur libero itaque fugiat deserunt ad autem adipisci quibusdam
        expedita sint provident, nesciunt nemo vitae! Dicta, cumque?
      </p>
      <button onClick={getData}>Get Users</button>

      {users.length > 0 && <UserFilter state={state} setUsers={setUsers} />}
      {users.length > 0 && <UserTable users={users} />}
    </div>
  );
};

export default RandomUser;
