import { ItemName } from "../app/item-name.enum";
import { Item, GildedRose } from "../app/gilded-rose";

console.log("OMGHAI!");

const items = [
  new Item(ItemName.DEXTERITY_VEST, 10, 20), //
  new Item(ItemName.AGED_BRIE, 2, 0), //
  new Item(ItemName.ELIXIR, 5, 7), //
  new Item(ItemName.SULFURAS, 0, 80), //
  new Item(ItemName.SULFURAS, -1, 80),
  new Item(ItemName.BACKSTAGE_PASSES, 15, 20),
  new Item(ItemName.BACKSTAGE_PASSES, 10, 49),
  new Item(ItemName.BACKSTAGE_PASSES, 5, 49),
  // this conjured item does not work properly yet
  new Item(ItemName.CONJURED_CAKE, 3, 6),
];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days + 1; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach((element) => {
    console.log(element.name + ", " + element.sellIn + ", " + element.quality);
  });
  console.log();
  gildedRose.updateQuality();
}
