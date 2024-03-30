import {CreateType} from "@/common/components/modals/type/CreateType.tsx";

export const Admin = () => {

  const adminNavigate = [
    {name: 'add type'},
    {name: 'add brand'},
    {name: 'add device'},
  ]
  return (
    <section>
      ADMIN
      <CreateType/>
    </section>
  );
};
