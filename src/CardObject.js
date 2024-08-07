class CardObject {
    constructor(name, id, imageUrl, setId, setName, setSeries, printedTotal, number, types, supertype, artistName, rarity, national, tcgPlayer) {
        //CARD
        this.name = name;
        this.id = id;
        this.imageUrl = imageUrl;

        //SET INFO
        this.setId = setId;
        this.setName = setName;
        this.setSeries = setSeries;
        this.printedTotal = printedTotal;
        this.number = number;

        //METADATA
        this.types = types;
        this.supertype = supertype;
        this.artistName = artistName;
        this.rarity = rarity;
        this.national = national;
        this.imageUrl = imageUrl;

        //PRICING
        this.tcgPlayer = tcgPlayer;

    }
}

export default CardObject;