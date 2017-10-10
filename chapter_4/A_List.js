// A List

/* Write a function arrayToList that build sup a data structure like the previous onen when given [1,2,3]as
an argument, and write a listToArray function that produces an array form a list */

    // function arrayToList

    function arrayToList (a) {
      var list = null
      for (var i = a.length - 1; i >= 0; i--) {
        list = {value: a[i], rest: list}
      }
      return list
    }

    console.log(arrayToList([1, 2, 3]))

    // Function listToArray

    var array = []

    var list = {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3
        }
      }
    }

    function listToArray (a) {
      for (var node = list; node; node = node.rest) {
        array.push(node)
      }
      return array
    }

    console.log(listToArray(list))
