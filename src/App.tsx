import MenuCard from "./components/MenuCard";
import Navbar from "./components/Navbar";
import nasiAyam from "./assets/nasiAyam.jpg";
import nasiKuning from "./assets/nasiKuning.jpg";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-30">
      <Navbar />
      <div className="flex gap-10 justify-center">
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
