import {renderToString, renderToStaticMarkup} from "react-dom/server";
import {App} from "./App";
import {TrainingPage} from "./pages/TrainingPage";
import {BRAND, TRAINING_PAGES} from "./data";

export {BRAND, TRAINING_PAGES};
export const renderHome = () => renderToString(<App />);
export const renderTraining = (slug: string) => {
  const page = TRAINING_PAGES.find((item) => item.slug === slug);
  if (!page) throw new Error(`Unknown training page: ${slug}`);
  return renderToStaticMarkup(<TrainingPage page={page} />);
};
