import Logo from "../../../../public/Logo.png";

export default function Header() {
  return (
    <div className="flex items-center justify-center w-full h-[200px] bg-zinc-950">
      <img src={Logo} alt="Logo do Projeto" className="bg-cover" />
    </div>
  );
}
