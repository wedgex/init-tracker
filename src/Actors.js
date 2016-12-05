const byInit = (actor1, actor2) => {
  if (actor1.init < actor2.init) {
    return 1
  }

  if (actor1.init > actor2.init) {
    return -1
  }

  return 0
}

export const sort = actors => {
  return actors.sort(byInit)
}
