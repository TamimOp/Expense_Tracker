import Navbar from "./components/Navbar";
import SubmitionForm from "./components/SubmitionForm";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="relative mx-auto mt-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SubmitionForm />
        </div>
      </div>
    </>
  );
}
