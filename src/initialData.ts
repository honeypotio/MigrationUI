import { Progress } from "./app/types";

const initialData = {
  sections: {
    dashboard: {
      label: "Dashboard",
      elements: {
        insights: {
          label: "Insights",
          progress: Progress.notDone,
        },
        products: {
          label: "Products",
          progress: Progress.inProgress,
          elements: {
            list: {
              label: "Product list",
              progress: Progress.done,
            },
            edit: {
              label: "Edit modal",
              progress: Progress.notDone,
            },
          },
        },
      },
    },
    catalog: {
      label: "Catalog",
      elements: {
        product: {
          label: "Product detail",
          progress: Progress.notDone,
        },
      },
    },
  },
};

export default initialData;
