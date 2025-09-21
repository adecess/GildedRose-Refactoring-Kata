import { ItemName } from "./item-name.enum";

export class Item {
  name: ItemName;
  sellIn: number;
  quality: number;

  constructor(name: ItemName, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (
        item.name != ItemName.AGED_BRIE &&
        item.name != ItemName.BACKSTAGE_PASSES
      ) {
        if (item.quality > 0) {
          if (item.name != ItemName.SULFURAS) {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name == ItemName.BACKSTAGE_PASSES) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (item.name != ItemName.SULFURAS) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != ItemName.AGED_BRIE) {
          if (item.name != ItemName.BACKSTAGE_PASSES) {
            if (item.quality > 0) {
              if (item.name != ItemName.SULFURAS) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
