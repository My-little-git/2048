import {Cell} from "./Cell.js";

const GRID_SIZE = 4
const CELLS_COUNT = GRID_SIZE ** 2

export class Grid {
    cells = []

    constructor(gridElement) {
        for (let x = 0; x < GRID_SIZE; x++) {
            for (let y = 0; y < GRID_SIZE; y++) {
                this.cells.push(new Cell(gridElement, x, y));
            }
        }
    }

    getRandomEmptyCell() {
        const emptyCells = this.cells.filter(cell => cell.isEmpty());
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        return emptyCells[randomIndex];
    }

    getGroupedCellsByColumn() {
        return this.cells.reduce((groupedCells, cell) => {
            groupedCells[cell.x] = groupedCells[cell.x] || [];
            groupedCells[cell.x][cell.y] = cell
            return groupedCells
        }, [])
    }

}