import Stepper from "../Stepper/Stepper";
import Box from "../../ui/Box/Box";

interface LayoutProps {
  children: React.ReactNode;
}

const steps = [
  {
    number: "1",
    label: "Your info",
    path: "/",
  },
  {
    number: "2",
    label: "Select plan",
    path: "/plan",
  },
  {
    number: "3",
    label: "Add-ons",
    path: "/addons",
  },
  {
    number: "4",
    label: "Summary",
    path: "/summary",
  },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <main className="min-h-[600px] w-full max-w-[940px] p-4 grid grid-cols-1 md:grid-cols-4">
        <Stepper steps={steps} />
        <section className="px-24 py-6 col-span-3 grid grid-rows-layout">
          {children}
        </section>
      </main>
    </Box>
  );
};

export default Layout;
