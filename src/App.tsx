import MenuCard from "./components/MenuCard";
import Navbar from "./components/Navbar";
import nasiAyam from "./assets/nasiAyam.jpg";
import nasiKuning from "./assets/nasiKuning.jpg";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen mt-20">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-10">
        <MenuCard
          title="Nasi Ayam Yuk Yak Yuk"
          imageUrl={nasiAyam}
          description="Description of Nasi Ayam Yuk Yak Yuk"
        />
        <MenuCard
          title="Nasi Kuning Yuk Yak Yuk"
          imageUrl={nasiKuning}
          description="Description of Nasi Kuning Yuk Yak Yuk"
        />
      </div>
    </div>
  );
}

export default App;
