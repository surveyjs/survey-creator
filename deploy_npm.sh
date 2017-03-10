cd package
printf "//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n" >> ./.npmrc
npm publish .
