import fs from "fs";

const filePath = "src/assets/js/Layout.js";
fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
  const newText = data.replace(/unlockCategory: *(\d+)/g, (_, catNbr) => {
    if (parseInt(catNbr) > 7)
      return "unlockCategory: " + (parseInt(catNbr) + 1);
    return _;
  });
  fs.writeFile("src/assets/js/Layout.js", newText, _=>{});
});
