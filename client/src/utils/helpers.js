export function pluralize(name, count) {
  if (count === 1) {
    return name
  }
  return name + 's'
}

export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    //open connection to database 'shop-shop' with version of 1
    const request = window.indexedDB.open('shop-shop', 1);

    //variables to hold reference to database, transaction (tx), and object store
    let db, tx, store;

    //if version change, or first time using database, runs this method and creates three object stores
    request.onupgradeneeded = function (e) {
      const db = request.result;
      //create object store for each type of data and set "primary key" index to be '_id' of data
      db.createObjectStore('products', { keyPath: '_id' });
      db.createObjectStore('categories', { keyPath: '_id' });
      db.createObjectStore('cart', { keyPath: '_id' });
    };

    //handle any errors with connection
    request.onerror = function (e) {
      console.log('There was an error');
    };

    //on database open success
    request.onsuccess = function (e) {
      //saves reference of database to 'db' variable
      db = request.result;
      //opens transaction do whatever we pass into 'storeName' (must match one of object store names)
      tx = db.transaction(storeName, 'readwrite');
      //save reference to that object store
      store = tx.objectStore(storeName);

      //if any errors
      db.onerror = function (e) {
        console.log('error', e);
      };

      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          console.log('end of put method', store.name, object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('No valid method');
          break;
      }

      //when transaction is complete, close the connection
      tx.oncomplete = function () {
        db.close();
      };
    };


  });
}