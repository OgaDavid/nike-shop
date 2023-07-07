import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";

const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={[]}/>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
