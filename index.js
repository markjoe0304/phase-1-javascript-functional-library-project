function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        result.push(callback(collection[key], key, collection));
      }
    }
    return result;
  }
  function myReduce(collection, callback, acc) {
    let initialValueSet = arguments.length === 3;
    
    if (Array.isArray(collection)) {
      let i = 0;
      if (!initialValueSet && collection.length > 0) {
        acc = collection[0];
        i = 1;
      }
      for (; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      let i = 0;
      if (!initialValueSet && keys.length > 0) {
        acc = collection[keys[0]];
        i = 1;
      }
      for (; i < keys.length; i++) {
        const key = keys[i];
        acc = callback(acc, collection[key], collection);
      }
    }
    return acc;
  }
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
    return undefined;
  }
  function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (predicate(collection[key])) {
          result.push(collection[key]);
        }
      }
    }
    return result;
  }
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    }
    return 0;
  }
  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(Math.max(array.length - n, 0));
    }
  }
  function myKeys(obj) {
    return Object.keys(obj);
}

// Example: myValues function
function myValues(obj) {
    return Object.values(obj);
}      