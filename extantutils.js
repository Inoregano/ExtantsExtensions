class ExtantUtils {
    getInfo() {
      return {
        id: 'ExtantUtils',
        name: 'Extant Utilities',
        color1: "#ff3c3c",
        color2: "#ff0000",
        blocks: [
          {
            opcode: 'indexreplace',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace [MIN]-[MAX] of [IN] with [REP]',
            arguments: {
              MIN: {
                type: Scratch.ArgumentType.STRING
              },
              MAX: {
                type: Scratch.ArgumentType.STRING
              },
              IN: {
                type: Scratch.ArgumentType.STRING
              },
              REP: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'limitvalue',
            blockType: Scratch.BlockType.REPORTER,
            text: 'limit [IN] between [MIN]-[MAX]',
            arguments: {
              IN: {
                type: Scratch.ArgumentType.STRING
              },
              MIN: {
                type: Scratch.ArgumentType.STRING
              },
              MAX: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'loopvalue',
            blockType: Scratch.BlockType.REPORTER,
            text: 'loop [IN] between [MIN]-[MAX]',
            arguments: {
              IN: {
                type: Scratch.ArgumentType.STRING
              },
              MIN: {
                type: Scratch.ArgumentType.STRING
              },
              MAX: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'invert',
            blockType: Scratch.BlockType.REPORTER,
            text: '-[IN]',
            arguments: {
              IN: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'findsplitlength',
            blockType: Scratch.BlockType.REPORTER,
            text: '# of items in [IN] split with [SPLIT]',
            arguments: {
              IN: {
                type: Scratch.ArgumentType.STRING
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING
              }
            }
          },
          {
            opcode: 'splitreplace',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace item [ITEM] of [STR] split by [SPLIT] with [IN]',
            arguments: {
              IN: {
                type: Scratch.ArgumentType.STRING
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING
              },
              ITEM: {
                type: Scratch.ArgumentType.STRING
              },
              STR: {
                type: Scratch.ArgumentType.STRING
              }
            }
          }
        ]
      };
    }
  
    indexreplace(args) {
      const str = args.IN
      const array = [str.substring(0, args.MIN - 1), args.REP, str.substring(args.MAX)]
      return array.join('');
    }
    limitvalue(args) {
      return Math.max(Math.min(args.IN, args.MAX), args.MIN);
    }
    loopvalue(args) {
      if (args.IN > args.MAX) {
        return(args.MIN);
      } else if (args.IN < args.MIN) {
        return(args.MAX);
      } else 
      return(args.IN);
    }
    invert(args) {
      return args.IN * -1
    }
    findsplitlength(args) {
      const str = args.IN
      const arr = str.split(args.SPLIT)
      return arr;
    }
    splitreplace(args) {
      const str = args.STR
      const input = Scratch.Cast.toNumber(args.ITEM) - 1
      let arr = str.split(args.SPLIT)
      arr[input] = args.IN
      return arr.join(args.SPLIT)
    }

  }
  
  Scratch.extensions.register(new ExtantUtils());
