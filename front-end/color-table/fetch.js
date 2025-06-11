class DataDump {
    _colors = [
      {
        color: "black",
        category: "hue",
        type: "primary",
        code: {
          rgba: [0, 0, 0, 1],
          hex: "#000000"
        },
        composedColors: []
      },
      {
        color: "white",
        category: "value",
        type: "neutral",
        code: {
          rgba: [255, 255, 255, 1],
          hex: "#FFFFFF"
        },
        composedColors: []
      },
      {
        color: "red",
        category: "hue",
        type: "primary",
        code: {
          rgba: [255, 0, 0, 1],
          hex: "#FF0000"
        },
        composedColors: []
      },
      {
        color: "blue",
        category: "hue",
        type: "primary",
        code: {
          rgba: [0, 0, 255, 1],
          hex: "#0000FF"
        },
        composedColors: []
      },
      {
        color: "yellow",
        category: "hue",
        type: "primary",
        code: {
          rgba: [255, 255, 0, 1],
          hex: "#FFFF00"
        },
        composedColors: []
      },
      {
        color: "green",
        category: "hue",
        type: "secondary",
        code: {
          rgba: [0, 255, 0, 1],
          hex: "#00FF00"
        },
        composedColors: [
          {
            color: "blue",
            category: "hue",
            type: "primary",
            code: {
              rgba: [0, 0, 255, 1],
              hex: "#0000FF"
            },
            composedColors: []
          },
          {
            color: "yellow",
            category: "hue",
            type: "primary",
            code: {
              rgba: [255, 255, 0, 1],
              hex: "#FFFF00"
            },
            composedColors: []
          }
        ]
      },
      {
        color: "purple",
        category: "hue",
        type: "secondary",
        code: {
          rgba: [128, 0, 128, 1],
          hex: "#800080"
        },
        composedColors: [
          {
            color: "blue",
            category: "hue",
            type: "primary",
            code: {
              rgba: [0, 0, 255, 1],
              hex: "#0000FF"
            },
            composedColors: []
          },
          {
            color: "red",
            category: "hue",
            type: "primary",
            code: {
              rgba: [255, 0, 0, 1],
              hex: "#FF0000"
            },
            composedColors: []
          }
        ]
      },
      {
        color: "orange",
        category: "hue",
        type: "secondary",
        code: {
          rgba: [255, 165, 0, 1],
          hex: "#FFA500"
        },
        composedColors: [
          {
            color: "red",
            category: "hue",
            type: "primary",
            code: {
              rgba: [255, 0, 0, 1],
              hex: "#FF0000"
            },
            composedColors: []
          },
          {
            color: "yellow",
            category: "hue",
            type: "primary",
            code: {
              rgba: [255, 255, 0, 1],
              hex: "#FFFF00"
            },
            composedColors: []
          }
        ]
      },
      {
        color: "pink",
        category: "hue",
        type: "secondary",
        code: {
          rgba: [255, 192, 203, 1],
          hex: "#FFC0CB"
        },
        composedColors: [
          {
            color: "red",
            category: "hue",
            type: "primary",
            code: {
              rgba: [255, 0, 0, 1],
              hex: "#FF0000"
            },
            composedColors: []
          },
          {
            color: "white",
            category: "value",
            type: "neutral",
            code: {
              rgba: [0, 0, 0, 1],
              hex: "#FFFFFF"
            },
            composedColors: []
          }
        ]
      },
      {
        color: "brown",
        category: "hue",
        type: "secondary",
        code: {
          rgba: [165, 42, 42, 1],
          hex: "#A52A2A"
        },
        composedColors: [
          {
            color: "red",
            category: "hue",
            type: "primary",
            code: {
              rgba: [255, 0, 0, 1],
              hex: "#FF0000"
            },
            composedColors: []
          },
          {
            color: "green",
            category: "hue",
            type: "secondary",
            code: {
              rgba: [0, 255, 0, 1],
              hex: "#00FF00"
            },
            composedColors: [
              {
                color: "blue",
                category: "hue",
                type: "primary",
                code: {
                  rgba: [0, 0, 255, 1],
                  hex: "#0000FF"
                },
                composedColors: []
              },
              {
                color: "yellow",
                category: "hue",
                type: "primary",
                code: {
                  rgba: [255, 255, 0, 1],
                  hex: "#FFFF00"
                },
                composedColors: []
              }
            ]
          }
        ]
      }
    ];
  
    fetchByHex(hexCode) {
      return this._colors.find((color) => color.code.hex === hexCode);
    }

    fetchByName(name) {
      return this._colors.find((color) => color.color.includes(name));
    }

    getComposedColors(colorName) {
      return this._colors.find(c => c.color.toLowerCase() === colorName.trim().toLowerCase())?.composedColors ?? [];
    }
  }
  
  const dataDump = new DataDump();
  const randomTimeInterval = (maxTimeMs = 1000) =>
    Math.floor(Math.random() * maxTimeMs);
  
  /**
   * Fetches a color object by its hexadecimal code.
   * @param hexCode - The hexadecimal code of the color to fetch. Note, the hash symbol is required.
   * @returns A promise that resolves with the fetched color object.
   * @throws An error if no color is found with the given hexadecimal code.
   */
  export function fetchByHex(hexCode) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const color = dataDump.fetchByHex(hexCode);
        if (!color) {
          reject("No color found");
          return;
        }
        resolve(color);
      }, randomTimeInterval(1500));
    });
  }
  
  /**
   * Fetches a color object by its name.
   * @param colorName - The name of the color to fetch.
   * @returns A promise that resolves with the fetched color object.
   * @throws An error if no color is found with the given name.
   */
  export function fetchByName(colorName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const color = dataDump.fetchByName(colorName);
        if (!color) {
          reject("No color found");
          return;
        }
        resolve(color);
      }, randomTimeInterval(1500));
    });
  }
  
  /**
   * Returns a promise that resolves to an array of composed colors based on the input color.
   * @param colorName - The name of the color to fetch composed colors for.
   * @returns A promise that resolves to an array of composed colors.
   * @throws An error if no composed colors are found.
   */
  export function fetchComposedColors(colorName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const composedColors = dataDump.getComposedColors(colorName);
        if (!composedColors) {
          reject("No composed colors found");
          return;
        }
        resolve(composedColors);
      }, randomTimeInterval(700));
    });
  }
  