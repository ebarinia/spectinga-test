import Details from "./components/Details";
import Pricing from "./components/Pricing";
import Header from "./components/header";
import useTractors from "./hooks/useTractors";

function App() {
  const { isLoading, tractors, users, locales } = useTractors();

  return isLoading ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <>
      <div className="bg-[#2c42ec] h-80">
          <Header users={users} />
        <div
          className="ml-[25%] mr-[25%] pt-10 grid grid-cols-2 gap-10"
          style={{ gridTemplateColumns: "65% 35%" }}
        >
          <Details tractors={tractors} />
          <Pricing tractors={tractors} users={users}/>
        </div>
      </div>
    </>
  );
}

export default App;