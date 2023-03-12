import Stepper from "../Stepper/Stepper";
import Box from "../../ui/Box/Box";

interface LayoutProps {
  children: React.ReactNode;
}

const steps = [
  {
    number: "1",
    label: "Your info",
  },
  {
    number: "2",
    label: "Select plan",
  },
  {
    number: "3",
    label: "Add-ons",
  },
  {
    number: "4",
    label: "Summary",
  },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <main className="min-h-[600px] w-[940px] p-4 grid grid-cols-4">
        <Stepper steps={steps} />
        <section className="px-24 py-6 col-span-3 grid grid-rows-layout">
          {children}
        </section>
      </main>
    </Box>
  );
};

export default Layout;
