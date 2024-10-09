const AuroraHome = new Proxy({"src":"/_astro/home.CUkbX1p7.png","width":2444,"height":1558,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/perso/portfolio/src/assets/images/aurora/home.png";
							}
							
							return target[name];
						}
					});

export { AuroraHome as A };
