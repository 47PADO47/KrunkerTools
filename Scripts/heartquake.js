var intensity = 0.01;

["sin", "cos", "tan"].map(x => Math[x]).map(x => {Math[x.name] = a => x(a) + ((Math.random() - 0.5) * intensity)})