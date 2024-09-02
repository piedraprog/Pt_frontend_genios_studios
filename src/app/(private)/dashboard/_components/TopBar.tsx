import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InfoChips from "./infoChips";

const TopBar = () => {

  return (
    <div className="bg-white p-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <label className="text-xl text-black font-bold">Prueba Tecnica Jose Piedra</label>
      </div>
      <div className="FLEX">
        <InfoChips label="Prueba" value={20}/>

      </div>
      <div className="flex items-center space-x-2">
        <Button>Iniciar Sesión</Button>
      </div>
    </div>
  );
}


export default TopBar;