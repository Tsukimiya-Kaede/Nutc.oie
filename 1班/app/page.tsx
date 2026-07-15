import Portal from "./portal";
import { teacherQa } from "./server-data";

export default function Home() {
  return <Portal questions={teacherQa} />;
}
