const AuroraProject = new Proxy({"src":"/_astro/project.r5o7AGrE.png","width":1280,"height":952,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/perso/portfolio/src/assets/images/aurora/project.png";
							}
							
							return target[name];
						}
					});

const AuroraContact = new Proxy({"src":"/_astro/contact.Cfn78y5z.png","width":1258,"height":987,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ano/dev/perso/portfolio/src/assets/images/aurora/contact.png";
							}
							
							return target[name];
						}
					});

export { AuroraProject as A, AuroraContact as a };
