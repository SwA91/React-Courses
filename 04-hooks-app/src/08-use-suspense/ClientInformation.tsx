import { use, type Usable } from "react";
import { type User } from "./api/get-user.action";

interface Props {
  // Usable es una promesa o contexto que maneja react
  getUser: Usable<User>;
}

// un componente async solo en web server se puede usar
// en este caso no es recomendable
export const ClientInformation = ({ getUser }: Props) => {
  /* 
  - no es un hook
  - se usa mucho con el Suspense
  - similar a como si llevara un await para acceder a los datos
  */
  const user = use(getUser);
  // const user = await getUserAction(id)

  // useEffect(() => {
  //  no recomendado
  //   getUserAction(id).then(console.log);
  // }, [id]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">
        {user.name} - #{user.id}
      </h2>

      <p className="text-white text-2xl">{user.location}</p>
      <p className="text-white text-xl">{user.role}</p>
    </div>
  );
};
