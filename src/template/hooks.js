import attrNameCfg from './cfg/attrNameCfg';
import tagName from '../util/tagName';

let hook = {
	jiesa:1,


type (node, name, value) {
    if (tagName(node) === 'input') {
        // Support: IE9-Edge
        const val = node.value; // value will be lost in IE if type is changed
        node.setAttribute(name, '' + value);
        // Check if val exist, if not we will get a stupid value="" in the markup
        if (val) {
            node.value = val;
        }
    } else {
        node.setAttribute(attrNameCfg[name] || name, value); // cast to string
    }
},

/**
 * Set volume attributes on a DOM node
 *
 * @param {Object} node A DOM element.
 * @param {String} name	 The attribute name to set.
 * @param {String} attrValue  The attribute value to set.
 */
volume (node, name, value) {
    // The 'volume' attribute can only contain a number in the range 0.0 to 1.0, where 0.0 is the 
    // quietest and 1.0 the loudest. So we optimize by checking for the most obvious first...
    if (value === 0.0 || (value === 1) || (typeof value === 'number' && (value > -1 && (value < 1.1)))) {
        node.setAttribute(name, value);
    }
}


	};
export default hook;