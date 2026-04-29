import { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { updateTheme } from "../../../api/themeApi";

const ThemeSelector = () => {
  const {setTheme} =useContext(ThemeContext);
  const [color, setColor] = useState("");
  const [bg, setBg]=useState("");

  const handleSave = async () => {
    await updateTheme({
      themeMode: "custom",
      primaryColor: color,
      backgroundImageUrl: bg,
    });
    setTheme({
      color,
      background:bg || "#afff",
    });

    
  };

  return (
    <div>
      <input
        placeholder=" Text Color"
        onChange={(e) => setColor(e.target.value)}
      />
      <input placeholder="Background color/url" onChange={(e)=> setBg(e.target.value)}/>
      <button onClick={handleSave}>Apply Theme</button>
    </div>
  );
};

export default ThemeSelector;