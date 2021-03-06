class TitanLeft extends GameObject {
  constructor(x, y) {
    super(x, y, 0, 0, 0);
    this.tag = "CustomBlock";
    this.layer = 1;

    map.addObject(new Titan(x, y));
    map.addObject(new Titan(x, y + 20));
  }

  destroy() {
    window.map.deleteObject(this);
  }
}
