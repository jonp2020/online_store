import Shoe from "./Shoe";

const Mens = () => {
  return (
    <section className="m-4">
      <h2>Mens</h2>
      <main className="flex flex-wrap">
        <Shoe shoe={{ id: "1", type: "mens" }} />
        <Shoe shoe={{ id: "2", type: "mens" }} />
        <Shoe shoe={{ id: "3", type: "mens" }} />
        <Shoe shoe={{ id: "4", type: "mens" }} />
        <Shoe shoe={{ id: "5", type: "mens" }} />
        <Shoe shoe={{ id: "6", type: "mens" }} />
        <Shoe shoe={{ id: "7", type: "mens" }} />
        <Shoe shoe={{ id: "8", type: "mens" }} />
        <Shoe shoe={{ id: "9", type: "mens" }} />
        <Shoe shoe={{ id: "10", type: "mens" }} />
        <Shoe shoe={{ id: "11", type: "mens" }} />
        <Shoe shoe={{ id: "12", type: "mens" }} />
        <Shoe shoe={{ id: "13", type: "mens" }} />
        <Shoe shoe={{ id: "14", type: "mens" }} />
        <Shoe shoe={{ id: "15", type: "mens" }} />
      </main>
    </section>
  );
};

export default Mens;
