import React, { useState, useEffect } from "react";
import chroma from "chroma-js";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { ColorPicker } from "primereact/colorpicker";

function PrimaryColorGen() {
  const [color, setColor] = useState("#cccccc");
  const [percentage, setPercentage] = useState(10);
  const [inputColor, setInputColor] = useState(color);

  // Update inputColor when color is changed
  useEffect(() => {
    setInputColor(color);
  }, [color]);

  const handleColorInputChange = (e) => {
    const input = e.target.value;
    setInputColor(input);
    if (chroma.valid(input)) {
      setColor(input);
    }
  };

  const handleColorPickerChange = (e) => {
    if (e.value) {
      setColor("#" + e.value);
    }
  };

  useEffect(() => {
    setColor(color);
  }, [color]);
  

  const handlePercentageChange = (e) => {
    setPercentage(e.value);
  };

  const generateColors = () => {
    if (!chroma.valid(color)) {
      return [];
    }
  
    const lightColorScale = chroma.scale(["white", color]).mode("lch");
    const darkColorScale = chroma.scale([color, "#000"]).mode("lch");
    const colors = [];
  
    // Generate colors from white to the input color
    // Start i from 1 - percentage / 100 to avoid pushing the input color again
    for (let i = 0; i <= 1 - percentage / 100; i += percentage / 100) {
      colors.push(lightColorScale(i).hex());
    }
  
    // Include the input color
    colors.push(color);
  
    // Generate colors from the input color to black
    for (let i = percentage / 100; i <= 1; i += percentage / 100) {
      colors.push(darkColorScale(i).hex());
    }
  
    return colors;
  };
  

  return (
    <div>
      <h2>Color Generator</h2>
      <span className="p-float-label">
        <InputText
          id="color"
          value={inputColor}
          onChange={handleColorInputChange}
        />
        <label htmlFor="color">Color</label>
      </span>
      <ColorPicker value={color} onChange={handleColorPickerChange} />
      <InputNumber
        id="percentage"
        value={percentage}
        onValueChange={handlePercentageChange}
        mode="decimal"
        min={0}
        max={100}
        step={0.1}
      />
      <div className="flex h-full flex-wrap w-full">
        {generateColors().map((color, index) => (
          <div
            key={index}
            className=" h-full"
            style={{
              backgroundColor: color,
              minHeight: "20vh",
              flex: "1 1 200px",
            }}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}
export default PrimaryColorGen;
