import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputCsv = path.join(__dirname, "..", "data", "productos.csv");
//const outputJson = path.join(__dirname, "..", "data", "products.json");
const outputJson = path.join(__dirname, "..", "data", "products.json");

const parseBool = (value) => {
  const v = String(value ?? "").trim().toLowerCase();
  return ["1", "true", "yes", "si", "s"].includes(v);
};

const parseNumber = (value) => {
  if (!value || String(value).trim() === "") return 0;
  return Number(String(value).replace(/\./g, "").replace(",", "."));
};

const text = fs.readFileSync(inputCsv, "utf-8");
const lines = text.trim().split(/\r?\n/);
const headers = lines[0].split(";");

const rows = lines.slice(1).map((line) => {
  const values = line.split(";");
  const row = {};

  headers.forEach((header, index) => {
    row[header] = values[index] ?? "";
  });

  return {
    codProduct: String(row.codProduct ?? "").trim(),
    category: String(row.category ?? "").trim(),
    marca: String(row.marca ?? "").trim(),
    image: String(row.image ?? "").trim(),
    name: String(row.name ?? "").trim(),
    price: parseNumber(row.price),
    promocion: parseBool(row.promocion),
    porcentajePromocion: parseNumber(row.porcentajePromocion),
    promocionDesc: String(row.promocionDesc ?? "").trim(),
    description: String(row.description ?? "").trim(),
    tag: String(row.tag ?? "").trim(),
  };
});

fs.writeFileSync(outputJson, JSON.stringify(rows, null, 2), "utf-8");
console.log(`Se generaron ${rows.length} productos en ${outputJson}`);