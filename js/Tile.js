export class Tile {
    value = 0

    constructor(gridElement) {
        this.tileElement = document.createElement('div');
        this.tileElement.classList.add('tile')
        this.setValue(Math.random() < 0.5 ? 2 : 4)
        gridElement.append(this.tileElement)
    }

    setValue(value) {
        this.value = value
        this.tileElement.textContent = value
        const bgLightness = 100 - (Math.log2(value) - 1) * 10
        const textLightness = bgLightness < 50 ? 90 : 10
        this.tileElement.style.setProperty('--bg-lightness', `${bgLightness}%`)
        this.tileElement.style.setProperty('--text-lightness', `${textLightness}%`)
    }

    setXY(x, y) {
        this.tileElement.style.setProperty('--posX', x)
        this.tileElement.style.setProperty('--posY', y)
    }
}