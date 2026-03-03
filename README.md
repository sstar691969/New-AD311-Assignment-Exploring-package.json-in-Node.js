# New-AD311-Assignment-Exploring-package.json-in-Node.js


Assignment: Exploring package.json in Node.js

William Anderson

AD311

Purpose of package-lock.json: Ensures Consistent Installs
Run npm init everyone gets exact same dependency versions.
guarantees:

Same dependency tree

Same behavior

Same test results

Very important for:

Team projects

Production apps

CI/CD pipelines

You should commit package-lock.json because:

1. Prevents “Works on My Machine” Problems

All developers use the exact same dependency versions.
 2. Keeps Production Stable

Your deployed version will use the exact tested dependency versions.

3. Protects Against Breaking Updates

If a dependency releases a bad update, your app won’t automatically break because the lock file pins the version.

Additional Fields in package.json
1. repository
Example:
"repository": {
  "type": "git",
  "url": "https://github.com/yourusername/ad311-dependency.git"
}
Purpose:

Specifies where the project source code is hosted.

Usually links to a GitHub, GitLab, or Bitbucket repository.
Helps users and contributors find the source code.
Makes collaboration easier.
Allows others to report issues or submit improvements.

Important when publishing packages to npm.
keywords
Example:
"keywords": ["node", "npm", "learning", "package-json"]
Purpose:
Provides searchable tags for the package.

Why It’s Useful:
Makes your package easier to discover on npm.
Improves visibility when others search for related tools.
Helps categorize your project.

"devDependencies":using Jest allows to test and edge test code for errors {
  "jest": "^29.0.0"
},

