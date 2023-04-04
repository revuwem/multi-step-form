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
    <div className="min-h-[600px] md:h-px w-full min-w-0 max-w-[940px]">
      <Box>
        <main className="h-full p-4 grid grid-cols-1 md:grid-cols-4">
          <Stepper steps={steps} />
          <section className="px-6 md:px-24 py-6 col-span-3 grid grid-rows-layout">
            {children}
          </section>
        </main>
      </Box>
    </div>
  );
};

export default Layout;
