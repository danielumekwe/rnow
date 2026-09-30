export type ToolGroup = {
  title: string;
  /** Three display columns, in the order they appear on the page. */
  columns: [string[], string[], string[]];
};

const cc = "(corded and cordless)";

export const toolGroups: ToolGroup[] = [
  {
    title: "Hand Tools",
    columns: [
      ["Bolt cutters", "Chisels and punches", "Clamping and holding tools", "Concrete and masonry", "Files, rasps and accessories", "Hammers and accessories", "Hand sanders", "Hand saws and blades", "Hex and Torx drive products"],
      ["Knives, razors, cutters and accessories", "Landscaping and outdoor", "Marking tools", "Measuring and layout tools", "Nut drivers", "Pliers and accessories", "Prying tools", "Pullers and separators", "Scissors, snips and shears"],
      ["Scrapers, edgers and putty knives", "Screwdrivers and accessories", "Sockets and socket wrenches", "Staplers and staples", "Torque tools and accessories", "Vises", "Wedges", "Wrenches and accessories"],
    ],
  },
  {
    title: "Power Tools",
    columns: [
      [`Drills ${cc}`, `Grinders ${cc}`, `Hammerdrills ${cc}`, "Heat guns"],
      [`Impact drivers and wrenches ${cc}`, "Nibblers", `Rotary hammers ${cc}`, "Routers", "Sanders"],
      [`Saws ${cc}`, `Screwdrivers ${cc}`, "Shears"],
    ],
  },
  {
    title: "Air Tools",
    columns: [
      ["Chippers", "Drills and drivers", "Grinders", "Impact drivers and wrenches", "Impact sockets"],
      ["Nailers and accessories", "Nibblers", "Pavement breakers", "Ratchets", "Sanders"],
      ["Saws", "Scalers", "Screwdrivers", "Shears", "Tampers"],
    ],
  },
  {
    title: "Cutting Tools",
    columns: [
      ["Annular cutters", "Broaches", "Burrs", "Chamfering tools", "Counterbores and countersinks", "Cut-off blades and discs"],
      ["End mills", "Indexible cutting tools", "Keyseat cutters", "Knives", "Milling cutters", "Punches"],
      ["Reamers", "Saws and blades", "Shears", "Taps and dies", "Tap extractors and wrenches", "Tubing cutters"],
    ],
  },
];
