import Info from "../../components/Home/Info";
import PictureBar from "../../components/Home/PictureBar";
import Sidebar from "../../components/Home/Sidebar";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-6 flex-col min-[1440px]:flex-row">
        <Sidebar />
        <PictureBar />
      </div>
      <Info />
    </div>
  );
};
export default HomePage;
