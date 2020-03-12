function mapdata() {

  let nodes = [];
  let edges = [];
  let i;
  let j;


  function matrix(n) {
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        obj = {
          data: { id: 'N' + i + '-' + j }
        }
        nodes.push(obj);


      }
    }




    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        if (j > 0 && j < (n - 1)) {
          obj = {
            data: {
              id: i + '-' + j + 'E',
              source: 'N' + i + '-' + j,
              target: 'N' + i + '-' + (j + 1)
            }
          }
          edges.push(obj)



          if (j > 0) {
            obj = {
              data: {
                id: i + '-' + j + 'W',
                source: 'N' + i + '-' + j,
                target: 'N' + i + '-' + (j - 1)
              }
            }
            edges.push(obj)
          }
        }

        if (i > 0) {
          obj = {
            data: {
              id: i + '-' + j + 'N',
              source: 'N' + i + '-' + j,
              target: 'N' + (i - 1) + '-' + j
            }
          }
          edges.push(obj)
        }

        if (i > 0 && i < (n - 1)) {
          obj = {
            data: {
              id: i + '-' + j + 'S',
              source: 'N' + i + '-' + j,
              target: 'N' + (i + 1) + '-' + j
            }
          }
          edges.push(obj)
        }


      }

    }
  
  
  // console.log(edges.length);

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if ((j >= i) && (j < (n-1)) {
        obj = {
          data: {
            id: i + '-' + j + 'D',
            source: 'N' + i + '-' + j,
            target: 'N' + (i + 1) + '-' + (j + 1)
          }
        }
        edges.push(obj)
      }
    }
  }

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if ((i > j) && (i < (n-1)) {
        obj = {
          data: {
            id: i + '-' + j + 'D',
            source: 'N' + i + '-' + j,
            target: 'N' + (i + 1) + '-' + (j + 1)
          }
        }
        edges.push(obj)
      }
    }
  }

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if ((i < (n-1) && (j > 0)) {
        obj = {
          data: {
            id: i + '-' + j + 'C',
            source: 'N' + i + '-' + j,
            target: 'N' + (i + 1) + '-' + (j - 1)
          }
        }
        edges.push(obj)
      }
    }
  }
  }
matrix(4)
  // for (i = 0; i < 4; i++) {
  //   for (j = 0; j < 4; j++) {
  //     if ((i >= j) && (0<j<3)) {
  //       obj = {
  //         data: {
  //           id: i + '-' + j + 'C',
  //           source: 'N' + i + '-' + j,
  //           target: 'N' + (i + 1) + '-' + (j - 1)
  //         }
  //       }
  //       edges.push(obj)
  //     }
  //   }
  // }



  //     if (i > 0) {
  //       obj = {
  //         data: [{ id: 'N' + i + '-' + j },
  //         { source: 'N' + i + '-' + j },
  //         { target: 'N' + (i - 1) + '-' + j }]
  //       }
  //       edges.push(obj)
  //     }
  //     if(j>0) {
  //       obj = {
  //         data: [{ id: 'N' + i + '-' + j },
  //         { source: 'N' + i + '-' + j },
  //         { target: 'N' + i + '-' + (j-1) }]
  //       }
  //       edges.push(obj)
  //     }
  //     if((n-1-j) > 0) {
  //       obj = {
  //         data: [{ id: 'N' + i + '-' + j },
  //         { source: 'N' + i + '-' + j },
  //         { target: 'N' + i + '-' + (j+1) }]
  //       }
  //       edges.push(obj)
  //     }
  //     if((n-1-i)>0) {
  //       obj = {
  //         data: [{ id: 'N' + i + '-' + j },
  //         { source: 'N' + i + '-' + j },
  //         { target: 'N' + (i + 1) + '-' + j }]
  //       }
  //       edges.push(obj)
  //     }
  //   }
  // }

  // for (i = 0; i < 2; i++) {
  //   for (j = 0; j < 2; j++) {
  //     obj = {
  //       data: {
  //         id: i + '-' + j,

  //         source: 'N' + j + '-' + i,

  //         target: 'N' + + '-' + j
  //       }
  //     }



  //     edges.push(obj);
  //   }
  // }

  // for (i = 0; i < 1; i++) {
  //   for (j = 1; j < 2; j++ , i++) {
  //     obj = {
  //       data: {
  //         id: i + '-' + j + 'W',

  //         source: 'N' + i + '-' + j,


  //         target: 'N' + i + '-' + (j - 1)
  //       }
  //     }



  //     edges.push(obj);
  //   }

  // }


  // for (i = 1; i < 2; i++) {
  //   for (j = 1; j >= 0; j--) {
  //     obj = {
  //       data: {
  //         id: i + '-' + j + 'N',

  //         source: 'N' + i + '-' + j,

  //         target: 'N' + (i - 1) + '-' + j
  //       }


  //     }
  //     edges.push(obj);
  //   }

  // }


  // for (i = 0; i < 1; i++) {
  //   for (j = 0; j < 2; j++) {
  //     obj = {
  //       data: {
  //         id: i + '-' + j + 'S',

  //         source: 'N' + i + '-' + j,

  //         target: 'N' + (i + 1) + '-' + j
  //       }


  //     }
  //     edges.push(obj);
  //   }

  // }






  // Write your logic here...


  elements = {
    nodes,
    edges
  };

  return elements;

}

module.exports.mapdata = mapdata;
