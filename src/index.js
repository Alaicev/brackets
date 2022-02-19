module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false
  let count = 0
  str = str.split('')
  while (count <= 40) {
      function search() {
          str.forEach((Item, Index)=>{
              bracketsConfig.forEach((configItem)=>{
                  if (Item === configItem[0]) {
                      if (str[Index + 1] === configItem[1]) {
                          str.splice(Index, 2)
                      }
                  }
              })
          })
      }
      search()
      count++
  }
  return str.length <= 0;
}