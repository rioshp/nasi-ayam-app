import MenuCard from "../components/MenuCard";
import images from "../assets/data";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-10">
      <MenuCard
        title="Nasi Ayam"
        imageUrl={images.nasiAyam}
        description="Description of Nasi Ayam Yuk Yak Yuk"
      />
      <MenuCard
        title="Nasi Kuning"
        imageUrl={images.nasiKuning}
        description="Description of Nasi Kuning Yuk Yak Yuk"
      />
    </div>
  );
};
export default HomePage;
