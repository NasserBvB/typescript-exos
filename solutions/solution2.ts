// 1
enum Vehicules {
  Mercedes,
  BMW,
  Ford,
  AlfaRomeo,
  Bently,
}

// 2
enum BoxSizes {
  XtraSmall,
  Small,
  Medium,
  Large,
  WtraLarge,
}

function displayBoxeSize(idx: number) {
    console.log(BoxSizes[idx]);
}
