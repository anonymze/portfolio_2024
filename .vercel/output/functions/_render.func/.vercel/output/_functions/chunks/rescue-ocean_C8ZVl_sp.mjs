const RescueOcean = new Proxy({"src":"/_astro/rescue-ocean.B0Y7f4Qs.png","width":2291,"height":899,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/perso/portfolio/src/assets/images/rescue-ocean/rescue-ocean.png";
							}
							
							return target[name];
						}
					});

export { RescueOcean as R };
