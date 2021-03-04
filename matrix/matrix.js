export class Matrix {
  constructor (raw) {
    this.raw = raw
  }

  get rows () {
    return this.raw.split('\n')
      .map(row => row.split(' ')
        .map(char => Number.parseInt(char))
      )
  }

  get columns () {
    return this.rows.reduce((acc, row) => row.map((item, i) =>
      (acc[i] || []).concat(item)
    ), [])
  }
}
