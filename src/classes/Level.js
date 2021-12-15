class Level {
  constructor (plan) {
    const rows = plan.trim().split('\n').map(currentLevel => [...currentLevel])
    this.height = rows.length
    this.width = rows[0].length
    this.startActors = []
    this.rows = rows.map((row) => {
      return row.map((char, x) => {
        const type = levelChars[char]

        if (typeof type === 'string') {
          return type
        }

        this.startActors.push(type.create(new Vector(x, y), char))
        return 'empty'
      })
    })
  }
}

export default Level
