function getJSON (filepath) {
  const fs = require('fs')
  const csv = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' })
  const rows = csv.split('\r\n')

  const out = []

  rows.forEach((element) => {
    splitRow = element.split(',')
    out.push({
      class: splitRow[1],
      name: splitRow[0],
      type: splitRow[3],
      endTime: new Date(splitRow[2]).getTime(),
    })
  })

  out.pop()
  out.pop()

  return out

}

module.exports = getJSON

// fs.writeFileSync("./1BDates.json", JSON.stringify(out,null, 4));