export default class gotService {
    constructor(){
        this._apiBase = 'https://anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }
    getAllBooks = async () =>  {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformHouse)
    }
    
    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformHouse(book)
    }
    
    getAllCharacters = async () => {
       const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter)
    }
    
    getCharacter = async (id) =>  {
       const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character)
    }
    
    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse)
    }
    
    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house)
    }

    _transformCharacter = (char) => {
        return{
            id: this._extractId(char),
            name : char.name|| 'not information',
            gender: char.gender|| 'not information',
            born: char.born|| 'not information',
            died: char.died || 'not information',
            culture: char.culture|| 'not information'
        }
    }

    _transformHouse = (house) => {
        return{
            id: this._extractId(house),
            name: house.name || 'not information',
            region:  house.region || 'not information',
            words: house.words || 'not information',
            overlord: house.overlord || 'not information',
            ancestralWeapons: house.ancestralWeapons || 'not information'

        }
    }
    _transformBook = (book) => {
        return{
            id: this._extractId(book),
            name: book.name || 'not information',
            numberOfPages:  book.numberOfPages || 'not information',
            publiser: book.words || 'not information',
            released: book.overlord || 'not information',

        }
    }
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }
}
const got = new gotService();