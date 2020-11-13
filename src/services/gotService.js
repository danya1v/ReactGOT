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
    getAllBooks() {
        return this.getResource(`/books/`);
    }
    
    getBook(id) {
        return this.getResource(`/books/${id}/`);
    }
    
    async getAllCharacters() {
       const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter)
    }
    
    async getCharacter (id) {
       const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character)
    }
    
    getAllHouses() {
        return this.getResource(`/houses/`);
    }
    
    getHouse(id) {
        return this.getResource(`/houses/${id}/`);
    }

    _transformCharacter(char){
        return{
            name : char.name|| 'not information',
            gender: char.gender|| 'not information',
            born: char.born|| 'not information',
            died: char.died || 'not information',
            culture: char.culture|| 'not information'
        }
    }

    _transformHouse(house){
        return{
            name: house.name || 'not information',
            region:  house.region || 'not information',
            words: house.words || 'not information',
            overlord: house.overlord || 'not information',
            ancestralWeapons: house.ancestralWeapons || 'not information'

        }
    }
    _transformBook(book){
        return{
            name: book.name || 'not information',
            numberOfPages:  book.numberOfPages || 'not information',
            publiser: book.words || 'not information',
            released: book.overlord || 'not information',

        }
    }
}
const got = new gotService();