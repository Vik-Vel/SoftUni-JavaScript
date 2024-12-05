function botanicalGardenCareSystem(input) {
  const plants = {}; 
  const sections = {}; 

  for (const command of input) {
    if (command === "EndDay") break;

    if (command.startsWith("Plant:")) {
      const [, plantInfo] = command.split("Plant: ");
      const [plantName, waterNeeded, section] = plantInfo.split("-");
      const waterAmount = parseInt(waterNeeded);

      if (!plants[plantName]) {
        plants[plantName] = { waterNeeded: waterAmount, section };
        sections[section] = (sections[section] || 0) + 1;
      } else {
        plants[plantName].waterNeeded += waterAmount;
      }
    } else if (command.startsWith("Water:")) {
      const [, waterInfo] = command.split("Water: ");
      const [plantName, waterAmountStr] = waterInfo.split("-");
      const waterAmount = parseInt(waterAmountStr);

      if (plants[plantName]) {
        plants[plantName].waterNeeded -= waterAmount;

        if (plants[plantName].waterNeeded <= 0) {
          console.log(`${plantName} has been sufficiently watered.`);
          const section = plants[plantName].section;

          delete plants[plantName];
          sections[section] -= 1;

          if (sections[section] === 0) {
            delete sections[section];
          }
        }
      }
    }
  }

  console.log("Plants needing water:");
  for (const [plantName, data] of Object.entries(plants)) {
    console.log(` ${plantName} -> ${data.waterNeeded}ml left`);
  }

  console.log("Sections with thirsty plants:");
  for (const [section, count] of Object.entries(sections)) {
    console.log(` ${section}: ${count}`);
  }
}

botanicalGardenCareSystem([
  "Plant: Orchid-300-TropicalZone",
  "Plant: Fern-200-FernGully",
  "Plant: Orchid-100-TropicalZone",
  "Water: Daisy-50",
  "Water: Orchid-400",
  "EndDay",
]);
