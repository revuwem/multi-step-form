import { createBrowserRouter } from "react-router-dom";
import Addons from "./Addons/Addons";
import Info from "./Info/Info";
import Plan from "./Plan/Plan";
import Success from "./Success/Success";
import Summary from "./Summary/Summary";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Info />,
      errorElement: (
        <div>Sorry, we couldn't find the page you are looking for</div>
      ),
    },
    {
      path: "/plan",
      element: <Plan />,
      errorElement: (
        <div>Sorry, we couldn't find the page you are looking for</div>
      ),
    },
    {
      path: "/addons",
      element: <Addons />,
      errorElement: (
        <div>Sorry, we couldn't find the page you are looking for</div>
      ),
    },
    {
      path: "/summary",
      element: <Summary />,
      errorElement: (
        <div>Sorry, we couldn't find the page you are looking for</div>
      ),
    },
    {
      path: "/success",
      element: <Success />,
      errorElement: (
        <div>Sorry, we couldn't find the page you are looking for</div>
      ),
    },
  ],
  { basename: "/multi-step-form/" }
);

export default router;
