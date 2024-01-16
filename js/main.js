import {Grid} from './Grid.js';
import {Tile} from "./Tile.js";


const gridElement = document.getElementById('grid')

const grid = new Grid(gridElement)
grid.getRandomEmptyCell().linkTile(new Tile(gridElement))
grid.getRandomEmptyCell().linkTile(new Tile(gridElement))

setupInputOnce()

function setupInputOnce() {
    window.addEventListener('keydown', inputHandler, {once: true})
}

function inputHandler(event) {
    switch (event.key) {
        case 'ArrowUp':
            moveUp()
            break
        case 'ArrowRight':
            moveRight()
            break
        case 'ArrowDown':
            moveDown()
            break
        case 'ArrowLeft':
            moveLeft()
            break
    }

    setupInputOnce()
}

function moveUp() {
    slideTiles(grid.getGroupedCellsByColumn())
}

function moveDown() {

}

function moveRight() {

}

function moveLeft() {

}

function slideTiles(groupedTiles) {
    groupedTiles.forEach(group => slideTilesInGroup(group))
}

function slideTilesInGroup(group) {
    for (let i = 1; i < group.length; i++) {
        if (group[i].isEmpty()) continue

        const cellWithTile = group[i]

        let targetCell
        let j = i - 1

        while (j >= 0 && (group[j].canAccept(cellWithTile.linkedTile))) {
            targetCell = group[j]
            j--
        }

        if (!targetCell) continue

        if (targetCell.isEmpty()) {
            targetCell.linkTile(cellWithTile.linkedTile)
        } else {
            targetCell.linkTileWithMerge(cellWithTile.linkedTile)
        }

        cellWithTile.unlinkTile()
    }
}