function retornaPar(n) {
  for(let i = n; i >= 0; i--) {
    if(i % 2 == 0) {
      console.log(i)
    }
  }
}

retornaPar(100)