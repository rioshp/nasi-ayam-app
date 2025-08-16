import MenuCard from "./components/MenuCard";
import Navbar from "./components/Navbar";
import images from "./assets/data";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen pt-20">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-10">
        <MenuCard
          title="Nasi Ayam Yuk Yak Yuk"
          imageUrl={images.nasiAyam}
          description="Description of Nasi Ayam Yuk Yak Yuk"
        />
        <MenuCard
          title="Nasi Kuning Yuk Yak Yuk"
          imageUrl={images.nasiKuning}
          description="Description of Nasi Kuning Yuk Yak Yuk"
        />
      </div>
    </div>
  );
}

export default App;
