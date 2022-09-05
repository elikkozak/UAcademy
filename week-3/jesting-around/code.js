const add = function (a, b) {
  return a + b;
};

const calculateHyp = function (a, b) {
  let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  return c;
};

const clearLowPriority = function (arr) {
  return arr.filter((element) => element.priority === "HIGH");
};

class PictureManager {
  constructor() {
    this.pictureURLs = [];
  }

  addPicture(picURL) {
    this.pictureURLs.push(picURL);
  }

  removePicture(picURL) {
    this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1);
  }
}

// class ArrayManipulator {
//   manipulate(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//       console.log("ERROR NOT SAME LENGTH");
//       return {};
//     }
//     let objToRet = {};
//     for (let i in arr1) {
//       objToRet[arr1[i]] = arr2[i];
//     }
//     console.log(objToRet);
//     return objToRet;
//   }
// }

// class ArrayManipulator {
//     manipulate(arr1, arr2) {
//         let obj = {}
//         for (let i in arr1) {
//             obj[i] = arr2[i]
//         }
//         return obj
//     }
// }


// module.exports = add;

// module.exports = calculateHyp;

// module.exports = clearLowPriority;

// module.exports = PictureManager;

module.exports = ArrayManipulator;
