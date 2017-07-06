export default class NodeCollection {

    /**
     * @constructor
     * @param  {Neode} neode    Neode Instance
     * @param  {Node[]} values  Array of Node
     * @return {Collectiob}
     */
    constructor(neode, values) {
        this._neode = neode;
        this._values = values;
    }

    /**
     * Get length property
     *
     * @return {Int}
     */
    get length() {
        return this._values.length;
    }

    /**
     * Get a value by it's index
     *
     * @param  {Int} index
     * @return {Node}
     */
    get(index) {
        return this._values[index];
    }

    /**
     * Map a function to all values
     *
     * @param  {Function} fn
     * @return {mixed}
     */
    map(fn) {
        return this._values.map(fn);
    }

    /**
     * Run a function on all values
     * @param  {Function} fn
     * @return {mixed}
     */
    forEach(fn) {
        return this._values.forEach(fn);
    }

    /**
     * Map the 'toJson' function on all values
     *
     * @return {Promise}
     */
    toJson() {
        return Promise.all(this._values.map(value => {
            return value.toJson();
        }));
    }

}