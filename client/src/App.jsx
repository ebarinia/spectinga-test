import Details from "./components/Details";
import Pricing from "./components/Pricing";
import Header from "./components/header";
import useTractors from "./hooks/useTractors";

function App() {
  const { isLoading, tractors, users, shipping } = useTractors();

  return isLoading ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <>
      <div className="bg-gradient-to-b from-[#2f44ed] to-[#0019d0] h-80">
        <Header users={users} />
        <div
          className="ml-[27%] mr-[27%] pt-10 grid grid-cols-2 gap-10 pb-10"
          style={{ gridTemplateColumns: "65% 35%" }}
        >
          <Details tractors={tractors} />
          <Pricing tractors={tractors} users={users} shipping={shipping} />
        </div>
      </div>
    </>
  );
}

export default App;
